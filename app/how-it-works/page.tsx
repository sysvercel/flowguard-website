'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PhoneDemo from '../components/PhoneDemo'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1B2F4E] py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Detection to Resolution in Minutes
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            FlowGuard&apos;s incident command system gives your team the tools to respond faster and smarter.
          </p>
        </div>
      </section>

      {/* Step 1 — Sensor Detects */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Step 1</div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-4">Sensor Detects Moisture</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                FlowGuard deploys two types of sensors tailored to your property&apos;s risk profile. <strong>Spot sensors</strong> sit on the floor in boiler rooms, mechanical closets, and under risers — catching pooled water immediately. <strong>Rope sensors</strong> run along the perimeter of high-risk zones for continuous linear coverage.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                Critical zones trigger immediate escalation. Standard zones allow a short buffer before alerting. Every placement is scoped to your building during installation.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-8 space-y-4">
              {[
                { label: 'Spot Sensor', desc: 'Point-of-leak detection — floor placement under critical equipment', icon: '💧' },
                { label: 'Rope Sensor', desc: 'Linear coverage — runs along walls and perimeters for continuous monitoring', icon: '〰️' },
              ].map(({ label, desc, icon }) => (
                <div key={label} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex gap-4 items-start">
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <div className="font-bold text-[#1B2F4E] mb-1">{label}</div>
                    <div className="text-sm text-slate-500">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Step 2 — Alerts Fire */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual left */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="inline-block bg-[#29ABE2] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">&lt; 60 seconds</div>
              <div className="space-y-4">
                {[
                  { channel: 'Email', icon: '✉️', desc: 'All tiers receive email for every incident' },
                  { channel: 'SMS', icon: '💬', desc: 'Instant text with incident ID and command options' },
                  { channel: 'Voice Call', icon: '📞', desc: 'Critical-only — automated call for immediate escalation' },
                ].map(({ channel, icon, desc }) => (
                  <div key={channel} className="flex items-center gap-4 p-4 rounded-lg bg-[#F8FAFC]">
                    <div className="text-2xl">{icon}</div>
                    <div>
                      <div className="font-semibold text-[#1B2F4E] text-sm">{channel}</div>
                      <div className="text-xs text-slate-500">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Text right */}
            <div>
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Step 2</div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-4">Multi-Channel Alerts Fire Instantly</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                The moment a sensor triggers, FlowGuard fires alerts across three channels simultaneously. Your maintenance team receives an email with incident details, an SMS with a direct command link, and — for critical zones — an automated voice call.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                All of this happens in under 60 seconds. No dashboards to check. No apps to open. Your team gets notified wherever they are.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Step 3 — SMS Incident Command */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Step 3</div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-4">SMS Incident Command</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                FlowGuard&apos;s SMS command system lets your team manage the entire incident lifecycle from their phone — no app, no login. Reply <strong>ACK</strong> to acknowledge, <strong>ROUTE</strong> when en route, <strong>SITE</strong> when on-site, and <strong>CONTAINED</strong> when resolved.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                Every reply is timestamped and logged. If no one responds within the escalation window, FlowGuard automatically moves up the chain.
              </p>
            </div>
            <PhoneDemo />
          </div>
        </div>
      </motion.section>

      {/* Step 4 — 3-Tier Escalation */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual left — timeline */}
            <div className="space-y-0">
              {[
                { tier: 'Tier 1', who: 'Maintenance Tech', timing: 'Alerted immediately. 5 minutes to respond.', color: '#29ABE2' },
                { tier: 'Tier 2', who: 'Supervisor / Backup', timing: 'Auto-escalates at 5 minutes. 5 more minutes to respond.', color: '#1A6FA8' },
                { tier: 'Tier 3', who: 'Property Manager', timing: 'Auto-escalates at 10 minutes. Immediate notification — no further delay.', color: '#1B2F4E' },
              ].map(({ tier, who, timing, color }, i) => (
                <div key={tier} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: color }}>
                      {i + 1}
                    </div>
                    {i < 2 && <div className="w-0.5 h-12 bg-slate-200 mt-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="font-bold text-[#1B2F4E]">{tier} — {who}</div>
                    <div className="text-sm text-slate-500 mt-1">{timing}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Text right */}
            <div>
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Step 4</div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-4">3-Tier Escalation</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                If your maintenance tech doesn&apos;t acknowledge within 5 minutes, FlowGuard auto-escalates to the supervisor or backup contact. No response from Tier 2 after 5 more minutes triggers an immediate Tier 3 alert to the property manager — no further delay.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                Each tier receives the same multi-channel alert package. The escalation chain is fully configurable per property and per incident type during your onboarding.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Step 5 — Auto-Resolution */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Step 5</div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-4">Auto-Resolution + Audit Trail</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                When the sensor dries, FlowGuard auto-resolves the incident and sends a confirmation email and SMS to all responders. No manual close-out required.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                Every action — detection, acknowledgment, routing, resolution — is timestamped and stored. Insurance-ready reports are generated automatically and available on demand.
              </p>
            </div>
            {/* Resolution card visual */}
            <div className="bg-[#F8FAFC] rounded-xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-[#1B2F4E]">Incident A3F2B1C8</div>
                  <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Resolved</div>
                </div>
                <div className="space-y-3 text-xs text-slate-500">
                  {[
                    { label: 'Detected', time: '09:41:02 AM' },
                    { label: 'Acknowledged', time: '09:42:15 AM' },
                    { label: 'En Route', time: '09:43:30 AM' },
                    { label: 'On Site', time: '09:48:55 AM' },
                    { label: 'Contained', time: '09:52:10 AM' },
                    { label: 'Auto-Resolved', time: '09:58:44 AM' },
                  ].map(({ label, time }) => (
                    <div key={label} className="flex justify-between">
                      <span className="font-medium text-slate-700">{label}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3 — Health Monitoring */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] text-center mb-4">
            Proactive Monitoring, Not Just Reactive Alerts
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            FlowGuard watches your sensors 24/7 — not just for leaks, but for the conditions that cause them.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Offline Sensor Detection',
                desc: 'If a sensor goes offline, you get alerted immediately — not when a leak goes undetected because your sensor stopped reporting.',
                icon: '📡',
              },
              {
                title: 'Low Battery Alerts',
                desc: 'Sensors report battery levels continuously. Low battery warnings go out before you ever lose coverage.',
                icon: '🔋',
              },
              {
                title: 'Freeze Risk Monitoring',
                desc: 'Temperature drops near exposed pipes trigger early freeze warnings so your team can act before pipes burst.',
                icon: '❄️',
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-[#1B2F4E] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">See which package is right for you</h2>
          <p className="text-slate-400 mb-10">Monitor, Protect, or Respond — every tier runs on the same platform.</p>
          <Link href="/solutions" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#1A6FA8] transition">
            View Solutions
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
