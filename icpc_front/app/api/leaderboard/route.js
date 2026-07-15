import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
    // 1. Get the latest snapshot
    const latestSnapshot = await prisma.snapshot.findFirst({
      orderBy: { uploadedAt: 'desc' },
      include: { entries: true }
    })

    if (!latestSnapshot) {
      return NextResponse.json({ leaderboard: [] }, { status: 200 })
    }

    // 2. Get DB Teams
    const dbTeams = await prisma.team.findMany({
      select: { userEmail: true, personName: true, utmSource: true, isVerified: true }
    })

    // 3. Do the mapping logic
    const entries = latestSnapshot.entries;
    const teamToSourceMap = {}

    // First pass: Match Excel rows to DB teams to find the utmSource for each team
    entries.forEach(row => {
      const email = (row.username || '').toLowerCase().trim()
      const name = ((row.firstName || '') + ' ' + (row.lastName || '')).toLowerCase().trim()
      
      const dbMatch = dbTeams.find(t => 
        (email && t.userEmail && t.userEmail.toLowerCase().trim() === email) ||
        (name && t.personName && t.personName.toLowerCase().trim() === name)
      )

      if (dbMatch && dbMatch.utmSource && row.teamId) {
        teamToSourceMap[row.teamId] = dbMatch.utmSource
      }
    })

    const teamIdsPerSource = {}

    // Second pass: group teamIds by the assigned utmSource
    entries.forEach(row => {
      const role = (row.role || '').toLowerCase();
      // Exclude coaches
      if (role.includes('coach')) return;

      // Only count Accepted / Paid teams
      if (row.teamStatus !== 'Accepted') return;

      const source = (row.teamId && teamToSourceMap[row.teamId]) || row.ambassador
      if (!source || source === 'Unknown') return

      if (!teamIdsPerSource[source]) teamIdsPerSource[source] = new Set()
      if (row.teamId) teamIdsPerSource[source].add(row.teamId)
    })

    // Prepare leaderboard data
    const leaderboardTeams = Object.entries(teamIdsPerSource).map(([source, set], index) => {
      return {
        id: index + 1,
        name: source, // e.g. "1" or "ICPCAM2026"
        teamsRegistered: set.size
      }
    }).sort((a, b) => b.teamsRegistered - a.teamsRegistered)

    // Re-assign IDs based on rank
    leaderboardTeams.forEach((item, index) => {
      item.id = index + 1;
    });

    return NextResponse.json({ leaderboard: leaderboardTeams }, { status: 200 })
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
