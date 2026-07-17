import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { cookies } from 'next/headers'
import * as XLSX from 'xlsx'

async function verifyAdmin() {
  const cookieStore = cookies()
  const token = cookieStore.get('admin_session')?.value
  if (!token) return false
  const session = await prisma.adminSession.findUnique({ where: { token } })
  return session && session.expiresAt > new Date()
}

// GET — export ambassador credentials as XLSX
export async function GET() {
  try {
    if (!(await verifyAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const ambassadors = await prisma.ambassador.findMany({
      select: {
        refId: true,
        name: true,
        email: true,
        initialPassword: true,
      },
      orderBy: { refId: 'asc' },
    })

    const rows = ambassadors.map(a => ({
      'Ref ID': a.refId,
      'Name': a.name,
      'Email': a.email,
      'Password': a.initialPassword || '(changed by user)',
    }))

    const worksheet = XLSX.utils.json_to_sheet(rows)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Ambassador Credentials')

    // Set column widths
    worksheet['!cols'] = [
      { wch: 8 },   // Ref ID
      { wch: 30 },  // Name
      { wch: 35 },  // Email
      { wch: 15 },  // Password
    ]

    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="Ambassador_Credentials.xlsx"',
      },
    })
  } catch (error) {
    console.error('Ambassador export error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
