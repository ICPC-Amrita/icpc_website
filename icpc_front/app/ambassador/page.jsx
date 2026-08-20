'use client'

import React, { useState, useEffect } from 'react'
import { Users, Award, Clock, XCircle, Globe, Search } from 'lucide-react'

export default function AmbassadorDashboard() {
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState(null)
  const [entries, setEntries] = useState([])
  const [utmRegistrations, setUtmRegistrations] = useState([])
  const [activeTab, setActiveTab] = useState('all')
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
        setEntries(data.entries || [])
        setUtmRegistrations(data.utmRegistrations || [])
      }
    } catch (err) {
      console.error('Failed to fetch dashboard:', err)
    } finally {
      setLoading(false)
    }
  }

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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Your referred team registrations and student details</p>
      </div>

      {/* Summary cards */}
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

      {/* Tab bar + Search */}
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

          <div className="flex items-center p-3 sm:pr-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search students, teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 border border-gray-300 rounded text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors w-48 sm:w-56"
              />
            </div>
          </div>
        </div>

        {/* Data table */}
        <div className="overflow-auto max-h-[600px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team / Campus</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Institution</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Via UTM</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredEntries.map((entry, idx) => (
                <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-4 py-3 text-xs text-gray-400 font-mono">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">{entry.teamName || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">{entry.name || `${entry.firstName || ''} ${entry.lastName || ''}`.trim() || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{entry.email || 'N/A'}</td>
                  <td className="px-4 py-3 text-xs text-gray-500">{entry.role || 'Participant'}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{entry.teamInstName || entry.institution || 'N/A'}</td>
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
                </tr>
              ))}
              {filteredEntries.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-4 py-12 text-center text-sm text-gray-400">
                    No {activeTab === 'all' ? '' : activeTab} registrations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-500">
          Showing {filteredEntries.length} of {allDisplayItems.length} records in this view
        </div>
      </div>
    </div>
  )
}
