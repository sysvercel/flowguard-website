import Link from 'next/link'
import WaterRiskGlowBackground from '../components/WaterRiskGlowBackground'
import IncidentCommandTimeline from '../components/IncidentCommandTimeline'
import ReportPreviewCard from '../components/ReportPreviewCard'

export const metadata = {
  title: 'FlowGuard Client Portal — Properties, Devices, Incidents, Reports',
  description:
    'See every property, device, incident, and report in one place. The FlowGuard client portal gives property managers, owners, and maintenance teams real-time water-risk visibility — scoped to their role.',
}

const overviewCards: { eyebrow: string; title: string; desc: string; icon: React.ReactNode }[] = [
  {
    eyebrow: 'Properties',
    title: 'Property health',
    desc: 'Every building you protect, with live coverage status, protected zones, and what needs attention today.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 21V7l8-4 8 4v14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    eyebrow: 'Incidents',
    title: 'Incident activity',
    desc: 'Open and resolved events with the full response timeline — detection, acknowledgment, on-site, containment, resolution.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    eyebrow: 'Devices',
    title: 'Device health',
    desc: 'Per-sensor connectivity, battery, signal quality, armed state, and assigned zone across the whole portfolio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M9 7h6M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    eyebrow: 'Records',
    title: 'Reports & documents',
    desc: 'Monthly summaries, per-incident insurance reports, and quarterly packages — exported from one source of truth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.6a1 1 0 0 1 .7.3l5.4 5.4a1 1 0 0 1 .3.7V19a2 2 0 0 1-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    eyebrow: 'Health',
    title: 'Scorecard & readiness',
    desc: 'A clear read on whether coverage is actually ready — contacts, on-call, install photos, and escalation tiers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 3l7 3v5c0 4.2-2.9 7.5-7 8.6C7.9 18.5 5 15.2 5 11V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 12l1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    eyebrow: 'Records',
    title: 'Activity & change audit',
    desc: 'A timestamped trail of every action and configuration change — who did what, when, attributed and immutable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

const monitoredZones: { zone: string; tag: string; risk?: boolean }[] = [
  { zone: 'Mechanical Room', tag: 'High sensitivity' },
  { zone: 'Main Riser', tag: 'Standard' },
  { zone: 'Unit 204 \u00b7 Kitchen', tag: 'Standard' },
  { zone: 'Laundry', tag: 'Standard' },
  { zone: 'Water Heater', tag: 'High-risk zone', risk: true },
  { zone: 'Boiler Room', tag: 'High-risk zone', risk: true },
]

const deviceStatus: [string, string, boolean?][] = [
  ['Connectivity', 'Online'],
  ['Sensor state', 'Dry'],
  ['Battery', '99%'],
  ['Armed', 'Yes'],
]

const deviceSignal: [string, string][] = [
  ['RSSI', '-55 dBm'],
  ['SNR', '13.75 dB'],
  ['Zone sensitivity', 'Standard'],
  ['Last heartbeat', '2 min ago'],
]

const readinessChecks: { label: string; state: 'ok' | 'pending' }[] = [
  { label: 'Provisioned & online', state: 'ok' },
  { label: 'Assigned to a zone', state: 'ok' },
  { label: 'Heartbeat healthy', state: 'ok' },
  { label: 'Battery healthy', state: 'ok' },
  { label: 'Install photo uploaded', state: 'pending' },
]

const scorecardItems: { label: string; state: 'ok' | 'pending' }[] = [
  { label: 'Tier 1 contacts configured', state: 'ok' },
  { label: 'On-call coverage tonight', state: 'ok' },
  { label: 'Tier 2 backup assigned', state: 'ok' },
  { label: 'Escalation tiers set', state: 'ok' },
  { label: 'All devices reporting', state: 'ok' },
  { label: 'Install photos on file', state: 'pending' },
]

const activityTrail: { action: string; actor: string; time: string }[] = [
  { action: 'Incident resolved — auto-closed after dry confirmation', actor: 'system', time: '02:53 duration' },
  { action: 'Photo evidence uploaded (6 attached)', actor: 'maintenance', time: 'Unit 204' },
  { action: 'On-site arrival logged', actor: 'on-call', time: 'Main Riser' },
  { action: 'Incident acknowledged via SMS', actor: 'on-call', time: 'Tier 1' },
  { action: 'Escalation tier updated', actor: 'admin', time: 'change audit' },
]

const reportTypes: { name: string; desc: string }[] = [
  { name: 'Monthly Summary', desc: 'System health and incident overview for the period.' },
  { name: 'Per-Incident Insurance Report', desc: 'Full lifecycle record for any single event.' },
  { name: 'Monthly Insurance Package', desc: 'Every incident for the month in one PDF, cover page included.' },
  { name: 'Quarterly Package', desc: 'Three months of documentation for reviews.' },
  { name: 'Carrier Renewal Bundle', desc: 'A clean packet to bring into a renewal conversation.' },
  { name: 'Maintenance Recap', desc: 'What happened, what was done, and by whom.' },
]

function StatusValue({ value }: { value: string }) {
  const positive = ['Online', 'Dry', 'Yes'].includes(value)
  return (
    <span className={`font-mono text-sm font-semibold ${positive ? 'text-emerald-300' : 'text-white'}`}>
      {value}
    </span>
  )
}

function CheckRow({ label, state }: { label: string; state: 'ok' | 'pending' }) {
  return (
    <li className="flex items-center gap-2.5 text-xs sm:text-sm">
      <span
        aria-hidden
        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
          state === 'ok'
            ? 'bg-emerald-400/15 text-emerald-300'
            : 'bg-[#F59E0B]/15 text-[#F59E0B]'
        }`}
      >
        {state === 'ok' ? (
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden>
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden>
            <path d="M12 8v5m0 3h.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className={state === 'ok' ? 'text-slate-300' : 'text-slate-200'}>{label}</span>
      {state === 'pending' && (
        <span className="ml-auto text-[10px] uppercase tracking-[0.16em] text-[#F59E0B]">Pending</span>
      )}
    </li>
  )
}

export default function DashboardPage() {
  return (
    <main className="bg-[#0F1F38]">
      {/* Hero */}
      <section className="relative bg-[#1B2F4E] overflow-hidden">
        <WaterRiskGlowBackground radar />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
                <span className="fg-node" />
                <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.25em] uppercase">
                  FlowGuard Client Portal
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                See every property, device, incident, and report in one place.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-10">
                The client portal is where property managers, owners, and maintenance teams watch coverage in
                real time. Every sensor, every incident, every report &mdash; scoped to exactly what each role
                should see.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex justify-center bg-[#29ABE2] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]"
                >
                  Book My Free Water-Risk Walk
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex justify-center border border-white/20 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Portal frame mock */}
            <div className="fg-command-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  FlowGuard Portal
                </span>
                <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30 ml-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" /> Live
                </span>
              </div>
              <div className="grid grid-cols-3">
                {/* sidebar */}
                <div className="col-span-1 border-r border-white/10 p-3 space-y-3">
                  {[
                    ['Overview', ['Home', 'Incidents', 'Properties']],
                    ['Health', ['Scorecard', 'Devices']],
                    ['Records', ['Reports', 'Activity']],
                  ].map(([group, items]) => (
                    <div key={group as string}>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-slate-600 mb-1.5">{group}</p>
                      <ul className="space-y-1">
                        {(items as string[]).map((item, idx) => (
                          <li
                            key={item}
                            className={`text-[10px] sm:text-xs rounded-md px-2 py-1 ${
                              group === 'Overview' && idx === 0
                                ? 'bg-[#29ABE2]/15 text-[#29ABE2] font-semibold'
                                : 'text-slate-400'
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* content */}
                <div className="col-span-2 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-3">Portfolio overview</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      ['4', 'Properties'],
                      ['38', 'Protected zones'],
                      ['0', 'Open incidents'],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-2">
                        <p className="text-lg font-bold text-[#29ABE2] leading-none">{value}</p>
                        <p className="text-[8px] uppercase tracking-[0.1em] text-slate-500 mt-1 leading-tight">{label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-2">What needs attention</p>
                  <ul className="space-y-1.5">
                    {[
                      ['Install photo pending', 'Unit 117'],
                      ['Repeat-risk zone flagged', 'Mechanical Room'],
                    ].map(([msg, where]) => (
                      <li key={msg} className="flex items-center gap-2 text-[10px] sm:text-xs">
                        <span className="fg-node fg-node-amber" />
                        <span className="text-slate-300">{msg}</span>
                        <span className="ml-auto text-slate-600 font-mono">{where}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nav strip */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-5 flex-wrap mt-14">
            {['Home', 'Incidents', 'Properties', 'Scorecard', 'Devices', 'Reports', 'Activity'].map((p, i, arr) => (
              <div key={p} className="flex items-center gap-3 lg:gap-5">
                <span className="text-xs lg:text-sm font-semibold text-slate-400 tracking-wider uppercase">{p}</span>
                {i < arr.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]/40" aria-hidden />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal overview cards */}
      <section className="relative bg-[#0F1F38] overflow-hidden py-20 sm:py-24">
        <WaterRiskGlowBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Inside the portal
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              One login. The whole picture.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Everything FlowGuard knows about your buildings, organized the way the people running them
              actually work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {overviewCards.map(({ eyebrow, title, desc, icon }) => (
              <div key={title} className="fg-command-card rounded-2xl p-6 sm:p-7 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center fg-border-glow">
                    <span className="w-5 h-5">{icon}</span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2.5 leading-snug">{title}</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property overview + zone inventory */}
      <section className="relative bg-[#1B2F4E] overflow-hidden py-20 sm:py-24">
        <WaterRiskGlowBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
                Property view
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
                Open a property and see which zones are monitored.
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-4">
                Each property opens into a clear inventory of monitored zones &mdash; mechanical rooms, water
                heaters, risers, laundry areas, and high-risk unit locations &mdash; with the device status
                attached to each zone.
              </p>
              <ul className="space-y-3 mt-6">
                {['Oakridge Apartments'].map((name) => (
                  <li key={name} className="flex items-center gap-3 fg-command-card rounded-xl px-4 py-3">
                    <span className="fg-node" />
                    <span className="text-sm sm:text-base font-semibold text-white">{name}</span>
                    <span className="fg-chip text-emerald-300 border-emerald-400/30 bg-emerald-400/10 ml-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Protected
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Monitored Zone Inventory */}
            <div className="fg-command-card rounded-2xl p-5 sm:p-6 w-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="fg-node" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Monitored Zone Inventory
                  </span>
                </div>
                <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30">Device status</span>
              </div>
              <ul className="space-y-2">
                {monitoredZones.map((z) => (
                  <li
                    key={z.zone}
                    className="flex flex-wrap items-center gap-2 sm:gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5"
                  >
                    <span className={z.risk ? 'fg-node fg-node-amber' : 'fg-node'} />
                    <span className="text-xs sm:text-sm font-medium text-white">{z.zone}</span>
                    <span className="fg-chip text-emerald-300 border-emerald-400/30 bg-emerald-400/10 ml-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
                    </span>
                    <span
                      className={`fg-chip ${
                        z.risk
                          ? 'text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10'
                          : 'text-slate-400 border-white/15'
                      }`}
                    >
                      {z.tag}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 text-[10px] sm:text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Online &amp; reporting
                </span>
                <span className="flex items-center gap-2">
                  <span className="fg-node" /> Armed
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" /> High-risk zone
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device health */}
      <section className="relative bg-[#0F1F38] overflow-hidden py-20 sm:py-24">
        <WaterRiskGlowBackground fine />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Device profile card */}
            <div className="fg-command-card rounded-2xl overflow-hidden order-2 lg:order-1">
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="fg-node" />
                  <span className="text-sm font-bold text-white">Unit 204 &middot; Kitchen</span>
                </div>
                <span className="fg-chip text-emerald-300 border-emerald-400/30 bg-emerald-400/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
                </span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {deviceStatus.map(([label, value]) => (
                  <div key={label} className="bg-[#162844] px-5 sm:px-6 py-4">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-1">{label}</p>
                    <StatusValue value={value} />
                  </div>
                ))}
              </div>
              <div className="px-5 sm:px-6 py-5 border-t border-white/10 space-y-2.5">
                {deviceSignal.map(([label, value]) => (
                  <div key={label} className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-500">{label}</span>
                    <span className="font-mono text-slate-200">{value}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 sm:px-6 py-5 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-3">Device readiness</p>
                <ul className="space-y-2.5">
                  {readinessChecks.map((c) => (
                    <CheckRow key={c.label} label={c.label} state={c.state} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
                Device health
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
                Every sensor accounted for &mdash; continuously.
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-4">
                Each device opens into a full profile: connectivity, sensor state, battery, armed status,
                signal quality, and the zone it is assigned to. Offline sensors, low batteries, and freeze-risk
                conditions surface before they become coverage gaps.
              </p>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                Coverage stays real, not theoretical &mdash; because the portal monitors the sensors, not just
                what the sensors report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scorecard / readiness */}
      <section className="relative bg-[#1B2F4E] overflow-hidden py-20 sm:py-24">
        <WaterRiskGlowBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
                Readiness scorecard
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
                Know the coverage is ready before you need it.
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-4">
                The scorecard answers one question honestly: if a leak happened tonight, would the response
                actually work? It checks contacts, on-call coverage, escalation tiers, device health, and
                install photos &mdash; and flags anything that would weaken the response.
              </p>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                No green-light theater. If something is incomplete, it says so.
              </p>
            </div>
            <div className="fg-command-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="fg-node" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Property readiness
                  </span>
                </div>
                <span className="font-mono text-2xl font-bold text-[#29ABE2]">92%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-7">
                <div className="h-full rounded-full bg-[#29ABE2]" style={{ width: '92%' }} />
              </div>
              <ul className="space-y-3">
                {scorecardItems.map((c) => (
                  <CheckRow key={c.label} label={c.label} state={c.state} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Incident + audit trail */}
      <section className="relative bg-[#0F1F38] overflow-hidden py-20 sm:py-24">
        <WaterRiskGlowBackground radar />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
              Incidents & audit trail
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              A complete, ordered record of the entire event.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Every incident opens into a response view with the full timeline and every action attributed and
              timestamped. The same record feeds the report &mdash; no duplicate documentation step.
            </p>
          </div>

          <IncidentCommandTimeline className="mb-10 sm:mb-12" />

          <div className="fg-command-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <span className="fg-node" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Activity & change audit
                </span>
              </div>
              <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30">Immutable</span>
            </div>
            <ul className="space-y-4">
              {activityTrail.map((row) => (
                <li key={row.action} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#29ABE2] shrink-0" aria-hidden />
                  <p className="text-sm text-slate-200 leading-snug flex-1">{row.action}</p>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-slate-500 shrink-0">{row.actor}</span>
                  <span className="hidden sm:block font-mono text-[11px] text-slate-500 shrink-0 w-28 text-right">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="relative bg-[#1B2F4E] overflow-hidden py-20 sm:py-24">
        <WaterRiskGlowBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
                Reports & documents
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
                Documentation, generated automatically.
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-7">
                Every incident produces a timestamped record &mdash; the same one your team uses during the
                event and pulls afterward. Export the formats you need, all from one source of truth.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {reportTypes.map((r) => (
                  <div key={r.name} className="fg-command-card rounded-xl p-4">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 text-[#29ABE2] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.6a1 1 0 0 1 .7.3l5.4 5.4a1 1 0 0 1 .3.7V19a2 2 0 0 1-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-white leading-snug">{r.name}</p>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">{r.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mt-6">
                FlowGuard documentation is built to support an insurance conversation. It is not a guarantee of
                claim approval, premium reduction, or coverage &mdash; those decisions belong to your carrier.
              </p>
            </div>
            <ReportPreviewCard className="lg:sticky lg:top-28" />
          </div>
        </div>
      </section>

      {/* Maintenance / SMS-first */}
      <section className="relative bg-[#0F1F38] overflow-hidden py-20 sm:py-24">
        <WaterRiskGlowBackground fine />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
            For the maintenance team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            No login required to take action.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            The portal is where managers and owners watch coverage. The people in the building respond by text.
            Acknowledge, route, arrive, contain &mdash; every step lands in the same record the portal shows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Acknowledge', 'Route', 'Arrive', 'Contain'].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30">{step}</span>
                {i < arr.length - 1 && <span className="text-[#29ABE2]/50" aria-hidden>&rarr;</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#1B2F4E] overflow-hidden py-20 sm:py-24 text-center">
        <WaterRiskGlowBackground radar />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            See the portal running on your portfolio.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed">
            We will walk you through a live incident end-to-end and scope what coverage looks like for your
            buildings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.35)]"
            >
              Book My Free Water-Risk Walk
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
