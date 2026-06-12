'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * A working replica of the FlowGuard client portal, running on simulated
 * data. Visitors click through real screens, then run a scripted "2 AM
 * leak" and watch the response engine carry it from detection to a closed,
 * documented record. Every number is representative and labeled as such.
 */

type TabId = 'overview' | 'incidents' | 'devices' | 'reports'

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'incidents', label: 'Incidents' },
  { id: 'devices', label: 'Devices' },
  { id: 'reports', label: 'Reports' },
]

/** The scripted 2 AM leak. `delay` is real ms after the previous step. */
const SIM_SCRIPT: { delay: number; clock: string; elapsed: string; text: string; actor: string }[] = [
  { delay: 400, clock: '02:14:07', elapsed: 'T+0:00', text: 'Water detected — Unit 204 · Kitchen. Incident #2847 opened.', actor: 'sensor' },
  { delay: 2400, clock: '02:14:09', elapsed: 'T+0:02', text: 'Tier 1 alert dispatched — SMS, email, and voice to on-call (M. Torres).', actor: 'system' },
  { delay: 3000, clock: '02:14:54', elapsed: 'T+0:47', text: 'Acknowledged via SMS reply. M. Torres owns the incident.', actor: 'tier 1' },
  { delay: 3000, clock: '02:16:38', elapsed: 'T+2:31', text: 'En route confirmed — guided containment steps sent to responder.', actor: 'tier 1' },
  { delay: 3400, clock: '02:20:19', elapsed: 'T+6:12', text: 'On site. Supply valve isolated — source: failed supply line.', actor: 'tier 1' },
  { delay: 3400, clock: '02:26:55', elapsed: 'T+12:48', text: 'Contained. Cleanup logged, 4 photos uploaded to the record.', actor: 'tier 1' },
  { delay: 3800, clock: '06:31:02', elapsed: 'T+4h 16m', text: 'Sensor dry for 4 consecutive hours — incident auto-closed.', actor: 'system' },
  { delay: 2400, clock: '06:31:04', elapsed: 'T+4h 16m', text: 'Per-incident report generated — detection to containment in 12:48, fully documented.', actor: 'system' },
]

const CONTAINED_AT_STEP = 5 // sensor stops reading wet after this step
const CLOSED_AT_STEP = 6 // incident closes at this step

const EVENTS_30D = [0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]

const PROPERTIES: { name: string; zones: number; readiness: string }[] = [
  { name: 'Oakridge Apartments', zones: 12, readiness: '92%' },
  { name: 'Cedar Court', zones: 9, readiness: '100%' },
  { name: 'Bayview Flats', zones: 8, readiness: '88%' },
  { name: 'Stonebridge Mews', zones: 9, readiness: '95%' },
]

const DEVICES: { zone: string; battery: string; rssi: string; beat: string; note?: string }[] = [
  { zone: 'Unit 204 · Kitchen', battery: '99%', rssi: '-55 dBm', beat: '2 min ago' },
  { zone: 'Boiler Room', battery: '97%', rssi: '-61 dBm', beat: '1 min ago' },
  { zone: 'Water Heater', battery: '98%', rssi: '-58 dBm', beat: '3 min ago' },
  { zone: 'Mechanical Room', battery: '96%', rssi: '-63 dBm', beat: '2 min ago' },
  { zone: 'Main Riser', battery: '99%', rssi: '-52 dBm', beat: '1 min ago' },
  { zone: 'Riser Closet', battery: '98%', rssi: '-57 dBm', beat: '4 min ago' },
  { zone: 'Unit 302 · Laundry', battery: '95%', rssi: '-66 dBm', beat: '2 min ago' },
  { zone: 'Unit 117 · Laundry', battery: '93%', rssi: '-64 dBm', beat: '5 min ago', note: 'Install photo pending' },
]

