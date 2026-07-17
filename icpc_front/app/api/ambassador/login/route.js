import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const ambassador = await prisma.ambassador.findUnique({
      where: { email: email.toLowerCase().trim() },
    })

    if (!ambassador) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, ambassador.password)

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    // Create session
    const token = crypto.randomUUID()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    await prisma.ambassadorSession.create({
      data: {
        ambassadorId: ambassador.id,
        token,
        expiresAt,
      },
    })

    const response = NextResponse.json({
      success: true,
      name: ambassador.name,
      refId: ambassador.refId,
    }, { status: 200 })

    response.cookies.set('ambassador_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60,
    })

    return response
  } catch (error) {
    console.error('Ambassador login error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
