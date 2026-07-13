import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function POST(request) {
  try {
    const { verifiedIds } = await request.json()

    if (!verifiedIds || !Array.isArray(verifiedIds)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 })
    }

    // Update the isVerified field for all matching IDs
    await prisma.team.updateMany({
      where: {
        id: {
          in: verifiedIds
        }
      },
      data: {
        isVerified: true
      }
    })

    return NextResponse.json({ success: true, message: 'Teams verified successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error verifying teams:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
