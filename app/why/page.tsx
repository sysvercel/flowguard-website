'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const pmBullets = [
  {
    title: '2AM detection with immediate alerts',
    desc: 'SMS and voice hit your on-call tech within seconds of detection — not minutes.',
  },
  {
    title: '3-tier escalation that never drops the ball',
    desc: "If Tier 1 doesn't respond in the configured window, Tier 2 is paged, then Tier 3. Every property is set up its own way.",
  },
  {
    title: 'Incident command over text',
    desc: 'Your team replies ACK, ROUTE, SITE, CONTAINED. Every status is timestamped and logged. No app required.',
  },
  {
    title: 'No more Monday-morning surprises',
    desc: "If something happened Friday at midnight, you'll know at 12:01 — not when someone smells mold on Tuesday.",
  },
]

const amBullets = [
  {
    title: 'Claims-ready incident documentation',
    desc: 'Every event produces a timestamped record — detection, response, containment, resolution — generated automatically.',
  },
  {
    title: 'Monthly executive reporting',
    desc: 'Incident counts, response times, sensor health delivered on the 1st of every month. No chasing your PM for status.',
  },
  {
    title: 'Documented prevention history',
    desc: 'A clean monitoring record gives you leverage at renewal. Carriers want to see systems, not promises.',
  },
  {
    title: 'Protect NOI before remediation',
    desc: "A $200 sensor prevents a $60,000 remediation. That's not marketing — that's the math on every covered building.",
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Sensors detect water instantly',
    desc: '24/7 coverage in every high-risk zone — boiler rooms, risers, mechanical closets, laundry, under sinks. Commercial-grade LoRaWAN sensors rated for 8–10 years of battery life. No wiring.',
  },
  {
    step: '02',
    title: 'FlowGuard routes the response',
    desc: 'SMS and voice reach your on-call team in seconds. If they don\'t respond, the chain moves to the next tier automatically. No manual chasing.',
  },
  {
    step: '03',
    title: 'Every action is documented',
    desc: 'Every alert, response, and resolution is timestamped. Claims-ready reports export in seconds — no paperwork for your team.',
  },
]

