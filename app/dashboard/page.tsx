import Link from 'next/link'

export const metadata = {
  title: 'The FlowGuard Platform — Operational Water Risk Dashboard',
  description: 'Live incident visibility, device health, escalation logic, and claims-ready reporting for multifamily property operators.',
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
      {children}
    </p>
  )
}

function CapabilityCard({
  eyebrow,
  title,
  items,
  variant = 'on-white',
}: {
  eyebrow: string
  title: string
  items: { label: string; hint?: string }[]
  variant?: 'on-white' | 'on-light'
}) {
  const bg = variant === 'on-white' ? 'bg-[#F8FAFC]' : 'bg-white'
  return (
    <div className={`${bg} rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-7 sm:p-8`}>
      <p className="text-[10px] font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
        {eyebrow}
      </p>
      <h3 className="text-lg sm:text-xl font-bold text-[#1B2F4E] tracking-tight mb-6 leading-snug">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.label} className="flex items-start gap-3">
            <span
              className="mt-[7px] w-4 h-4 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center shrink-0"
              aria-hidden
            >
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden>
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[#1B2F4E] font-semibold text-sm sm:text-base leading-snug">
                {item.label}
              </p>
              {item.hint && (
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-0.5">
                  {item.hint}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A6FA8]/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase mb-5 sm:mb-6">
            The FlowGuard Platform
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            The operational control layer behind detection, response, and documentation.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
            Live incident visibility, device health, escalation logic, and claims-ready reporting — one dashboard for the teams that run the buildings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-14">
            <Link
              href="/contact"
              className="inline-flex justify-center bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition"
            >
              Request a Demo
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex justify-center border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition"
            >
              See How It Works
            </Link>
          </div>

          {/* Pillar strip */}
          <div className="hidden sm:flex items-center justify-center gap-3 lg:gap-6 flex-wrap">
            {['Detection', 'Response', 'Escalation', 'Documentation'].map((p, i, arr) => (
              <div key={p} className="flex items-center gap-3 lg:gap-6">
                <span className="text-xs lg:text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  {p}
                </span>
                {i < arr.length - 1 && <span className="w-2 h-2 rounded-full bg-[#29ABE2]/50" aria-hidden />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionEyebrow>Incident Response</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-5">
                A complete, ordered record of the entire event.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                Every incident opens into a dedicated response view — severity, zone, signal context, response metrics, and the full alert chain across SMS, email, and voice. Each responder action is tagged with a timestamp and attribution.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                The same record feeds the claims-ready report. No duplicate documentation step.
              </p>
            </div>
            <CapabilityCard
              eyebrow="Per-Incident Record"
              title="What every incident captures"
              variant="on-white"
              items={[
                { label: 'Detection timestamp', hint: 'Property, zone, sensor, and severity auto-tagged.' },
                { label: 'Alert delivery chain', hint: 'SMS, email, and voice — logged per channel and tier.' },
                { label: 'Responder acknowledgment', hint: 'Attributed to the on-call contact who took ownership.' },
                { label: 'On-site arrival and containment', hint: 'Each status change preserved with its own timestamp.' },
                { label: 'Auto-resolution', hint: 'Incident closes after the configured dry-confirmation window.' },
                { label: 'Audit trail for claims handoff', hint: 'One source of truth for your team and your carrier.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Device Monitoring */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <CapabilityCard
              eyebrow="Per-Sensor Signals"
              title="Monitored continuously, every sensor"
              variant="on-light"
              items={[
                { label: 'Battery level', hint: 'Low-battery warnings fire before coverage is at risk.' },
                { label: 'Signal quality (RSSI / SNR)', hint: 'Each report traced back to the originating gateway.' },
                { label: 'Last heartbeat', hint: 'Offline sensors surface before they become blind spots.' },
                { label: 'Online / offline status', hint: 'Live across the entire portfolio, not polled hourly.' },
                { label: 'Assigned zone', hint: 'Critical, standard, or ambient — each with its own policy.' },
                { label: 'Freeze-risk temperature', hint: 'Early warnings for cold snaps near exposed pipes.' },
              ]}
            />
            <div>
              <SectionEyebrow>Device Monitoring</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-5">
                Every sensor accounted for — continuously.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                The device registry surfaces every sensor across every property — battery level, signal quality, last heartbeat, online status, and assigned zone. Offline devices, low batteries, and freeze-risk conditions are flagged before they become coverage gaps.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Coverage stays real, not theoretical — because the system monitors the sensors, not just what the sensors report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Documentation */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionEyebrow>Reporting & Documentation</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-5">
                Claims-ready documentation, generated automatically.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                Every incident produces a timestamped, audit-ready record — the same one your team uses during the event and your carrier uses after it. Monthly summaries, insurance packages, and quarterly rollups export from the same source of truth.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                No manual reporting. No rebuilding timelines from memory.
              </p>
            </div>
            <CapabilityCard
              eyebrow="Exportable From One Source"
              title="Report formats"
              variant="on-white"
              items={[
                { label: 'Monthly Summary', hint: 'System health and incident overview for a given period.' },
                { label: 'Per-Incident Insurance Report', hint: 'Full lifecycle record for any single event.' },
                { label: 'Monthly Insurance Package', hint: 'All incidents in one PDF, cover page included.' },
                { label: 'Quarterly Rollup', hint: 'Three months of incident documentation for reviews.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Role-Based Views */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <SectionEyebrow>Role-Based Views</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F4E] tracking-tight leading-tight mb-4">
              One platform. The right view for each role.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              FlowGuard exposes the same operational record through scoped, role-specific views — scoped access, scoped data, no cross-contamination between clients or properties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                role: 'Property Manager',
                scope: 'Single Property',
                desc: 'Scoped portal for a single property — active incidents, device health, contacts, and on-demand reports.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M4 21V7l8-4 8 4v14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                role: 'Asset Owner',
                scope: 'Portfolio',
                desc: 'Portfolio-level overview across every property — health scores, incident trends, and executive summaries.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 15l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                role: 'Maintenance Team',
                scope: 'SMS-First',
                desc: 'SMS-first response workflow — acknowledge, route, arrive, contain. No login required to take action.',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M21 12a8 8 0 01-11.4 7.3L3 21l1.7-6.6A8 8 0 1121 12z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map(({ role, scope, desc, icon }) => (
              <div
                key={role}
                className="group bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)] hover:-translate-y-0.5 transition-all duration-300 p-7 sm:p-8 flex flex-col"
              >
                <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <span className="inline-flex items-center bg-slate-100 text-slate-500 text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded">
                    {scope}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1B2F4E] tracking-tight mt-6 mb-3 leading-snug">
                  {role}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-slate-500 mt-10 max-w-xl mx-auto leading-relaxed">
            Scoped access, scoped data. Every role sees exactly what they need — nothing more.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2F4E] py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See the platform running on your portfolio.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            We&apos;ll walk you through a live incident end-to-end and scope a deployment for your buildings.
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
        </div>
      </section>
    </main>
  )
}
