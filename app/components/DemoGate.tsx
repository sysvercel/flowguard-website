'use client'
import { useState } from 'react'
import Image from 'next/image'

interface DemoGateProps {
  onStart: (firstName: string, propertyName: string) => void
}

export default function DemoGate({ onStart }: DemoGateProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [propertyName, setPropertyName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    setLoading(true)
    try {
      await fetch('/api/demo-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name: firstName, email, property_name: propertyName }),
      })
      onStart(firstName, propertyName || 'Your Property')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1B2F4E] flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <div className="text-center mb-8">
          <Image src="/flowguard-logo.png" alt="FlowGuard" width={160} height={40} className="mx-auto mb-6 object-contain" />
          <h1 className="text-2xl font-bold text-[#1B2F4E] mb-2">See FlowGuard in Action</h1>
          <p className="text-slate-500 text-sm leading-relaxed">Enter your property name and we&apos;ll personalize the demo specifically for your building.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="John"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] transition"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Work Email <span className="text-red-400">*</span></label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="john@propertyco.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] transition"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Property Name <span className="text-slate-400 text-xs">(optional but recommended)</span></label>
            <input
              type="text"
              value={propertyName}
              onChange={e => setPropertyName(e.target.value)}
              placeholder="Oak Creek Apartments"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] transition"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#29ABE2] text-white py-4 rounded-xl font-semibold hover:bg-[#1A6FA8] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Starting demo...' : 'Start My Personalized Demo →'}
          </button>
        </form>
        <p className="text-center text-xs text-slate-400 mt-4">No commitment. No credit card. Takes 3 minutes.</p>
      </div>
    </div>
  )
}
