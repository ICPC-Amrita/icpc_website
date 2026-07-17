'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AmbassadorLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [ambassadorInfo, setAmbassadorInfo] = useState(null)

  // Login form state
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  // Change password state
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMsg, setPasswordMsg] = useState('')
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    fetch('/api/ambassador/session')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setIsAuthenticated(true)
          setAmbassadorInfo({ name: data.name, email: data.email, refId: data.refId })
        }
      })
      .catch(() => {})
      .finally(() => setIsChecking(false))
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setLoginError('')
    try {
      const response = await fetch('/api/ambassador/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      })
      const data = await response.json()
      if (response.ok) {
        setIsAuthenticated(true)
        setAmbassadorInfo({ name: data.name, email: emailInput, refId: data.refId })
      } else {
        setLoginError(data.error || 'Invalid credentials')
      }
    } catch (err) {
      setLoginError('Network error. Please try again.')
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/ambassador/session', { method: 'DELETE' })
    setIsAuthenticated(false)
    setAmbassadorInfo(null)
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    setPasswordMsg('')

    if (newPassword !== confirmPassword) {
      setPasswordMsg('Passwords do not match')
      return
    }
    if (newPassword.length < 6) {
      setPasswordMsg('Password must be at least 6 characters')
      return
    }

    setIsChangingPassword(true)
    try {
      const res = await fetch('/api/ambassador/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      })
      const data = await res.json()
      if (res.ok) {
        setPasswordMsg('Password changed successfully')
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
        setTimeout(() => setShowChangePassword(false), 1500)
      } else {
        setPasswordMsg(data.error || 'Failed to change password')
      }
    } catch {
      setPasswordMsg('Network error')
    } finally {
      setIsChangingPassword(false)
    }
  }

  // --- Loading state ---
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    )
  }

  // --- Login page ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-sm w-full">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Ambassador Portal</h1>
            <p className="text-sm text-gray-500 mt-1">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white border border-gray-200 p-6 space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {loginError && (
              <p className="text-red-600 text-xs">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
            >
              {isLoggingIn ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // --- Authenticated layout ---
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-56' : 'w-0 overflow-hidden'} transition-all duration-200 bg-white border-r border-gray-200 flex flex-col`}>
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Ambassador</h2>
          {ambassadorInfo && (
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-900">{ambassadorInfo.name}</p>
              <p className="text-xs text-gray-500">Ref ID: {ambassadorInfo.refId}</p>
            </div>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <a
            href="/ambassador"
            className={`block px-3 py-2 text-sm font-medium transition-colors ${
              pathname === '/ambassador'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            Dashboard
          </a>
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-2">
          <button
            onClick={() => { setShowChangePassword(true); setPasswordMsg('') }}
            className="w-full px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors text-left"
          >
            Change Password
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors text-left"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 hover:text-gray-700 text-xs font-medium"
          >
            {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          </button>
        </header>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-200 w-full max-w-sm p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Change Password</h3>
            <form onSubmit={handleChangePassword} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Current Password</label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">New Password</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
                />
              </div>

              {passwordMsg && (
                <p className={`text-xs ${passwordMsg.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordMsg}
                </p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  disabled={isChangingPassword}
                  className="flex-1 py-2 bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
                >
                  {isChangingPassword ? 'Updating...' : 'Update Password'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowChangePassword(false)}
                  className="px-4 py-2 border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
