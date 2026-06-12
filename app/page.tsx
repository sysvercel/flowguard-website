'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PhoneDemo from './components/PhoneDemo'
import EscalationTimeline from './components/EscalationTimeline'
import {
  HERO,
  PROOF,
  PROCESS,
  BUILT_FOR_MAINTENANCE,
  OWN_THE_RESPONSE,
  HARDWARE_AGNOSTIC,
  NO_SEAMLESS,
  DEFENSIBLE_RECORD,
  WATER_RISK_WALK,
} from '@/lib/marketing-copy'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-3 ${light ? 'text-[#29ABE2]' : 'text-[#29ABE2]'}`}>
      {children}
    </p>
  )
}

export default function Home() {
  return (
    <main>
      {/* Section 1 — Hero: "Anyone can detect a leak. We own what happens next." */}
      <section className="relative min-h-screen bg-[#1B2F4E] flex items-center justify-center overflow-hidden">
        <div aria-hidden className="absolute top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#29ABE2]/20 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-1/4 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-[#1A6FA8]/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-4 sm:mb-5">
            {HERO.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.07] tracking-tight mb-6">
            {HERO.headline}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-9 sm:mb-10 leading-relaxed">
            {HERO.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]">
              {HERO.primaryCta}
            </Link>
            <Link href="/how-it-works" className="border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              {HERO.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Operational proof bar */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 tracking-[0.2em] uppercase mb-8 sm:mb-10">
            Catch it first, route it fast, document every step
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-xl overflow-hidden">
            {PROOF.map(({ big, label }) => (
              <div key={big} className="bg-white text-center px-6 py-8 sm:py-10">
                <div className="text-4xl sm:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-2">{big}</div>
                <div className="text-sm text-slate-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — What happens next: the Detect → … → Document chain */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <Eyebrow>{PROCESS.eyebrow}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-4">
              {PROCESS.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {PROCESS.body}
            </p>
          </div>
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-5">
            <div className="hidden lg:block absolute top-5 left-[8%] right-[8%] border-t-2 border-dashed border-slate-200 z-0" />
            {PROCESS.chain.map(({ step, desc }, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#29ABE2] text-white flex items-center justify-center font-bold text-sm mb-4 ring-4 ring-[#F8FAFC]">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#1B2F4E] text-sm mb-1.5">{step}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[180px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 4 — Built for the people on the ground (maintenance + phone visual) */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>{BUILT_FOR_MAINTENANCE.eyebrow}</Eyebrow>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
                {BUILT_FOR_MAINTENANCE.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                {BUILT_FOR_MAINTENANCE.body1}
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-7">
                {BUILT_FOR_MAINTENANCE.body2}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['One-tap actions', 'No app required', 'Reply by text', 'Logged automatically'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B2F4E] bg-[#29ABE2]/10 border border-[#29ABE2]/20 rounded-full px-3 py-1.5">
                    <svg className="w-3 h-3 text-[#29ABE2]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneDemo />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 5 — An alert nobody acts on is just noise (enforced escalation) */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>{OWN_THE_RESPONSE.eyebrow}</Eyebrow>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
                {OWN_THE_RESPONSE.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                {OWN_THE_RESPONSE.body1}
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
                {OWN_THE_RESPONSE.body2}
              </p>
              <div className="space-y-3">
                {OWN_THE_RESPONSE.tiers.map(({ tier, who, detail }) => (
                  <div key={tier} className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-4">
                    <span className="shrink-0 text-[11px] font-bold text-white bg-[#1B2F4E] rounded-full px-3 py-1 tracking-wider uppercase mt-0.5">
                      {tier}
                    </span>
                    <div>
                      <div className="font-semibold text-[#1B2F4E] text-sm mb-0.5">{who}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-slate-100">
              <EscalationTimeline />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 6 — Hardware-agnostic positioning */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <Eyebrow>{HARDWARE_AGNOSTIC.eyebrow}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
              {HARDWARE_AGNOSTIC.heading}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
              {HARDWARE_AGNOSTIC.body1}
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {HARDWARE_AGNOSTIC.body2}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {HARDWARE_AGNOSTIC.points.map(({ title, desc }) => (
              <div key={title} className="bg-[#F8FAFC] rounded-xl border border-slate-100 p-7">
                <div className="w-11 h-11 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1B2F4E] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 7 — Honest install: "We’re not going to tell you it’s ‘seamless.’" */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 relative overflow-hidden">
        <div aria-hidden className="absolute -top-10 right-1/4 w-96 h-96 bg-[#29ABE2]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">{NO_SEAMLESS.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
            {NO_SEAMLESS.heading}
          </h2>
          <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>{NO_SEAMLESS.body1}</p>
            <p>{NO_SEAMLESS.body2}</p>
            <p className="text-white font-medium border-l-2 border-[#29ABE2] pl-5">
              {NO_SEAMLESS.body3}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 8 — Not just an alert. A defensible record. */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>{DEFENSIBLE_RECORD.eyebrow}</Eyebrow>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                {DEFENSIBLE_RECORD.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-7">
                {DEFENSIBLE_RECORD.body}
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-7">
                {DEFENSIBLE_RECORD.points.map(point => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#29ABE2] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-200 pt-5 max-w-lg">
                {DEFENSIBLE_RECORD.footnote}
              </p>
              <Link href="/sample-report" className="inline-flex items-center gap-2 text-sm font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition mt-5">
                View Sample Report
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
            {/* Incident record card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(15,23,42,0.08)] border border-slate-100">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Incident</div>
                  <div className="text-sm font-mono font-bold text-[#1B2F4E]">A3F2B1C8</div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Resolved
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: 'Detected', time: '02:14:03' },
                  { label: 'Alert sent to escalation chain', time: '02:14:05' },
                  { label: 'Acknowledged', time: '02:14:26' },
                  { label: 'On site', time: '02:22:18' },
                  { label: 'Photo evidence uploaded', time: '02:23:05' },
                  { label: 'Contained', time: '02:28:33' },
                  { label: 'Auto-resolved — sensor dry', time: '02:47:12' },
                ].map(({ label, time }) => (
                  <div key={label} className="flex justify-between items-center gap-4 text-sm">
                    <span className="font-medium text-slate-700">{label}</span>
                    <span className="font-mono text-xs text-slate-500 shrink-0">{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-500">Total incident duration</span>
                <span className="font-mono text-[#1B2F4E] font-semibold">33m 09s</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 9 — Water-Risk Walk CTA */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 text-center relative overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {WATER_RISK_WALK.heading}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            {WATER_RISK_WALK.supporting}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]">
              {WATER_RISK_WALK.primaryCta}
            </Link>
            <Link href="/sample-report" className="inline-block border border-white/20 text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              {WATER_RISK_WALK.secondaryCta}
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
