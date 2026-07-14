import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

// GET — Aggregated trend data across all snapshots
export async function GET() {
  try {
    const snapshots = await prisma.snapshot.findMany({
      orderBy: { uploadedAt: 'asc' },
      select: {
        id: true,
        uploadedAt: true,
        entries: {
          select: { teamStatus: true }
        }
      }
    })

    const trends = snapshots.map(s => {
      let accepted = 0, pending = 0, canceled = 0
      s.entries.forEach(e => {
        if (e.teamStatus === 'Accepted') accepted++
        else if (e.teamStatus === 'Pending') pending++
        else if (e.teamStatus === 'Canceled') canceled++
      })

      return {
        date: s.uploadedAt,
        accepted,
        pending,
        canceled,
        total: s.entries.length,
      }
    })

    return NextResponse.json({ trends }, { status: 200 })
  } catch (error) {
    console.error('Error fetching trends:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
