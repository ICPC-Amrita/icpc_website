import prisma from '../db'

/**
 * We are no longer strictly filtering by campus. 
 * Any source provided is accepted.
 */
export async function createTeam(data) {
  return await prisma.team.create({
    data: {
      teamName: data.teamName,
      campus: data.utmSource || 'Unknown',
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
