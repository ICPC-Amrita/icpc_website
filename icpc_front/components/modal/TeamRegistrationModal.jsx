'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'

function TeamRegistrationModalInner() {
  const [isOpen, setIsOpen] = useState(false)
  const [teamName, setTeamName] = useState('')
  const [captchaValue, setCaptchaValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const source = searchParams.get('utm_source') || ''
    const medium = searchParams.get('utm_medium') || ''
    const campaign = searchParams.get('utm_campaign') || ''

    const combinedUtm = `${source} ${medium} ${campaign}`.toLowerCase()

    const hasCampusPattern = 
      combinedUtm.includes('kollam') || combinedUtm.includes('amritapuri') ||
      combinedUtm.includes('kochin') || combinedUtm.includes('kochi') ||
      combinedUtm.includes('mysuru') || combinedUtm.includes('mysore') ||
      combinedUtm.includes('bengaluru') || combinedUtm.includes('bangalore') ||
      combinedUtm.includes('coimbatore')

    if (hasCampusPattern) {
      setIsOpen(true)
    }
  }, [searchParams])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const utmSource = searchParams.get('utm_source') || ''
    const utmMedium = searchParams.get('utm_medium') || ''
    const utmCampaign = searchParams.get('utm_campaign') || ''

    try {
      const response = await fetch('/api/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          teamName,
          utmSource,
          utmMedium,
          utmCampaign
        })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong')
        setCaptchaValue('')
      } else {
        setSuccess(true)
        setTeamName('')
        setCaptchaValue('')
        setTimeout(() => {
          window.location.href = 'https://icpc.global/'
        }, 10000)
      }
    } catch (err) {
      setError('Network error, please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-2 text-gray-900">Please Fill the details </h2>
        {/* <p className="text-gray-600 mb-6 text-sm"></p> */}

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Team Name</label>
              <input 
                type="text" 
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="e.g. Team name "
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
{/* 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Verification</label>
              <div className="mb-2 bg-gray-50 p-2 rounded-lg border flex justify-center">
                <LoadCanvasTemplate />
              </div>
              <input 
                type="text" 
                required
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
                placeholder="Enter the code from the image"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div> */}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition disabled:bg-blue-400"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        ) : (
          <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
            {/* <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for the details, Please go to ICPC Global Page to register</h3>
            <button 
              onClick={() => window.location.href = 'https://icpc.global/'}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition mt-4'
            >
              Register in ICPC Global
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TeamRegistrationModal() {
  return (
    <Suspense fallback={null}>
      <TeamRegistrationModalInner />
    </Suspense>
  )
}
