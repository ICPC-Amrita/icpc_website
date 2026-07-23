import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { cookies } from 'next/headers'

// Helper to get the authenticated ambassador from session
async function getAmbassadorFromSession() {
  const cookieStore = cookies()
  const token = cookieStore.get('ambassador_session')?.value
  if (!token) return null

  const session = await prisma.ambassadorSession.findUnique({
    where: { token },
    include: { ambassador: true },
  })

  if (!session || session.expiresAt < new Date()) return null
  return session.ambassador
}

export async function GET() {
  try {
    const ambassador = await getAmbassadorFromSession()
    if (!ambassador) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const refId = ambassador.refId

    // Get DB teams — ONLY those that came through this ambassador's UTM link
    const dbTeams = await prisma.team.findMany({
      where: {
        utmSource: refId,
      },
      select: {
        id: true,
        personName: true,
        userEmail: true,
        campus: true,
        utmSource: true,
        utmMedium: true,
        utmCampaign: true,
        createdAt: true,
        isVerified: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    // Build a set of emails that registered through this ambassador's UTM
    const utmEmails = new Set(
      dbTeams.map(t => t.userEmail?.toLowerCase().trim()).filter(Boolean)
    )

    // Get the latest snapshot
    const latestSnapshot = await prisma.snapshot.findFirst({
      orderBy: { uploadedAt: 'desc' },
      include: { entries: true },
    })

    if (!latestSnapshot) {
      return NextResponse.json({
        summary: { totalTeams: 0, totalStudents: 0, accepted: 0, pending: 0, canceled: 0, utmRegistered: dbTeams.length },
        entries: [],
        utmRegistrations: dbTeams,
      })
    }

    const entries = latestSnapshot.entries

    // Find teamIds that belong to this ambassador via UTM email match
    const ambassadorTeamIds = new Set()
    entries.forEach(row => {
      const email = (row.username || '').toLowerCase().trim()
      if (utmEmails.has(email) && row.teamId) {
        ambassadorTeamIds.add(row.teamId)
      }
    })

    // Collect ALL members of those matched teams (teammates included)
    const ambassadorEntries = []
    entries.forEach(row => {
      const role = (row.role || '').toLowerCase()
      if (role.includes('coach')) return

      if (!row.teamId || !ambassadorTeamIds.has(row.teamId)) return

      const email = (row.username || '').toLowerCase().trim()

      ambassadorEntries.push({
        email: row.username || '',
        firstName: row.firstName || '',
        lastName: row.lastName || '',
        role: row.role || '',
        teamName: row.teamName || '',
        teamId: row.teamId || '',
        teamStatus: row.teamStatus || '',
        teamInstName: row.teamInstName || '',
        registeredViaUtm: utmEmails.has(email),
      })
    })

    const accepted = ambassadorEntries.filter(e => e.teamStatus === 'Accepted')
    const pending = ambassadorEntries.filter(e => e.teamStatus === 'Pending')
    const canceled = ambassadorEntries.filter(e => e.teamStatus === 'Canceled')

    return NextResponse.json({
      summary: {
        totalTeams: ambassadorTeamIds.size,
        totalStudents: ambassadorEntries.length,
        accepted: accepted.length,
        pending: pending.length,
        canceled: canceled.length,
        utmRegistered: dbTeams.length,
      },
      entries: ambassadorEntries,
      utmRegistrations: dbTeams,
    })
  } catch (error) {
    console.error('Ambassador dashboard error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
