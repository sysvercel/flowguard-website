'use client'
import { useState } from 'react'
import Link from 'next/link'

const tiers = [
  {
    amount: '$250',
    label: 'Pilot Install',
    description: 'Client signs up for a pilot installation at one property.',
    color: '#29ABE2',
  },
  {
    amount: '$500',
    label: 'Full Rollout',
    description: 'Client rolls out FlowGuard across an entire property.',
    color: '#059669',
  },
  {
    amount: '$1,000+',
    label: 'Portfolio Deal',
    description: 'Client deploys across multiple properties in their portfolio.',
    color: '#F59E0B',
  },
]

const steps = [
  { number: '1', title: 'Make an Intro', description: 'Send us the property manager or owner\'s info. A warm intro works best, but a cold referral is fine too.' },
  { number: '2', title: 'We Handle Everything', description: 'We reach out, run the demo, handle the proposal, install, and onboarding. You don\'t lift a finger.' },
  { number: '3', title: 'Get Paid', description: 'Once the client signs and installs, we send your referral payout. No caps, no limits.' },
]

export default function PartnersPage() {
  const [form, setForm] = useState({
    your_name: '', company: '', phone: '',
    client_name: '', client_company: '', client_phone: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ your_name: '', company: '', phone: '', client_name: '', client_company: '', client_phone: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-lg bg-[#0D2E4E] border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#29ABE2] transition"

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29ABE2]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Partner Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Refer a Client.<br />Get Paid Cash.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Know a property manager dealing with water damage headaches? Send them our way. We&apos;ll handle the rest — and pay you for every deal that closes.
          </p>
        </div>
      </section>

      {/* Payout Tiers */}
      <section className="bg-[#0F1A2E] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Referral Payouts</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Simple, transparent payouts. No fine print, no waiting periods. You get paid when the client installs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.label} className="bg-[#1B2F4E] rounded-2xl p-8 border border-slate-700/50 text-center hover:border-slate-600 transition">
                <div className="text-4xl font-bold mb-2" style={{ color: tier.color }}>{tier.amount}</div>
                <div className="text-white font-semibold text-lg mb-3">{tier.label}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1B2F4E] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#29ABE2]/20 text-[#29ABE2] font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="bg-[#0F1A2E] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Submit a Referral</h2>
          <p className="text-slate-400 text-center mb-10">Fill out the form below and we&apos;ll take it from here.</p>

          {status === 'sent' ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-3xl mb-3">&#10003;</div>
              <h3 className="text-white font-semibold text-xl mb-2">Referral Submitted</h3>
              <p className="text-slate-400 text-sm">We&apos;ll reach out to your client within 24 hours. You&apos;ll hear from us once they&apos;re set up.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-[#29ABE2] text-sm font-semibold hover:underline"
              >
                Submit another referral
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1 block">Your Info</label>
                  <input placeholder="Your name *" required value={form.your_name} onChange={e => setForm(f => ({ ...f, your_name: e.target.value }))} className={inputClass} />
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1 block">&nbsp;</label>
                  <input placeholder="Your company" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} className={inputClass} />
                </div>
              </div>
              <input type="tel" placeholder="Your phone *" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={inputClass} />

              <div className="border-t border-slate-700 my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1 block">Client Info</label>
                  <input placeholder="Client name *" required value={form.client_name} onChange={e => setForm(f => ({ ...f, client_name: e.target.value }))} className={inputClass} />
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1 block">&nbsp;</label>
                  <input placeholder="Client company *" required value={form.client_company} onChange={e => setForm(f => ({ ...f, client_company: e.target.value }))} className={inputClass} />
                </div>
              </div>
              <input type="tel" placeholder="Client phone *" required value={form.client_phone} onChange={e => setForm(f => ({ ...f, client_phone: e.target.value }))} className={inputClass} />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#29ABE2] text-white py-3.5 rounded-lg text-sm font-semibold hover:bg-[#1A6FA8] transition disabled:opacity-50 mt-4"
              >
                {status === 'sending' ? 'Submitting...' : 'Submit Referral'}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or contact us directly.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1B2F4E] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Questions about the partner program?</h2>
          <p className="text-slate-400 text-sm mb-6">Reach out directly — we&apos;d love to talk.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+19722468309" className="text-[#29ABE2] font-semibold hover:underline">(972) 246-8309</a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a href="mailto:mazen@flowguardprotection.com" className="text-[#29ABE2] font-semibold hover:underline">mazen@flowguardprotection.com</a>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#1A6FA8] transition inline-block">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
