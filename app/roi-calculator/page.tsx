import ROICalculator from '../components/ROICalculator'

export const metadata = {
  title: 'ROI Calculator — FlowGuard Asset Protection',
  description: 'Calculate your return on investment from FlowGuard water leak detection. See break-even timeline, annual savings, and 3-year net ROI for your multifamily property.',
}

export default function ROICalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2F4E] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            ROI Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What&apos;s Water Damage<br />Actually Costing You?
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Adjust the inputs below to see your estimated return on investment, break-even timeline, and 3-year savings with FlowGuard.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <ROICalculator />
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Ready for a Custom Scope?</h2>
          <p className="text-slate-500 mb-8">Every property is different. We&apos;ll put together a custom deployment plan and quote scoped to your specific building, risk profile, and budget.</p>
          <a href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1A6FA8] transition inline-block">
            Request a Custom Quote
          </a>
        </div>
      </section>
    </>
  )
}
