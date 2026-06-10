import { NextResponse } from 'next/server'
import { createTeam, getTeams, deleteAllTeams } from '@/lib/services/teamService'

export async function POST(request) {
  try {
    const body = await request.json()
    const { teamName, utmSource, utmMedium, utmCampaign } = body

    if (!teamName) {
      return NextResponse.json({ error: 'Team name is required' }, { status: 400 })
    }

    const newTeam = await createTeam({
      teamName,
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

    return NextResponse.json({ teams }, { status: 200 })
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
