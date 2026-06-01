'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function Redacted({ width = 'w-24' }: { width?: string }) {
  return (
    <span
      aria-label="redacted"
      className={`inline-block align-middle ${width} h-[0.85em] bg-slate-800 rounded-[2px] translate-y-[-1px]`}
    />
  )
}

const proofPillars = [
  {
    title: 'Maintenance-First by Design',
    desc: 'Your on-call team responds first — they know the property, hold the keys, and contain most events before outside dispatch is needed. Vendors escalate in only when your staff needs backup.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Escalation Configured Per Property',
    desc: 'Every building gets a tailored response chain — who alerts first, who backs them up, how long before escalation, and what happens if nobody responds. No one-size-fits-all defaults.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h6" />
      </svg>
    ),
  },
  {
    title: 'Claims-Ready Documentation',
    desc: 'Every alert, response, escalation, and resolution is timestamped and preserved automatically. Carrier-facing reports export in seconds — no one rebuilds the timeline from memory.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Built for Texas Multifamily',
    desc: 'Scoped for the conditions Texas properties actually face — DFW freeze events, Gulf Coast humidity, risers, boiler rooms. Freeze-risk monitoring and critical-area coverage baked in.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const comparisonRows: Array<[string, 'yes' | 'no' | string, 'yes' | 'no' | string]> = [
  ['Real-time leak detection', 'yes', 'yes'],
  ['SMS + voice alerts', 'Sometimes', 'yes'],
  ['Maintenance-first response workflow', 'no', 'yes'],
  ['3-tier escalation chain', 'no', 'yes'],
  ['SMS incident command (ACK / ROUTE / SITE)', 'no', 'yes'],
  ['Freeze-risk monitoring', 'Rarely', 'yes'],
  ['Custom escalation per property', 'no', 'yes'],
  ['Claims-ready incident reports', 'no', 'yes'],
  ['Full audit trail per incident', 'no', 'yes'],
  ['Device health & coverage monitoring', 'no', 'yes'],
]

function Cell({ value }: { value: 'yes' | 'no' | string }) {
  if (value === 'yes') {
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#29ABE2]/10">
        <svg className="w-4 h-4 text-[#29ABE2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  if (value === 'no') {
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100">
        <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M6 12h12" strokeLinecap="round" />
        </svg>
      </div>
    )
  }
  return <span className="text-slate-500 text-xs font-medium">{value}</span>
}

