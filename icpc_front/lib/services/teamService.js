import prisma from '../db'

/**
 * Extracts campus name from utm string
 * @param {string} utmString 
 * @returns {string} Campus Name
 */
export function extractCampusFromUTM(utmString) {
  if (!utmString) return 'Unknown'
  
  const lowerUtm = utmString.toLowerCase()
  if (lowerUtm.includes('kollam') || lowerUtm.includes('amritapuri')) return 'Kollam'
  if (lowerUtm.includes('mysuru') || lowerUtm.includes('mysore')) return 'Mysuru'
  if (lowerUtm.includes('bengaluru') || lowerUtm.includes('bangalore')) return 'Bengaluru'
  if (lowerUtm.includes('coimbatore')) return 'Coimbatore'
  
  return 'Other'
}

/**
 * Create a new team in the database
 * @param {Object} data - Team data
 */
export async function createTeam(data) {
  const combinedUtm = `${data.utmSource || ''} ${data.utmCampaign || ''} ${data.utmMedium || ''}`
  return await prisma.team.create({
    data: {
      teamName: data.teamName,
      campus: extractCampusFromUTM(combinedUtm),
      utmSource: data.utmSource,
      utmMedium: data.utmMedium,
      utmCampaign: data.utmCampaign,
    }
  })
}

/**
 * Get all teams, optionally filtered by campus
 * @param {string} campus 
 */
export async function getTeams(campus = null) {
  if (campus && campus !== 'All') {
    return await prisma.team.findMany({
      where: {
        campus: campus
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
  
  return await prisma.team.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

/**
 * Delete all teams

 */
export async function deleteAllTeams() {
  return await prisma.team.deleteMany({})
}

/**
 * Get a team by its exact name (case-insensitive)
 * @param {string} teamName 
 */
export async function getTeamByName(teamName) {
  return await prisma.team.findFirst({
    where: {
      teamName: {
        equals: teamName,
        mode: 'insensitive'
      }
    }
  })
}

/**
 * Get all distinct campuses from the teams
 */
export async function getAllCampuses() {
  const result = await prisma.team.findMany({
    distinct: ['campus'],
    select: {
      campus: true
    }
  })
  return result.map(c => c.campus).filter(Boolean)
}
