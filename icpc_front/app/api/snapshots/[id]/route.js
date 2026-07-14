import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

// GET — Get full snapshot data by ID
export async function GET(request, { params }) {
  try {
    const { id } = params

    const snapshot = await prisma.snapshot.findUnique({
      where: { id },
      include: {
        entries: true,
      }
    })

    if (!snapshot) {
      return NextResponse.json({ error: 'Snapshot not found' }, { status: 404 })
    }

    return NextResponse.json({ snapshot }, { status: 200 })
  } catch (error) {
    console.error('Error fetching snapshot:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// DELETE — Delete a snapshot and its entries
export async function DELETE(request, { params }) {
  try {
    const { id } = params

    await prisma.snapshot.delete({
      where: { id },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error deleting snapshot:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
