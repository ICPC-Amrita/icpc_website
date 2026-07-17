import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { cookies } from 'next/headers'

async function verifyAdmin() {
  const cookieStore = cookies()
  const token = cookieStore.get('admin_session')?.value
  if (!token) return false
  const session = await prisma.adminSession.findUnique({ where: { token } })
  return session && session.expiresAt > new Date()
}

// GET — get individual ambassador data (for admin view)
export async function GET(request, { params }) {
  try {
    if (!(await verifyAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { refId } = params

    // Get ambassador account info
    const ambassador = await prisma.ambassador.findUnique({
      where: { refId },
      select: {
        id: true,
        refId: true,
        name: true,
        email: true,
        initialPassword: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    // Get the latest snapshot
    const latestSnapshot = await prisma.snapshot.findFirst({
      orderBy: { uploadedAt: 'desc' },
      include: { entries: true },
    })

    if (!latestSnapshot) {
      return NextResponse.json({
        ambassador: ambassador || { refId, name: 'Unknown', email: 'Unknown' },
        summary: { totalTeams: 0, totalStudents: 0, accepted: 0, pending: 0, canceled: 0, utmRegistered: 0 },
        entries: [],
      })
    }

    // Get DB teams — ONLY those that came through this ambassador's UTM link
    const dbTeams = await prisma.team.findMany({
      where: {
        utmSource: refId,
        utmCampaign: { not: null },
      },
      select: { userEmail: true, utmSource: true, utmCampaign: true },
    })

    // Build a set of emails that registered through this ambassador's UTM
    const utmEmails = new Set(
      dbTeams.map(t => t.userEmail?.toLowerCase().trim()).filter(Boolean)
    )

    if (utmEmails.size === 0) {
      return NextResponse.json({
        ambassador: ambassador || { refId, name: 'Unknown', email: 'Unknown' },
        summary: { totalTeams: 0, totalStudents: 0, accepted: 0, pending: 0, canceled: 0, utmRegistered: dbTeams.length },
        entries: [],
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

    // Collect ALL members of those matched teams
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

    return NextResponse.json({
      ambassador: ambassador || { refId, name: 'Unknown', email: 'Unknown' },
      summary: {
        totalTeams: ambassadorTeamIds.size,
        totalStudents: ambassadorEntries.length,
        accepted: ambassadorEntries.filter(e => e.teamStatus === 'Accepted').length,
        pending: ambassadorEntries.filter(e => e.teamStatus === 'Pending').length,
        canceled: ambassadorEntries.filter(e => e.teamStatus === 'Canceled').length,
        utmRegistered: dbTeams.length,
      },
      entries: ambassadorEntries,
    })
  } catch (error) {
    console.error('Admin ambassador detail error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
