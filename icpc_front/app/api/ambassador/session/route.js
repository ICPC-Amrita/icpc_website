import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { cookies } from 'next/headers'

// GET — verify ambassador session
export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('ambassador_session')?.value

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    const session = await prisma.ambassadorSession.findUnique({
      where: { token },
      include: { ambassador: { select: { email: true, name: true, refId: true } } },
    })

    if (!session || session.expiresAt < new Date()) {
      if (session) {
        await prisma.ambassadorSession.delete({ where: { id: session.id } })
      }
      const response = NextResponse.json({ authenticated: false }, { status: 401 })
      response.cookies.delete('ambassador_session')
      return response
    }

    return NextResponse.json({
      authenticated: true,
      email: session.ambassador.email,
      name: session.ambassador.name,
      refId: session.ambassador.refId,
    }, { status: 200 })
  } catch (error) {
    console.error('Ambassador session check error:', error)
    return NextResponse.json({ authenticated: false }, { status: 500 })
  }
}

// DELETE — ambassador logout
export async function DELETE() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('ambassador_session')?.value

    if (token) {
      await prisma.ambassadorSession.deleteMany({ where: { token } })
    }

    const response = NextResponse.json({ success: true }, { status: 200 })
    response.cookies.delete('ambassador_session')
    return response
  } catch (error) {
    console.error('Ambassador logout error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