const PAST_INCIDENTS: { id: string; where: string; what: string; duration: string; date: string }[] = [
  { id: '#2843', where: 'Cedar Court · Boiler Room', what: 'Condensate line drip', duration: '9:02', date: 'May 28' },
  { id: '#2839', where: 'Oakridge · Unit 117 Laundry', what: 'Washer supply hose', duration: '16:40', date: 'May 19' },
  { id: '#2831', where: 'Bayview · Mechanical Room', what: 'Freeze-risk advisory', duration: 'advisory', date: 'May 11' },
]

const BASE_REPORTS: { name: string; meta: string }[] = [
  { name: 'Monthly Summary — May 2026', meta: 'PDF · 14 pages' },
  { name: 'Monthly Insurance Package — May 2026', meta: 'PDF · every incident, cover page included' },
  { name: 'Quarterly Package — Q1 2026', meta: 'PDF · 3 months of documentation' },
]

function Sparkbars({ withTonight }: { withTonight: boolean }) {
  const data = [...EVENTS_30D]
  if (withTonight) data[data.length - 1] = 1
  return (
    <svg viewBox="0 0 300 44" className="w-full h-11" aria-hidden>
      {data.map((v, i) => {
        const h = v === 0 ? 2 : v * 16
        const tonight = withTonight && i === data.length - 1
        return (
          <rect
            key={i}
            x={i * 10}
            y={44 - h}
            width={7}
            height={h}
            rx={1.5}
            fill={tonight ? '#F59E0B' : v > 0 ? '#29ABE2' : 'rgba(148,197,232,0.18)'}
          />
        )
      })}
    </svg>
  )
}

function StateChip({ wet, drying }: { wet: boolean; drying?: boolean }) {
  if (wet)
    return (
      <span className="fg-chip text-red-300 border-red-400/40 bg-red-400/10">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Wet
      </span>
    )
  return (
    <span className="fg-chip text-emerald-300 border-emerald-400/30 bg-emerald-400/10">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {drying ? 'Dry · verified' : 'Dry'}
    </span>
  )
}

