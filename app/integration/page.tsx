import Link from 'next/link'
import EscalationTimeline from '../components/EscalationTimeline'

export const metadata = {
  title: 'FlowGuard Integration — How Installation and Alert Routing Work',
  description: 'See how FlowGuard installs on multifamily properties, connects sensors and gateways, routes alerts, guides maintenance teams, and documents every response.',
}

const processSteps = [
  {
    n: '01',
    title: 'Walk the property',
    desc: 'We start by walking the property with your team and identifying the highest-risk water zones: water heaters, riser rooms, laundry areas, kitchens, mechanical rooms, boiler rooms, and past-damage areas.',
  },
  {
    n: '02',
    title: 'Place the sensors',
    desc: 'Sensors are placed where water is most likely to hit first. FlowGuard is hardware-agnostic, so the value is not the logo on the device — it is the response engine behind it.',
  },
  {
    n: '03',
    title: 'Connect the gateway',
    desc: 'The gateway brings the sensors online and gives the property a live connection into the FlowGuard response system.',
  },
  {
    n: '04',
    title: 'Configure the alert chain',
    desc: 'We set the exact response path: maintenance tech, supervisor, property manager, owner, or anyone else who needs to know. Alerts escalate until someone acknowledges and acts.',
  },
  {
    n: '05',
    title: 'Train the maintenance team',
    desc: 'Your team learns the simple action flow: acknowledge, en route, on site, contained, resolved. We build around the people on the ground, not around a spreadsheet.',
  },
  {
    n: '06',
    title: 'Run a live test',
    desc: 'Before we call it ready, we run a live test so your team can see the alert, response page, timestamps, photo evidence, and report generation.',
  },
  {
    n: '07',
    title: 'Document every incident',
    desc: 'When water hits, FlowGuard captures the timeline, response actions, photos, containment, resolution, and reporting package.',
  },
]

const integrationMeaning = [
  'Alerts route to the right people',
  'Mobile response page guides the action',
  'Escalation prevents ignored alerts',
  'Photos and notes can be captured',
  'Reports are generated from the response timeline',
  'Property leadership gets visibility without micromanaging the team',
]

const setupExpectations = [
  { label: 'Time', desc: 'Most pilot setups can be completed in a day depending on property size and access.' },
  { label: 'Access', desc: 'We need access to high-risk mechanical and water areas.' },
  { label: 'Team', desc: 'A maintenance lead or property manager should be available for routing and testing.' },
  { label: 'Test', desc: 'We run a live alert test before calling it ready.' },
]

const responseFlow = [
  'Water detected',
  'Alert sent',
  'Acknowledged',
  'En route',
  'On site',
  'Contained',
  'Resolved',
  'Report generated',
]

const documentedItems = [
  'Detection time',
  'Acknowledgement time',
  'En route time',
  'On-site time',
  'Containment time',
  'Resolution time',
  'Responder name',
  'Photo evidence',
  'Response notes',
  'Escalation path',
  'Estimated loss prevented when applicable',
  'Sample report',
]

export default function Integration() {
  return (
    <main>
      {/* Phase 1 — Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A6FA8]/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            Integration Without the Fairy Dust
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            No magic. No vague &lsquo;seamless integration.&rsquo; Just a clear response system your team can actually use.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-9 sm:mb-10">
            FlowGuard fits into the way multifamily maintenance already works. We walk the property, identify the highest-risk water zones, install sensors, connect the gateway, configure escalation, and train your team on the response flow. It is a real install, not a magic wand — and that is exactly why it works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]">
              Book My Free Water-Risk Walk
            </Link>
            <Link href="/sample-report" className="border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              View Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* Phase 2 — Integration process */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Install</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              From site walk to handled incident.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map(({ n, title, desc }) => (
              <div key={n} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold font-mono text-[#29ABE2]">{n}</span>
                  <h3 className="font-bold text-[#1B2F4E]">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 3 — What integration really means */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">Definitions</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                What we mean by integration.
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                <p>
                  We do not mean a vague software promise. We mean FlowGuard becomes part of your real response process.
                </p>
                <p>
                  Your team gets alerts through the channels they already use. The response page works on a phone. Escalation follows the chain you approve. Reports are generated from the actual response record. The system is not trying to replace your maintenance team — it is there to back them up.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {integrationMeaning.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-[#162844] border border-white/10 rounded-xl px-5 py-4">
                  <svg className="w-5 h-5 mt-0.5 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm sm:text-base text-slate-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 4 — Install expectations */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">Setup</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
              What to expect during setup.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Setup is not complicated, but it is real. We need access to the right areas, a quick walkthrough with someone who knows the property, and time to test alert routing before the system goes live.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {setupExpectations.map(({ label, desc }) => (
              <div key={label} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-6 sm:p-7">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#29ABE2] mb-3">{label}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 5 — Response flow visual */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Response Path</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              One path, start to finish.
            </h2>
          </div>

          {/* Linear flow */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-14 sm:mb-16">
            {responseFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="bg-white border border-slate-200 text-[#1B2F4E] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
                  {step}
                </span>
                {i < responseFlow.length - 1 && (
                  <span aria-hidden className="text-[#29ABE2] font-bold">&rarr;</span>
                )}
              </div>
            ))}
          </div>

          {/* Escalation mini-chain */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {['Tier 1', 'Tier 2', 'Tier 3'].map((tier, i) => (
                  <div key={tier} className="flex items-center gap-3">
                    <span className="bg-[#1B2F4E] text-white text-sm font-semibold px-4 py-2 rounded-full">{tier}</span>
                    {i < 2 && <span aria-hidden className="text-[#29ABE2] font-bold">&rarr;</span>}
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                If the first person does not act, the system keeps moving. The response does not depend on one phone being picked up.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-slate-100">
              <EscalationTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Phase 6 — Reporting / documentation */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Record</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              What gets documented.
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {documentedItems.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4">
                <svg className="w-5 h-5 mt-0.5 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/sample-report" className="inline-flex items-center text-sm sm:text-base font-semibold text-[#29ABE2] hover:text-[#1A6FA8] transition">
            View Sample Report &rarr;
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed mt-6 max-w-2xl">
            Reports support ownership, maintenance review, and insurance conversations. They are not claim determinations and do not guarantee coverage.
          </p>
        </div>
      </section>

      {/* Phase 7 — Final CTA */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Want to see where FlowGuard would go on your property?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Book a free water-risk walk. We&rsquo;ll identify your highest-risk leak zones, show where protection would go first, and explain what the response path would look like for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]">
              Book My Free Water-Risk Walk
            </Link>
            <Link href="/sample-report" className="inline-block border border-white/20 text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              View Sample Report
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
