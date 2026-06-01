import Link from 'next/link'
import WaterRiskGlowBackground from '../components/WaterRiskGlowBackground'

export const metadata = {
  title: 'FlowGuard Integrations — REST API, Webhooks, and Ticketing Handoff',
  description: 'How FlowGuard hands off structured leak-incident data to your existing systems through REST API, webhooks, or ticketing/work-order workflows — with honest expectations about what each stack can support.',
}

const handoffGroups = [
  {
    title: 'Incident events',
    items: ['Leak detected', 'Alert sent', 'Acknowledged', 'En route', 'On site', 'Contained', 'Resolved'],
  },
  {
    title: 'Responder activity',
    items: ['Who acknowledged', 'Who contained', 'Response timestamps', 'Ownership changes', 'Action notes'],
  },
  {
    title: 'Evidence',
    items: ['Photos', 'Notes', 'Location / zone', 'Severity', 'Estimated loss prevented when applicable'],
  },
  {
    title: 'Reports',
    items: ['Maintenance recap', 'Insurance-style documentation', 'Monthly summaries', 'Delivery logs'],
  },
  {
    title: 'Status and closeout',
    items: ['False positive', 'Known issue', 'Resolved', 'Pending dry confirmation', 'Source / category when available'],
  },
]

const methods = [
  {
    tag: 'Method 01',
    name: 'REST API',
    body: 'For teams with internal tools or a system that can pull data, FlowGuard can expose structured incident records through scoped API endpoints. This is best when your team wants controlled access to incident history, reports, and response status.',
    note: 'Access is provisioned per implementation as a scoped path — not an open, public-by-default endpoint.',
  },
  {
    tag: 'Method 02',
    name: 'Webhooks',
    body: 'For systems that can receive events, FlowGuard can send structured webhook payloads when incidents are created, acknowledged, contained, resolved, or closed out. This is the cleanest way to trigger downstream workflows without asking maintenance to enter the same event twice.',
    note: 'Delivery depends on the receiving system and the field mapping it expects.',
  },
  {
    tag: 'Method 03',
    name: 'Ticketing / Work-Order Handoff',
    body: 'For ticketing or work-order systems, FlowGuard can hand off the incident summary, location, severity, responder actions, and report link. If the receiving system supports an API, we can map directly. If not, we use webhook, email, or report-based handoff.',
    note: 'The goal is not to pretend every platform works the same. The goal is to make sure the water incident does not die inside one dashboard.',
  },
]

const willNotPretend = [
  'We do not promise magic one-click integration.',
  'We do not force your team to abandon existing systems.',
  'We do not hide manual setup behind the word \u2018seamless.\u2019',
  'We do not claim a ticket was created unless the receiving system confirms it.',
  'We do not make your maintenance team enter the same incident twice if a cleaner handoff is available.',
]

const ticketFlow = [
  'Sensor detects water in Unit 204 Kitchen.',
  'FlowGuard opens the response path and alerts the right responder.',
  'Maintenance acknowledges, goes en route, arrives, contains, and resolves.',
  'FlowGuard creates a structured incident record.',
  'Depending on the system, FlowGuard can send a webhook event, create or update a ticket through API, send a structured email to the work-order inbox, or attach or link the incident report.',
  'The property keeps its normal system of record, but the water response gets documented correctly.',
]

const samplePayload = `{
  "event": "incident.resolved",
  "property": "Sunset Apartments",
  "zone": "Unit 204 Kitchen",
  "severity": "standard",
  "detected_at": "...",
  "acknowledged_at": "...",
  "contained_at": "...",
  "resolved_at": "...",
  "responder": "Maintenance Lead",
  "photos_attached": true,
  "report_url": "..."
}`

const accessBullets = [
  'Scoped API keys or approved endpoints',
  'Event-specific webhooks',
  'Property-level access boundaries',
  'Delivery logs where supported',
  'No unnecessary PII',
]

