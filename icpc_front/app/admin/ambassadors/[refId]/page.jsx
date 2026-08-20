'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Filter, Download, X, CheckSquare, Square, Copy, Check, Users, Award, Clock, XCircle, Globe, Search } from 'lucide-react'
import * as XLSX from 'xlsx'

export default function AdminAmbassadorDetailPage() {
  const params = useParams()
  const refId = params.refId

  const [loading, setLoading] = useState(true)
  const [ambassador, setAmbassador] = useState(null)
  const [summary, setSummary] = useState(null)
  const [entries, setEntries] = useState([])
  const [utmRegistrations, setUtmRegistrations] = useState([])
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

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
    { key: 'name', label: 'Student Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'institution', label: 'Institution' },
    { key: 'teamStatus', label: 'Status' },
    { key: 'registeredViaUtm', label: 'Via UTM' },
    { key: 'utmMedium', label: 'UTM Medium' },
    { key: 'utmCampaign', label: 'UTM Campaign' },
    { key: 'createdAt', label: 'Date' },
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

  const handleCopyLink = () => {
    const ambRef = ambassador?.refId || refId
    if (!ambRef) return
    const url = typeof window !== 'undefined'
      ? `${window.location.origin}/?utm_source=${ambRef}&utm_medium=Email_Description&utm_campaign=ICPCAM2026`
      : `/?utm_source=${ambRef}&utm_medium=Email_Description&utm_campaign=ICPCAM2026`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setToastMsg('Referral link copied to clipboard!')
    setTimeout(() => {
      setCopied(false)
      setToastMsg('')
    }, 2500)
  }

  // Determine displayed items based on activeTab
  const getDisplayData = () => {
    if (activeTab === 'utm') {
      return utmRegistrations.map((u, idx) => ({
        id: u.id || idx,
        teamName: u.campus || 'N/A',
        firstName: u.personName || 'N/A',
        lastName: '',
        name: u.personName || 'N/A',
        email: u.userEmail || '',
        role: 'Participant',
        institution: u.campus || 'N/A',
        teamInstName: u.campus || 'N/A',
        teamStatus: u.isVerified ? 'Verified' : 'Registered',
        registeredViaUtm: true,
        utmMedium: u.utmMedium || 'N/A',
        utmCampaign: u.utmCampaign || 'N/A',
        createdAt: u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-IN') : 'N/A',
        isUtmRow: true,
      }))
    }

    return entries
      .filter(e => {
        if (activeTab === 'accepted') return e.teamStatus === 'Accepted'
        if (activeTab === 'pending') return e.teamStatus === 'Pending'
        if (activeTab === 'canceled') return e.teamStatus === 'Canceled'
        return true // 'all' tab
      })
      .map(e => ({
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
    const q = searchQuery.toLowerCase().trim()
    return (
      (e.name && e.name.toLowerCase().includes(q)) ||
      (e.email && e.email.toLowerCase().includes(q)) ||
      (e.teamName && e.teamName.toLowerCase().includes(q)) ||
      (e.teamInstName && e.teamInstName.toLowerCase().includes(q)) ||
      (e.institution && e.institution.toLowerCase().includes(q))
    )
  })

  const tabCounts = {
    all: entries.length,
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
      if (selectedColumns.name) exportItem['Student Name'] = row.name || `${row.firstName || ''} ${row.lastName || ''}`.trim() || 'N/A'
      if (selectedColumns.email) exportItem['Email'] = row.email || 'N/A'
      if (selectedColumns.role) exportItem['Role'] = row.role || 'N/A'
      if (selectedColumns.institution) exportItem['Institution'] = row.teamInstName || row.institution || 'N/A'
      if (selectedColumns.teamStatus) exportItem['Status'] = row.teamStatus || 'N/A'
      if (selectedColumns.registeredViaUtm) exportItem['Via UTM'] = row.registeredViaUtm ? 'Yes' : 'No (Teammate)'
      if (selectedColumns.utmMedium) exportItem['UTM Medium'] = row.utmMedium || 'N/A'
      if (selectedColumns.utmCampaign) exportItem['UTM Campaign'] = row.utmCampaign || 'N/A'
      if (selectedColumns.createdAt) exportItem['Date'] = row.createdAt || 'N/A'

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
        <p className="text-gray-400 text-sm">Loading ambassador details...</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 text-gray-900">
      {/* Back link */}
      <div>
        <Link
          href="/admin/ambassadors"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
        >
          ← Back to Ambassadors
        </Link>
      </div>

      {/* Ambassador Profile Header */}
      <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {ambassador?.name || `Ambassador ${refId}`}
              </h1>
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-200">
                Ref ID: {ambassador?.refId || refId}
              </span>
            </div>
            {ambassador?.email && (
              <p className="text-sm text-gray-600 mt-1">{ambassador.email}</p>
            )}
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded text-xs font-medium transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Link!' : 'Copy Referral URL'}</span>
            </button>
            {ambassador?.createdAt && (
              <div className="text-xs text-gray-400">
                Account created: {new Date(ambassador.createdAt).toLocaleDateString('en-IN')}
              </div>
            )}
          </div>
        </div>

        {toastMsg && (
          <div className="mt-3 p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded">
            {toastMsg}
          </div>
        )}
      </div>

      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            {
              key: 'totalTeams',
              label: 'Total Teams',
              value: summary.totalTeams,
              bg: 'bg-indigo-50/50 text-indigo-900 border-indigo-100 hover:border-indigo-300',
              icon: Users,
              tab: 'all',
            },
            {
              key: 'totalStudents',
              label: 'Total Students',
              value: summary.totalStudents,
              bg: 'bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300',
              icon: Users,
              tab: 'all',
            },
            {
              key: 'accepted',
              label: 'Accepted',
              value: summary.accepted,
              bg: 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:border-emerald-300',
              icon: Award,
              tab: 'accepted',
            },
            {
              key: 'pending',
              label: 'Pending',
              value: summary.pending,
              bg: 'bg-amber-50 text-amber-900 border-amber-200 hover:border-amber-300',
              icon: Clock,
              tab: 'pending',
            },
            {
              key: 'canceled',
              label: 'Cancelled',
              value: summary.canceled,
              bg: 'bg-red-50 text-red-900 border-red-200 hover:border-red-300',
              icon: XCircle,
              tab: 'canceled',
            },
            {
              key: 'utmRegistered',
              label: 'Registered via UTM',
              value: summary.utmRegistered,
              bg: 'bg-blue-50 text-blue-900 border-blue-200 hover:border-blue-300',
              icon: Globe,
              tab: 'utm',
            },
          ].map(card => {
            const Icon = card.icon
            const isSelected = activeTab === card.tab
            return (
              <div
                key={card.key}
                onClick={() => card.tab && setActiveTab(card.tab)}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${card.bg} ${
                  isSelected ? 'ring-2 ring-gray-900 shadow-sm' : 'hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between opacity-75">
                  <p className="text-xs font-semibold uppercase tracking-wider">{card.label}</p>
                  {Icon && <Icon className="w-4 h-4" />}
                </div>
                <p className="text-2xl font-bold mt-2">{card.value}</p>
              </div>
            )
          })}
        </div>
      )}

      {/* Tab bar + Search + Filter + Export */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row border-b border-gray-200 justify-between items-stretch sm:items-center">
          <div className="flex overflow-x-auto">
            {[
              { key: 'all', label: `All Students (${tabCounts.all})` },
              { key: 'accepted', label: `Accepted (${tabCounts.accepted})` },
              { key: 'pending', label: `Pending (${tabCounts.pending})` },
              { key: 'canceled', label: `Cancelled (${tabCounts.canceled})` },
              { key: 'utm', label: `UTM Registrations (${tabCounts.utm})` },
            ].map(tab => (
              <button
                key={tab.key}
                className={`px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-b-2 border-gray-900 text-gray-900 bg-gray-50/80 font-semibold'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 p-3 sm:pr-4 border-t sm:border-t-0 border-gray-100 flex-wrap">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search students, teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 border border-gray-300 rounded text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors w-44 sm:w-52"
              />
            </div>

            {/* Column Selector Modal Trigger */}
            <button
              onClick={() => setShowColumnModal(true)}
              title="Select Columns to Export"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 text-xs sm:text-sm font-medium transition-colors"
            >
              <Filter className="w-3.5 h-3.5 text-gray-600" />
              <span>Columns</span>
            </button>

            {/* Export Button */}
            <button
              onClick={handleExport}
              title="Export Current View to Excel"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs sm:text-sm font-medium transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
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
                        availableColumns.forEach(c => { allObj[c.key] = true })
                        setSelectedColumns(allObj)
                      }}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Select All
                    </button>
                    <button
                      onClick={() => {
                        const noneObj = {}
                        availableColumns.forEach(c => { noneObj[c.key] = false })
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

        {/* Data Table */}
        <div className="overflow-auto max-h-[600px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                {selectedColumns.teamName && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team / Campus</th>}
                {selectedColumns.name && <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>}
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
                <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-4 py-3 text-xs text-gray-400 font-mono">{idx + 1}</td>
                  {selectedColumns.teamName && (
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      {entry.teamName || 'N/A'}
                    </td>
                  )}
                  {selectedColumns.name && (
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                      {entry.name || `${entry.firstName || ''} ${entry.lastName || ''}`.trim() || 'N/A'}
                    </td>
                  )}
                  {selectedColumns.email && (
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {entry.email || 'N/A'}
                    </td>
                  )}
                  {selectedColumns.role && (
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {entry.role || 'Participant'}
                    </td>
                  )}
                  {selectedColumns.institution && (
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {entry.teamInstName || entry.institution || 'N/A'}
                    </td>
                  )}
                  {selectedColumns.teamStatus && (
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                        entry.teamStatus === 'Accepted' || entry.teamStatus === 'Verified'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : entry.teamStatus === 'Pending' || entry.teamStatus === 'Registered'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {entry.teamStatus}
                      </span>
                    </td>
                  )}
                  {selectedColumns.registeredViaUtm && (
                    <td className="px-4 py-3 text-xs">
                      {entry.registeredViaUtm ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500">
                          No (Teammate)
                        </span>
                      )}
                    </td>
                  )}
                  {selectedColumns.utmMedium && <td className="px-4 py-3 text-xs text-gray-500">{entry.utmMedium || 'N/A'}</td>}
                  {selectedColumns.utmCampaign && <td className="px-4 py-3 text-xs text-gray-500">{entry.utmCampaign || 'N/A'}</td>}
                  {selectedColumns.createdAt && <td className="px-4 py-3 text-xs text-gray-400">{entry.createdAt || 'N/A'}</td>}
                </tr>
              ))}
              {filteredEntries.length === 0 && (
                <tr>
                  <td colSpan="11" className="px-4 py-12 text-center text-sm text-gray-400">
                    No {activeTab === 'all' ? '' : activeTab} registrations found for this ambassador.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
          <span>Showing {filteredEntries.length} of {allDisplayItems.length} records in this view</span>
          <span className="text-gray-400">Ambassador ID: {ambassador?.refId || refId}</span>
        </div>
      </div>
    </div>
  )
}
