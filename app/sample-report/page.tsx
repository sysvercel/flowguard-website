'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const timelineEvents = [
  { time: '2:14:03 AM', event: 'Incident created — water detected', actor: 'FlowGuard System', dot: 'bg-red-500' },
  { time: '2:14:05 AM', event: 'Alert sent to escalation chain', actor: 'FlowGuard System', dot: 'bg-[#29ABE2]' },
  { time: '2:14:26 AM', event: 'Incident acknowledged', actor: 'Carlos Rodriguez', dot: 'bg-[#29ABE2]' },
  { time: '2:16:41 AM', event: 'Responder en route to location', actor: 'Carlos Rodriguez', dot: 'bg-[#29ABE2]' },
  { time: '2:22:18 AM', event: 'Responder on site — inspection initiated', actor: 'Carlos Rodriguez', dot: 'bg-[#29ABE2]' },
  { time: '2:23:05 AM', event: 'Photo uploaded', actor: 'Carlos Rodriguez', dot: 'bg-purple-400' },
  { time: '2:28:33 AM', event: 'Leak contained — water source isolated', actor: 'Carlos Rodriguez', dot: 'bg-[#29ABE2]' },
  { time: '2:47:12 AM', event: 'Incident resolved — sensor confirmed dry', actor: 'FlowGuard System', dot: 'bg-green-500' },
]

export default function SampleReportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D2E4E] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/why" className="text-slate-400 hover:text-white text-sm mb-8 transition inline-block">
            ← Back
          </Link>
          <div className="inline-block bg-green-500/15 text-green-400 text-[10px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-[0.15em] uppercase">
            Sample Report
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Insurance-Grade Incident Report
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Every FlowGuard incident produces a timestamped, documented report like this one — automatically. No manual paperwork. This is what your insurance carrier sees.
          </p>
        </div>
      </section>

      {/* Report Preview */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Mock report card */}
          <motion.div {...fadeUp} className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Report header */}
            <div className="bg-[#1B2F4E] px-8 py-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#29ABE2] font-bold text-lg">FlowGuard</p>
                  <p className="text-slate-400 text-xs mt-0.5">Asset Protection LLC · Dallas, TX</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider">Incident Report</p>
                  <p className="text-white font-bold text-sm mt-0.5">A3F2B1C8</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="px-8 py-6 border-b border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Property', value: 'Riverside Apartments' },
                  { label: 'Location', value: 'Boiler Room — B1' },
                  { label: 'Severity', value: 'CRITICAL', color: 'text-red-500' },
                  { label: 'Status', value: 'RESOLVED', color: 'text-green-500' },
                ].map(item => (
                  <div key={item.label}>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className={`text-sm font-bold mt-1 ${item.color || 'text-[#1B2F4E]'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response metrics */}
            <div className="px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Response Metrics</p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <p className="text-3xl font-bold text-green-600">21s</p>
                  <p className="text-slate-500 text-xs mt-1">Response Time</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-3xl font-bold text-blue-600">14m</p>
                  <p className="text-slate-500 text-xs mt-1">Containment</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <p className="text-3xl font-bold text-[#1B2F4E]">33m</p>
                  <p className="text-slate-500 text-xs mt-1">Total Resolution</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Incident Timeline</p>
              <div className="space-y-3">
                {timelineEvents.map((event, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-2.5 h-2.5 rounded-full ${event.dot} flex-shrink-0 mt-1`} />
                      {i < timelineEvents.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-1 h-5" />}
                    </div>
                    <div className="flex-1 flex items-start justify-between gap-4 pb-1">
                      <div>
                        <p className="text-[#1B2F4E] text-sm font-medium">{event.event}</p>
                        <p className="text-slate-400 text-xs">{event.actor}</p>
                      </div>
                      <p className="text-slate-400 text-xs font-mono flex-shrink-0">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response team */}
            <div className="px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Response Team</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#29ABE2]/10 flex items-center justify-center">
                    <span className="text-[#29ABE2] text-xs font-bold">CR</span>
                  </div>
                  <div>
                    <p className="text-[#1B2F4E] text-sm font-semibold">Carlos Rodriguez</p>
                    <p className="text-slate-400 text-xs">Maintenance Tech · Tier 1 · Acknowledged in 21 seconds</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert chain */}
            <div className="px-8 py-6 border-b border-slate-100">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-4">Alert Chain</p>
              <div className="space-y-2">
                {[
                  { method: 'SMS', time: '2:14:05 AM', contact: 'Carlos Rodriguez', tier: 1 },
                  { method: 'EMAIL', time: '2:14:05 AM', contact: 'Carlos Rodriguez', tier: 1 },
                  { method: 'VOICE', time: '2:14:06 AM', contact: 'Carlos Rodriguez', tier: 1 },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg text-sm">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        alert.method === 'SMS' ? 'bg-blue-100 text-blue-600' :
                        alert.method === 'EMAIL' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>{alert.method}</span>
                      <span className="text-[#1B2F4E] font-medium">{alert.contact}</span>
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
            <div className="px-8 py-6 bg-slate-50">
              <div className="flex items-start gap-3">
                <span className="text-[#29ABE2] text-lg flex-shrink-0">🛡️</span>
                <div>
                  <p className="text-[#1B2F4E] font-semibold text-sm">Certification of Automated Monitoring</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    This report was automatically generated by FlowGuard Asset Protection&apos;s monitoring system and reflects verified sensor data and system activity. All timestamps are recorded in America/Chicago timezone. This documentation confirms that continuous water leak monitoring was active at the time of the incident and that the response chain was executed as configured for this property.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-slate-100 text-center">
              <p className="text-slate-400 text-[10px]">FlowGuard Asset Protection LLC · Dallas, TX · flowguardprotection.com</p>
            </div>
          </motion.div>

          {/* Anonymization note */}
          <p className="text-center text-slate-400 text-xs mt-6">
            Property name, contact details, and incident ID have been anonymized for this sample. Actual reports include the full unredacted data.
          </p>
        </div>
      </section>

      {/* What's included */}
      <motion.section {...fadeUp} className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1B2F4E] text-center mb-10">Every Report Includes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '⏱️', title: 'Full Timeline', desc: 'Detection, acknowledgment, response, containment, and resolution — every step timestamped to the second.' },
              { emoji: '🛡️', title: 'Digital Certification', desc: 'Machine-verified sensor data with automated monitoring confirmation. Holds up with insurance carriers.' },
              { emoji: '📷', title: 'Photo Evidence', desc: 'On-site photos captured via SMS are embedded directly in the report with timestamps and attribution.' },
            ].map(item => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{item.emoji}</span>
                </div>
                <h3 className="text-[#1B2F4E] font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="bg-[#29ABE2] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stop chasing paperwork after every incident.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            FlowGuard generates this documentation automatically — from the moment the sensor fires to the moment it resolves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#29ABE2] px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition">
              Request a Demo
            </Link>
            <a href="tel:+19722468309" className="bg-white/15 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/25 transition">
              (972) 246-8309
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D2E4E] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} FlowGuard Asset Protection LLC. Dallas, TX. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
