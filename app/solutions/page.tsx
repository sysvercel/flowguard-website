'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PackageQuiz from '../components/PackageQuiz'

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
      <section className="bg-[#1B2F4E] py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protection for Every Property
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Three tiers of coverage. All built on the same powerful platform.
          </p>
        </div>
      </section>

      <PackageQuiz />

      {/* Protect */}
      <motion.section {...fadeUp} className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Features left — blue accent */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#29ABE2] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">Most Popular</div>
              </div>
              <h2 className="text-3xl font-bold text-[#1B2F4E] mb-1">Protect</h2>
              <p className="text-slate-500 mb-8">Full Protection</p>
              <div className="border-l-4 border-[#29ABE2] pl-6 space-y-3">
                {[
                  'Real-time leak detection',
                  'SMS + email + voice alerts',
                  '3-tier escalation chain',
                  'On-call scheduling',
                  'Health monitoring + freeze alerts',
                  'Insurance-ready incident reports',
                  'Executive summary reporting',
                  'Incident ownership and transfer tracking',
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
                Protect is built for property managers who need stronger escalation, richer reporting, and health monitoring that catches problems before they become incidents. This is the package most of our multifamily clients run on.
              </p>
              <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1A6FA8] transition text-sm">
                Request a Quote
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
              <div className="inline-block bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Tier 3</div>
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
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Infrastructure Note */}
      <motion.section {...fadeUp} className="bg-[#1B2F4E] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-white text-lg leading-relaxed mb-2">
            Every deployment is custom scoped.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            Gateway installation, boiler room protection, and riser monitoring included based on property needs.
          </p>
          <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#1A6FA8] transition">
            Request a Quote
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
