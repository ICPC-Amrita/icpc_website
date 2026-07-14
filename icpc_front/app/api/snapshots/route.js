import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

// POST — Upload a new snapshot (parsed Excel data)
export async function POST(request) {
  try {
    const { filename, entries } = await request.json()

    if (!entries || !Array.isArray(entries) || entries.length === 0) {
      return NextResponse.json({ error: 'entries array is required' }, { status: 400 })
    }

    // Fetch all DB teams to match emails -> ambassador (utmCampaign)
    const dbTeams = await prisma.team.findMany({
      select: { userEmail: true, utmCampaign: true }
    })

    const emailToAmbassador = {}
    dbTeams.forEach(t => {
      if (t.userEmail && t.utmCampaign) {
        emailToAmbassador[t.userEmail.toLowerCase().trim()] = t.utmCampaign
      }
    })

    // Create snapshot with entries
    const snapshot = await prisma.snapshot.create({
      data: {
        filename: filename || 'upload.xlsx',
        entries: {
          create: entries.map(row => ({
            username: row.username || '',
            firstName: row.firstName || null,
            lastName: row.lastName || null,
            role: row.role || null,
            teamId: row.teamId ? String(row.teamId) : null,
            teamName: row.teamName || null,
            teamStatus: row.teamStatus || null,
            teamInstName: row.teamInstName || null,
            ambassador: emailToAmbassador[(row.username || '').toLowerCase().trim()] || null,
          }))
        }
      },
      include: {
        _count: { select: { entries: true } }
      }
    })

    return NextResponse.json({ success: true, snapshot }, { status: 201 })
  } catch (error) {
    console.error('Error creating snapshot:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// GET — List all snapshots (summary only)
export async function GET() {
  try {
    const snapshots = await prisma.snapshot.findMany({
      orderBy: { uploadedAt: 'desc' },
      include: {
        _count: { select: { entries: true } }
      }
    })

    // Also get status counts per snapshot
    const result = await Promise.all(snapshots.map(async (s) => {
      const statusCounts = await prisma.snapshotEntry.groupBy({
        by: ['teamStatus'],
        where: { snapshotId: s.id },
        _count: true,
      })

      const counts = { Accepted: 0, Pending: 0, Canceled: 0 }
      statusCounts.forEach(sc => {
        if (sc.teamStatus && counts.hasOwnProperty(sc.teamStatus)) {
          counts[sc.teamStatus] = sc._count
        }
      })

      return {
        id: s.id,
        filename: s.filename,
        uploadedAt: s.uploadedAt,
        totalEntries: s._count.entries,
        ...counts,
      }
    }))

    return NextResponse.json({ snapshots: result }, { status: 200 })
  } catch (error) {
    console.error('Error fetching snapshots:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
