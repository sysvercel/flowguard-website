'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function WhyFlowGuard() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="bg-[#1B2F4E] py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Built Different
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            More Than Leak Detection.<br />Built for What Happens After the Alert.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            FlowGuard gives Texas multifamily properties a maintenance-first water incident command system — real-time detection, structured escalation, and documented response from first alert to final resolution.
          </p>
        </div>
      </section>

      {/* Section 2 — Pull Quote */}
      <motion.section {...fadeUp} className="bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-3xl italic font-medium text-[#1B2F4E] leading-relaxed">
            &ldquo;Competitors can tell you there&apos;s a leak. FlowGuard helps your team contain it faster, escalate it correctly, and document exactly what happened.&rdquo;
          </p>
          <p className="text-slate-500 mt-4">
            That&apos;s the difference between a notification system and an incident command system.
          </p>
        </div>
      </motion.section>

      {/* Section 3 — Differentiator Cards */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-16">
            Why Properties Choose FlowGuard
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
              <div className="w-12 h-12 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1B2F4E] mb-3">Maintenance-First by Design</h3>
              <p className="text-slate-500 leading-relaxed">
                Your on-call maintenance team responds first — because they know the property, have the access codes, and can contain most problems before they escalate. Outside vendors only when your team needs backup.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
              <div className="w-12 h-12 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1B2F4E] mb-3">Custom Escalation for Every Property</h3>
              <p className="text-slate-500 leading-relaxed">
                Every property gets a tailored response path — who gets alerted first, who gets called next, how long before escalation, and what happens if nobody responds. No generic one-size-fits-all workflows.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
              <div className="w-12 h-12 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1B2F4E] mb-3">Professional Incident Documentation</h3>
              <p className="text-slate-500 leading-relaxed">
                Every alert, acknowledgment, escalation, and resolution is time-stamped and logged automatically. Generate insurance-ready incident reports in seconds — not hours of manual documentation.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
              <div className="w-12 h-12 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1B2F4E] mb-3">Built for Texas Multifamily</h3>
              <p className="text-slate-500 leading-relaxed">
                From DFW freeze events to Gulf Coast humidity, FlowGuard includes real-time freeze-risk monitoring and critical-area protection designed for Texas property operations.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4 — Insurance Angle */}
      <motion.section {...fadeUp} id="incident-report" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — copy */}
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-6">
                The Insurance Angle Nobody Else Is Talking About
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                When a water event happens, your insurer wants to know three things: when was it detected, what was done about it, and how long did it take to contain. FlowGuard answers all three automatically.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Every incident produces a complete audit trail — detection timestamp, alert sent, who acknowledged, response timeline, containment confirmation, and resolution. That&apos;s not just good operations. That&apos;s your claim defense.
              </p>
              <Link href="/why-flowguard#incident-report" className="text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">
                See how incident reports work →
              </Link>
            </div>

            {/* Right — mock incident report card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#1B2F4E] px-6 py-4">
                <span className="text-white font-mono text-sm font-bold tracking-widest uppercase">Incident Report</span>
              </div>
              <div className="px-6 py-6 font-mono text-sm text-slate-700 space-y-1">
                <div className="text-slate-500 mb-3">Property: Riverside Apartments</div>
                <div className="text-slate-500 mb-4">Incident ID: A3F2B1C8</div>
                <div className="border-t border-slate-200 pt-4 space-y-2">
                  {[
                    ['Detected', '03/15/2026  2:14 AM'],
                    ['Alert sent', '03/15/2026  2:14 AM'],
                    ['Acknowledged', '03/15/2026  2:16 AM'],
                    ['En route', '03/15/2026  2:18 AM'],
                    ['On site', '03/15/2026  2:24 AM'],
                    ['Contained', '03/15/2026  2:31 AM'],
                    ['Resolved', '03/15/2026  2:47 AM'],
                  ].map(([label, time]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <span className="text-slate-500 shrink-0">{label}:</span>
                      <span className="text-slate-700">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-200 pt-4 flex justify-between">
                  <span className="text-slate-500">Response time:</span>
                  <span className="font-bold text-[#1B2F4E]">33 minutes</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <span className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-full text-sm">
                  ✓ RESOLVED
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 5 — Comparison Table */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-4">
            How FlowGuard Compares
          </h2>
          <p className="text-center text-slate-500 mb-12">
            Most leak detection systems stop at the alert. FlowGuard goes further.
          </p>
          <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B2F4E]">
                  <th className="text-left px-6 py-4 text-slate-300 font-semibold w-1/2">Feature</th>
                  <th className="px-6 py-4 text-slate-300 font-semibold text-center">Typical Leak Detection</th>
                  <th className="px-6 py-4 text-white font-semibold text-center bg-[#29ABE2]">FlowGuard</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Real-time leak alerts', '✓', '✓'],
                  ['SMS + voice alerts', 'Sometimes', '✓'],
                  ['Maintenance-first response workflow', '✗', '✓'],
                  ['3-tier escalation chain', '✗', '✓'],
                  ['SMS incident command (ACK/ROUTE/SITE)', '✗', '✓'],
                  ['Freeze risk monitoring', 'Rarely', '✓'],
                  ['Insurance-ready incident reports', '✗', '✓'],
                  ['Custom escalation per property', '✗', '✓'],
                  ['Full audit trail per incident', '✗', '✓'],
                  ['After-hours coordination', '✗', '✓'],
                ].map(([feature, typical, fg], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 text-slate-700 font-medium">{feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typical === '✓' ? (
                        <span className="text-[#29ABE2] font-bold">✓</span>
                      ) : typical === '✗' ? (
                        <span className="text-slate-300 font-bold">✗</span>
                      ) : (
                        <span className="text-slate-400 text-sm">{typical}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {fg === '✓' ? (
                        <span className="text-[#29ABE2] font-bold">✓</span>
                      ) : (
                        <span className="text-slate-300 font-bold">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Section 6 — CTA Band */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            We&apos;ll walk you through the full system — detection, escalation, documentation — scoped to your property.
          </p>
          <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#1A6FA8] transition">
            Request a Demo
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