export default function Integration() {
  return (
    <main>
      {/* Phase 1 — Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <WaterRiskGlowBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            REST API &middot; Webhooks &middot; Ticketing Handoff
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            FlowGuard does not need to replace your systems. It gives them better incident data.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            FlowGuard captures the leak response as structured data — detection time, acknowledgement, responder actions, escalation path, photos, notes, containment, resolution, and reports. That record can be handed off through API, webhook, or ticketing workflows depending on what your existing systems support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact" className="bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]">
              Book My Free Water-Risk Walk
            </Link>
            <Link href="/sample-report" className="border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition">
              View Sample Report
            </Link>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-6">
            We will not tell you every system is plug-and-play. Some platforms have clean APIs. Some need webhook handoff. Some need a lighter email/report workflow. We tell you which one you are actually getting before anything is installed.
          </p>
        </div>
      </section>

      {/* Phase 2 — What FlowGuard can hand off */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Payload</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              What FlowGuard can hand off.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {handoffGroups.map(({ title, items }) => (
              <div key={title} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-6 sm:p-7">
                <h3 className="font-bold text-[#1B2F4E] mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <svg className="w-4 h-4 mt-0.5 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 3 — Integration methods */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">Methods</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Three ways to integrate.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {methods.map(({ tag, name, body, note }) => (
              <div key={name} className="bg-[#162844] border border-white/10 rounded-xl p-6 sm:p-7 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#29ABE2] mb-3">{tag}</span>
                <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{body}</p>
                <p className="text-xs text-slate-400 leading-relaxed mt-auto border-t border-white/10 pt-4">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 4 — What we will not pretend */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">The Honest Version</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
                What we will not pretend.
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  We will not claim every PMS, CMMS, or work-order platform integrates the same way. They do not.
                </p>
                <p>
                  Some systems have modern APIs. Some have limited webhooks. Some only accept email-based intake. Some require custom mapping.
                </p>
                <p>
                  FlowGuard&rsquo;s job is to capture the incident cleanly and hand it off in the safest format your stack can actually support.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {willNotPretend.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4">
                  <svg className="w-5 h-5 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 5 — Ticketing / work-order example */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">An Example</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight">
              How a ticket handoff can work.
            </h2>
          </div>
          <ol className="space-y-4">
            {ticketFlow.map((step, i) => (
              <li key={i} className="flex items-start gap-4 bg-white border border-slate-100 rounded-xl px-5 sm:px-6 py-4 sm:py-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
                <span className="w-8 h-8 shrink-0 rounded-full bg-[#29ABE2] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Phase 6 — Sample payload / technical trust */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">Technical Trust</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Structured enough for software. Clear enough for operations.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Every incident becomes a clean, structured record your systems can consume — and your team can read. Exact fields vary by implementation and access level.
              </p>

              {/* Event delivery flow */}
              <div className="fg-command-card rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="fg-node" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">Event delivery</span>
                </div>
                <div className="grid sm:grid-cols-[1fr_auto_1fr] items-center gap-4">
                  {/* Emitted events */}
                  <div className="space-y-2">
                    {['incident.detected', 'incident.acknowledged', 'incident.contained', 'incident.resolved'].map((e) => (
                      <div key={e} className="font-mono text-[11px] text-slate-300 bg-white/[0.03] border border-white/10 rounded-md px-2.5 py-1.5">
                        {e}
                      </div>
                    ))}
                  </div>
                  {/* Connector */}
                  <div className="flex sm:flex-col items-center justify-center gap-1 text-[#29ABE2]">
                    <span aria-hidden className="hidden sm:block text-lg">&rarr;</span>
                    <span aria-hidden className="sm:hidden text-lg">&darr;</span>
                  </div>
                  {/* Destinations */}
                  <div className="space-y-2">
                    {['Webhook endpoint', 'REST API pull', 'Ticket / work order'].map((d) => (
                      <div key={d} className="flex items-center gap-2 text-[11px] text-slate-200 bg-[#29ABE2]/[0.06] border border-[#29ABE2]/20 rounded-md px-2.5 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-4">
                  Which path you get depends on the receiving system. We confirm it before anything is installed.
                </p>
              </div>
            </div>
            <div className="bg-[#0F1F38] border border-white/10 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]/70" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]/70" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-[#29ABE2]/70" aria-hidden />
                <span className="ml-2 text-xs font-mono text-slate-400">webhook payload</span>
              </div>
              <pre className="px-5 py-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed"><code>{samplePayload}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 7 — Security / access expectations */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.2em] uppercase mb-3">Access</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-tight">
                Controlled access, not an open firehose.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Integrations should be scoped. FlowGuard should only send the data a downstream system needs: incident status, location, timestamps, responder actions, and report links. We do not treat integration as permission to spray sensitive property data everywhere.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {accessBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-4">
                  <svg className="w-5 h-5 mt-0.5 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.9} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 8 — Final CTA */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Want to know what your systems can actually support?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            Book a free water-risk walk. We&rsquo;ll look at your property, your maintenance workflow, and the systems your team already uses — then tell you honestly whether API, webhook, ticket handoff, or report-based workflow makes the most sense.
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
