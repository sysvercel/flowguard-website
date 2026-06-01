'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PackageQuiz from '../components/PackageQuiz'
import WaterRiskGlowBackground from '../components/WaterRiskGlowBackground'
import ProtectedPropertyMap from '../components/ProtectedPropertyMap'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Solutions() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] py-28 sm:py-32 overflow-hidden">
        <WaterRiskGlowBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-4">
              <span className="fg-node" /> Coverage Tiers
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Protection for Every Property
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Two tiers of coverage. Both running on the same cloud-based monitoring platform — watching the water zones most likely to fail.
            </p>
          </div>
          <div className="max-w-md w-full mx-auto lg:ml-auto">
            <ProtectedPropertyMap />
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <motion.section {...fadeUp} className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Platform Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Commercial-grade hardware. Operational visibility.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              FlowGuard pairs field-proven wireless hardware with a cloud-based monitoring platform — built for multifamily property operations, not consumer devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Real-Time Detection Visibility',
                desc: 'Monitor live incidents, response status, and sensor health from a cloud-based platform.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                title: 'Wireless Deployment',
                desc: 'LoRaWAN-based devices allow flexible placement in high-risk areas without invasive installation or property Wi-Fi.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M5 12a7 7 0 0114 0M8.5 12a3.5 3.5 0 017 0" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: 'Multi-Property Monitoring',
                desc: 'View device health, active incidents, and reporting across a single property or an entire portfolio.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M4 21V8l6-3 6 3v13" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 12h4v9h-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 21v-6h2v6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: 'Escalated Alerting',
                desc: 'SMS, email, and phone call alerts dispatched across a configurable response chain so the right person is notified quickly.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: 'Operations-Centered Reporting',
                desc: 'Maintenance-response tracking, incident documentation, and property-level reporting workflows — built for the teams that run the buildings.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: 'Expandable Platform',
                desc: 'Expandable platform for future integrations. FlowGuard is designed to grow with your operations as requirements evolve.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                ),
              },
            ].map(cap => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-8"
              >
                <div className="w-11 h-11 rounded-xl bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-5">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1B2F4E] tracking-tight mb-2 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Platform Specs */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              At a Glance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Platform specifications
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Deployment hardware and platform characteristics at a glance. Configurations are scoped per property.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] overflow-hidden">
            <dl className="divide-y divide-slate-100">
              {[
                { label: 'Monitoring Platform', value: 'Cloud-based' },
                { label: 'Alerting', value: 'SMS, email, and phone call' },
                { label: 'Connectivity', value: 'LoRaWAN wireless' },
                { label: 'Deployment Model', value: 'Wireless, low-disruption installation' },
                { label: 'Coverage Strategy', value: 'High-risk zones and critical areas' },
                { label: 'Property Visibility', value: 'Single-site and portfolio-level monitoring' },
                { label: 'Hardware Ecosystem', value: 'Commercial-grade LoRaWAN devices' },
                { label: 'Integration', value: 'Expandable platform for future integrations' },
              ].map(row => (
                <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] px-6 sm:px-8 py-4 sm:py-5">
                  <dt className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1 sm:mb-0 sm:pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="text-sm sm:text-base font-medium text-[#1B2F4E]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6 max-w-xl mx-auto leading-relaxed">
            FlowGuard uses field-proven commercial hardware. Device selection, gateway placement, and coverage are scoped to the property during install.
          </p>
        </div>
      </motion.section>

      <PackageQuiz />

      {/* Protect */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Features left — blue accent */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">Tier 1</div>
                <div className="bg-[#29ABE2] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">Most Popular</div>
              </div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-1">Protect</h2>
              <p className="text-slate-500 mb-8">Full Protection</p>
              <div className="border-l-4 border-[#29ABE2] pl-6 space-y-3">
                {[
                  'Real-time leak detection',
                  'Email, SMS, and voice alerts',
                  '3-tier escalation chain',
                  'Health monitoring',
                  'Freeze risk alerts',
                  'Claims-ready incident documentation',
                  'Executive summary reporting',
                  'Device visibility',
                ].map(f => (
                  <div key={f} className="flex items-center gap-3 text-slate-700">
                    <CheckIcon />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Description right */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-4">Our hero package for serious operators</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Protect is built for property managers who need full detection, escalation, reporting, and health monitoring that catches problems before they become incidents. This is the package most of our multifamily clients run on.
              </p>
              <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1A6FA8] transition text-sm">
                Book My Free Water-Risk Walk
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Respond */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Features left */}
            <div>
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Tier 2</div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-1">Respond</h2>
              <p className="text-slate-500 mb-8">Premium Support</p>
              <div className="space-y-3">
                {[
                  'Everything in Protect',
                  'After-hours coordination',
                  'Maintenance-first response support',
                  'Priority incident handling',
                  'Backup vendor coordination if needed',
                  'Premium incident closeout support',
                  'Custom property response playbook',
                ].map(f => (
                  <div key={f} className="flex items-center gap-3 text-slate-700">
                    <CheckIcon />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Description right */}
            <div className="bg-[#F8FAFC] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-4">Premium after-hours incident support</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Respond adds human coordination to the platform. When critical incidents happen after hours, FlowGuard coordinates with your team and backup vendors so your property manager doesn&apos;t have to. Built for operators who want a hands-off incident response layer.
              </p>
              <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1A6FA8] transition text-sm">
                Book My Free Water-Risk Walk
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Infrastructure Note */}
      <motion.section {...fadeUp} className="relative bg-[#1B2F4E] py-16 text-center overflow-hidden">
        <WaterRiskGlowBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-white text-lg leading-relaxed mb-2">
            Every deployment is custom scoped.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            Gateway installation, boiler room protection, and riser monitoring included based on property needs.
          </p>
          <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#1A6FA8] transition">
            Book My Free Water-Risk Walk
          </Link>
          <p className="text-slate-500 text-xs leading-relaxed mt-10 max-w-xl mx-auto">
            FlowGuard reports support documentation and risk conversations. They are not insurance determinations and do not guarantee coverage, discounts, or claim outcomes.
          </p>
        </div>
      </motion.section>
    </main>
  )
}
