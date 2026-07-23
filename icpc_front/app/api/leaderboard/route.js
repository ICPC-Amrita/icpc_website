import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getAmbassadorSourceData } from '@/lib/ambassadorData'

export async function GET() {
  try {
    // 1. Fetch Ambassadors from DB and source API
    const dbAmbassadors = await prisma.ambassador.findMany({
      select: { refId: true, name: true, email: true }
    })
    
    let sourceData = []
    try {
      sourceData = await getAmbassadorSourceData()
    } catch (e) {
      console.error('Failed to fetch ambassador source data for leaderboard:', e)
    }

    const ambassadorNameMap = {}
    if (Array.isArray(sourceData)) {
      sourceData.forEach(a => {
        if (a.refId) ambassadorNameMap[String(a.refId)] = a.name
      })
    }
    if (Array.isArray(dbAmbassadors)) {
      dbAmbassadors.forEach(a => {
        if (a.refId) ambassadorNameMap[String(a.refId)] = a.name
      })
    }

    // 2. Fetch DB website teams (UTM pop-up registrations)
    const dbTeams = await prisma.team.findMany({
      select: { userEmail: true, personName: true, utmSource: true, utmCampaign: true, isVerified: true }
    })

    // Count website UTM registrations per ambassador source
    const utmRegCounts = {}
    dbTeams.forEach(t => {
      if (t.utmSource) {
        const src = String(t.utmSource)
        utmRegCounts[src] = (utmRegCounts[src] || 0) + 1
      }
    })

    // 3. Fetch latest snapshot from ICPC official Excel upload
    const latestSnapshot = await prisma.snapshot.findFirst({
      orderBy: { uploadedAt: 'desc' },
      include: { entries: true }
    })

    const entries = latestSnapshot ? latestSnapshot.entries : []
    const teamToSourceMap = {}

    // Match snapshot entries to DB teams by email
    entries.forEach(row => {
      const email = (row.username || '').toLowerCase().trim()
      if (!email) return
      
      const dbMatch = dbTeams.find(t => 
        t.userEmail && t.userEmail.toLowerCase().trim() === email
      )

      if (dbMatch && dbMatch.utmSource && dbMatch.utmCampaign && row.teamId) {
        teamToSourceMap[row.teamId] = dbMatch.utmSource
      }
    })

    const snapshotTotalTeams = {}
    const snapshotAcceptedTeams = {}

    entries.forEach(row => {
      const role = (row.role || '').toLowerCase()
      if (role.includes('coach')) return

      const source = (row.teamId && teamToSourceMap[row.teamId]) || row.ambassador
      if (!source || source === 'Unknown') return

      if (!snapshotTotalTeams[source]) snapshotTotalTeams[source] = new Set()
      if (row.teamId) snapshotTotalTeams[source].add(row.teamId)

      if (row.teamStatus === 'Accepted') {
        if (!snapshotAcceptedTeams[source]) snapshotAcceptedTeams[source] = new Set()
        if (row.teamId) snapshotAcceptedTeams[source].add(row.teamId)
      }
    })

    // Combine all sources
    const allSources = new Set([
      ...Object.keys(ambassadorNameMap),
      ...Object.keys(utmRegCounts),
      ...Object.keys(snapshotTotalTeams)
    ])

    const leaderboardData = []

    allSources.forEach(refId => {
      const isAmbassador = !!ambassadorNameMap[refId]
      const utmRegs = utmRegCounts[refId] || 0
      const officialRegs = snapshotTotalTeams[refId] ? snapshotTotalTeams[refId].size : 0
      const paidTeams = snapshotAcceptedTeams[refId] ? snapshotAcceptedTeams[refId].size : 0

      // Only include valid ambassador accounts or sources with active registrations
      if (!isAmbassador && utmRegs === 0 && officialRegs === 0) return

      // Strict filter: exclude marketing campaign sources like previous_year_participant
      if (!isAmbassador && refId === 'previous_year_participant') return

      const name = ambassadorNameMap[refId] || `Ambassador ${refId}`

      leaderboardData.push({
        refId,
        name,
        utmRegistrations: utmRegs,
        icpcOfficialRegistrations: officialRegs,
        paymentCompletedTeams: paidTeams,
        teamsRegistered: paidTeams || officialRegs || utmRegs
      })
    })

    // Sort leaderboard by paymentCompletedTeams desc, then icpcOfficialRegistrations desc, then utmRegistrations desc
    leaderboardData.sort((a, b) => {
      if (b.paymentCompletedTeams !== a.paymentCompletedTeams) {
        return b.paymentCompletedTeams - a.paymentCompletedTeams
      }
      if (b.icpcOfficialRegistrations !== a.icpcOfficialRegistrations) {
        return b.icpcOfficialRegistrations - a.icpcOfficialRegistrations
      }
      return b.utmRegistrations - a.utmRegistrations
    })

    leaderboardData.forEach((item, idx) => {
      item.id = idx + 1
    })

    return NextResponse.json({ leaderboard: leaderboardData }, { status: 200 })
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
