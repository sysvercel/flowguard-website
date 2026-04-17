'use client'
import { useState } from 'react'
import Link from 'next/link'

const tiers = [
  {
    amount: '$250',
    label: 'Pilot Install',
    description: 'Client signs a pilot installation at a single property.',
  },
  {
    amount: '$500',
    label: 'Property Rollout',
    description: 'Client deploys FlowGuard across an entire property.',
  },
  {
    amount: '$1,000+',
    label: 'Portfolio Deployment',
    description: 'Client deploys across multiple properties in their portfolio.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Make the introduction',
    description: 'Send us the owner, operator, or property contact. Warm intros help; direct referrals are accepted too.',
  },
  {
    number: '02',
    title: 'We run the process',
    description: 'We handle qualification, outreach, walkthrough, proposal, and deployment. You stay in the loop without doing the work.',
  },
  {
    number: '03',
    title: 'You get paid after install',
    description: 'Once the client installs, we issue the referral payout. No caps, no waiting periods, no hidden conditions.',
  },
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

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition'

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A6FA8]/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            Partner Program
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            FlowGuard Partner Program
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Refer qualified multifamily opportunities and earn a payout when a deal closes and installs.
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Built for contractors, consultants, vendors, and industry partners who work with multifamily owners and operators. We handle the outreach, walkthrough, proposal, and deployment.
          </p>
        </div>
      </section>

      {/* Payouts */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Program Payouts
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Simple, transparent partner payouts
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Clear payout ranges based on deployment scope. No confusing program tiers or hidden conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map(tier => (
              <div
                key={tier.label}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-7 sm:p-8 flex flex-col"
              >
                <p className="text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3">
                  Referral Payout
                </p>
                <p className="text-5xl font-bold text-[#1B2F4E] tracking-tight mb-5">
                  {tier.amount}
                </p>
                <div className="pt-5 border-t border-slate-100">
                  <p className="text-[#1B2F4E] font-bold text-base mb-2 tracking-tight">
                    {tier.label}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{tier.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-8 max-w-xl mx-auto leading-relaxed">
            Payouts are issued after the referred client completes installation. Portfolio deployments are scoped and structured individually.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Three steps. No pitch decks.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              You make the introduction. We run the rest.
            </p>
          </div>
          <div className="relative grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            <div aria-hidden className="hidden md:block absolute top-5 left-[16%] right-[16%] border-t border-dashed border-slate-300 z-0" />
            {steps.map(step => (
              <div key={step.number} className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#1B2F4E] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  <span className="h-px flex-1 bg-slate-200" aria-hidden />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1B2F4E] tracking-tight mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Submit a Referral
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Submit a referral
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-2">
              Send us the decision-maker or property contact and we&apos;ll take it from there. Warm introductions help, but direct referrals are accepted too.
            </p>
            <p className="text-sm text-slate-500">
              We review every referral directly and follow up fast.
            </p>
          </div>

          {status === 'sent' ? (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_32px_rgba(15,23,42,0.08)] p-10 sm:p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1B2F4E] tracking-tight mb-3">Referral received.</h3>
              <p className="text-slate-600 leading-relaxed mb-6 max-w-md mx-auto">
                We&apos;ll reach out to your contact within one business day and keep you in the loop through close.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-[#29ABE2] text-sm font-semibold hover:underline"
              >
                Submit another referral
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-6 sm:p-8 lg:p-10 space-y-6"
            >
              {/* Your info */}
              <div>
                <p className="text-[10px] font-semibold text-slate-500 tracking-[0.22em] uppercase mb-4">
                  Your Information
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Your name</label>
                    <input
                      type="text"
                      required
                      value={form.your_name}
                      onChange={e => setForm(f => ({ ...f, your_name: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Your company <span className="text-slate-400 text-xs">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Your phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Referral info */}
              <div>
                <p className="text-[10px] font-semibold text-slate-500 tracking-[0.22em] uppercase mb-4">
                  Referral Contact
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Contact name</label>
                    <input
                      type="text"
                      required
                      value={form.client_name}
                      onChange={e => setForm(f => ({ ...f, client_name: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Property / company</label>
                    <input
                      type="text"
                      required
                      value={form.client_company}
                      onChange={e => setForm(f => ({ ...f, client_company: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Contact phone</label>
                  <input
                    type="tel"
                    required
                    value={form.client_phone}
                    onChange={e => setForm(f => ({ ...f, client_phone: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#29ABE2] text-white py-4 rounded-xl text-base font-semibold hover:bg-[#1A6FA8] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Submitting…' : 'Submit Referral'}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again or reach out directly.
                </p>
              )}

              <p className="text-center text-xs text-slate-500">
                Referrals are reviewed directly by our team.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Bottom contact / support */}
      <section className="relative bg-[#1B2F4E] py-20 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#29ABE2]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5">
              Partner Support
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Questions about the partner program?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach out directly if you want to discuss fit, payout structure, or the type of opportunities we&apos;re looking for.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
            <a
              href="mailto:mazen@flowguardprotection.com"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-5 hover:bg-white/10 transition"
            >
              <div className="w-11 h-11 rounded-lg bg-[#29ABE2]/15 text-[#29ABE2] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-slate-400 text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5">Email</p>
                <p className="text-white font-medium break-all text-sm">mazen@flowguardprotection.com</p>
              </div>
            </a>
            <a
              href="tel:+19722468309"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-5 hover:bg-white/10 transition"
            >
              <div className="w-11 h-11 rounded-lg bg-[#29ABE2]/15 text-[#29ABE2] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5">Phone</p>
                <p className="text-white font-medium">(972) 246-8309</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition"
            >
              Request a Demo
            </Link>
            <p className="text-slate-400 text-xs mt-4">Based in Dallas, TX.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
