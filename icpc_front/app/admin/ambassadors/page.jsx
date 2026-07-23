'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Filter } from 'lucide-react'

export default function AdminAmbassadorsPage() {
  const [ambassadors, setAmbassadors] = useState([])
  const [totalSource, setTotalSource] = useState(0)
  const [totalCreated, setTotalCreated] = useState(0)
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [creatingRefId, setCreatingRefId] = useState(null)
  const [message, setMessage] = useState('')

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [accountFilter, setAccountFilter] = useState('all')

  useEffect(() => {
    fetchAmbassadors()
  }, [])

  const fetchAmbassadors = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/ambassadors')
      const data = await res.json()
      if (res.ok) {
        setAmbassadors(data.ambassadors)
        setTotalSource(data.totalSource)
        setTotalCreated(data.totalCreated)
      }
    } catch (err) {
      console.error('Failed to fetch ambassadors:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateAccount = async (refId) => {
    setCreatingRefId(refId)
    setMessage('')
    try {
      const res = await fetch('/api/admin/ambassadors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refIds: [refId] }),
      })
      const data = await res.json()
      if (res.ok && data.created.length > 0) {
        setMessage(`Account created for ${data.created[0].name} — Password: ${data.created[0].password}`)
        fetchAmbassadors()
      } else if (data.skipped?.length > 0) {
        setMessage(`Skipped: ${data.skipped[0].reason}`)
      }
    } catch (err) {
      setMessage('Error creating account')
    } finally {
      setCreatingRefId(null)
    }
  }

  const handleCreateAll = async () => {
    setCreating(true)
    setMessage('')
    try {
      const res = await fetch('/api/admin/ambassadors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refIds: 'all' }),
      })
      const data = await res.json()
      if (res.ok) {
        const msg = `Created ${data.created.length} accounts. Skipped ${data.skipped.length}.`
        setMessage(msg)
        fetchAmbassadors()
      }
    } catch (err) {
      setMessage('Error creating accounts')
    } finally {
      setCreating(false)
    }
  }

  const handleDeleteAccount = async (refId, name) => {
    if (!confirm(`Delete the account for ${name} (Ref ${refId})? This cannot be undone.`)) return
    try {
      const res = await fetch('/api/admin/ambassadors', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refId }),
      })
      if (res.ok) {
        setMessage(`Deleted account for ${name}`)
        fetchAmbassadors()
      }
    } catch (err) {
      setMessage('Error deleting account')
    }
  }

  const handleExport = async () => {
    try {
      const res = await fetch('/api/admin/ambassadors/export')
      if (!res.ok) throw new Error('Export failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Ambassador_Credentials.xlsx'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      setMessage('Export failed')
    }
  }

  const filteredAmbassadors = ambassadors.filter(amb => {
    const q = searchQuery.toLowerCase().trim()
    const matchSearch = !q || 
      amb.name.toLowerCase().includes(q) ||
      amb.email.toLowerCase().includes(q) ||
      String(amb.refId).toLowerCase().includes(q)

    const matchAccount = 
      accountFilter === 'all' ? true :
      accountFilter === 'created' ? amb.accountCreated :
      !amb.accountCreated

    return matchSearch && matchAccount
  })

  if (loading) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-400 text-sm">Loading ambassadors...</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 text-gray-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-lg border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ambassador Accounts</h1>
          <p className="text-sm text-gray-500 mt-1">
            {totalCreated} of {totalSource} accounts created
          </p>
          {message && (
            <p className="text-sm mt-2 font-medium text-blue-600">{message}</p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleCreateAll}
            disabled={creating}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-colors rounded"
          >
            {creating ? 'Creating...' : 'Create All Accounts'}
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors rounded"
          >
            Export Credentials (.xlsx)
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
        <div className="relative flex-1 max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name, ref ID, email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 border border-gray-300 rounded text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-gray-900"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={accountFilter}
            onChange={(e) => setAccountFilter(e.target.value)}
            className="py-1.5 px-3 border border-gray-300 rounded text-xs sm:text-sm text-gray-700 focus:outline-none focus:border-gray-900 bg-white"
          >
            <option value="all">All Accounts ({ambassadors.length})</option>
            <option value="created">Created Only ({ambassadors.filter(a => a.accountCreated).length})</option>
            <option value="not_created">Not Created ({ambassadors.filter(a => !a.accountCreated).length})</option>
          </select>
        </div>
      </div>

      {/* Ambassador Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ref ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Password</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredAmbassadors.map((amb) => (
                <tr key={amb.refId} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-gray-700">{amb.refId}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{amb.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{amb.email}</td>
                  <td className="px-4 py-3 text-sm">
                    {amb.accountCreated ? (
                      <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded text-xs">Created</span>
                    ) : (
                      <span className="text-gray-400 bg-gray-50 px-2 py-0.5 rounded text-xs">Not created</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {amb.accountCreated ? (
                      amb.passwordChanged ? (
                        <span className="text-gray-400 text-xs">Changed by user</span>
                      ) : (
                        <code className="text-xs bg-gray-100 px-2 py-0.5 font-mono rounded">{amb.initialPassword}</code>
                      )
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      {!amb.accountCreated ? (
                        <button
                          onClick={() => handleCreateAccount(amb.refId)}
                          disabled={creatingRefId === amb.refId}
                          className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
                        >
                          {creatingRefId === amb.refId ? 'Creating...' : 'Create Account'}
                        </button>
                      ) : (
                        <>
                          <Link
                            href={`/admin/ambassadors/${amb.refId}`}
                            className="px-3 py-1 border border-gray-300 text-xs font-medium text-gray-700 rounded hover:bg-gray-50 transition-colors"
                          >
                            View
                          </Link>
                          <button
                            onClick={() => handleDeleteAccount(amb.refId, amb.name)}
                            className="px-3 py-1 text-xs font-medium text-red-600 rounded hover:bg-red-50 transition-colors"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredAmbassadors.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-4 py-12 text-center text-sm text-gray-400">
                    No ambassadors found matching search/filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-500">
          Showing {filteredAmbassadors.length} of {ambassadors.length} ambassadors
        </div>
      </div>
    </div>
  )
}
