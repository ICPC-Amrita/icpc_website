'use client'

import React, { useState, useEffect, useMemo } from 'react'

export default function AdminLogsPage() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [actionLoading, setActionLoading] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('ALL') // 'ALL' | 'ADMIN' | 'AMBASSADOR'
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false)

  const fetchSessions = async () => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch('/api/admin/sessions')
      const data = await res.json()
      if (res.ok) {
        setSessions(data.sessions || [])
      } else {
        setError(data.error || 'Failed to load session logs')
      }
    } catch (err) {
      setError('Network error while loading session logs')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSessions()
  }, [])

  const handleSignOutSession = async (sessionId, type, isCurrent) => {
    if (isCurrent) {
      if (!confirm('Are you sure you want to sign out of your current session? You will be redirected to the login page.')) {
        return
      }
    }

    try {
      setActionLoading(sessionId)
      const res = await fetch('/api/admin/sessions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, type })
      })
      const data = await res.json()

      if (res.ok) {
        if (data.isCurrent) {
          window.location.href = '/admin'
        } else {
          setSuccessMessage('Session signed out successfully')
          setTimeout(() => setSuccessMessage(''), 4000)
          fetchSessions()
        }
      } else {
        setError(data.error || 'Failed to terminate session')
      }
    } catch (err) {
      setError('Network error while terminating session')
    } finally {
      setActionLoading('')
    }
  }


  const formatShortDate = (dateStr) => {
    if (!dateStr) return '-'
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  }

  const formatTime = (dateStr) => {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  const filteredSessions = useMemo(() => {
    return sessions.filter((s) => {
      if (roleFilter === 'ADMIN' && s.type !== 'admin') return false
      if (roleFilter === 'AMBASSADOR' && s.type !== 'ambassador') return false

      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      return (
        s.user?.name?.toLowerCase().includes(q) ||
        s.user?.email?.toLowerCase().includes(q) ||
        s.user?.refId?.toLowerCase().includes(q) ||
        s.ip?.toLowerCase().includes(q) ||
        s.city?.toLowerCase().includes(q) ||
        s.region?.toLowerCase().includes(q) ||
        s.os?.toLowerCase().includes(q) ||
        s.browser?.toLowerCase().includes(q) ||
        s.roleLabel?.toLowerCase().includes(q)
      )
    })
  }, [sessions, roleFilter, searchQuery])

  return (
    <div className="min-h-screen bg-white p-6 sm:p-10 font-sans text-gray-900 font-normal">
      <div className="max-w-7xl mx-auto space-y-4">

        {/* Floating Pop-up Toast (Plain White, No Distracting Background Colors) */}
        {(successMessage || error) && (
          <div className="fixed bottom-6 right-6 z-50 bg-white border border-gray-300 text-gray-900 p-4 shadow-lg rounded-none text-sm font-normal flex items-center justify-between gap-4 max-w-md transition-all">
            <span>{successMessage || error}</span>
            <button
              onClick={() => { setSuccessMessage(''); setError(''); }}
              className="text-gray-400 hover:text-gray-900 text-xs font-normal"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main Table Box */}
        <div className="bg-white border border-gray-200 rounded-none">
          
          {/* Header Controls */}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100">
            <h1 className="text-lg sm:text-xl text-gray-900 font-normal">
              Session Logs & Activity Summary
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-52 sm:w-64 px-3 py-2 text-sm bg-white border border-gray-200 rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 font-normal"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                  className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-none hover:bg-gray-50 transition-colors font-normal"
                >
                  Filter {roleFilter !== 'ALL' ? `(${roleFilter})` : ''} ▾
                </button>

                {filterDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-none shadow-sm z-30 py-1 text-sm font-normal">
                    <button
                      onClick={() => { setRoleFilter('ALL'); setFilterDropdownOpen(false) }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${roleFilter === 'ALL' ? 'text-gray-900' : 'text-gray-700'} font-normal`}
                    >
                      All Users
                    </button>
                    <button
                      onClick={() => { setRoleFilter('ADMIN'); setFilterDropdownOpen(false) }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${roleFilter === 'ADMIN' ? 'text-gray-900' : 'text-gray-700'} font-normal`}
                    >
                      Admins
                    </button>
                    <button
                      onClick={() => { setRoleFilter('AMBASSADOR'); setFilterDropdownOpen(false) }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${roleFilter === 'AMBASSADOR' ? 'text-gray-900' : 'text-gray-700'} font-normal`}
                    >
                      Ambassadors
                    </button>
                  </div>
                )}
              </div>

              {/* Refresh Action Button */}
              <button
                onClick={fetchSessions}
                disabled={loading}
                className="px-5 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-none transition-colors disabled:opacity-50 font-normal"
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>

          {/* Table with Normal Regular Font Throughout */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white font-normal">
              <thead>
                <tr className="border-b border-gray-100 text-sm text-gray-500 font-normal">
                  <th className="py-4 px-6 font-normal">Session ID</th>
                  <th className="py-4 px-6 font-normal">User Name</th>
                  <th className="py-4 px-6 font-normal">Role</th>
                  <th className="py-4 px-6 font-normal">IP Address</th>
                  <th className="py-4 px-6 font-normal">Location</th>
                  <th className="py-4 px-6 font-normal">OS & Browser</th>
                  <th className="py-4 px-6 font-normal">Logged In</th>
                  <th className="py-4 px-6 font-normal">Status</th>
                  <th className="py-4 px-6 font-normal text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-800 font-normal">
                {loading && sessions.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-gray-500 text-sm font-normal">
                      Loading session records...
                    </td>
                  </tr>
                ) : filteredSessions.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-gray-500 text-sm font-normal">
                      No matching sessions found.
                    </td>
                  </tr>
                ) : (
                  filteredSessions.map((session, index) => {
                    const shortId = `#S-${String(index + 1).padStart(4, '0')}`

                    return (
                      <tr key={session.id} className="hover:bg-gray-50/50 transition-colors font-normal">
                        {/* Session ID */}
                        <td className="py-4 px-6 text-gray-900 font-normal">
                          {shortId}
                        </td>

                        {/* User Name */}
                        <td className="py-4 px-6 text-gray-900 whitespace-nowrap font-normal">
                          {session.user?.name || session.user?.email || 'User'}
                        </td>

                        {/* Role */}
                        <td className="py-4 px-6 text-gray-700 whitespace-nowrap font-normal">
                          {session.roleLabel}
                          {session.user?.refId && (
                            <span className="text-gray-500 ml-1 text-sm font-normal">({session.user.refId})</span>
                          )}
                        </td>

                        {/* IP Address */}
                        <td className="py-4 px-6 text-gray-700 whitespace-nowrap font-normal">
                          {session.ip}
                        </td>

                        {/* Location */}
                        <td className="py-4 px-6 text-gray-700 whitespace-nowrap font-normal">
                          {session.city ? `${session.city}, ${session.region}` : 'India'}
                        </td>

                        {/* OS & Browser */}
                        <td className="py-4 px-6 text-gray-700 whitespace-nowrap font-normal">
                          {session.os} · {session.browser}
                        </td>

                        {/* Logged In Date */}
                        <td className="py-4 px-6 text-gray-700 whitespace-nowrap font-normal">
                          {formatShortDate(session.createdAt)}
                          <span className="text-gray-500 ml-1.5 text-sm font-normal">{formatTime(session.createdAt)}</span>
                        </td>

                        {/* Status */}
                        <td className="py-4 px-6 whitespace-nowrap font-normal">
                          {session.isCurrent ? (
                            <span className="text-emerald-600 flex items-center gap-1.5 font-normal">
                              <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
                              Active (Current)
                            </span>
                          ) : (
                            <span className="text-emerald-600 flex items-center gap-1.5 font-normal">
                              <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
                              Active
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6 text-right whitespace-nowrap font-normal">
                          {session.isCurrent ? (
                            <span className="text-gray-400 text-sm select-none font-normal">
                              This Device
                            </span>
                          ) : (
                            <button
                              onClick={() => handleSignOutSession(session.id, session.type, false)}
                              disabled={actionLoading === session.id}
                              className="text-sm text-red-600 hover:text-red-800 hover:underline transition-colors disabled:opacity-50 font-normal"
                            >
                              {actionLoading === session.id ? 'Signing out...' : 'Sign out'}
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 border-t border-gray-100 text-sm text-gray-500 flex items-center justify-between font-normal">
            <span>Showing {filteredSessions.length} of {sessions.length} sessions</span>
            <span>All sessions active</span>
          </div>

        </div>

      </div>
    </div>
  )
}
