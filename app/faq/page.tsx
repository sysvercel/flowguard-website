import FAQ from '../components/FAQ'

export const metadata = {
  title: 'FAQ — FlowGuard Asset Protection',
  description: 'Answers to the most common questions about FlowGuard water leak detection — installation, operations, pricing, and how the system works for multifamily properties.',
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0E1B30] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions &amp; Answers
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Everything property managers ask before booking a demo — organized by topic.
          </p>
        </div>
      </section>

      <FAQ />
    </>
  )
}