export default function PortalDemo() {
  const [tab, setTab] = useState<TabId>('overview')
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const [step, setStep] = useState(-1) // index into SIM_SCRIPT of the latest fired event
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  function runSim() {
    if (phase === 'running') return
    setPhase('running')
    setStep(-1)
    setTab('incidents')
    const fire = (i: number) => {
      timer.current = setTimeout(() => {
        setStep(i)
        if (i + 1 < SIM_SCRIPT.length) fire(i + 1)
        else setPhase('done')
      }, SIM_SCRIPT[i].delay)
    }
    fire(0)
  }

  const wet = phase !== 'idle' && step >= 0 && step < CONTAINED_AT_STEP
  const incidentOpen = phase !== 'idle' && step >= 0 && step < CLOSED_AT_STEP
  const resolved = phase !== 'idle' && step >= CLOSED_AT_STEP
  const reportReady = phase !== 'idle' && step >= SIM_SCRIPT.length - 1
  const events = step >= 0 ? SIM_SCRIPT.slice(0, step + 1).reverse() : []
  const clock = phase === 'idle' ? '02:13:58' : SIM_SCRIPT[Math.max(step, 0)].clock

  const kpis: { label: string; value: string; alert?: boolean }[] = [
    { label: 'Properties', value: '4' },
    { label: 'Protected zones', value: '38' },
    { label: 'Sensors online', value: '38/38' },
    { label: 'Open incidents', value: incidentOpen ? '1' : '0', alert: incidentOpen },
  ]

  return (
    <div className="fg-command-card rounded-2xl overflow-hidden text-left">
      {/* ── Window chrome ── */}
      <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-2 sm:ml-3 text-[10px] uppercase tracking-[0.18em] text-slate-500 hidden sm:block">
          FlowGuard Portal
        </span>
        <span className="fg-chip text-[#F59E0B] border-[#F59E0B]/30 ml-2">Simulated data</span>
        <span className="ml-auto font-mono text-[11px] sm:text-xs text-slate-400 tabular-nums" aria-label="Simulated portal clock">
          {clock} AM
        </span>
      </div>

      {/* ── Sim control strip ── */}
      <div className="flex flex-wrap items-center gap-3 px-4 sm:px-5 py-3 border-b border-white/10 bg-white/[0.02]">
        <button
          onClick={runSim}
          disabled={phase === 'running'}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition ${
            phase === 'running'
              ? 'bg-white/5 text-slate-500 cursor-default'
              : 'bg-[#F59E0B] text-[#0E1B30] hover:bg-[#FBBF24]'
          }`}
        >
          {phase === 'idle' && (
            <>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
              Simulate a 2 AM leak
            </>
          )}
          {phase === 'running' && (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Incident in progress…
            </>
          )}
          {phase === 'done' && (
            <>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="M4 4v6h6M20 20v-6h-6M4 10a8 8 0 0114-3M20 14a8 8 0 01-14 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Run it again
            </>
          )}
        </button>
        <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
          {phase === 'idle' && 'Watch a leak go from first drop to a closed, documented record — no one wakes up the owner.'}
          {phase === 'running' && 'The response engine is escalating until a human acts. Click around — the whole portal reacts.'}
          {phase === 'done' && 'Contained in 12:48, auto-closed after dry confirmation. The report is waiting in Reports.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-[170px_1fr] lg:grid-cols-[190px_1fr]">
        {/* ── Sidebar / tab bar ── */}
        <nav className="border-b sm:border-b-0 sm:border-r border-white/10 p-2 sm:p-3 flex sm:flex-col gap-1 overflow-x-auto" aria-label="Demo portal sections">
          {TABS.map(t => {
            const active = tab === t.id
            const badge = t.id === 'incidents' && incidentOpen
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                aria-pressed={active}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
                  active ? 'bg-[#29ABE2]/15 text-[#29ABE2]' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {t.label}
                {badge && (
                  <span className="ml-auto inline-flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-red-400/20 text-red-300 text-[10px] font-mono font-bold px-1">
                    1
                  </span>
                )}
                {t.id === 'reports' && reportReady && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#29ABE2]" aria-hidden />
                )}
              </button>
            )
          })}
          <div className="hidden sm:block mt-auto pt-4 px-3 pb-1">
            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600 leading-relaxed">
              Demo portal
              <br />
              Roles &amp; data simulated
            </p>
          </div>
        </nav>

        {/* ── Content ── */}
        <div className="min-h-[380px] sm:min-h-[420px] flex flex-col">
          {/* Incident banner */}
          <AnimatePresence>
            {incidentOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-red-400/10 border-b border-red-400/20">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" aria-hidden />
                  <span className="text-xs sm:text-sm font-semibold text-red-200">
                    Active incident #2847 — Unit 204 · Kitchen
                  </span>
                  <span className="ml-auto font-mono text-[11px] text-red-200/80">
                    {SIM_SCRIPT[Math.max(step, 0)].elapsed}
                  </span>
                </div>
              </motion.div>
            )}
            {resolved && (
              <motion.div
                key="resolved"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-emerald-400/10 border-b border-emerald-400/20">
                  <svg className="w-3.5 h-3.5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-200">
                    Incident #2847 resolved — contained in 12:48, auto-closed after dry confirmation
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4 sm:p-5 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
              >
                {/* ─── OVERVIEW ─── */}
                {tab === 'overview' && (
                  <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
                      {kpis.map(k => (
                        <div
                          key={k.label}
                          className={`rounded-lg border px-3 py-2.5 ${
                            k.alert ? 'border-red-400/40 bg-red-400/10' : 'border-white/10 bg-white/[0.02]'
                          }`}
                        >
                          <p className={`text-xl font-bold leading-none font-mono ${k.alert ? 'text-red-300' : 'text-[#29ABE2]'}`}>
                            {k.value}
                          </p>
                          <p className="text-[9px] uppercase tracking-[0.14em] text-slate-500 mt-1.5 leading-tight">{k.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3.5 mb-5">
                      <div className="flex items-baseline justify-between mb-2">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Water events · last 30 days</p>
                        <p className="font-mono text-[11px] text-slate-400">
                          {phase !== 'idle' && step >= 0 ? '10 caught · 0 missed' : '9 caught · 0 missed'}
                        </p>
                      </div>
                      <Sparkbars withTonight={phase !== 'idle' && step >= 0} />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-2">Portfolio</p>
                    <ul className="space-y-1.5 mb-5">
                      {PROPERTIES.map(p => (
                        <li key={p.name} className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
                          <span className={incidentOpen && p.name === 'Oakridge Apartments' ? 'fg-node fg-node-amber' : 'fg-node'} />
                          <span className="text-xs sm:text-sm font-medium text-white">{p.name}</span>
                          <span className="hidden sm:block font-mono text-[11px] text-slate-500 ml-auto">{p.zones} zones</span>
                          <span className={`font-mono text-[11px] sm:ml-4 ml-auto ${p.readiness === '100%' ? 'text-emerald-300' : 'text-slate-300'}`}>
                            {p.readiness} ready
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-2">Needs attention</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <span className="fg-node fg-node-amber" />
                        <span className="text-slate-300">Install photo pending</span>
                        <span className="ml-auto font-mono text-[11px] text-slate-500">Unit 117</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <span className="fg-node fg-node-amber" />
                        <span className="text-slate-300">Repeat-risk zone flagged for review</span>
                        <span className="ml-auto font-mono text-[11px] text-slate-500">Mechanical Room</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* ─── INCIDENTS ─── */}
                {tab === 'incidents' && (
                  <div>
                    {events.length === 0 ? (
                      <div className="rounded-lg border border-dashed border-white/15 px-4 py-8 text-center mb-5">
                        <p className="text-sm text-slate-300 font-semibold mb-1">No open incidents.</p>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                          That&rsquo;s the normal state. Press{' '}
                          <button onClick={runSim} className="text-[#F59E0B] font-semibold hover:underline">
                            Simulate a 2 AM leak
                          </button>{' '}
                          to watch what happens when it isn&rsquo;t.
                        </p>
                      </div>
                    ) : (
                      <div className="mb-5">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-2">
                          Incident #2847 — response log
                        </p>
                        <ul className="space-y-1.5" aria-live="polite">
                          <AnimatePresence initial={false}>
                            {events.map(e => (
                              <motion.li
                                key={e.clock + e.text}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25 }}
                                className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2"
                              >
                                <span className="font-mono text-[10px] sm:text-[11px] text-[#29ABE2] mt-0.5 shrink-0 tabular-nums">
                                  {e.clock}
                                </span>
                                <span className="text-xs sm:text-sm text-slate-200 leading-snug flex-1">{e.text}</span>
                                <span className="hidden sm:block text-[9px] uppercase tracking-[0.14em] text-slate-500 mt-0.5 shrink-0">
                                  {e.actor}
                                </span>
                              </motion.li>
                            ))}
                          </AnimatePresence>
                        </ul>
                      </div>
                    )}

                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-2">Recent — resolved</p>
                    <ul className="space-y-1.5">
                      {PAST_INCIDENTS.map(inc => (
                        <li key={inc.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
                          <span className="font-mono text-[11px] text-slate-500">{inc.id}</span>
                          <span className="text-xs sm:text-sm font-medium text-white">{inc.where}</span>
                          <span className="text-[11px] text-slate-500 hidden lg:block">{inc.what}</span>
                          <span className="ml-auto fg-chip text-emerald-300 border-emerald-400/30 bg-emerald-400/10">
                            {inc.duration === 'advisory' ? 'Advisory' : `Contained ${inc.duration}`}
                          </span>
                          <span className="font-mono text-[10px] text-slate-600">{inc.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ─── DEVICES ─── */}
                {tab === 'devices' && (
                  <div>
                    <div className="rounded-lg border border-white/10 overflow-hidden">
                      <div className="hidden sm:grid grid-cols-[1fr_90px_70px_80px_90px] gap-2 px-3 py-2 bg-white/[0.03] text-[9px] uppercase tracking-[0.14em] text-slate-500">
                        <span>Zone</span>
                        <span>State</span>
                        <span>Battery</span>
                        <span>RSSI</span>
                        <span>Heartbeat</span>
                      </div>
                      <ul className="divide-y divide-white/5">
                        {DEVICES.map(d => {
                          const isLeakZone = d.zone === 'Unit 204 · Kitchen'
                          const showWet = isLeakZone && wet
                          return (
                            <li
                              key={d.zone}
                              className={`grid grid-cols-2 sm:grid-cols-[1fr_90px_70px_80px_90px] gap-x-2 gap-y-1 px-3 py-2 items-center ${
                                showWet ? 'bg-red-400/[0.07]' : ''
                              }`}
                            >
                              <span className="text-xs sm:text-sm font-medium text-white col-span-2 sm:col-span-1">
                                {d.zone}
                                {d.note && (
                                  <span className="ml-2 text-[9px] uppercase tracking-[0.12em] text-[#F59E0B]">{d.note}</span>
                                )}
                              </span>
                              <span>
                                <StateChip wet={showWet} drying={isLeakZone && resolved} />
                              </span>
                              <span className="font-mono text-[11px] text-slate-300">{d.battery}</span>
                              <span className="font-mono text-[11px] text-slate-300">{d.rssi}</span>
                              <span className="font-mono text-[11px] text-slate-400">
                                {isLeakZone && phase !== 'idle' && step >= 0 ? 'now' : d.beat}
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-3">
                      Showing 8 of 38 devices · Oakridge Apartments. Offline sensors, low batteries, and freeze-risk
                      conditions surface here before they become coverage gaps.
                    </p>
                  </div>
                )}

                {/* ─── REPORTS ─── */}
                {tab === 'reports' && (
                  <div>
                    <ul className="space-y-1.5 mb-4">
                      <AnimatePresence initial={false}>
                        {reportReady && (
                          <motion.li
                            key="new-report"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-wrap items-center gap-2.5 rounded-lg border border-[#29ABE2]/40 bg-[#29ABE2]/[0.08] px-3 py-2.5"
                          >
                            <svg className="w-4 h-4 text-[#29ABE2] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.6a1 1 0 01.7.3l5.4 5.4a1 1 0 01.3.7V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xs sm:text-sm font-semibold text-white">
                              Per-Incident Report — #2847 · Unit 204 Kitchen
                            </span>
                            <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30 ml-auto">Just generated</span>
                          </motion.li>
                        )}
                      </AnimatePresence>
                      {BASE_REPORTS.map(r => (
                        <li key={r.name} className="flex flex-wrap items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5">
                          <svg className="w-4 h-4 text-slate-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.6a1 1 0 01.7.3l5.4 5.4a1 1 0 01.3.7V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-xs sm:text-sm font-medium text-white">{r.name}</span>
                          <span className="font-mono text-[10px] text-slate-500 ml-auto">{r.meta}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Every document exports from the same incident record your team used during the event — no
                      reconstruction, no duplicate documentation step. Reports support insurance conversations; they
                      are not claim determinations.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Status bar ── */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-4 sm:px-5 py-2.5 border-t border-white/10 text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden /> Gateway online
            </span>
            <span>38/38 reporting</span>
            <span className="hidden sm:inline">RSSI avg -59 dBm</span>
            <span className="ml-auto">Simulated portfolio · representative data</span>
          </div>
        </div>
      </div>
    </div>
  )
}
