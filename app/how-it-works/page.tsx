'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PhoneDemo from '../components/PhoneDemo'
import EscalationTimeline from '../components/EscalationTimeline'
import IncidentCommandTimeline from '../components/IncidentCommandTimeline'
import ReportPreviewCard from '../components/ReportPreviewCard'
import WaterRiskGlowBackground from '../components/WaterRiskGlowBackground'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const operatorCares = [
  {
    q: 'Will my team actually see it?',
    a: 'The alert has to reach the person who can act. FlowGuard routes the incident to the right maintenance contact and escalates if nobody responds.',
  },
  {
    q: 'Will they know what to do?',
    a: 'The action page gives the responder a simple sequence: acknowledge, en route, on site, contained, resolved.',
  },
  {
    q: 'Can I prove what happened?',
    a: 'Every step is timestamped. Notes, photos, responder actions, and resolution details become part of the incident record.',
  },
  {
    q: 'Will ownership have a clean story?',
    a: 'Instead of explaining a mess after the fact, you have a timeline that shows the team caught it, responded, and contained it.',
  },
  {
    q: 'Will this make maintenance feel watched?',
    a: 'No. FlowGuard is not built to embarrass your team. It backs them up and makes their response visible when they do the job right.',
  },
]

const responseSteps = [
  { step: 'Water detected', copy: 'Sensors catch water early in high-risk zones.' },
  { step: 'Alert routed', copy: 'The right responder gets notified immediately.' },
  { step: 'Acknowledged', copy: 'Ownership knows a human has seen it.' },
  { step: 'En route', copy: 'The team is moving.' },
  { step: 'On site', copy: 'The responder is physically checking the source.' },
  { step: 'Contained', copy: 'The water source is isolated or controlled.' },
  { step: 'Resolved', copy: 'The incident is closed only after the response is complete.' },
  { step: 'Report generated', copy: 'The timeline becomes a clean record for ownership, maintenance review, and insurance conversations.' },
]

const reportCards = [
  'Response timeline',
  'Photo evidence',
  'Maintenance notes',
  'Estimated loss prevented',
  'Escalation record',
  'Maintenance recap',
  'Insurance-style documentation',
]

const leadershipCards = [
  { title: 'Less guessing', copy: 'You know whether the alert was acknowledged, who responded, and how long containment took.' },
  { title: 'Cleaner accountability', copy: 'The record shows the process without turning maintenance into the villain.' },
  { title: 'Better renewal conversations', copy: 'You can show a documented water-risk response program instead of hoping a carrier takes your word for it.' },
  { title: 'Fewer ugly surprises', copy: 'Leaks still happen. The difference is how quickly they are caught, escalated, contained, and documented.' },
  { title: 'A team that looks prepared', copy: 'The maintenance team gets a system that supports them, and leadership gets a record that proves the response.' },
]

