import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { cookies } from 'next/headers'

// GET — verify session
export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('admin_session')?.value

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    const session = await prisma.adminSession.findUnique({
      where: { token },
      include: { admin: { select: { email: true } } }
    })

    if (!session || session.expiresAt < new Date()) {
      // Clean up expired session
      if (session) {
        await prisma.adminSession.delete({ where: { id: session.id } })
      }
      const response = NextResponse.json({ authenticated: false }, { status: 401 })
      response.cookies.delete('admin_session')
      return response
    }

    return NextResponse.json({ authenticated: true, email: session.admin.email }, { status: 200 })
  } catch (error) {
    console.error('Session check error:', error)
    return NextResponse.json({ authenticated: false }, { status: 500 })
  }
}

// DELETE — logout
export async function DELETE() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('admin_session')?.value

    if (token) {
      await prisma.adminSession.deleteMany({ where: { token } })
    }

    const response = NextResponse.json({ success: true }, { status: 200 })
    response.cookies.delete('admin_session')
    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
