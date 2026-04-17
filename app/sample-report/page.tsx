'use client'
import Link from 'next/link'
import Image from 'next/image'
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

const timelineEvents = [
  { time: '2:14:03 AM', event: 'Incident created — water detected', actorPrefix: 'FlowGuard System', redactActor: false, dot: 'bg-red-500' },
  { time: '2:14:05 AM', event: 'Alert sent to escalation chain', actorPrefix: 'FlowGuard System', redactActor: false, dot: 'bg-[#29ABE2]' },
  { time: '2:14:26 AM', event: 'Incident acknowledged', actorPrefix: 'C. ', redactActor: true, dot: 'bg-[#29ABE2]' },
  { time: '2:16:41 AM', event: 'Responder en route to location', actorPrefix: 'C. ', redactActor: true, dot: 'bg-[#29ABE2]' },
  { time: '2:22:18 AM', event: 'Responder on site — inspection initiated', actorPrefix: 'C. ', redactActor: true, dot: 'bg-[#29ABE2]' },
  { time: '2:23:05 AM', event: 'Photo uploaded', actorPrefix: 'C. ', redactActor: true, dot: 'bg-purple-400' },
  { time: '2:28:33 AM', event: 'Leak contained — water source isolated', actorPrefix: 'C. ', redactActor: true, dot: 'bg-[#29ABE2]' },
  { time: '2:47:12 AM', event: 'Incident resolved — sensor confirmed dry', actorPrefix: 'FlowGuard System', redactActor: false, dot: 'bg-green-500' },
]

