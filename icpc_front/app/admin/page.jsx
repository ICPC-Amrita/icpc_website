'use client'

import React, { useState, useEffect } from 'react'
import * as xlsx from 'xlsx'
import ReactECharts from 'echarts-for-react'

export default function AdminPage() {
  // Snapshots state
  const [snapshots, setSnapshots] = useState([])
  const [selectedSnapshotId, setSelectedSnapshotId] = useState(null)
  const [snapshotEntries, setSnapshotEntries] = useState([])
  const [trends, setTrends] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadMsg, setUploadMsg] = useState('')

  // Analytics state
  const [ambassadorData, setAmbassadorData] = useState([])
  const [selectedAmbassador, setSelectedAmbassador] = useState(null)
  const [activeTab, setActiveTab] = useState('accepted')
  const [dbTeams, setDbTeams] = useState([])
  const [isUpdating, setIsUpdating] = useState(false)
  const [ambassadorList, setAmbassadorList] = useState([])

  // Load snapshots list, trends, dbTeams, and ambassadors on mount
  useEffect(() => {
    fetchSnapshots()
    fetchTrends()
    fetchDbTeams()
    fetchAmbassadors()
  }, [])

  const fetchAmbassadors = async () => {
    try {
      const res = await fetch('/api/admin/ambassadors')
      const data = await res.json()
      if (data.ambassadors) setAmbassadorList(data.ambassadors)
    } catch (err) {
      console.error('Failed to fetch ambassadors list', err)
    }
  }

  const fetchDbTeams = async () => {
    try {
      const res = await fetch('/api/teams')
      const data = await res.json()
      if (data.teams) setDbTeams(data.teams)
    } catch (err) {
      console.error('Failed to fetch DB teams', err)
    }
  }

  useEffect(() => {
    if (snapshotEntries) {
      processAmbassadorData(snapshotEntries)
    }
  }, [snapshotEntries, dbTeams, ambassadorList])

  const fetchSnapshots = async () => {
    try {
      const res = await fetch('/api/snapshots')
      const data = await res.json()
      if (data.snapshots) setSnapshots(data.snapshots)
    } catch (err) {
      console.error('Failed to fetch snapshots', err)
    }
  }

  const fetchTrends = async () => {
    try {
      const res = await fetch('/api/snapshots/trends')
      const data = await res.json()
      if (data.trends) setTrends(data.trends)
    } catch (err) {
      console.error('Failed to fetch trends', err)
    }
  }

  // Load a specific snapshot's entries
  const handleUpdatePublicLeaderboard = async () => {
    setIsUpdating(true)
    try {
      const res = await fetch('/api/leaderboard')
      const data = await res.json()
      if (res.ok) {
        alert('Successfully updated the Public Ambassador Leaderboard with the latest snapshot data!')
      } else {
        alert('Failed to update public leaderboard.')
      }
    } catch (err) {
      console.error(err)
      alert('Error updating public leaderboard.')
    } finally {
      setIsUpdating(false)
    }
  }

  const loadSnapshot = async (id) => {
    setSelectedSnapshotId(id)
    setSelectedAmbassador(null)
    try {
      const res = await fetch(`/api/snapshots/${id}`)
      const data = await res.json()
      if (data.snapshot) {
        setSnapshotEntries(data.snapshot.entries)
      }
    } catch (err) {
      console.error('Failed to load snapshot', err)
    }
  }

  // Upload new Excel file
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setIsUploading(true)
    setUploadMsg('')

    const reader = new FileReader()
    reader.onload = async (evt) => {
      try {
        const bstr = evt.target.result
        const workbook = xlsx.read(bstr, { type: 'binary' })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const entries = xlsx.utils.sheet_to_json(sheet)

        const res = await fetch('/api/snapshots', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, entries })
        })

        const data = await res.json()
        if (res.ok) {
          setUploadMsg(`Uploaded ${entries.length} entries successfully.`)
          fetchSnapshots()
          fetchTrends()
          // Auto-load the new snapshot
          if (data.snapshot?.id) loadSnapshot(data.snapshot.id)
        } else {
          setUploadMsg('Error: ' + (data.error || 'Upload failed'))
        }
      } catch (err) {
        console.error('Upload error', err)
        setUploadMsg('Failed to parse or upload file.')
      } finally {
        setIsUploading(false)
      }
    }
    reader.readAsBinaryString(file)
  }

  // Delete a snapshot
  const handleDeleteSnapshot = async (id) => {
    if (!confirm('Delete this snapshot? This cannot be undone.')) return
    try {
      await fetch(`/api/snapshots/${id}`, { method: 'DELETE' })
      fetchSnapshots()
      fetchTrends()
      if (selectedSnapshotId === id) {
        setSelectedSnapshotId(null)
        setSnapshotEntries([])
        setAmbassadorData([])
      }
    } catch (err) {
      console.error('Failed to delete snapshot', err)
    }
  }

  // Process entries into ambassador-grouped analytics
  const processAmbassadorData = (entries) => {
    if (!entries || entries.length === 0) {
      setAmbassadorData([])
      return
    }

    const ambassadorMap = {}
    const teamToSourceMap = {}

    // Map registered ambassador refIds to full ambassador details
    const validAmbassadorMap = {}
    if (Array.isArray(ambassadorList) && ambassadorList.length > 0) {
      ambassadorList.forEach(a => {
        if (a.refId) {
          validAmbassadorMap[String(a.refId)] = a
        }
      })
    }

    // First pass: Match Excel rows to DB teams by EMAIL only (names can be duplicate)
    // Also verify they came from the campaign (utmCampaign must exist)
    entries.forEach(row => {
      const email = (row.username || '').toLowerCase().trim()
      if (!email) return
      
      const dbMatch = dbTeams.find(t => 
        t.userEmail && t.userEmail.toLowerCase().trim() === email
      )

      if (dbMatch && dbMatch.utmSource && dbMatch.utmCampaign && row.teamId) {
        // We found a match! All members of this teamId will be attributed to this utmSource
        teamToSourceMap[row.teamId] = dbMatch.utmSource
      }
    })

    entries.forEach(row => {
      const role = (row.role || '').toLowerCase();
      // We are not tracking coaches
      if (role.includes('coach')) return;

      // Use the matched utmSource for this team. Fallback to row.ambassador if no DB match.
      const key = (row.teamId && teamToSourceMap[row.teamId]) || row.ambassador
      if (!key) return

      // ONLY show ambassador utm sources (filter out previous_year_participant or non-ambassador sources)
      const isRegisteredAmbassador = validAmbassadorMap[String(key)]
      if (Object.keys(validAmbassadorMap).length > 0 && !isRegisteredAmbassador) {
        return
      }

      const ambName = isRegisteredAmbassador
        ? `${isRegisteredAmbassador.name} (${key})`
        : key

      if (!ambassadorMap[key]) {
        ambassadorMap[key] = {
          name: ambName,
          refId: key,
          accepted: [],
          pending: [],
          canceled: [],
          teamIds: new Set(),
        }
      }

      const entry = {
        email: row.username,
        firstName: row.firstName || '',
        lastName: row.lastName || '',
        role: row.role || '',
        teamName: row.teamName || '',
        teamId: row.teamId || '',
        teamStatus: row.teamStatus || '',
        teamInstName: row.teamInstName || '',
      }

      if (row.teamStatus === 'Accepted') ambassadorMap[key].accepted.push(entry)
      else if (row.teamStatus === 'Pending') ambassadorMap[key].pending.push(entry)
      else if (row.teamStatus === 'Canceled') ambassadorMap[key].canceled.push(entry)

      if (row.teamId) ambassadorMap[key].teamIds.add(row.teamId)
    })

    const result = Object.values(ambassadorMap).map(a => ({
      ...a,
      totalPersons: a.accepted.length + a.pending.length + a.canceled.length,
      totalTeams: a.teamIds.size,
      teamIds: undefined,
    })).sort((a, b) => b.accepted.length - a.accepted.length)

    setAmbassadorData(result)
  }

  // ─── SUMMARY STATS ───
  const totalEntries = snapshotEntries.length
  const totalAccepted = snapshotEntries.filter(r => r.teamStatus === 'Accepted').length
  const totalPending = snapshotEntries.filter(r => r.teamStatus === 'Pending').length
  const totalCanceled = snapshotEntries.filter(r => r.teamStatus === 'Canceled').length
  const uniqueTeams = new Set(snapshotEntries.map(r => r.teamId).filter(Boolean)).size
  const matchedCount = ambassadorData.reduce((sum, a) => sum + a.totalPersons, 0)

  // ─── CHARTS ───
  const teamsBarOption = ambassadorData.length > 0 ? {
    title: { text: 'Teams per Ambassador (Excluding Coaches)', left: 'center', textStyle: { fontSize: 14, color: '#374151' } },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '6%', bottom: '3%', top: '40px', containLabel: true },
    xAxis: { type: 'value' },
    yAxis: {
      type: 'category',
      data: [...ambassadorData].reverse().map(a => a.name),
      axisLabel: { width: 120, overflow: 'truncate', fontSize: 11 }
    },
    series: [{
      name: 'Teams',
      type: 'bar',
      data: [...ambassadorData].reverse().map(a => a.totalTeams),
      itemStyle: { color: '#8b5cf6', borderRadius: [0, 4, 4, 0] },
      label: { show: true, position: 'right', fontSize: 11 }
    }]
  } : null

  const studentsBarOption = ambassadorData.length > 0 ? {
    title: { text: 'Total Students per Ambassador (Excluding Coaches)', left: 'center', textStyle: { fontSize: 14, color: '#374151' } },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '6%', bottom: '3%', top: '40px', containLabel: true },
    xAxis: { type: 'value' },
    yAxis: {
      type: 'category',
      data: [...ambassadorData].reverse().map(a => a.name),
      axisLabel: { width: 120, overflow: 'truncate', fontSize: 11 }
    },
    series: [{
      name: 'Students',
      type: 'bar',
      data: [...ambassadorData].reverse().map(a => a.totalPersons),
      itemStyle: { color: '#3b82f6', borderRadius: [0, 4, 4, 0] },
      label: { show: true, position: 'right', fontSize: 11 }
    }]
  } : null

  // Selected ambassador detail
  const getSelectedTeams = () => {
    if (!selectedAmbassador) return []
    const amb = ambassadorData.find(a => a.name === selectedAmbassador)
    if (!amb) return []
    if (activeTab === 'accepted') return amb.accepted
    if (activeTab === 'pending') return amb.pending
    return amb.canceled
  }

  const selectedAmb = ambassadorData.find(a => a.name === selectedAmbassador)
  const currentTeamList = getSelectedTeams()

  return (
    <div className="p-6 space-y-6 text-gray-900">

      {/* Upload Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-lg border border-gray-200">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard Manager</h1>
          <p className="text-gray-600">Upload ICPC registration Excel to store a snapshot and see analytics.</p>
          {uploadMsg && <p className="text-sm mt-1 font-medium text-blue-600">{uploadMsg}</p>}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer disabled:opacity-50"
          />
          {isUploading && <span className="text-sm text-blue-600">Uploading...</span>}
          <button 
            onClick={handleUpdatePublicLeaderboard}
            disabled={isUpdating}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition shadow-sm disabled:opacity-50"
          >
            {isUpdating ? 'Publishing...' : '🚀 Publish to Public Leaderboard'}
          </button>
        </div>
      </div>

      {/* Snapshots List */}
      {snapshots.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-base font-bold">Past Uploads</h2>
            <p className="text-xs text-gray-400">Select a snapshot to view its leaderboard.</p>
          </div>
          <div className="divide-y divide-gray-100 max-h-48 overflow-auto">
            {snapshots.map(s => (
              <div
                key={s.id}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${selectedSnapshotId === s.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                onClick={() => loadSnapshot(s.id)}
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{s.filename}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(s.uploadedAt).toLocaleString('en-IN')} — {s.totalEntries} entries
                    <span className="ml-2 text-green-600">{s.Accepted || 0} accepted</span>
                    <span className="ml-2 text-yellow-600">{s.Pending || 0} pending</span>
                    <span className="ml-2 text-red-500">{s.Canceled || 0} canceled</span>
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDeleteSnapshot(s.id) }}
                  className="text-xs text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No snapshot selected */}
      {!selectedSnapshotId && snapshots.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <p className="text-lg text-gray-500">No snapshots yet.</p>
          <p className="text-sm text-gray-400 mt-1">Upload an Excel file to get started.</p>
        </div>
      )}

      {/* Snapshot Analytics — shown when a snapshot is selected */}
      {selectedSnapshotId && snapshotEntries.length > 0 && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Total Entries', value: totalEntries, color: 'bg-blue-50 text-blue-700' },
              { label: 'Accepted', value: totalAccepted, color: 'bg-green-50 text-green-700' },
              { label: 'Pending', value: totalPending, color: 'bg-yellow-50 text-yellow-700' },
              { label: 'Canceled', value: totalCanceled, color: 'bg-red-50 text-red-700' },
              { label: 'Unique Teams', value: uniqueTeams, color: 'bg-purple-50 text-purple-700' },
              { label: 'Matched Ambassadors', value: matchedCount, color: 'bg-indigo-50 text-indigo-700' },
            ].map(card => (
              <div key={card.label} className={`rounded-lg p-4 ${card.color}`}>
                <p className="text-xs font-medium uppercase tracking-wide opacity-70">{card.label}</p>
                <p className="text-2xl font-bold mt-1">{card.value}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {teamsBarOption && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                <ReactECharts option={teamsBarOption} style={{ height: Math.max(300, ambassadorData.length * 30) + 'px' }} />
              </div>
            )}
            {studentsBarOption && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                <ReactECharts option={studentsBarOption} style={{ height: Math.max(300, ambassadorData.length * 30) + 'px' }} />
              </div>
            )}
          </div>

          {/* Spacer */}
          <div className="pt-2"></div>

          {/* Ambassador Summary Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-bold">Ambassador Summary</h2>
              <p className="text-sm text-gray-500">Click on any ambassador to see detailed team breakdown below.</p>
            </div>
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ambassador ID / Source</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Accepted</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Pending</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Canceled</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Teams</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {ambassadorData.map((amb, idx) => (
                    <tr
                      key={amb.name}
                      onClick={() => { setSelectedAmbassador(amb.name); setActiveTab('accepted') }}
                      className={`cursor-pointer transition-colors ${selectedAmbassador === amb.name ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                    >
                      <td className="px-4 py-3 text-sm font-semibold text-gray-700">{idx + 1}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{amb.name}</td>
                      <td className="px-4 py-3 text-sm text-center"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">{amb.accepted.length}</span></td>
                      <td className="px-4 py-3 text-sm text-center"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-semibold">{amb.pending.length}</span></td>
                      <td className="px-4 py-3 text-sm text-center"><span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-semibold">{amb.canceled.length}</span></td>
                      <td className="px-4 py-3 text-sm text-center font-semibold">{amb.totalPersons}</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold">{amb.totalTeams}</td>
                    </tr>
                  ))}
                  {ambassadorData.length === 0 && (
                    <tr><td colSpan="7" className="px-4 py-8 text-center text-sm text-gray-400">No ambassador matches found. Ensure DB teams have UTM campaign values and Excel emails match.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selected Ambassador Detail */}
          {selectedAmbassador && selectedAmb && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div>
                  <h2 className="text-lg font-bold">Teams under: {selectedAmbassador}</h2>
                  <p className="text-sm text-gray-500">{selectedAmb.accepted.length} accepted, {selectedAmb.pending.length} pending, {selectedAmb.canceled.length} canceled</p>
                </div>
                <button onClick={() => setSelectedAmbassador(null)} className="text-sm text-gray-500 hover:text-gray-700 underline">Close</button>
              </div>
              <div className="flex border-b">
                {[
                  { key: 'accepted', label: `Accepted (${selectedAmb.accepted.length})` },
                  { key: 'pending', label: `Pending (${selectedAmb.pending.length})` },
                  { key: 'canceled', label: `Canceled (${selectedAmb.canceled.length})` },
                ].map(tab => (
                  <button
                    key={tab.key}
                    className={`px-6 py-3 font-medium text-sm transition-colors ${activeTab === tab.key ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="overflow-auto max-h-[500px]">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Institution</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {currentTeamList.map((person, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-500">{idx + 1}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{person.firstName} {person.lastName}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{person.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{person.role}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{person.teamName}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{person.teamInstName}</td>
                      </tr>
                    ))}
                    {currentTeamList.length === 0 && (
                      <tr><td colSpan="6" className="px-4 py-8 text-center text-sm text-gray-400">No {activeTab} registrations under this ambassador.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
