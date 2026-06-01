import Link from 'next/link'

export const metadata = {
  title: 'Water Risk & ROI — FlowGuard Asset Protection',
  description: 'We will not hand you a fake ROI number. Water damage exposure depends on your building. Book a free water-risk walk and we will scope it honestly.',
}

const exposureFactors = [
  {
    title: 'Building age and plumbing',
    desc: 'Older risers, galvanized supply lines, and aging water heaters fail differently than newer systems.',
  },
  {
    title: 'Water sources on site',
    desc: 'Boiler rooms, rooftop units, in-unit heaters, and shared risers each carry their own failure modes.',
  },
  {
    title: 'How fast a leak is caught',
    desc: 'A leak found in minutes is a mop. A leak found in hours is a unit. The gap is detection plus response.',
  },
  {
    title: 'How fast someone responds',
    desc: 'Detection without a response chain is just a notification. Who acts, and how quickly, drives the damage.',
  },
  {
    title: 'Construction and materials',
    desc: 'Wood-frame, finishes, flooring, and stacked-unit layouts change how far water travels before containment.',
  },
  {
    title: 'Unit count and density',
    desc: 'More units above and below a failure point means more potential for a single event to multiply.',
  },
  {
    title: 'Deductible and coverage terms',
    desc: 'Your deductible and policy language determine what a water event actually costs you out of pocket.',
  },
  {
    title: 'Past water history',
    desc: 'Properties with prior water claims tend to have repeat-risk patterns worth mapping before they recur.',
  },
]

export default function ROICalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2F4E] py-28 sm:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Water Risk &amp; ROI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We are not going to give you fake ROI math.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A slider that spits out a guaranteed savings number is not honest. Your water-damage
            exposure depends on your building, your plumbing, and how fast a leak gets handled — not
            on industry-average assumptions we picked to make a chart look good.
          </p>
        </div>
      </section>

      {/* What actually drives exposure */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              What Actually Drives Cost
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              What a real water-risk assessment looks at
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              These are the factors that decide what a water event costs you. No two properties
              score the same. That is exactly why a one-size slider is misleading.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {exposureFactors.map(f => (
              <div
                key={f.title}
                className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6"
              >
                <h3 className="text-base font-bold text-[#1B2F4E] mb-2 leading-snug">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we will not do */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2F4E] tracking-tight mb-8 text-center">
            What we will not pretend
          </h2>
          <div className="space-y-4">
            {[
              'We will not promise a guaranteed dollar amount you will save.',
              'We will not promise an insurance discount, a lower premium, or a claim outcome.',
              'We will not give you tax advice or quote a tax benefit — that is your accountant\u2019s call.',
              'We will not pick flattering assumptions and call the result your ROI.',
            ].map(line => (
              <div key={line} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-5">
                <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Want a real number? Let us walk your property.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            On a free water-risk walk we map your actual water sources, exposure, and response gaps —
            then scope what FlowGuard would cost and cover for your buildings. No assumptions, no
            slider, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition"
          >
            Book My Free Water-Risk Walk
          </Link>
        </div>
      </section>
    </>
  )
}
