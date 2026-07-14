import React from 'react';
import * as xlsx from 'xlsx';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import AdminDashboardClient from './AdminDashboardClient';

const prisma = new PrismaClient();

export default async function AdminPage() {
  // 1. Fetch data from Prisma to get the UTM links of registered users
  let teams = [];
  try {
    teams = await prisma.team.findMany({
      select: {
        userEmail: true,
        utmSource: true,
        utmCampaign: true,
        utmMedium: true
      }
    });
  } catch (error) {
    console.error("Failed to fetch teams from DB:", error);
    // Continue with empty array if DB fails (e.g. during build without DB access)
  }

  // 2. Read the Excel file to get real registration status
  const filePath = path.join(process.cwd(), 'public', 'data', '2026-07-14.xlsx');
  let excelData = [];
  
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    excelData = xlsx.utils.sheet_to_json(sheet);
  } catch (error) {
    console.error("Failed to read excel file:", error);
  }

  // excelData structure: { username, teamStatus, ... } where username = userEmail
  // Filter for those whose teamStatus is "Completed"
  const completedRegistrations = excelData.filter(row => row.teamStatus === 'Completed');

  // 3. Merge data to calculate the leaderboard counts
  const ambassadorCounts = {};

  completedRegistrations.forEach(row => {
    // Find the matching DB team based on email
    // 'username' in the excel corresponds to the user's email
    const dbTeam = teams.find(t => t.userEmail && t.userEmail.toLowerCase() === (row.username || '').toLowerCase());
    
    if (dbTeam && dbTeam.utmSource) {
      const source = dbTeam.utmSource;
      ambassadorCounts[source] = (ambassadorCounts[source] || 0) + 1;
    }
  });

  // Convert to array and sort descending by count
  const leaderboard = Object.keys(ambassadorCounts).map(source => ({
    name: source,
    count: ambassadorCounts[source]
  })).sort((a, b) => b.count - a.count);

  return (
    <div className="min-h-screen bg-gray-50/50 p-8 pt-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Ambassador Analytics</h1>
          <p className="mt-2 text-sm text-gray-500">
            Tracking completed registrations attributed to ambassador UTM links.
          </p>
        </div>
        
        <AdminDashboardClient leaderboard={leaderboard} totalCompleted={completedRegistrations.length} />
      </div>
    </div>
  );
}
