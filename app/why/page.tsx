'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function WhyPage() {
  return (
    <main>
      {/* ── Section 1 — Hero: Dual headline split ── */}
      <section className="bg-[#0D2E4E] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* PM side */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#29ABE2]/15 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-[0.15em] uppercase">
                For Property Managers
              </div>
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-[1.15] mb-5">
                It&apos;s 2AM. A pipe just burst on the 4th floor. Who gets the call?
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                If the answer is &ldquo;whoever picks up first,&rdquo; you don&apos;t have a response system. You have a phone tree and a prayer.
              </p>
            </motion.div>

            {/* Asset Manager side */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="inline-block bg-[#29ABE2]/15 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-[0.15em] uppercase">
                For Asset Managers
              </div>
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-[1.15] mb-5">
                Water damage is the #1 threat to your NOI. Most buildings have zero detection.
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                One undetected leak turns a $200 repair into a $60,000 remediation. FlowGuard closes the gap between &ldquo;it happened&rdquo; and &ldquo;we caught it.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2 — The problem in numbers ── */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-4">
            The Numbers Nobody Wants to Talk About
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Water damage is the most common and most expensive property claim in commercial real estate. These are industry numbers, not ours.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '$13B+', label: 'Annual water damage claims in the US', sub: 'Source: Insurance Information Institute' },
              { stat: '93%', label: 'Of water damage is preventable with early detection', sub: 'Source: IICRC industry data' },
              { stat: '40 min', label: 'Average time before undetected leak causes structural damage', sub: 'After 40 minutes, drywall saturates and mold risk begins' },
            ].map((item) => (
              <div key={item.stat} className="text-center p-8 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                <p className="text-5xl md:text-6xl font-bold text-[#29ABE2] mb-3">{item.stat}</p>
                <p className="text-[#1B2F4E] font-semibold text-sm mb-2">{item.label}</p>
                <p className="text-slate-400 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Section 3 — Split value props ── */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-4">
            One System. Two Problems Solved.
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            FlowGuard was built for the people who actually deal with water damage — not for trade show demos.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* PM column */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8">
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 tracking-[0.15em] uppercase">
                Property Manager
              </div>
              <ul className="space-y-5">
                {[
                  { title: '2AM detection with immediate alerts', desc: 'SMS and voice calls hit your on-call tech within seconds of detection. Not minutes. Seconds.' },
                  { title: '3-tier escalation that never drops the ball', desc: 'If tier 1 doesn\'t respond in 5 minutes, tier 2 gets alerted. Then tier 3. Every property is configurable.' },
                  { title: 'Full incident command via text message', desc: 'Your tech replies ACK, ROUTE, SITE, CONTAINED. Every status update is logged with a timestamp. No app to download.' },
                  { title: 'No more Monday morning surprises', desc: 'If something happened Friday at midnight, you\'ll know by 12:01. Not when someone smells mold on Tuesday.' },
                ].map((item) => (
                  <li key={item.title}>
                    <p className="text-[#1B2F4E] font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Asset Manager column */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8">
              <div className="inline-block bg-[#1B2F4E]/10 text-[#1B2F4E] text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 tracking-[0.15em] uppercase">
                Asset Manager
              </div>
              <ul className="space-y-5">
                {[
                  { title: 'Insurance-grade incident documentation', desc: 'Every incident produces a timestamped report with detection, response, containment, and resolution. Generated automatically.' },
                  { title: 'Monthly reports delivered to your portal', desc: 'Executive summaries on the 1st of every month. Incident counts, response times, sensor health. No chasing your PM for updates.' },
                  { title: 'Zero claims filed = lower premiums over time', desc: 'Documented prevention history gives you leverage at renewal. Carriers want to see systems, not promises.' },
                  { title: 'Protect NOI before damage becomes remediation', desc: 'A $200 sensor prevents a $60,000 remediation. That\'s not marketing. That\'s the math on every building we protect.' },
                ].map((item) => (
                  <li key={item.title}>
                    <p className="text-[#1B2F4E] font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Section 4 — How it works ── */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Three steps. No complexity. Your team doesn&apos;t need training — they need a text message.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sensors detect water instantly',
                desc: '24/7 monitoring in every high-risk zone — boiler rooms, risers, mechanical closets, laundry, under sinks. LoRaWAN sensors with 10+ year battery life. No wiring.',
              },
              {
                step: '02',
                title: 'FlowGuard wakes up your team',
                desc: 'Automated SMS and voice alerts hit your on-call tech immediately. If they don\'t respond, the next person gets called. Structured escalation, not chaos.',
              },
              {
                step: '03',
                title: 'Everything is documented',
                desc: 'Every alert, response, and resolution is timestamped automatically. Insurance-ready incident reports that hold up with carriers. No manual paperwork.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-7xl font-bold text-[#29ABE2]/10 mb-4 leading-none">{item.step}</div>
                <h3 className="text-lg font-bold text-[#1B2F4E] mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Section 5 — The proof ── */}
      <motion.section {...fadeUp} className="bg-[#0D2E4E] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#1B2F4E] rounded-2xl border border-white/10 p-10 md:p-14">
            <div className="inline-block bg-[#29ABE2]/15 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 tracking-[0.15em] uppercase">
              Real Incident
            </div>
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8">
              When a sensor detected water in a Dallas boiler room at 5:55PM — FlowGuard acknowledged the alert in <span className="text-[#29ABE2] font-bold">21 seconds</span>, contained the incident in <span className="text-[#29ABE2] font-bold">4 minutes</span>, and generated a <span className="text-[#29ABE2] font-bold">7-page insurance report</span> automatically.
            </p>
            <p className="text-white text-lg font-semibold mb-2">
              Zero manual reporting. Zero claims filed.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { value: '21s', label: 'Time to acknowledge' },
                { value: '4 min', label: 'Time to contain' },
                { value: '7 pages', label: 'Auto-generated report' },
                { value: '$0', label: 'Insurance claims filed' },
              ].map((metric) => (
                <div key={metric.label}>
                  <p className="text-[#29ABE2] text-2xl md:text-3xl font-bold">{metric.value}</p>
                  <p className="text-slate-400 text-xs mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-slate-500 text-sm">
                Insurance-grade documentation trusted by DFW property managers
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Section 6 — The tiers ── */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-4">
            Three Tiers. Pick What Fits.
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Every property is different. Start where it makes sense and expand when you&apos;re ready.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Protect — highlighted */}
            <div className="rounded-xl border-2 border-[#29ABE2] p-8 relative bg-[#29ABE2]/[0.03]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#29ABE2] text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-[0.1em] uppercase">
                Most Popular
              </div>
              <h3 className="text-lg font-bold text-[#1B2F4E] mb-1">Protect</h3>
              <p className="text-slate-400 text-sm mb-6">Detection + response + documentation</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  '24/7 water and freeze detection',
                  'SMS + email + voice alerts',
                  '3-tier escalation chain',
                  'SMS incident command (ACK/ROUTE/SITE)',
                  'On-call schedule management',
                  'Insurance-grade incident reports',
                  'Monthly executive summaries',
                  'Incident ownership and transfer tracking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#29ABE2] font-bold mt-0.5 shrink-0">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="block w-full text-center bg-[#29ABE2] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1A6FA8] transition">
                  This Is Where Most Properties Start
                </Link>
              </div>
            </div>

            {/* Respond */}
            <div className="rounded-xl border border-slate-200 p-8">
              <h3 className="text-lg font-bold text-[#1B2F4E] mb-1">Respond</h3>
              <p className="text-slate-400 text-sm mb-6">Full incident command + vendor coordination</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'Everything in Protect',
                  'Vendor dispatch coordination',
                  'After-hours emergency response',
                  'Custom escalation timers per property',
                  'Dedicated account management',
                  'Priority support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#29ABE2] font-bold mt-0.5 shrink-0">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Section 7 — Final CTA ── */}
      <section className="bg-[#29ABE2] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to protect your properties?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            We&apos;ll scope your property, show you exactly where sensors go, and walk you through the full system. No pitch deck. Just the system running on real buildings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#29ABE2] px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition">
              Request a Demo
            </Link>
            <a href="tel:+19722468309" className="bg-white/15 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/25 transition">
              Talk to Mazen directly — (972) 246-8309
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer — minimal ── */}
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