const reportIncludes = [
  {
    title: 'Full Incident Timeline',
    desc: 'Detection, escalation, response, containment, and resolution — each step timestamped to the second.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Automated Monitoring Record',
    desc: 'Verified sensor data confirms continuous coverage was active at the time of the event.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 3l8 3v6c0 4.5-3.2 8.4-8 9.5C7.2 20.4 4 16.5 4 12V6l8-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Response Chain Documentation',
    desc: "Alert delivery across SMS, email, and voice tied to the property's configured escalation tiers.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Time-Stamped Responder Actions',
    desc: 'Every SMS reply and status update is logged with attribution and preserved in the incident record.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M21 12a8 8 0 01-11.4 7.3L3 21l1.7-6.6A8 8 0 1121 12z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Photo Evidence',
    desc: 'On-site photos captured via SMS are embedded directly in the report with timestamps and attribution.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <path d="M8 6l2-2h4l2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Resolution & Closeout Trail',
    desc: 'Dry-confirmation window, total resolution time, and auto-closeout recorded for every incident.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

export default function SampleReportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#0D2E4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#1A6FA8]/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5">
            Claims-Ready Documentation
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6">
            An Insurance-Ready Incident Record — Generated Automatically
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Every FlowGuard incident produces a timestamped audit record from detection to resolution. Less paperwork for property teams, cleaner handoff to carriers, and a defensible timeline for every event — without anyone rebuilding it from memory.
          </p>
        </div>
      </section>

      {/* Report Preview */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs font-semibold text-slate-500 tracking-[0.22em] uppercase">
              Actual Sample · Selected Fields Redacted for Confidentiality
            </p>
          </div>

          <motion.div {...fadeUp} className="bg-white rounded-2xl shadow-[0_12px_48px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden">
            {/* Report header */}
            <div className="bg-[#1B2F4E] px-6 sm:px-8 py-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Image
                    src="/flowguard-logo.png"
                    alt="FlowGuard"
                    width={480}
                    height={120}
                    className="object-contain h-[120px] w-auto mb-3"
                  />
                  <p className="text-slate-400 text-xs">FlowGuard Asset Protection LLC · Dallas, TX</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider">Incident Report</p>
                  <p className="text-white font-mono font-bold text-sm mt-0.5">██F2██C8</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="px-6 sm:px-8 py-6 border-b border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Property</p>
                  <p className="text-sm font-bold mt-1 text-[#1B2F4E] flex items-center gap-1.5">
                    <Redacted width="w-20" /> Apartments
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm font-bold mt-1 text-[#1B2F4E]">Boiler Room — B1</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Severity</p>
                  <p className="text-sm font-bold mt-1 text-red-500">CRITICAL</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Status</p>
                  <p className="text-sm font-bold mt-1 text-green-600">RESOLVED</p>
                </div>
              </div>
            </div>

            {/* Response metrics */}
            <div className="px-6 sm:px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Response Metrics</p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-2xl sm:text-3xl font-bold text-green-600">21s</p>
                  <p className="text-slate-500 text-xs mt-1">Response Time</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">14m</p>
                  <p className="text-slate-500 text-xs mt-1">Containment</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl sm:text-3xl font-bold text-[#1B2F4E]">33m</p>
                  <p className="text-slate-500 text-xs mt-1">Total Resolution</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="px-6 sm:px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Incident Timeline</p>
              <div className="space-y-3">
                {timelineEvents.map((event, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-2.5 h-2.5 rounded-full ${event.dot} flex-shrink-0 mt-1.5`} />
                      {i < timelineEvents.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-1 h-5" />}
                    </div>
                    <div className="flex-1 flex items-start justify-between gap-4 pb-1">
                      <div>
                        <p className="text-[#1B2F4E] text-sm font-medium">{event.event}</p>
                        <p className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                          {event.actorPrefix}
                          {event.redactActor && <Redacted width="w-16" />}
                        </p>
                      </div>
                      <p className="text-slate-400 text-xs font-mono flex-shrink-0">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response team */}
            <div className="px-6 sm:px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Response Team</p>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-[#29ABE2]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#29ABE2] text-xs font-bold">C</span>
                </div>
                <div>
                  <p className="text-[#1B2F4E] text-sm font-semibold flex items-center gap-1.5">
                    C. <Redacted width="w-20" />
                  </p>
                  <p className="text-slate-400 text-xs">Maintenance Tech · Tier 1 · Acknowledged in 21 seconds</p>
                </div>
              </div>
            </div>

            {/* Alert chain */}
            <div className="px-6 sm:px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Alert Chain</p>
              <div className="space-y-2">
                {[
                  { method: 'SMS', time: '2:14:05 AM', tier: 1 },
                  { method: 'EMAIL', time: '2:14:05 AM', tier: 1 },
                  { method: 'VOICE', time: '2:14:06 AM', tier: 1 },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg text-sm border border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        alert.method === 'SMS' ? 'bg-blue-100 text-blue-700' :
                        alert.method === 'EMAIL' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>{alert.method}</span>
                      <span className="text-[#1B2F4E] font-medium flex items-center gap-1.5">
                        C. <Redacted width="w-16" />
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 text-xs">Tier {alert.tier}</span>
                      <span className="text-slate-400 text-xs font-mono">{alert.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div className="px-6 sm:px-8 py-6 bg-slate-50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M12 3l8 3v6c0 4.5-3.2 8.4-8 9.5C7.2 20.4 4 16.5 4 12V6l8-3z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1B2F4E] font-semibold text-sm">Certification of Automated Monitoring</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    This report was automatically generated by FlowGuard Asset Protection&apos;s monitoring system and reflects verified sensor data and system activity. All timestamps are recorded in America/Chicago timezone. This documentation confirms that continuous water leak monitoring was active at the time of the incident and that the response chain was executed as configured for this property.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-slate-100 text-center">
              <p className="text-slate-400 text-[10px]">FlowGuard Asset Protection LLC · Dallas, TX · flowguardprotection.com</p>
            </div>
          </motion.div>

          {/* Anonymization note */}
          <p className="text-center text-slate-500 text-xs mt-6 max-w-xl mx-auto leading-relaxed">
            Sample report shown with selected identifying details redacted for confidentiality. Actual carrier-facing reports include the full unredacted record.
          </p>
        </div>
      </section>

      {/* What's included */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">Every Report Includes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight mb-4">
              A complete, defensible record of every incident
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Operationally useful during the event. Claims-ready after it. No manual paperwork at any stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportIncludes.map(item => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.04)] p-6">
                <div className="w-10 h-10 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-[#1B2F4E] font-bold text-sm sm:text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Stop chasing paperwork after every incident.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            FlowGuard produces this record automatically — from detection to resolution. Your team doesn&apos;t rebuild the timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition">
              Request a Demo
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
