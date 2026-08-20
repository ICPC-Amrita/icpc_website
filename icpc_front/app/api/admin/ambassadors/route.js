import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { getAmbassadorSourceData } from '@/lib/ambassadorData'

// Verify admin session
async function verifyAdmin() {
  const cookieStore = cookies()
  const token = cookieStore.get('admin_session')?.value
  if (!token) return false
  const session = await prisma.adminSession.findUnique({ where: { token } })
  return session && session.expiresAt > new Date()
}

function generatePassword(length = 10) {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

// GET — list all ambassadors (source + account status)
export async function GET() {
  try {
    if (!(await verifyAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const sourceData = await getAmbassadorSourceData()
    const existingAccounts = await prisma.ambassador.findMany({
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

    const accountByRefId = new Map()
    const accountByEmail = new Map()
    existingAccounts.forEach(a => {
      if (a.refId) accountByRefId.set(String(a.refId).trim(), a)
      if (a.email) accountByEmail.set(a.email.toLowerCase().trim(), a)
    })

    const ambassadors = sourceData.map(src => {
      const cleanRefId = String(src.refId).trim()
      const cleanEmail = (src.email || '').toLowerCase().trim()
      const account = accountByRefId.get(cleanRefId) || accountByEmail.get(cleanEmail)

      return {
        refId: src.refId,
        name: src.name,
        email: src.email,
        accountCreated: !!account,
        accountId: account?.id || null,
        initialPassword: account?.initialPassword || null,
        passwordChanged: account ? !account.initialPassword : false,
        createdAt: account?.createdAt || null,
      }
    })

    const totalSource = sourceData.length
    const totalCreated = ambassadors.filter(a => a.accountCreated).length

    return NextResponse.json({ ambassadors, totalSource, totalCreated })
  } catch (error) {
    console.error('Admin ambassadors GET error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// POST — create or sync ambassador accounts
// Body: { refIds: ["1", "2"] } or { refIds: "all" }
export async function POST(request) {
  try {
    if (!(await verifyAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { refIds } = await request.json()
    const sourceData = await getAmbassadorSourceData()

    let toCreate = []
    if (refIds === 'all') {
      toCreate = sourceData
    } else if (Array.isArray(refIds)) {
      const stringRefIds = new Set(refIds.map(r => String(r).trim()))
      toCreate = sourceData.filter(s => stringRefIds.has(String(s.refId).trim()))
    } else {
      return NextResponse.json({ error: 'refIds must be an array or "all"' }, { status: 400 })
    }

    const created = []
    const skipped = []

    for (const amb of toCreate) {
      const cleanRefId = String(amb.refId).trim()
      const cleanEmail = (amb.email || '').toLowerCase().trim()

      if (!cleanEmail) {
        skipped.push({ refId: amb.refId, name: amb.name, reason: 'Email is missing' })
        continue
      }

      // Check for existing account by refId OR email
      const existing = await prisma.ambassador.findFirst({
        where: {
          OR: [
            { refId: cleanRefId },
            { email: cleanEmail },
          ],
        },
      })

      if (existing) {
        // If account already exists by email or refId, sync/update refId & name if mismatched
        try {
          const rawPassword = existing.initialPassword || generatePassword()
          const hashed = existing.password || (await bcrypt.hash(rawPassword, 10))

          const updated = await prisma.ambassador.update({
            where: { id: existing.id },
            data: {
              refId: cleanRefId,
              name: amb.name || existing.name,
              email: cleanEmail,
              ...(existing.initialPassword ? {} : { initialPassword: rawPassword, password: hashed }),
            },
          })

          created.push({
            refId: updated.refId,
            name: updated.name,
            email: updated.email,
            password: updated.initialPassword || 'Existing password',
            isUpdated: true,
          })
        } catch (updateErr) {
          console.error(`Error updating ambassador ${cleanRefId}:`, updateErr)
          skipped.push({ refId: amb.refId, name: amb.name, reason: updateErr.message || 'Failed to update account' })
        }
        continue
      }

      const rawPassword = generatePassword()
      const hashed = await bcrypt.hash(rawPassword, 10)

      try {
        const newAmbassador = await prisma.ambassador.create({
          data: {
            refId: cleanRefId,
            name: amb.name || `Ambassador ${cleanRefId}`,
            email: cleanEmail,
            password: hashed,
            initialPassword: rawPassword,
          },
        })

        created.push({
          refId: newAmbassador.refId,
          name: newAmbassador.name,
          email: newAmbassador.email,
          password: rawPassword,
        })
      } catch (createErr) {
        console.error(`Error creating ambassador ${cleanRefId}:`, createErr)
        skipped.push({ refId: amb.refId, name: amb.name, reason: createErr.message || 'Error creating account' })
      }
    }

    return NextResponse.json({ created, skipped })
  } catch (error) {
    console.error('Admin ambassadors POST error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// DELETE — delete an ambassador account
// Body: { refId: "1" }
export async function DELETE(request) {
  try {
    if (!(await verifyAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { refId } = await request.json()

    if (!refId) {
      return NextResponse.json({ error: 'refId is required' }, { status: 400 })
    }

    const ambassador = await prisma.ambassador.findUnique({ where: { refId } })

    if (!ambassador) {
      return NextResponse.json({ error: 'Ambassador not found' }, { status: 404 })
    }

    await prisma.ambassador.delete({ where: { refId } })

    return NextResponse.json({ success: true, message: `Deleted ambassador ${refId}` })
  } catch (error) {
    console.error('Admin ambassadors DELETE error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
