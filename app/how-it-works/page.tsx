'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PhoneDemo from '../components/PhoneDemo'
import EscalationTimeline from '../components/EscalationTimeline'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const layers = [
  { n: '01', name: 'Detection' },
  { n: '02', name: 'Alert Routing' },
  { n: '03', name: 'Responder' },
  { n: '04', name: 'Escalation' },
  { n: '05', name: 'Audit Trail' },
]

function StepEyebrow({ num, label }: { num: string; label: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3">
      <span className="text-[#29ABE2]">{num}</span>
      <span className="text-slate-400 mx-2">/</span>
      <span className="text-slate-500">{label}</span>
    </p>
  )
}

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A6FA8]/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            The FlowGuard Workflow
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            How FlowGuard Detects, Routes, and Resolves Water Events
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            FlowGuard combines real-time moisture detection, alert routing, maintenance-first response, escalation logic, and insurance-ready documentation in one operational workflow.
          </p>

          {/* Layer preview strip */}
          <div className="mt-12 sm:mt-14 hidden sm:flex items-center justify-center gap-3 lg:gap-5 flex-wrap">
            {layers.map((l, i) => (
              <div key={l.n} className="flex items-center gap-3 lg:gap-5">
                <div className="flex items-center gap-2 text-xs lg:text-sm">
                  <span className="text-[#29ABE2] font-mono font-semibold tracking-wider">{l.n}</span>
                  <span className="text-slate-300 font-medium">{l.name}</span>
                </div>
                {i < layers.length - 1 && <span className="w-6 lg:w-8 h-px bg-slate-600" aria-hidden />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1 — Detection Layer */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <StepEyebrow num="01" label="Detection Layer" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                Moisture-Sensing Formats Detect Water at the Point of Risk
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                FlowGuard deploys <strong>spot</strong>, <strong>rope</strong>, and <strong>low-profile</strong> sensor formats, selected per zone based on the property&apos;s risk profile. Spot sensors sit at critical equipment and high-risk utility areas to catch pooled water. Rope sensors provide linear coverage along perimeter, wall, and pipe-adjacent risk zones. Low-profile sensors are used where discreet placement and surface-level detection are important.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Response thresholds vary by zone — critical zones trigger immediate escalation, standard zones allow a short buffer. Every placement is scoped to the building during install.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)] border border-slate-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1B2F4E] mb-1">Spot Sensor</div>
                  <div className="text-sm text-slate-500 leading-relaxed">Point-of-risk floor placement under mechanical equipment, risers, and water heaters.</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)] border border-slate-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M2 12c2.5-4 5-4 7.5 0S14.5 16 17 12s5-4 5-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1B2F4E] mb-1">Rope Sensor</div>
                  <div className="text-sm text-slate-500 leading-relaxed">Continuous linear coverage along walls, perimeters, and pipe-adjacent risk zones.</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)] border border-slate-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <rect x="3" y="9" width="18" height="6" rx="1.5" />
                    <path d="M7.5 12h.01M12 12h.01M16.5 12h.01" strokeLinecap="round" strokeWidth="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1B2F4E] mb-1">Low-Profile Sensor</div>
                  <div className="text-sm text-slate-500 leading-relaxed">Flat, low-profile format for discreet, surface-level moisture detection in tight or visible placements.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Step 2 — Alert Routing Layer */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-slate-100 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#29ABE2] text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                Under 60 Seconds
              </div>
              <div className="space-y-3">
                {[
                  {
                    channel: 'Email',
                    desc: 'One-tap action links for every incident — acknowledge without logging in.',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    channel: 'SMS',
                    desc: 'Instant text with incident ID and inline command options.',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                        <path d="M21 12a8 8 0 01-11.4 7.3L3 21l1.7-6.6A8 8 0 1121 12z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    channel: 'Voice',
                    desc: 'Automated call for critical-zone events where immediate attention is required.',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                ].map(({ channel, desc, icon }) => (
                  <div key={channel} className="flex items-start gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#29ABE2] flex items-center justify-center shrink-0 border border-slate-200">
                      {icon}
                    </div>
                    <div className="pt-0.5">
                      <div className="font-semibold text-[#1B2F4E] text-sm mb-0.5">{channel}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <StepEyebrow num="02" label="Alert Routing Layer" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                Alerts Route Across the Response Chain in Under 60 Seconds
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                The moment a sensor triggers, FlowGuard dispatches email, SMS, and — for critical conditions — voice alerts across your maintenance-first response chain. Property-specific routing rules decide who gets notified, in what order, and on which channels.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Responders can act immediately without logging into the platform. Maintenance can acknowledge, route, arrive on site, and contain the issue directly from their phone, while FlowGuard records every action in the dashboard automatically.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Step 3 — Responder Layer */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <StepEyebrow num="03" label="Responder Layer" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                Respond by Text. No App Required.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-5">
                Your team runs the full incident lifecycle over SMS — without logging into the platform. Reply <strong>ACK</strong> to acknowledge and take ownership, <strong>ROUTE</strong> when en route, <strong>SITE</strong> when on site, and <strong>CONTAINED</strong> when the source is controlled.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                Every command is timestamped, attributed to a responder, and written to the incident record. Ownership transfers cleanly between tiers when escalation fires — the next responder sees every prior action.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['ACK', 'ROUTE', 'SITE', 'CONTAINED'].map(cmd => (
                  <div key={cmd} className="text-center font-mono text-xs font-semibold text-[#1B2F4E] bg-slate-100 border border-slate-200 rounded-lg py-2.5 tracking-wider">
                    {cmd}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneDemo />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Step 4 — Escalation Layer */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <StepEyebrow num="04" label="Escalation Layer" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                Escalation Moves the Incident Forward Automatically
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                No one chases an unanswered alert. If Tier 1 doesn&apos;t respond inside the property&apos;s configured window, Tier 2 is paged automatically. If Tier 2 doesn&apos;t respond, the chain moves to Tier 3 — without delay, without a human in the loop.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                Every tier receives the full incident context — detection time, location, severity, any responses already recorded — so handoffs are clean and responders aren&apos;t re-diagnosing a live event.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Manual chasing</div>
                  <div className="text-lg font-bold text-[#1B2F4E]">Zero</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Escalation timers</div>
                  <div className="text-lg font-bold text-[#1B2F4E]">Per property</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-slate-100">
              <EscalationTimeline />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Step 5 — Audit Trail Layer */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <StepEyebrow num="05" label="Audit Trail Layer" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight mb-5 leading-tight">
                Resolution and Audit Trail Are Logged Automatically
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                When the sensor confirms dry for the configured resolution window, the incident auto-closes. Responders receive a confirmation. No manual close-out, no forgotten tickets.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Detection, acknowledgment, routing, on-site arrival, containment, and resolution are timestamped and preserved. Every incident produces a claims-ready record on demand — the timeline your carrier expects, without anyone rebuilding it from memory.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8">
              <div className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-slate-100">
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Incident</div>
                    <div className="text-sm font-mono font-bold text-[#1B2F4E]">A3F2B1C8</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Resolved
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Detected', time: '09:41:02' },
                    { label: 'Acknowledged', time: '09:42:15' },
                    { label: 'En Route', time: '09:43:30' },
                    { label: 'On Site', time: '09:48:55' },
                    { label: 'Contained', time: '09:52:10' },
                    { label: 'Auto-Resolved', time: '09:58:44' },
                  ].map(({ label, time }) => (
                    <div key={label} className="flex justify-between items-center text-sm">
                      <span className="font-medium text-slate-700">{label}</span>
                      <span className="font-mono text-xs text-slate-500">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Total incident duration <span className="font-mono text-[#1B2F4E] font-semibold">17m 42s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Platform Safeguards (continuous system health) */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">Continuous System Health</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight mb-4">
              Proactive monitoring, not just reactive alerts
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              FlowGuard watches the sensors themselves — not just the conditions they track — so coverage stays real, not theoretical.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Offline Sensor Detection',
                desc: 'If a sensor stops reporting, the platform flags it — coverage gaps are surfaced before they become incidents you missed.',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M5 12a7 7 0 0114 0M8.5 12a3.5 3.5 0 017 0" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: 'Battery Health',
                desc: 'Sensors report battery level continuously. Low-battery warnings fire well before any sensor loses coverage.',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <rect x="2" y="7" width="18" height="10" rx="2" />
                    <line x1="22" y1="10" x2="22" y2="14" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: 'Freeze Risk Monitoring',
                desc: 'Temperature drops near exposed pipes trigger early freeze warnings so maintenance can act before a burst.',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <line x1="12" y1="3" x2="12" y2="21" strokeLinecap="round" />
                    <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                    <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" strokeLinecap="round" />
                    <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white rounded-xl shadow-[0_2px_12px_rgba(15,23,42,0.05)] border border-slate-100 p-8">
                <div className="w-11 h-11 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-bold text-[#1B2F4E] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See which package fits your property
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Protect or Respond — both tiers run on the same operating workflow.
          </p>
          <Link href="/solutions" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition">
            View Solutions
          </Link>
          <p className="mt-8">
            <Link href="/integration" className="inline-flex items-center text-sm sm:text-base font-semibold text-slate-300 hover:text-[#29ABE2] transition">
              See how FlowGuard connects with your ticketing and response systems &rarr;
            </Link>
          </p>
        </div>
      </motion.section>
    </main>
  )
}