export default function WhyPage() {
  return (
    <main>
      {/* ── Section 1 — Hero: Dual audience split ── */}
      <section className="relative bg-[#0E1B30] overflow-hidden">
        <div aria-hidden className="absolute inset-0 fg-blueprint fg-blueprint-fade" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5">
              Built for Multifamily Operators
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-5">
              Two roles. One system. Built for both.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Water risk lives in two places — the call at 2AM and the number on the balance sheet. FlowGuard answers both.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 gap-10 md:gap-0">
            <div aria-hidden className="hidden md:block absolute top-8 bottom-8 left-1/2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

            {/* Property Manager side */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:pr-10 lg:pr-14"
            >
              <div className="inline-flex items-center gap-2 bg-[#29ABE2]/15 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" aria-hidden />
                For Property Managers
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[1.9rem] font-bold text-white leading-[1.18] mb-4">
                It&apos;s 2AM. A pipe just burst on the 4th floor. Who gets the call?
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                If the answer is &ldquo;whoever picks up first,&rdquo; you don&apos;t have a response system. You have a phone tree and a prayer.
              </p>
            </motion.div>

            {/* Asset Manager side */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:pl-10 lg:pl-14"
            >
              <div className="inline-flex items-center gap-2 bg-[#29ABE2]/15 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" aria-hidden />
                For Asset Managers
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[1.9rem] font-bold text-white leading-[1.18] mb-4">
                Water damage is the #1 threat to your NOI. Most buildings have zero detection.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                One undetected leak turns a $200 repair into a $60,000 remediation. FlowGuard closes the gap between &ldquo;it happened&rdquo; and &ldquo;we caught it.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Hero CTA row */}
          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition"
            >
              Request a Demo
            </Link>
            <Link
              href="/sample-report"
              className="border border-white/20 text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition"
            >
              View a Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2 — The market context ── */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Market Context
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              The numbers nobody wants to talk about
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Water damage is the most common and most expensive property claim in commercial real estate. These are industry numbers — not ours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-y border-slate-200">
            {[
              {
                stat: '$13B+',
                label: 'Annual water damage claims in the US',
                source: 'Insurance Information Institute',
              },
              {
                stat: '93%',
                label: 'Of water damage is preventable with early detection',
                source: 'IICRC industry data',
              },
              {
                stat: '40 min',
                label: 'Average time before an undetected leak causes structural damage',
                source: 'At 40 minutes, drywall saturates and mold risk begins',
              },
            ].map(item => (
              <div key={item.stat} className="py-10 sm:py-12 px-6 sm:px-8 text-center">
                <p className="text-5xl sm:text-6xl font-bold text-[#1B2F4E] tracking-tight mb-3">{item.stat}</p>
                <p className="text-[#1B2F4E] font-semibold text-sm sm:text-base mb-3 leading-snug max-w-xs mx-auto">
                  {item.label}
                </p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-1">Source</p>
                <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Section 3 — Decision-maker panels ── */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Two Decision Makers
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              One system. Two problems solved.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              FlowGuard was built for the people who actually deal with water damage — not for trade-show demos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* PM panel */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-7 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 bg-[#29ABE2]/10 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" aria-hidden />
                  Property Manager
                </div>
                <span className="text-xs font-medium text-slate-400">Operator pain</span>
              </div>
              <ul className="space-y-5">
                {pmBullets.map(item => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0"
                    />
                    <div>
                      <p className="text-[#1B2F4E] font-semibold text-sm sm:text-base mb-1">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Asset Manager panel */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-7 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 bg-[#0E1B30]/10 text-[#1B2F4E] text-[10px] font-bold px-3 py-1.5 rounded-full tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E1B30]" aria-hidden />
                  Asset Manager
                </div>
                <span className="text-xs font-medium text-slate-400">NOI risk</span>
              </div>
              <ul className="space-y-5">
                {amBullets.map(item => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0E1B30] shrink-0"
                    />
                    <div>
                      <p className="text-[#1B2F4E] font-semibold text-sm sm:text-base mb-1">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Section 4 — How it works ── */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Three steps. No complexity.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Your team doesn&apos;t need training — they need a text message.
            </p>
          </div>
          <div className="relative grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            <div aria-hidden className="hidden md:block absolute top-10 left-[16%] right-[16%] border-t border-dashed border-slate-200 z-0" />
            {howItWorks.map(item => (
              <div key={item.step} className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#0E1B30] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <span className="h-px flex-1 bg-slate-200" aria-hidden />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1B2F4E] tracking-tight mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Section 5 — Real incident proof ── */}
      <motion.section {...fadeUp} className="bg-[#0E1B30] py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0E1B30] rounded-2xl border border-white/10 shadow-[0_12px_48px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="px-8 sm:px-10 lg:px-14 pt-10 sm:pt-12 pb-8">
              <div className="inline-flex items-center gap-2 bg-[#29ABE2]/15 text-[#29ABE2] text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" aria-hidden />
                Real Incident
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-semibold text-white leading-[1.25] tracking-tight mb-6">
                5:55 PM — a sensor detected water in a Dallas boiler room. FlowGuard acknowledged the alert in <span className="text-[#29ABE2]">21 seconds</span>, contained the incident in <span className="text-[#29ABE2]">4 minutes</span>, and generated a <span className="text-[#29ABE2]">7-page incident report</span> automatically.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium">
                Zero manual reporting. Zero claims filed.
              </p>
            </div>

            <div className="border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
              {[
                { value: '21s', label: 'Time to acknowledge' },
                { value: '4 min', label: 'Time to contain' },
                { value: '7 pages', label: 'Auto-generated report' },
                { value: '$0', label: 'Claims filed' },
              ].map(metric => (
                <div key={metric.label} className="px-6 py-6 sm:py-8 text-center">
                  <p className="text-[#29ABE2] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{metric.value}</p>
                  <p className="text-slate-400 text-[11px] sm:text-xs mt-2 uppercase tracking-[0.18em] font-semibold">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Section 6 — Packages ── */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-mono font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Packages
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Two tiers. Pick what fits.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every property is different. Start where it makes sense and expand when you&apos;re ready.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Protect */}
            <div className="relative rounded-2xl border-2 border-[#29ABE2] bg-white p-7 sm:p-8 shadow-[0_12px_32px_rgba(41,171,226,0.16)]">
              <div className="absolute -top-3 left-7 bg-[#29ABE2] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-[0.18em] uppercase">
                Most Popular
              </div>
              <div className="flex items-baseline justify-between mb-1 mt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1B2F4E] tracking-tight">Protect</h3>
                <span className="text-[10px] font-mono font-semibold text-[#29ABE2] tracking-[0.18em] uppercase">Tier 1</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">Detection, response, and documentation.</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                {[
                  '24/7 water and freeze detection',
                  'Property dashboard',
                  'SMS + email + voice alerts',
                  '3-tier escalation chain',
                  'SMS incident command (ACK / ROUTE / SITE)',
                  'Claims-ready incident reports',
                  'Monthly executive summaries',
                  'On-call schedule management',
                  'Incident ownership and transfer tracking',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#29ABE2] shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-[#29ABE2] text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#1A6FA8] transition"
              >
                Request a Scope for Protect
              </Link>
            </div>

            {/* Respond */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
              <div className="flex items-baseline justify-between mb-1 mt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1B2F4E] tracking-tight">Respond</h3>
                <span className="text-[10px] font-semibold text-slate-400 tracking-[0.18em] uppercase">Tier 2</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">Full incident command plus vendor coordination.</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                {[
                  'Everything in Protect',
                  'Vendor dispatch coordination',
                  'After-hours emergency response',
                  'Custom escalation timers per property',
                  'Dedicated account management',
                  'Priority support',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#29ABE2] shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center border border-slate-200 text-[#1B2F4E] px-6 py-3.5 rounded-xl text-sm font-semibold hover:border-[#29ABE2] hover:text-[#29ABE2] transition"
              >
                Request a Scope for Respond
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Section 7 — Final CTA ── */}
      <motion.section {...fadeUp} className="relative bg-[#0E1B30] py-20 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 fg-blueprint fg-blueprint-fade" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-mono font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5">
            Next Step
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            See the system running on your buildings.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We&apos;ll scope your property, show you exactly where sensors go, and walk you through the full system on a real building. No pitch deck.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition"
            >
              Request a Demo
            </Link>
            <a
              href="tel:+19722468309"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              (972) 246-8309
            </a>
          </div>
          <p className="text-slate-400 text-xs mt-6">
            Talk to Mazen directly — Dallas, TX.
          </p>
        </div>
      </motion.section>
    </main>
  )
}
