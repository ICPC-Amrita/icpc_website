'use client'

import React, { useState, useEffect } from 'react'

export default function AmbassadorDashboard() {
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState(null)
  const [entries, setEntries] = useState([])
  const [activeTab, setActiveTab] = useState('accepted')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchDashboard()
  }, [])

  const fetchDashboard = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/ambassador/dashboard')
      const data = await res.json()
      if (res.ok) {
        setSummary(data.summary)
        setEntries(data.entries)
      }
    } catch (err) {
      console.error('Failed to fetch dashboard:', err)
    } finally {
      setLoading(false)
    }
  }

  const filteredEntries = entries.filter(e => {
    const matchTab =
      activeTab === 'accepted' ? e.teamStatus === 'Accepted' :
      activeTab === 'pending' ? e.teamStatus === 'Pending' :
      e.teamStatus === 'Canceled'

    const matchSearch =
      !searchQuery ||
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.teamName.toLowerCase().includes(searchQuery.toLowerCase())

    return matchTab && matchSearch
  })

  const tabCounts = {
    accepted: entries.filter(e => e.teamStatus === 'Accepted').length,
    pending: entries.filter(e => e.teamStatus === 'Pending').length,
    canceled: entries.filter(e => e.teamStatus === 'Canceled').length,
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-400 text-sm">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 text-gray-900">
      {/* Page title */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Your team registration overview</p>
      </div>

      {/* Summary cards */}
      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Total Teams', value: summary.totalTeams, bg: 'bg-gray-50' },
            { label: 'Total Students', value: summary.totalStudents, bg: 'bg-gray-50' },
            { label: 'Accepted', value: summary.accepted, bg: 'bg-emerald-50 text-emerald-800' },
            { label: 'Pending', value: summary.pending, bg: 'bg-amber-50 text-amber-800' },
            { label: 'Cancelled', value: summary.canceled, bg: 'bg-red-50 text-red-800' },
            { label: 'Registered via UTM', value: summary.utmRegistered, bg: 'bg-blue-50 text-blue-800' },
          ].map(card => (
            <div key={card.label} className={`p-4 border border-gray-200 ${card.bg}`}>
              <p className="text-xs font-medium uppercase tracking-wide opacity-70">{card.label}</p>
              <p className="text-2xl font-bold mt-1">{card.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab bar + Search */}
      <div className="bg-white border border-gray-200">
        <div className="flex border-b border-gray-200">
          {[
            { key: 'accepted', label: `Accepted (${tabCounts.accepted})` },
            { key: 'pending', label: `Pending (${tabCounts.pending})` },
            { key: 'canceled', label: `Cancelled (${tabCounts.canceled})` },
          ].map(tab => (
            <button
              key={tab.key}
              className={`px-5 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'border-b-2 border-gray-900 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}

          <div className="ml-auto flex items-center pr-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors w-48"
            />
          </div>
        </div>

        {/* Data table */}
        <div className="overflow-auto max-h-[600px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Institution</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Via UTM</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredEntries.map((entry, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-500">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{entry.teamName}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{entry.firstName} {entry.lastName}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{entry.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{entry.role}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{entry.teamInstName}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-0.5 text-xs font-medium ${
                      entry.teamStatus === 'Accepted' ? 'bg-emerald-50 text-emerald-700' :
                      entry.teamStatus === 'Pending' ? 'bg-amber-50 text-amber-700' :
                      'bg-red-50 text-red-700'
                    }`}>
                      {entry.teamStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={entry.registeredViaUtm ? 'text-emerald-700 font-medium' : 'text-gray-400'}>
                      {entry.registeredViaUtm ? 'Yes' : 'No'}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredEntries.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-4 py-12 text-center text-sm text-gray-400">
                    No {activeTab} registrations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-500">
          Showing {filteredEntries.length} of {entries.length} total entries
        </div>
      </div>
    </div>
  )
}