const maintenanceHero = [
  'When water hits at 2am, the person who saves the property is not a dashboard. It is the maintenance tech who gets the alert, gets moving, finds the source, and stops the damage.',
  'FlowGuard is built around that person. The alert lands on their phone. The response page tells them exactly what step comes next. Their actions are timestamped automatically. When the incident is over, the record shows they acted fast and contained the issue.',
  'We do not watch your team. We back them up — and we make sure the record shows the work they actually did.',
]

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <WaterRiskGlowBackground radar />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            How FlowGuard Works
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            From first drop to handled incident.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
            When water hits the floor, most systems stop at the alert. FlowGuard keeps going. We route the alert to the right person, guide the maintenance response, escalate until someone acts, and document every second from detection to resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]">
              Book My Free Water-Risk Walk
            </Link>
            <Link href="/sample-report" className="border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              View Sample Report
            </Link>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Built for multifamily teams that need fewer surprises, faster response, and a cleaner record when ownership asks what happened.
          </p>
        </div>
      </section>

      {/* Phase 2 — What operators care about */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">For Operators</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              What property operators actually care about.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {operatorCares.map(({ q, a }) => (
              <div key={q} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-6 sm:p-7">
                <h3 className="font-bold text-[#1B2F4E] mb-3 leading-snug">{`\u201C${q}\u201D`}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Phase 3 — Maintenance hero */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 relative overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-96 h-96 bg-[#29ABE2]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Hero</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Your maintenance team is the hero. FlowGuard gives them the playbook.
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                {maintenanceHero.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneDemo />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Phase 4 — Response flow */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Flow</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              The response flow is simple on purpose.
            </h2>
          </div>

          {/* Incident command timeline */}
          <IncidentCommandTimeline className="mb-12 sm:mb-14" />

          {/* Step detail cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {responseSteps.map(({ step, copy }, i) => (
              <div key={step} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#29ABE2] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <h3 className="font-bold text-[#1B2F4E] text-sm">{step}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Phase 5 — Escalation */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">No Ignored Alerts</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
                An alert that dies on one phone is not protection.
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                <p>
                  People miss alerts. Phones die. A tech may be asleep, driving, or already handling another emergency. FlowGuard is built for that reality.
                </p>
                <p>
                  If the first person does not act, the alert moves. Tier 1, Tier 2, Tier 3. The system keeps pushing until a human acknowledges and starts the response.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {['Tier 1', 'Tier 2', 'Tier 3'].map((tier, i) => (
                  <div key={tier} className="flex items-center gap-3">
                    <span className="bg-[#1B2F4E] text-white text-sm font-semibold px-4 py-2 rounded-full">{tier}</span>
                    {i < 2 && <span aria-hidden className="text-[#29ABE2] font-bold">&rarr;</span>}
                  </div>
                ))}
              </div>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed border-l-2 border-[#29ABE2] pl-4">
                Property managers do not need to wonder if anyone saw the alert. The system shows who acknowledged it and when.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-slate-100">
              <EscalationTimeline />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Phase 6 — Documentation */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Record</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
              The report is not paperwork. It is protection.
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                After the incident, FlowGuard turns the response into a clean record: detection time, acknowledgement time, containment time, responder actions, notes, photos, and resolution details.
              </p>
              <p>
                That record helps property managers answer the questions that always come later: Who saw it? How fast did they respond? Was it contained? Were photos captured? What did we learn?
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                {reportCards.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 sm:px-5 py-4">
                    <svg className="w-5 h-5 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/sample-report" className="inline-flex items-center text-sm sm:text-base font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">
                View Sample Report &rarr;
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed mt-6 max-w-2xl">
                Reports support ownership, maintenance review, and insurance conversations. They are not claim determinations and do not guarantee coverage.
              </p>
            </div>
            <ReportPreviewCard />
          </div>
        </div>
      </motion.section>

      {/* Phase 7 — Leadership value */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">For Leadership</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              What this gives leadership.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leadershipCards.map(({ title, copy }) => (
              <div key={title} className="bg-[#162844] border border-white/10 rounded-xl p-6 sm:p-7">
                <h3 className="font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Phase 8 — What FlowGuard is not */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Honest Version</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
            What FlowGuard is not.
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              FlowGuard is not a camera pointed at your maintenance team. It is not a magic sensor that solves water damage by itself. It is not a vague &lsquo;smart building&rsquo; dashboard nobody checks.
            </p>
            <p>
              It is a response system. It detects water, routes the alert, guides the responder, escalates if nobody acts, and documents the result.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Phase 9 — Site walk CTA */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Want to see how this would work on your property?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Book a free water-risk walk. We&rsquo;ll walk your building, identify the highest-risk water zones, and show how the response path would work for your actual maintenance team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]">
              Book My Free Water-Risk Walk
            </Link>
            <Link href="/integration" className="inline-block border border-white/20 text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              See API, webhook, and ticketing handoff options
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
