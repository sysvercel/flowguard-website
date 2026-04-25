'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import StatCounter from './components/StatCounter'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const operationalProof = [
  { big: '< 60s', label: 'Alert response time' },
  { big: '3-Tier', label: 'Escalation routing' },
  { big: '24/7', label: 'Monitored coverage' },
  { big: '100%', label: 'Incidents logged automatically' },
]

export default function Home() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="relative min-h-screen bg-[#1B2F4E] flex items-center justify-center overflow-hidden">
        {/* Ambient background glow */}
        <div aria-hidden className="absolute top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#29ABE2]/20 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-1/4 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-[#1A6FA8]/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-4 sm:mb-5">
            Built for Texas Multifamily Operators
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-5 sm:mb-6">
            Insurance-Ready Water Risk Control for Multifamily Properties
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Detect leaks, escalate alerts, and document every incident — with broker-ready reports built for the renewal conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition">
              Run a Live Leak Simulation
            </Link>
            <Link href="/how-it-works" className="border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              See How It Works
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-5 max-w-xl mx-auto leading-relaxed">
            See how FlowGuard alerts maintenance, escalates response, and generates an insurance-ready report.
          </p>
        </div>
      </section>

      {/* Section 2 — Operational Proof Bar */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 tracking-[0.2em] uppercase mb-8 sm:mb-10">
            Built to catch it first, route it fast, and document every step
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-xl overflow-hidden">
            {operationalProof.map(({ big, label }) => (
              <div key={big} className="bg-white text-center px-6 py-8 sm:py-10">
                <div className="text-4xl sm:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-2">{big}</div>
                <div className="text-sm text-slate-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How It Works (proof-of-system) */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-4">
              From detection to resolution in minutes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              One workflow, from the first drop of moisture to a fully documented incident — without anyone dropping the ball.
            </p>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] border-t-2 border-dashed border-slate-200 z-0" />
            {[
              {
                num: 1, title: 'Sensor Detects', desc: 'Spot, rope, and low-profile sensors trigger the moment moisture is detected in critical zones.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                  </svg>
                ),
              },
              {
                num: 2, title: 'Alerts Fire', desc: 'Email, SMS, and voice reach the right on-call staff in under 60 seconds.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
              },
              {
                num: 3, title: 'Team Responds', desc: 'SMS incident command lets the team acknowledge, route, and resolve without logging in.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
                  </svg>
                ),
              },
              {
                num: 4, title: 'Resolved & Logged', desc: 'Auto-closes when the sensor dries. Every step is timestamped for a claims-ready record.',
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
                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 4 — Problem / Market context */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                Water damage is the #1 driver of property insurance claims
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Most water losses aren&apos;t dramatic floods. They&apos;re slow drips in mechanical rooms, hidden pipe failures, and undetected moisture that compounds for days before anyone notices. By the time your team finds it, the claim is already being written. FlowGuard surfaces it in seconds — and gives your team the tools to close it out before it becomes a loss.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
                <StatCounter target={13} prefix="$" suffix="B+" label="Annual water damage insurance claims" />
              </div>
              <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
                <StatCounter target={93} suffix="%" label="Of water damage is preventable with early detection" />
              </div>
              <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
                <StatCounter target={8} suffix="+ Days" label="Average leak goes undetected without monitoring" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 5 — Packages */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">Packages</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-4">
              Two tiers. One platform. Built for how your team actually operates.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Start with full detection, escalation, and reporting — or layer on premium after-hours response for end-to-end coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Protect — Most Popular */}
            <div className="bg-white rounded-xl shadow-[0_12px_32px_rgba(41,171,226,0.18)] border-t-4 border-[#29ABE2] p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#29ABE2] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-1 mt-2">Protect</h3>
              <p className="text-sm text-slate-500 mb-6">Full protection — detect, escalate, document</p>
              <ul className="space-y-3 mb-8">
                {['Real-time leak detection', 'Email, SMS, and voice alerts', '3-tier escalation chain', 'Health monitoring', 'Freeze risk alerts', 'Insurance-ready incident reports', 'Executive summary reporting', 'Device visibility'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/solutions" className="text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">Learn More →</Link>
            </div>

            {/* Respond */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-1">Respond</h3>
              <p className="text-sm text-slate-500 mb-6">Premium support — after-hours response, end to end</p>
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

      {/* Section 6 — Built for Multifamily */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">Built for Multifamily</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight">
              An operational system, not just another sensor
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {[
              {
                title: 'Maintenance-First Incident Routing',
                desc: 'Every incident routes to your maintenance team first — no third-party call center in the middle. Your staff stays in control, and nothing slips through the cracks.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Claims-Ready Documentation',
                desc: 'Every incident is timestamped, categorized, and logged automatically. Generate claim-ready reports in seconds instead of rebuilding a timeline from memory.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Low-Disruption Deployment',
                desc: 'Wireless sensors drop into place without construction. Our team handles install day end-to-end — no downtime, no renovation, no surprises for residents.',
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
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to see it running in your portfolio?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            We&apos;ll scope a deployment for your buildings — no guesswork, no generic pricing.
          </p>
          <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition">
            Request a Demo
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
