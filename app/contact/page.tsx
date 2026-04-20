'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const postSubmitSteps = [
  'We review your property details and current coverage.',
  'We identify likely risk areas for your building type.',
  'We recommend a starting deployment approach.',
  'We schedule a walkthrough if it makes sense.',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xkoqvlrw', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A6FA8]/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            Request a Demo
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Request a Demo
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Tell us about your property and we&apos;ll put together a recommended FlowGuard deployment approach based on your building, risk areas, and response needs.
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Built for multifamily owners, operators, and property managers. Typically reviewed within one business day.
          </p>
        </div>
      </section>

      {/* Form + reassurance */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-[0_8px_32px_rgba(15,23,42,0.08)] p-10 sm:p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2F4E] tracking-tight mb-3">Request received.</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We&apos;ll review your property details and get back to you within one business day. If it&apos;s urgent, email <a href="mailto:mazen@flowguardprotection.com" className="text-[#29ABE2] font-medium hover:underline">mazen@flowguardprotection.com</a>.
              </p>
              <div className="text-left bg-slate-50 border border-slate-100 rounded-xl p-5 sm:p-6">
                <p className="text-[10px] font-semibold text-slate-500 tracking-[0.22em] uppercase mb-3">What happens next</p>
                <ol className="space-y-2.5">
                  {postSubmitSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] font-mono text-[11px] font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
              {/* Form — wider */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-6 sm:p-8 lg:p-10">
                  <div className="mb-8">
                    <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
                      Step 1
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2F4E] tracking-tight mb-3">
                      Tell us about your property
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      The more context you give us, the more useful the recommendation will be.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Property Name</label>
                      <input
                        type="text"
                        name="company"
                        required
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Property Size</label>
                      <select
                        name="property_size"
                        required
                        defaultValue=""
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent bg-white transition"
                      >
                        <option value="" disabled>Select unit count</option>
                        <option value="under-50">Under 50 units</option>
                        <option value="50-100">50–100 units</option>
                        <option value="100-200">100–200 units</option>
                        <option value="200-500">200–500 units</option>
                        <option value="500+">500+ units</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number <span className="text-slate-400 text-xs">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Context <span className="text-slate-400 text-xs">(optional but recommended)</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Property type, current coverage, recent incidents, or anything specific you're trying to solve."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent resize-none transition"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#29ABE2] text-white py-4 rounded-xl font-semibold hover:bg-[#1A6FA8] transition text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Submitting…' : 'Submit Demo Request'}
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      We typically respond within one business day.
                    </p>

                    {/* Privacy acknowledgment — required by most jurisdictions
                        when collecting form data; also a trust signal. */}
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-1">
                      By submitting this form, you agree to FlowGuard&apos;s{' '}
                      <Link href="/privacy" className="text-[#29ABE2] hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link href="/terms" className="text-[#29ABE2] hover:underline">
                        Terms of Service
                      </Link>
                      . We&apos;ll only use your information to follow up about FlowGuard — never shared, never sold.
                    </p>
                  </form>
                </div>
              </div>

              {/* Reassurance column */}
              <aside className="lg:col-span-2 space-y-5">
                {/* Card 1 — Process */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-6 sm:p-7">
                  <p className="text-xs font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
                    Our Process
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1B2F4E] tracking-tight mb-5">
                    What happens after you submit
                  </h3>
                  <ol className="space-y-4">
                    {postSubmitSteps.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-slate-600 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Card 2 — Direct contact */}
                <div className="bg-[#1B2F4E] rounded-2xl border border-white/10 p-6 sm:p-7">
                  <p className="text-xs font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
                    Direct Contact
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-5">
                    Prefer to talk directly?
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#29ABE2]/15 text-[#29ABE2] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold mb-0.5">Email</p>
                        <a href="mailto:mazen@flowguardprotection.com" className="text-white hover:text-[#29ABE2] transition break-all font-medium">
                          mazen@flowguardprotection.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#29ABE2]/15 text-[#29ABE2] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                        <a href="tel:+19722468309" className="text-white hover:text-[#29ABE2] transition font-medium">
                          (972) 246-8309
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#29ABE2]/15 text-[#29ABE2] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold mb-0.5">Based in</p>
                        <p className="text-white font-medium">Dallas, TX</p>
                        <p className="text-slate-400 text-xs">Serving properties across Texas</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Secondary link */}
                <div className="text-center">
                  <Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">
                    See how FlowGuard works
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </aside>
            </div>
          )}
        </div>
      </motion.section>
    </main>
  )
}
