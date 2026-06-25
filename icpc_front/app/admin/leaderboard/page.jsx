'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Navbar from "@/components/navbar/navbar"
import ContactUs2 from "@/components/footer/contact_us_2"
import { FaFileExcel, FaTrash } from "react-icons/fa"
import * as XLSX from 'xlsx'

const ITEMS_PER_PAGE = 15;

export default function LeaderboardPage() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const [sourceFilter, setSourceFilter] = useState('All')
  const [campaignFilter, setCampaignFilter] = useState('All')
  
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [uploadedIcpcTeams, setUploadedIcpcTeams] = useState(null)
  const [stats, setStats] = useState(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [loginError, setLoginError] = useState('')

  const [open, setOpen] = useState(true)
  const [hero, setHero] = useState(false)
  const scrollDir = useRef("scrolling down")

  const [sources, setSources] = useState(['All'])
  const [campaigns, setCampaigns] = useState(['All'])

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
        const scrollY = window.scrollY;
        setHero(false);
        if (scrollY < lastScrollY) {
            setOpen(true);
        } else if (scrollY > lastScrollY && scrollY > 50) {
            setOpen(false);
        }
        scrollDir.current = scrollY > lastScrollY ? "scrolling down" : "scrolling up";
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
        }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchTeams()
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (uploadedIcpcTeams && teams.length > 0) {
      const verified = teams.filter(t => uploadedIcpcTeams.has(t.teamName.toLowerCase().trim()))
      const withUtm = verified.filter(t => t.utmSource || t.utmMedium || t.utmCampaign)
      setStats({
        verifiedCount: verified.length,
        withUtmCount: withUtm.length
      })
    }
  }, [uploadedIcpcTeams, teams])

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsAuthenticating(true)
    setLoginError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password: passwordInput })
      })

      const data = await response.json()

      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        setLoginError(data.error || 'Invalid credentials')
      }
    } catch (err) {
      setLoginError('Network error. Please try again.')
    } finally {
      setIsAuthenticating(false)
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, sourceFilter, campaignFilter])

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
      'Team Name': t.teamName,
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
    reader.onload = (evt) => {
      try {
        const bstr = evt.target.result
        const workbook = XLSX.read(bstr, { type: 'binary' })
        const wsname = workbook.SheetNames[0]
        const ws = workbook.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws)
        
        if (data.length > 0) {
          let teamNameKey = Object.keys(data[0]).find(k => k.toLowerCase().replace(/\s/g, '') === 'teamname')
          if (!teamNameKey) teamNameKey = Object.keys(data[0])[0]
          
          const teamNames = new Set(data.map(row => (row[teamNameKey] || '').toString().toLowerCase().trim()))
          setUploadedIcpcTeams(teamNames)
        }
      } catch (err) {
        console.error('Error parsing excel', err)
        alert('Failed to parse the Excel file.')
      }
    }
    reader.readAsBinaryString(file)
  }

  const filteredTeams = teams.filter(team => {
    const matchSearch = team.teamName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchSource = sourceFilter === 'All' || team.utmSource === sourceFilter
    const matchCampaign = campaignFilter === 'All' || team.utmCampaign === campaignFilter
    return matchSearch && matchSource && matchCampaign
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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar open={open} hero={hero} darkSection={false} />
      
      <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 border border-gray-100 animate-in fade-in zoom-in duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    required 
                    value={emailInput} 
                    onChange={e => setEmailInput(e.target.value)} 
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    required 
                    value={passwordInput} 
                    onChange={e => setPasswordInput(e.target.value)} 
                    placeholder="Enter password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
                {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}
                <button 
                  type="submit" 
                  disabled={isAuthenticating}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition disabled:bg-blue-400"
                >
                  {isAuthenticating ? 'Authenticating...' : 'Login'}
                </button>
              </form>
            </div>
          ) : (
            <>
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
                <div className="w-full lg:w-auto">
                  <input
                    type="text"
                    placeholder="Search teams..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                        Team Name
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
                            {team.teamName}
                            {uploadedIcpcTeams && uploadedIcpcTeams.has(team.teamName.toLowerCase().trim()) && (
                              <span title="Verified in ICPC Portal" className="text-green-600 text-lg">✓</span>
                            )}
                          </div>
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
            </>
          )}
        </div>
      </div>

      <div className="bg-blue-950 mt-auto">
        <ContactUs2 />
      </div>
    </div>
  )
}
