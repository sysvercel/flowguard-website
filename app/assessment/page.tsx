import Link from 'next/link'
import AssessmentChat from '../components/AssessmentChat'

export const metadata = {
  title: 'Free Property Risk Assessment — FlowGuard Asset Protection',
  description: 'Get a fast, AI-assisted recommendation on risk areas, sensor placement, and the best-fit FlowGuard starting point for your multifamily property. About 2 minutes. No commitment.',
}

const trustSignals = [
  {
    label: '2-minute assessment',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Built for multifamily',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 21V7l8-4 8 4v14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Instant recommendation',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Human follow-up available',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M9 12a4 4 0 100-8 4 4 0 000 8zm8-4a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function AssessmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A6FA8]/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            Free Property Risk Assessment
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Free Property Risk Assessment
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Answer a few questions about your property and get a fast recommendation on risk areas, sensor placement, and the best-fit FlowGuard starting point.
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Built for multifamily owners, operators, and property managers. Takes about 2 minutes. No commitment required.
          </p>

          {/* Trust signals */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustSignals.map(s => (
              <div
                key={s.label}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-200 rounded-full px-4 py-2 text-xs sm:text-sm font-medium"
              >
                <span className="text-[#29ABE2]">{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat / Assessment */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Start the Assessment
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              Tell us about your property
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Ryan — our AI Assessment Assistant — will ask a few operational questions and generate a recommended starting point based on your building profile. A human follow-up is always available.
            </p>
          </div>

          <AssessmentChat />

          <p className="text-center text-xs text-slate-500 mt-5 max-w-xl mx-auto leading-relaxed">
            Your responses inform the recommendation. Nothing is committed; nothing is sent to your carrier or anyone else.
          </p>
        </div>
      </section>

      {/* Fallback CTA — human walkthrough */}
      <section className="relative bg-[#1B2F4E] py-20 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#29ABE2]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5">
            Human Follow-Up
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Want a live walkthrough instead?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            If you&apos;d rather speak with someone directly, our team can review your property and recommend a deployment approach — no assessment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition"
            >
              Request a Demo
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition"
            >
              See How It Works
            </Link>
          </div>
          <p className="text-slate-400 text-xs mt-6">
            Based in Dallas, TX. We typically respond within a few hours.
          </p>
        </div>
      </section>
    </main>
  )
}
