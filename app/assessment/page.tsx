import AssessmentChat from '../components/AssessmentChat'

export const metadata = {
  title: 'Free Property Assessment — FlowGuard Asset Protection',
  description: 'Chat with Ryan, our AI property risk specialist. Get an instant water damage assessment and FlowGuard recommendation for your multifamily property.',
}

export default function AssessmentPage() {
  return (
    <>
      <section className="bg-[#1B2F4E] py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Free Assessment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Talk to Ryan —<br />Our Property Risk Specialist
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Answer a few questions about your property and get an instant recommendation. No sales call required. Ryan is available 24/7.
          </p>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <AssessmentChat />
          <p className="text-center text-xs text-slate-400 mt-4">
            Powered by AI · Available 24/7 · No commitment required
          </p>
        </div>
      </section>
      <section className="bg-white py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Prefer to talk to a human?</h2>
          <p className="text-slate-500 mb-6">We are based in Dallas and typically respond within a few hours.</p>
          <a href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1A6FA8] transition inline-block">
            Contact Us Directly
          </a>
        </div>
      </section>
    </>
  )
}
