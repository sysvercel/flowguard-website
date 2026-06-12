'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ColdOpen from './components/ColdOpen'
import IncidentTape from './components/IncidentTape'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const operationalProof = [
  { big: '< 60s', label: 'Alert reaches the right person' },
  { big: '3-Tier', label: 'Escalation until a human acts' },
  { big: '24/7', label: 'Response, not just monitoring' },
  { big: '100%', label: 'Of every incident documented' },
]

const escalationChain = [
  { tier: 'Tier 1', who: 'On-call maintenance tech', detail: 'Alert lands with one-tap actions. No login, no app to open.' },
  { tier: 'Tier 2', who: 'Backup + supervisor', detail: 'No acknowledgement? It jumps to the next person and the next channel.' },
  { tier: 'Tier 3', who: 'Property manager + owner', detail: 'Still no human? It keeps climbing until someone owns it.' },
  { tier: 'Handled', who: 'Confirmed dry', detail: 'We track the response to containment and confirm it is actually over.' },
]

const recordItems = [
  'Every second timestamped',
  'Response chain captured',
  'Containment documented',
  'Photo evidence supported',
  'Maintenance actions logged',
  'Sample reports built for ownership and insurance conversations',
]

export default function Home() {
  const [coldOpenRun, setColdOpenRun] = useState(0)

  return (
    <main>
      {/* The 2 AM cold open — plays once per session, skippable */}
      <ColdOpen run={coldOpenRun} />

      {/* Section 1 — Hero */}
      <section className="relative min-h-screen bg-[#0E1B30] flex items-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 fg-blueprint fg-blueprint-fade" />
        {/* Signature waterline */}
        <div aria-hidden className="absolute left-0 right-0 top-[60%] hidden lg:block">
          <div className="fg-waterline" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between mt-2.5">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#29ABE2]/70">02:14:03 / WATER DETECTED</span>
            <span className="font-mono text-[10px] tracking-[0.24em] text-slate-600">CONTAINMENT THRESHOLD</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#29ABE2] mb-5 sm:mb-6">
                <span className="fg-mark" /> Water-Risk Response System
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-5 sm:mb-6">
                Anyone can detect a leak. We own what happens next.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
                FlowGuard runs the entire response — the alert goes straight to your maintenance team, the system guides them through containment, escalates relentlessly until a human acts, and documents every second. You don&rsquo;t get an alarm. You get a handled incident.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition">
                  Book My Free Water-Risk Walk
                </Link>
                <Link href="/how-it-works" className="border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
                  See How FlowGuard Handles a Leak
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                20 minutes. No cost. We&rsquo;ll identify your highest-risk water zones and show where protection would go first.
              </p>
            </div>

            {/* Right — incident record, replaying itself on a loop */}
            <div className="relative">
              <IncidentTape />
              <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center justify-between gap-2 mt-3">
                <p className="font-mono text-[10px] text-slate-600 leading-relaxed text-center lg:text-left">
                  Illustrative incident record. Times vary by property, staffing, and severity.
                </p>
                <button
                  onClick={() => setColdOpenRun((n) => n + 1)}
                  className="shrink-0 font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 hover:text-[#29ABE2] transition"
                >
                  &#9656; Replay the 2 AM cold open
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Operational Proof Bar */}
      <section className="bg-[#0E1B30] py-14 sm:py-16 border-y fg-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-[11px] sm:text-xs font-medium text-slate-500 tracking-[0.22em] uppercase mb-8 sm:mb-10">
            Catch it first. Route it fast. Document every step.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
            {operationalProof.map(({ big, label }) => (
              <div key={label} className="bg-[#0E1B30] text-center px-6 py-8 sm:py-10">
                <span className="fg-mark mx-auto mb-4 block" />
                <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums mb-2">{big}</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Built for the people on the ground */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] sm:text-xs font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">On The Ground</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
            Built for the people on the ground.
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              When water hits the floor at 2am, it&rsquo;s not the owner who deals with it — it&rsquo;s your maintenance tech, on a cracked phone, half-asleep. FlowGuard is built around them. The alert lands on the right person with one-tap actions, walks them through the response, and logs exactly what they did and how fast they did it.
            </p>
            <p>
              When it&rsquo;s over, the record shows your team caught it and contained it — not that they missed something. We don&rsquo;t watch your team. We back them up, and we make them look as good as they actually are.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 4 — An alert nobody acts on is just noise */}
      <motion.section {...fadeUp} className="relative bg-[#0E1B30] py-20 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 fg-blueprint fg-blueprint-fade" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="font-mono text-[11px] sm:text-xs font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">Relentless Escalation</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              An alert nobody acts on is just noise.
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                Most systems fire an alert and call it done. That alert goes off at 2am on a Saturday, lands on a phone that&rsquo;s face-down, and the water runs for six hours.
              </p>
              <p>
                We don&rsquo;t let that happen. The alert escalates through every person and every channel until someone acknowledges it and acts — then we track the response to containment and confirm it&rsquo;s actually dry. The response isn&rsquo;t a suggestion. It&rsquo;s enforced, all the way to handled.
              </p>
            </div>
          </div>

          {/* Escalation chain — instrument cards */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div aria-hidden className="hidden lg:block absolute top-6 left-[12%] right-[12%] fg-waterline z-0" />
            {escalationChain.map(({ tier, who, detail }, i) => (
              <div key={tier} className="relative z-10 fg-panel rounded-xl p-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-3xl font-bold text-[#29ABE2] tabular-nums leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">{tier}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{who}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 5 — The product isn't the sensor */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] sm:text-xs font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">The Real Product</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
            The product isn&rsquo;t the sensor. It&rsquo;s what happens when the sensor sees water.
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              We&rsquo;re not here to sell you overpriced proprietary devices and lock you into them. Sensors are a commodity — the response is the product.
            </p>
            <p>
              FlowGuard works with off-the-shelf hardware, so you&rsquo;re never trapped, never paying a premium for a logo on a box, and never stuck when something better comes along. The intelligence isn&rsquo;t on the wall. It&rsquo;s in the engine behind it.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 6 — We're not going to tell you it's 'seamless.' */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] sm:text-xs font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">The Honest Version</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
            We&rsquo;re not going to tell you it&rsquo;s &lsquo;seamless.&rsquo;
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              Every vendor in this space promises seamless integration. It&rsquo;s the most overused phrase in proptech and it&rsquo;s almost never true — so we won&rsquo;t say it.
            </p>
            <p>
              Here&rsquo;s the honest version instead: FlowGuard fits the way your maintenance team already works, so we&rsquo;re not forcing a new process on people who are already stretched. Setup is a real install — we place sensors where water is most likely to hit, stand up the gateway, and get your team onboarded. It takes a day, not a magic wand.
            </p>
            <p>
              We&rsquo;d rather tell you exactly what to expect than sell you a word you stopped believing years ago.
            </p>
          </div>
          <Link href="/integration" className="inline-flex items-center mt-8 text-sm sm:text-base font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">
            See API, webhook, and ticketing handoff options &rarr;
          </Link>
        </div>
      </motion.section>

      {/* Section 7 — Not just an alert. A defensible record. */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] sm:text-xs font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">The Record</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                Not just an alert. A defensible record.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
                When the incident is over, you&rsquo;re left with proof — exactly who did what, and how fast. The kind of record that holds up in an ownership review or an insurance conversation.
              </p>
              <Link href="/sample-report" className="inline-flex items-center text-sm sm:text-base font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">
                View Sample Report &rarr;
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {recordItems.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)] px-5 py-4">
                  <span className="fg-mark mt-1.5 shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section 8 — Final CTA */}
      <motion.section {...fadeUp} className="relative bg-[#0E1B30] py-20 sm:py-24 text-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 fg-blueprint fg-blueprint-fade" />
        <div aria-hidden className="absolute left-0 right-0 top-10 fg-waterline" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Book My Free Water-Risk Walk
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            20 minutes. No cost. We&rsquo;ll identify your highest-risk water zones and show where protection would go first.
          </p>
          <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition">
            Book My Free Water-Risk Walk
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
