'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Filter, Download, X, CheckSquare, Square } from 'lucide-react'
import * as XLSX from 'xlsx'

export default function AdminAmbassadorDetailPage() {
  const params = useParams()
  const refId = params.refId

  const [loading, setLoading] = useState(true)
  const [ambassador, setAmbassador] = useState(null)
  const [summary, setSummary] = useState(null)
  const [entries, setEntries] = useState([])
  const [utmRegistrations, setUtmRegistrations] = useState([])
  const [activeTab, setActiveTab] = useState('accepted')
  const [searchQuery, setSearchQuery] = useState('')

  // Column Selector & Export state
  const [showColumnModal, setShowColumnModal] = useState(false)
  const [selectedColumns, setSelectedColumns] = useState({
    teamName: true,
    name: true,
    email: true,
    role: true,
    institution: true,
    teamStatus: true,
    registeredViaUtm: true,
    utmMedium: true,
    utmCampaign: true,
    createdAt: true,
  })

  const availableColumns = [
    { key: 'teamName', label: 'Team Name' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'institution', label: 'Institution' },
    { key: 'teamStatus', label: 'Payment / Status' },
    { key: 'registeredViaUtm', label: 'Via UTM' },
    { key: 'utmMedium', label: 'UTM Medium' },
    { key: 'utmCampaign', label: 'UTM Campaign' },
    { key: 'createdAt', label: 'Registration Date' },
  ]

  useEffect(() => {
    fetchData()
  }, [refId])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/ambassadors/${refId}`)
      const data = await res.json()
      if (res.ok) {
        setAmbassador(data.ambassador)
        setSummary(data.summary)
        setEntries(data.entries || [])
        setUtmRegistrations(data.utmRegistrations || [])
      }
    } catch (err) {
      console.error('Failed to fetch ambassador detail:', err)
    } finally {
      setLoading(false)
    }
  }

  // Determine displayed items based on activeTab
  const getDisplayData = () => {
    if (activeTab === 'utm') {
      // Map UTM DB registrations into table format
      return utmRegistrations.map((u, idx) => ({
        id: u.id || idx,
        teamName: u.campus || 'N/A',
        firstName: u.personName || 'N/A',
        lastName: '',
        name: u.personName || 'N/A',
        email: u.userEmail || '',
        role: 'Participant',
        teamInstName: u.campus || '',
        teamStatus: u.isVerified ? 'Verified' : 'Registered',
        registeredViaUtm: true,
        utmMedium: u.utmMedium || 'N/A',
        utmCampaign: u.utmCampaign || 'N/A',
        createdAt: u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-IN') : 'N/A',
        isUtmRow: true,
      }))
    }

    // Filter snapshot entries
    return entries.filter(e => {
      if (activeTab === 'accepted') return e.teamStatus === 'Accepted'
      if (activeTab === 'pending') return e.teamStatus === 'Pending'
      if (activeTab === 'canceled') return e.teamStatus === 'Canceled'
      return true
    }).map(e => ({
      ...e,
      name: `${e.firstName || ''} ${e.lastName || ''}`.trim() || 'N/A',
      institution: e.teamInstName || 'N/A',
      utmMedium: 'N/A',
      utmCampaign: 'N/A',
      createdAt: 'Snapshot',
    }))
  }

  const allDisplayItems = getDisplayData()

  const filteredEntries = allDisplayItems.filter(e => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return (
      (e.name && e.name.toLowerCase().includes(q)) ||
      (e.email && e.email.toLowerCase().includes(q)) ||
      (e.teamName && e.teamName.toLowerCase().includes(q)) ||
      (e.teamInstName && e.teamInstName.toLowerCase().includes(q))
    )
  })

  const tabCounts = {
    accepted: entries.filter(e => e.teamStatus === 'Accepted').length,
    pending: entries.filter(e => e.teamStatus === 'Pending').length,
    canceled: entries.filter(e => e.teamStatus === 'Canceled').length,
    utm: utmRegistrations.length,
  }

  const toggleColumn = (key) => {
    setSelectedColumns(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleExport = () => {
    if (filteredEntries.length === 0) {
      alert('No records available to export.')
      return
    }

    const exportRows = filteredEntries.map((row, idx) => {
      const exportItem = {}
      exportItem['#'] = idx + 1

      if (selectedColumns.teamName) exportItem['Team Name'] = row.teamName || 'N/A'
      if (selectedColumns.name) exportItem['Name'] = row.name || `${row.firstName || ''} ${row.lastName || ''}`.trim() || 'N/A'
      if (selectedColumns.email) exportItem['Email'] = row.email || 'N/A'
      if (selectedColumns.role) exportItem['Role'] = row.role || 'N/A'
      if (selectedColumns.institution) exportItem['Institution'] = row.teamInstName || row.institution || 'N/A'
      if (selectedColumns.teamStatus) exportItem['Payment / Status'] = row.teamStatus || 'N/A'
      if (selectedColumns.registeredViaUtm) exportItem['Via UTM'] = row.registeredViaUtm ? 'Yes' : 'No'
      if (selectedColumns.utmMedium) exportItem['UTM Medium'] = row.utmMedium || 'N/A'
      if (selectedColumns.utmCampaign) exportItem['UTM Campaign'] = row.utmCampaign || 'N/A'
      if (selectedColumns.createdAt) exportItem['Registration Date'] = row.createdAt || 'N/A'

      return exportItem
    })

    const worksheet = XLSX.utils.json_to_sheet(exportRows)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Ambassador_Data')
    XLSX.writeFile(workbook, `Ambassador_${refId}_${activeTab}_export.xlsx`)
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 text-gray-900">
      {/* Back link + Header */}
      <div>
        <Link
          href="/admin/ambassadors"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Back to Ambassadors
        </Link>
      </div>

      <div className="bg-white border border-gray-200 p-5 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {ambassador?.name || `Ambassador ${refId}`}
            </h1>
            <p className="text-sm text-gray-500 mt-1">Ref ID: {refId}</p>
            {ambassador?.email && (
              <p className="text-sm text-gray-500">{ambassador.email}</p>
            )}
          </div>
          {ambassador?.createdAt && (
            <div className="text-xs text-gray-400">
              Account created: {new Date(ambassador.createdAt).toLocaleDateString('en-IN')}
            </div>
          )}
        </div>
      </div>

      {/* Summary cards */}
      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { key: 'totalTeams', label: 'Total Teams', value: summary.totalTeams, bg: 'bg-gray-50' },
            { key: 'totalStudents', label: 'Total Students', value: summary.totalStudents, bg: 'bg-gray-50' },
            { key: 'accepted', label: 'Accepted', value: summary.accepted, bg: 'bg-emerald-50 text-emerald-800', tab: 'accepted' },
            { key: 'pending', label: 'Pending', value: summary.pending, bg: 'bg-amber-50 text-amber-800', tab: 'pending' },
            { key: 'canceled', label: 'Cancelled', value: summary.canceled, bg: 'bg-red-50 text-red-800', tab: 'canceled' },
            { key: 'utmRegistered', label: 'Registered via UTM', value: summary.utmRegistered, bg: 'bg-blue-50 text-blue-800 cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all', tab: 'utm' },
          ].map(card => (
            <div
              key={card.label}
              className={`p-4 border border-gray-200 rounded-md ${card.bg}`}
              onClick={() => card.tab && setActiveTab(card.tab)}
            >
              <p className="text-xs font-medium uppercase tracking-wide opacity-70">{card.label}</p>
              <p className="text-2xl font-bold mt-1">{card.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab bar + Search + Filter + Export */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row border-b border-gray-200 justify-between items-stretch sm:items-center">
          <div className="flex overflow-x-auto">
            {[
              { key: 'accepted', label: `Accepted (${tabCounts.accepted})` },
              { key: 'pending', label: `Pending (${tabCounts.pending})` },
              { key: 'canceled', label: `Cancelled (${tabCounts.canceled})` },
              { key: 'utm', label: `UTM Registrations (${tabCounts.utm})` },
            ].map(tab => (
              <button
                key={tab.key}
                className={`px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-b-2 border-gray-900 text-gray-900 bg-gray-50/50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 p-3 sm:pr-4 border-t sm:border-t-0 border-gray-100 flex-wrap">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors w-40 sm:w-48"
            />

            {/* Filter Icon for selecting export columns */}
            <button
              onClick={() => setShowColumnModal(true)}
              title="Select Columns to Export"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors"
            >
              <Filter className="w-4 h-4 text-gray-600" />
              <span>Columns</span>
            </button>

            {/* Export Button */}
            <button
              onClick={handleExport}
              title="Export Current List to Excel"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Column Selection Modal */}
        {showColumnModal && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md border border-gray-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-blue-600" />
                  Select Columns to Export
                </h3>
                <button
                  onClick={() => setShowColumnModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 space-y-2 max-h-[60vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Available Fields</span>
                  <div className="space-x-3 text-xs">
                    <button
                      onClick={() => {
                        const allObj = {}
                        availableColumns.forEach(c => allObj[c.key] = true)
                        setSelectedColumns(allObj)
                      }}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Select All
                    </button>
                    <button
                      onClick={() => {
                        const noneObj = {}
                        availableColumns.forEach(c => noneObj[c.key] = false)
                        setSelectedColumns(noneObj)
                      }}
                      className="text-gray-500 hover:underline font-medium"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {availableColumns.map(col => (
                    <label
                      key={col.key}
                      onClick={() => toggleColumn(col.key)}
                      className="flex items-center gap-3 p-2.5 rounded hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all select-none"
                    >
                      {selectedColumns[col.key] ? (
                        <CheckSquare className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-300" />
                      )}
                      <span className="text-sm text-gray-700 font-medium">{col.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 flex justify-end gap-2">
                <button
                  onClick={() => setShowColumnModal(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium"
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    setShowColumnModal(false)
                    handleExport()
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded shadow-sm"
                >
                  Export Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data table */}
        <div className="overflow-auto max-h-[600px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                {selectedColumns.teamName && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team Name</th>}
                {selectedColumns.name && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>}
                {selectedColumns.email && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>}
                {selectedColumns.role && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>}
                {selectedColumns.institution && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Institution</th>}
                {selectedColumns.teamStatus && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>}
                {selectedColumns.registeredViaUtm && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Via UTM</th>}
                {selectedColumns.utmMedium && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">UTM Medium</th>}
                {selectedColumns.utmCampaign && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">UTM Campaign</th>}
                {selectedColumns.createdAt && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredEntries.map((entry, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-500">{idx + 1}</td>
                  {selectedColumns.teamName && <td className="px-4 py-3 text-sm font-medium text-gray-900">{entry.teamName}</td>}
                  {selectedColumns.name && <td className="px-4 py-3 text-sm text-gray-900">{entry.name || `${entry.firstName || ''} ${entry.lastName || ''}`.trim()}</td>}
                  {selectedColumns.email && <td className="px-4 py-3 text-sm text-gray-600">{entry.email}</td>}
                  {selectedColumns.role && <td className="px-4 py-3 text-sm text-gray-600">{entry.role}</td>}
                  {selectedColumns.institution && <td className="px-4 py-3 text-sm text-gray-500">{entry.teamInstName || entry.institution}</td>}
                  {selectedColumns.teamStatus && (
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                        entry.teamStatus === 'Accepted' || entry.teamStatus === 'Verified' ? 'bg-emerald-50 text-emerald-700' :
                        entry.teamStatus === 'Pending' || entry.teamStatus === 'Registered' ? 'bg-amber-50 text-amber-700' :
                        'bg-red-50 text-red-700'
                      }`}>
                        {entry.teamStatus}
                      </span>
                    </td>
                  )}
                  {selectedColumns.registeredViaUtm && (
                    <td className="px-4 py-3 text-sm">
                      <span className={entry.registeredViaUtm ? 'text-emerald-700 font-medium' : 'text-gray-400'}>
                        {entry.registeredViaUtm ? 'Yes' : 'No'}
                      </span>
                    </td>
                  )}
                  {selectedColumns.utmMedium && <td className="px-4 py-3 text-sm text-gray-500">{entry.utmMedium || 'N/A'}</td>}
                  {selectedColumns.utmCampaign && <td className="px-4 py-3 text-sm text-gray-500">{entry.utmCampaign || 'N/A'}</td>}
                  {selectedColumns.createdAt && <td className="px-4 py-3 text-sm text-gray-400">{entry.createdAt || 'N/A'}</td>}
                </tr>
              ))}
              {filteredEntries.length === 0 && (
                <tr>
                  <td colSpan="11" className="px-4 py-12 text-center text-sm text-gray-400">
                    No {activeTab} registrations found for this ambassador.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-500">
          Showing {filteredEntries.length} of {allDisplayItems.length} total {activeTab} entries
        </div>
      </div>
    </div>
  )
}
