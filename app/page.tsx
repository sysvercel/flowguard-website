'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="relative min-h-screen bg-[#1B2F4E] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29ABE2]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1A6FA8]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Real-Time Leak Detection
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Stop Water Damage<br />Before It Starts
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Real-time leak detection and incident command for multifamily properties. Alerts fire in seconds. Your team responds in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#1A6FA8] transition">
              Request a Demo
            </Link>
            <Link href="/how-it-works" className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Stats Bar */}
      <motion.section {...fadeUp} className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { stat: '< 60s', label: 'Alert Response Time' },
              { stat: '3-Tier', label: 'Escalation Chain' },
              { stat: '24/7', label: 'Continuous Monitoring' },
              { stat: '100%', label: 'Audit Trail Logged' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center py-6 px-4">
                <div className="text-4xl font-bold text-[#29ABE2]">{stat}</div>
                <div className="text-sm text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 3 — Problem */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] mb-6">
                Water damage is the #1 cause of property insurance claims
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Most leaks aren&apos;t dramatic floods — they&apos;re slow drips in boiler rooms, hidden pipe failures, and undetected moisture that compounds over days. By the time your team discovers it, the damage is done. FlowGuard changes that.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { stat: '$13B+', label: 'Annual water damage insurance claims' },
                { stat: '93%', label: 'Of water damage is preventable' },
                { stat: '8+ Days', label: 'Average leak goes undetected' },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6">
                  <div className="text-3xl font-bold text-[#29ABE2]">{stat}</div>
                  <div className="text-slate-600 mt-1 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4 — How It Works */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-16">
            From Detection to Resolution in Minutes
          </h2>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Dashed connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] border-t-2 border-dashed border-slate-200 z-0" />
            {[
              {
                num: 1, title: 'Sensor Detects', desc: 'Spot and rope sensors trigger the moment moisture is detected in critical zones.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                  </svg>
                ),
              },
              {
                num: 2, title: 'Alerts Fire', desc: 'Email, SMS, and voice alerts reach your team in under 60 seconds.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
              },
              {
                num: 3, title: 'Team Responds', desc: 'SMS incident command lets your team acknowledge, route, and resolve via text.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
                  </svg>
                ),
              },
              {
                num: 4, title: 'Resolved & Logged', desc: 'Auto-resolution triggers when sensor dries. Full audit trail saved automatically.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map(({ num, title, desc, icon }) => (
              <div key={num} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#29ABE2] text-white flex items-center justify-center font-bold text-sm mb-4">
                  {num}
                </div>
                <div className="w-12 h-12 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-[#1B2F4E] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 5 — Solutions Preview */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-16">
            Protection That Fits Your Property
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Monitor */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-1">Monitor</h3>
              <p className="text-sm text-slate-500 mb-6">Core Visibility</p>
              <ul className="space-y-3 mb-8">
                {['Real-time leak detection', 'Email alerts', 'Claim link acknowledgment', 'Basic incident logging', 'Monthly summary report', 'Basic device visibility'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/solutions" className="text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">Learn More →</Link>
            </div>

            {/* Protect — Most Popular */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8 border-t-4 border-[#29ABE2] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#29ABE2] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-1 mt-2">Protect</h3>
              <p className="text-sm text-slate-500 mb-6">Full Protection</p>
              <ul className="space-y-3 mb-8">
                {['Everything in Monitor', 'SMS alerts', 'Voice calls for critical incidents', '3-tier escalation chain', 'Health monitoring', 'Freeze risk alerts', 'Insurance-ready incident reports', 'Executive summary reporting'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/solutions" className="text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">Learn More →</Link>
            </div>

            {/* Respond */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-1">Respond</h3>
              <p className="text-sm text-slate-500 mb-6">Premium Support</p>
              <ul className="space-y-3 mb-8">
                {['Everything in Protect', 'After-hours coordination', 'Maintenance-first response support', 'Priority incident handling', 'Backup vendor coordination', 'Premium incident closeout support'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/solutions" className="text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">Learn More →</Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 6 — Why FlowGuard */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-16">
            Built for Multifamily Properties
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Maintenance-First Response',
                desc: 'Every incident routes to your maintenance team first. We keep your staff in control while making sure nothing slips through the cracks.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Insurance-Ready Reporting',
                desc: 'Every incident is timestamped and logged automatically. Generate insurance-grade reports in seconds — not hours of manual documentation.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Zero Disruption Install',
                desc: 'Wireless sensors drop into place with no renovation needed. Gateway installation is scoped to your property — no drilling, no downtime.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-6">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-[#1B2F4E] mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 7 — CTA Band */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            We&apos;ll scope a custom deployment for your building — no guesswork, no generic pricing.
          </p>
          <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#1A6FA8] transition">
            Request a Demo
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
