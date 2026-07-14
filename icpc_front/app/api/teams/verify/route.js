import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { verifiedEmails, unverifiedEmails } = body;

    if (!verifiedEmails || !Array.isArray(verifiedEmails)) {
      return NextResponse.json({ error: 'verifiedEmails array is required' }, { status: 400 });
    }

    // Process all updates in a transaction
    const operations = [];

    // 1. Mark teams as verified
    if (verifiedEmails.length > 0) {
      operations.push(
        prisma.team.updateMany({
          where: {
            userEmail: {
              in: verifiedEmails
            }
          },
          data: {
            isVerified: true
          }
        })
      );
    }

    // 2. Mark teams as unverified if requested
    if (unverifiedEmails && unverifiedEmails.length > 0) {
      operations.push(
        prisma.team.updateMany({
          where: {
            userEmail: {
              in: unverifiedEmails
            }
          },
          data: {
            isVerified: false
          }
        })
      );
    }

    await prisma.$transaction(operations);

    return NextResponse.json({ success: true, message: 'Database updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating team verification:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
