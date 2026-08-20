import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { cookies } from 'next/headers'

import { getAmbassadorSourceData } from '@/lib/ambassadorData'

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
    const cleanRefId = String(refId).trim().split('-').pop().trim()

    // 1. Get ambassador account info from DB
    let ambassador = await prisma.ambassador.findFirst({
      where: {
        OR: [
          { refId: cleanRefId },
          { refId: String(refId).trim() },
          { refId: { endsWith: `-${cleanRefId}` } },
        ],
      },
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

    // If no DB account yet, fallback to sourceData info
    if (!ambassador) {
      const sourceData = await getAmbassadorSourceData()
      const srcAmb = sourceData.find(s => String(s.refId).trim() === cleanRefId)
      if (srcAmb) {
        ambassador = {
          id: null,
          refId: srcAmb.refId,
          name: srcAmb.name,
          email: srcAmb.email,
          initialPassword: null,
          createdAt: null,
        }
      }
    }

    // 2. Get DB teams — ONLY those that came through this ambassador's UTM link
    const dbTeams = await prisma.team.findMany({
      where: {
        OR: [
          { utmSource: cleanRefId },
          { utmSource: String(refId).trim() },
          { utmSource: { endsWith: `-${cleanRefId}` } },
          { utmSource: { startsWith: `${cleanRefId}-` } },
        ],
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

    // 3. Get the latest snapshot
    const latestSnapshot = await prisma.snapshot.findFirst({
      orderBy: { uploadedAt: 'desc' },
      include: { entries: true },
    })

    if (!latestSnapshot) {
      return NextResponse.json({
        ambassador: ambassador || { refId, name: `Ambassador ${refId}`, email: 'N/A' },
        summary: { totalTeams: 0, totalStudents: 0, accepted: 0, pending: 0, canceled: 0, utmRegistered: dbTeams.length },
        entries: [],
        utmRegistrations: dbTeams,
      })
    }

    const entries = latestSnapshot.entries

    // Only include students who personally registered through this ambassador's UTM link.
    // Do not expand a UTM registration to every teammate in the matched team.
    const ambassadorTeamIds = new Set()
    entries.forEach(row => {
      const email = (row.username || '').toLowerCase().trim()
      const matchesUtm = utmEmails.has(email)

      if (matchesUtm && row.teamId) {
        ambassadorTeamIds.add(row.teamId)
      }
    })

    // Keep only the UTM registrant in the datatable and summary counts.
    const ambassadorEntries = []
    entries.forEach(row => {
      const role = (row.role || '').toLowerCase()
      if (role.includes('coach')) return

      const email = (row.username || '').toLowerCase().trim()
      if (!utmEmails.has(email)) return

      ambassadorEntries.push({
        id: row.id,
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
      ambassador: ambassador || { refId, name: `Ambassador ${refId}`, email: 'N/A' },
      summary: {
        totalTeams: ambassadorTeamIds.size,
        totalStudents: ambassadorEntries.length,
        accepted: ambassadorEntries.filter(e => e.teamStatus === 'Accepted').length,
        pending: ambassadorEntries.filter(e => e.teamStatus === 'Pending').length,
        canceled: ambassadorEntries.filter(e => e.teamStatus === 'Canceled').length,
        utmRegistered: dbTeams.length,
      },
      entries: ambassadorEntries,
      utmRegistrations: dbTeams,
    })
  } catch (error) {
    console.error('Admin ambassador detail error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