export default function WhyFlowGuard() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A6FA8]/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            Built for Response, Not Just Detection
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            More than leak detection.<br />Built for what happens after the alert.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12">
            Real-time detection, maintenance-first workflow, structured escalation, and claims-ready documentation — one operational system for multifamily water risk.
          </p>

          {/* Pillar strip */}
          <div className="hidden sm:flex items-center justify-center gap-3 lg:gap-6 flex-wrap">
            {['Detection', 'Response', 'Escalation', 'Documentation'].map((p, i, arr) => (
              <div key={p} className="flex items-center gap-3 lg:gap-6">
                <span className="text-xs lg:text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  {p}
                </span>
                {i < arr.length - 1 && <span className="w-2 h-2 rounded-full bg-[#29ABE2]/50" aria-hidden />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning pillars (replaces decorative pull quote) */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">Positioning</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Detection alone doesn&apos;t end the event
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A leak sensor firing is the beginning of an incident — not the end of one. FlowGuard is built for everything that has to happen after the alert.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                headline: 'Detection is table stakes',
                body: 'Sensors are the easy part. The hard part is getting the right person to act on the alert, in the right order, before the damage compounds.',
              },
              {
                headline: 'Response is where incidents end',
                body: 'Structured escalation, maintenance-first routing, and SMS incident command turn a notification into a contained event — without manual chasing.',
              },
              {
                headline: 'Documentation is where claims hold up',
                body: 'Carriers want to know when it was detected, what was done, and how long it took. FlowGuard captures all three automatically, on every event.',
              },
            ].map(p => (
              <div key={p.headline} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-px bg-[#29ABE2]" aria-hidden />
                  <p className="font-bold text-[#1B2F4E] text-base sm:text-lg">{p.headline}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Proof pillars */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">Why FlowGuard</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              Four pillars that separate us from notification-only sensors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {proofPillars.map(({ title, desc, icon }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-7 sm:p-8">
                <div className="w-11 h-11 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-[#1B2F4E] mb-3 tracking-tight">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Insurance Angle */}
      <motion.section {...fadeUp} id="incident-report" className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">Documentation Layer</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-5">
                When carriers review an incident, they ask three questions.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-5">
                When was it detected, what was done about it, and how long did it take to contain? FlowGuard produces a record that answers all three — automatically, on every event, without anyone rebuilding the timeline after the fact.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-5">
                The same record your team uses during the event is the record your carrier sees afterward. One source of truth, from first signal to closeout.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm mb-8">
                FlowGuard reports support documentation and risk conversations. They are not insurance determinations and do not guarantee coverage, discounts, or claim outcomes.
              </p>
              <Link href="/sample-report" className="inline-flex items-center gap-2 text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">
                View a sample incident report
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Document-style mock */}
            <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden">
              <div className="bg-[#1B2F4E] px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="text-[#29ABE2] font-bold text-base">FlowGuard</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">Asset Protection LLC · Dallas, TX</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider">Incident Report</p>
                  <p className="text-white font-mono font-bold text-xs mt-0.5">██F2██C8</p>
                </div>
              </div>
              <div className="px-6 py-5 border-b border-slate-100">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1">Property</p>
                    <p className="font-semibold text-[#1B2F4E] flex items-center gap-1.5">
                      <Redacted width="w-16" /> Apartments
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1">Status</p>
                    <p className="font-semibold text-green-600">RESOLVED</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 border-b border-slate-100">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-3">Incident Timeline</p>
                <div className="space-y-1.5 font-mono text-xs">
                  {[
                    ['Detected', '2:14:03 AM'],
                    ['Alert sent', '2:14:05 AM'],
                    ['Acknowledged', '2:14:26 AM'],
                    ['En route', '2:16:41 AM'],
                    ['On site', '2:22:18 AM'],
                    ['Contained', '2:28:33 AM'],
                    ['Resolved', '2:47:12 AM'],
                  ].map(([label, time]) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-slate-500">{label}</span>
                      <span className="text-slate-700">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Total duration</span>
                <span className="font-mono font-bold text-[#1B2F4E] text-sm">33m 09s</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comparison */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">Decision Tool</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              How FlowGuard compares
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Most leak detection systems stop at the alert. FlowGuard is built for everything that has to happen next.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_32px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="grid grid-cols-[1fr_160px_160px] sm:grid-cols-[1fr_200px_200px] bg-[#1B2F4E]">
              <div className="px-5 sm:px-6 py-4 text-slate-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Capability
              </div>
              <div className="px-3 sm:px-4 py-4 text-slate-400 font-medium text-[11px] sm:text-xs text-center uppercase tracking-wider border-l border-white/10">
                Typical Leak Sensors
              </div>
              <div className="px-3 sm:px-4 py-4 bg-[#29ABE2] text-white font-bold text-xs sm:text-sm text-center uppercase tracking-wider">
                FlowGuard
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {comparisonRows.map(([feature, typical, flowguard], i) => (
                <div
                  key={feature}
                  className={`grid grid-cols-[1fr_160px_160px] sm:grid-cols-[1fr_200px_200px] items-center ${i % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}`}
                >
                  <div className="px-5 sm:px-6 py-4 text-slate-800 text-sm font-medium">
                    {feature}
                  </div>
                  <div className="px-3 sm:px-4 py-4 flex items-center justify-center border-l border-slate-100">
                    <Cell value={typical} />
                  </div>
                  <div className="px-3 sm:px-4 py-4 flex items-center justify-center bg-[#29ABE2]/[0.04] border-l border-slate-100">
                    <Cell value={flowguard} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Comparison reflects the operational capabilities of the FlowGuard platform against the behavior typical of notification-only leak-detection systems in the multifamily space.
          </p>
        </div>
      </motion.section>

      {/* Ownership model — own the hardware vs. rent it forever */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-4">
                Ownership Model
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
                You own the hardware. You don&apos;t rent it forever.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5">
                When FlowGuard is installed at your property, you purchase and own the commercial-grade devices outright. The hardware is a capital asset that stays on your property — not a subscription you pay indefinitely with nothing to show for it.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Compare that to per-sensor Hardware-as-a-Service models that charge monthly forever — you own nothing, and the cost never tapers. With FlowGuard, the one-time hardware cost is behind you and the ongoing fee covers monitoring and response.
              </p>
              <p className="text-[#29ABE2] text-xs font-medium">
                How owned hardware fits your capital and accounting strategy is a question for your accountant. We don&apos;t give tax advice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(15,23,42,0.18)]"
            >
              <div className="bg-[#29ABE2] px-6 py-4">
                <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">Illustrative 5-Year Cost — 200 Units</p>
              </div>
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#29ABE2]" aria-hidden />
                  <p className="font-bold text-[#1B2F4E] text-sm">FlowGuard (Own the hardware)</p>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Hardware (one-time, owned)</span>
                    <span className="font-medium text-[#1B2F4E]">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monitoring fees (5 years)</span>
                    <span className="font-medium text-[#1B2F4E]">$72,000</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-[#1B2F4E]">
                    <span>5-year spend</span>
                    <span className="text-[#29ABE2]">$122,000</span>
                  </div>
                  <div className="flex justify-between text-green-600 text-xs">
                    <span>What you still own</span>
                    <span>$50,000 in hardware</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-slate-400" aria-hidden />
                  <p className="font-bold text-slate-600 text-sm">Typical HaaS (Own nothing)</p>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Hardware (rented)</span>
                    <span className="font-medium">$0 owned</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly fees (5 years)</span>
                    <span className="font-medium text-slate-700">$120,000</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-slate-700">
                    <span>5-year spend</span>
                    <span className="text-slate-700">$120,000</span>
                  </div>
                  <div className="flex justify-between text-slate-500 text-xs">
                    <span>What you still own</span>
                    <span>Nothing</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-100 border-t border-slate-200">
                <p className="text-slate-600 text-center text-xs leading-relaxed">
                  Illustrative example at list pricing for a 200-unit property. Actual cost is scoped per property. Not a quote, a savings promise, or a financial projection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See the system running on your property.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            We&apos;ll walk you through detection, escalation, and documentation — scoped to your buildings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition">
              Book My Free Water-Risk Walk
            </Link>
            <Link href="/how-it-works" className="border border-white/20 text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              See How It Works
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
