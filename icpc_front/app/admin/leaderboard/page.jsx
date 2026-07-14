'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { FaFileExcel, FaTrash } from "react-icons/fa"
import * as XLSX from 'xlsx'

const ITEMS_PER_PAGE = 15;

export default function LeaderboardPage() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const [sourceFilter, setSourceFilter] = useState('All')
  const [campaignFilter, setCampaignFilter] = useState('All')
  
  const [searchQuery, setSearchQuery] = useState('')
  const [searchEmail, setSearchEmail] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [uploadedIcpcTeams, setUploadedIcpcTeams] = useState(null)
  const [stats, setStats] = useState(null)
  const [sources, setSources] = useState(['All'])
  const [campaigns, setCampaigns] = useState(['All'])

  // Fetch teams on mount
  useEffect(() => {
    fetchTeams()
  }, [])

  useEffect(() => {
    if (uploadedIcpcTeams && teams.length > 0) {
      const verified = teams.filter(t => {
        const matchName = t.personName && uploadedIcpcTeams.personNames && uploadedIcpcTeams.personNames.has(t.personName.toLowerCase().trim());
        const matchEmail = t.userEmail && uploadedIcpcTeams.emails && uploadedIcpcTeams.emails.has(t.userEmail.toLowerCase().trim());
        return matchName || matchEmail;
      })
      const withUtm = verified.filter(t => t.utmSource || t.utmMedium || t.utmCampaign || t.userEmail)
      setStats({
        verifiedCount: verified.length,
        withUtmCount: withUtm.length
      })
    }
  }, [uploadedIcpcTeams, teams])



  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, searchEmail, sourceFilter, campaignFilter])

  const handleDeleteAll = async () => {
    if (window.confirm("Are you sure you want to delete ALL data? This action cannot be undone.")) {
      try {
        const res = await fetch('/api/teams', { method: 'DELETE' })
        if (res.ok) {
          setTeams([])
        } else {
          alert('Failed to delete teams.')
        }
      } catch (err) {
        console.error(err)
      }
    }
  }

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredTeams.map(t => ({
      'Name': t.personName,
      'Email': t.userEmail,
      'UTM Medium': t.utmMedium || 'N/A',
      'UTM Campaign': t.utmCampaign || 'N/A',
      'Source': t.campus,
      'Registration Date': new Date(t.createdAt).toLocaleDateString()
    })))
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Teams")
    XLSX.writeFile(workbook, "Registered_Teams.xlsx")
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (evt) => {
      try {
        const bstr = evt.target.result
        const workbook = XLSX.read(bstr, { type: 'binary' })
        const wsname = workbook.SheetNames[0]
        const ws = workbook.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws)
        
        if (data.length > 0) {
          let personNameKey = Object.keys(data[0]).find(k => k.toLowerCase().replace(/\s/g, '') === 'name' || k.toLowerCase().replace(/\s/g, '') === 'personname' || k.toLowerCase().replace(/\s/g, '') === 'teamname')
          if (!personNameKey) personNameKey = Object.keys(data[0])[0]
          
          let emailKey = Object.keys(data[0]).find(k => k.toLowerCase().includes('email'))

          const personNames = new Set(data.map(row => (row[personNameKey] || '').toString().toLowerCase().trim()))
          const emails = new Set()
          if (emailKey) {
            data.forEach(row => {
              if (row[emailKey]) emails.add(row[emailKey].toString().toLowerCase().trim())
            })
          }
          setUploadedIcpcTeams({ personNames, emails })
          
          // Auto-verify teams in database
          const verifiedIds = teams.filter(t => {
            const matchName = t.personName && personNames.has(t.personName.toLowerCase().trim());
            const matchEmail = t.userEmail && emails.has(t.userEmail.toLowerCase().trim());
            return matchName || matchEmail;
          }).map(t => t.id);

          if (verifiedIds.length > 0) {
            try {
              const res = await fetch('/api/teams/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ verifiedIds })
              });
              if (res.ok) {
                const updatedTeams = teams.map(t => 
                   verifiedIds.includes(t.id) ? { ...t, isVerified: true } : t
                );
                setTeams(updatedTeams);
                alert(`Successfully verified ${verifiedIds.length} teams in the database!`);
              }
            } catch (e) {
              console.error('Failed to save verifications to DB', e);
            }
          } else {
             alert('No matching teams found to verify.');
          }
        }
      } catch (err) {
        console.error('Error parsing excel', err)
        alert('Failed to parse the Excel file.')
      }
    }
    reader.readAsBinaryString(file)
  }

  const filteredTeams = teams.filter(team => {
    const matchSearch = team.personName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchEmail = team.userEmail ? team.userEmail.toLowerCase().includes(searchEmail.toLowerCase()) : searchEmail === ''
    const matchSource = sourceFilter === 'All' || team.utmSource === sourceFilter
    const matchCampaign = campaignFilter === 'All' || team.utmCampaign === campaignFilter
    return matchSearch && matchEmail && matchSource && matchCampaign
  })
  
  const totalPages = Math.ceil(filteredTeams.length / ITEMS_PER_PAGE) || 1
  const currentTeams = filteredTeams.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const fetchTeams = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/teams')
      const data = await res.json()
      if (res.ok) {
        setTeams(data.teams)
        const uniqueSources = new Set(['All'])
        const uniqueCampaigns = new Set(['All'])
        data.teams.forEach(t => {
          if (t.utmSource) uniqueSources.add(t.utmSource)
          if (t.utmCampaign) uniqueCampaigns.add(t.utmCampaign)
        })
        setSources(Array.from(uniqueSources))
        setCampaigns(Array.from(uniqueCampaigns))
      }
    } catch (error) {
      console.error('Error fetching teams:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Registered Teams</h1>
                  <p className="text-gray-600">View the teams registered for the ICPC Amritapuri Regionals 2026.</p>
                  {stats && (
                    <div className="mt-4 bg-green-50 text-green-800 p-4 rounded-lg border border-green-200 shadow-sm animate-in fade-in zoom-in duration-300">
                      <p className="font-semibold text-lg flex items-center gap-2">ICPC Verification Stats</p>
                      <p className="mt-1">Total Verified Teams: <span className="font-bold">{stats.verifiedCount}</span></p>
                      <p>Verified Teams with UTM tracking: <span className="font-bold">{stats.withUtmCount}</span></p>
                    </div>
                  )}
                </div>
                <div className="mt-4 md:mt-0 self-start md:self-auto">
                  <Link href="/" className="text-blue-600  hover:text-blue-800">
                    Back to Home
                  </Link>
                </div>
              </div>

          <div className="bg-blue-900 rounded-none border overflow-hidden">
            <div className="p-6 border-b flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div className="flex flex-col lg:flex-row items-center gap-4 w-full xl:w-auto">
                <div className="flex items-center space-x-2 w-full lg:w-auto">
                  <span className="text-md text-white whitespace-nowrap">Source:</span>
                  <select
                    value={sourceFilter}
                    onChange={(e) => setSourceFilter(e.target.value)}
                    className="block w-full sm:w-40 pl-3 pr-8 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-black"
                  >
                    {sources.map(src => (
                      <option key={src} value={src}>{src}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2 w-full lg:w-auto">
                  <span className="text-md text-white whitespace-nowrap">Campaign:</span>
                  <select
                    value={campaignFilter}
                    onChange={(e) => setCampaignFilter(e.target.value)}
                    className="block w-full sm:w-40 pl-3 pr-8 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-black"
                  >
                    {campaigns.map(camp => (
                      <option key={camp} value={camp}>{camp}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Search name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full sm:w-64 pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-black"
                  />
                  <input
                    type="text"
                    placeholder="Search email..."
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    className="block w-full sm:w-64 pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-black"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto justify-end">
                <div className="text-md text-white mr-2">
                  {filteredTeams.length} teams
                </div>
                <label className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition shadow-sm cursor-pointer mb-0">
                  <FaFileExcel /> Verify via Excel
                  <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="hidden" />
                </label>
                <button 
                  onClick={handleExport}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition shadow-sm"
                >
                  <FaFileExcel /> Export
                </button>
                <button 
                  onClick={handleDeleteAll}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition shadow-sm"
                >
                  <FaTrash /> Delete All
                </button>
              </div>
            </div>

            {loading ? (
              <div className="p-12 text-center text-black">
                <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading teams...
              </div>
            ) : currentTeams.length === 0 ? (
              <div className="p-12 text-center text-white">
                No teams found matching your criteria.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Source
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        UTM Details (Medium / Campaign)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Registration Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentTeams.map((team) => (
                      <tr key={team.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center gap-2">
                            {team.personName}
                            {(team.isVerified || (uploadedIcpcTeams && (
                              (uploadedIcpcTeams.personNames && uploadedIcpcTeams.personNames.has(team.personName.toLowerCase().trim())) ||
                              (team.userEmail && uploadedIcpcTeams.emails && uploadedIcpcTeams.emails.has(team.userEmail.toLowerCase().trim()))
                            ))) && (
                              <span title="Verified in ICPC Portal" className="text-green-600 text-lg">✓</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {team.userEmail || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                          <span className="inline-flex items-center px-2.5 py-0.5 text-md  text-blue-800">
                            {team.campus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          <div><span className="font-medium text-gray-800">Source:</span> {team.utmSource || 'N/A'}</div>
                          {(team.utmMedium || team.utmCampaign) && (
                            <div className="text-xs mt-1">
                              {team.utmMedium && <span><span className="font-medium text-gray-800">Medium:</span> {team.utmMedium} </span>}
                              {team.utmCampaign && <span><span className="font-medium text-gray-800">Campaign:</span> {team.utmCampaign}</span>}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                          {new Date(team.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {!loading && filteredTeams.length > 0 && (
              <div className="p-4 border-t border-gray-200 bg-white flex items-center justify-between">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-700">
                  Page <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
                </span>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}
