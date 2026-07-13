import { NextResponse } from 'next/server'
import { createTeam, getTeams, deleteAllTeams, getTeam, getAllCampuses } from '@/lib/services/teamService'

export async function POST(request) {
  try {
    const body = await request.json()
    const { personName, userEmail, utmSource, utmMedium, utmCampaign } = body

    if (!(personName) && !(userEmail)) {
      return NextResponse.json({ error: 'Name and user email are required' }, { status: 400 })
    }

    // Check for duplicate user
    const existingTeam = await getTeam(personName, userEmail)
    if (existingTeam) {
      return NextResponse.json({ error: 'This name or email is already present in the database. Please verify your details.' }, { status: 409 })
    }

    const newTeam = await createTeam({
      personName,
      userEmail,
      utmSource,
      utmMedium,
      utmCampaign
    })

    return NextResponse.json({ success: true, team: newTeam }, { status: 201 })
  } catch (error) {
    console.error('Error creating team:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const campus = searchParams.get('campus')

    const teams = await getTeams(campus)
    const availableCampuses = await getAllCampuses()

    return NextResponse.json({ teams, availableCampuses }, { status: 200 })
  } catch (error) {
    console.error('Error fetching teams:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    await deleteAllTeams()
    return NextResponse.json({ success: true, message: 'All teams deleted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting teams:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
