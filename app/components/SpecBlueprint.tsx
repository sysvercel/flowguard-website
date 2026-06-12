'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const TOUR_MS = 5200

/* Instrument-kit linework — light strokes on #0E1B30. */
const INK = 'rgba(148, 197, 232, 0.45)'
const INK_FAINT = 'rgba(148, 197, 232, 0.22)'
const BLUE = '#29ABE2'

/**
 * Platform specifications, placed where they physically live on a property.
 * Spec rows carry the same content as the previous spec card grid.
 */
const STOPS = [
  {
    id: 'boiler',
    title: 'Boiler Room',
    blurb:
      'Where the expensive failures start. Sensors go under boilers, water heaters, pumps, and tanks first.',
    specs: [
      {
        label: 'Coverage strategy',
        value:
          'High-risk water zones first: mechanical rooms, water heaters, risers, laundry areas, kitchens, and other failure-prone locations.',
      },
      {
        label: 'Hardware ecosystem',
        value:
          'Commercial-grade LoRaWAN devices selected for the environment, not locked around a proprietary box.',
      },
    ],
  },
  {
    id: 'risers',
    title: 'Risers & Unit Stacks',
    blurb:
      'Wireless sensors along risers and in units with a history — no drywall cut, no rewiring, and nothing riding on property Wi-Fi.',
    specs: [
      {
        label: 'Deployment model',
        value:
          'Wireless, low-disruption installation scoped during the property walk — gateway placement, sensor placement, and coverage checks happen property by property.',
      },
    ],
  },
  {
    id: 'gateway',
    title: 'Rooftop Gateway',
    blurb:
      'Every sensor reports to a LoRaWAN gateway — long-range, low-power radio built for concrete-and-steel buildings, not a consumer smart-home hub.',
    specs: [
      {
        label: 'Connectivity layer',
        value:
          'LoRaWAN wireless coverage for low-disruption deployment across common areas, risers, mechanical rooms, and selected unit zones.',
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platform',
    blurb:
      'Incidents, device health, and reporting live in one place — for a single building or your whole portfolio.',
    specs: [
      {
        label: 'Property visibility',
        value:
          'Single-property and portfolio views for incidents, device health, reports, and readiness gaps.',
      },
      {
        label: 'Integration path',
        value:
          'Expandable API, webhook, and ticketing handoff options depending on the receiving system.',
      },
    ],
  },
  {
    id: 'phone',
    title: 'Your On-Call Phone',
    blurb:
      'The signal ends with a human. Alerts escalate through your response chain until someone acts.',
    specs: [
      {
        label: 'Alerting layer',
        value:
          'SMS, email, and phone escalation paths designed to reach the humans who can act.',
      },
    ],
  },
] as const

/** Hotspot positions on the SVG, indexed to STOPS. */
const HOTSPOTS = [
  { cx: 182, cy: 474 }, // boiler room
  { cx: 108, cy: 250 }, // risers & units
  { cx: 240, cy: 74 }, // rooftop gateway
  { cx: 372, cy: 90 }, // cloud platform
  { cx: 438, cy: 346 }, // on-call phone
] as const

/** Signal segments light up for the stops at either end. */
const SEGMENTS: { d: string; stops: number[] }[] = [
  { d: 'M 228 488 C 300 400 295 150 244 62', stops: [0, 2] }, // boiler → gateway
  { d: 'M 112 246 C 150 170 200 100 234 58', stops: [1, 2] }, // riser → gateway
  { d: 'M 246 52 C 290 24 330 36 372 78', stops: [2, 3] }, // gateway → cloud
  { d: 'M 444 118 C 458 180 450 240 440 300', stops: [3, 4] }, // cloud → phone
]

function Blueprint({
  active,
  onSelect,
  animate,
}: {
  active: number
  onSelect: (i: number) => void
  animate: boolean
}) {
  const lit = (i: number) => active === i

  return (
    <svg
      viewBox="0 0 560 540"
      className="w-full h-auto select-none"
      role="group"
      aria-label="Building cross-section showing where FlowGuard hardware is deployed"
    >
      {animate && (
        <style>{`
          @keyframes fg-bp-dash { to { stroke-dashoffset: -24; } }
          .fg-bp-flow { stroke-dasharray: 3 9; animation: fg-bp-dash 1.4s linear infinite; }
        `}</style>
      )}

      {/* ── Ground line + hatching ── */}
      <line x1="20" y1="440" x2="70" y2="440" stroke={INK} strokeWidth="1.5" />
      <line x1="290" y1="440" x2="545" y2="440" stroke={INK} strokeWidth="1.5" />
      {[310, 340, 370, 400, 490, 520].map(x => (
        <line key={x} x1={x} y1="440" x2={x - 9} y2="451" stroke={INK_FAINT} strokeWidth="1" />
      ))}
      {[30, 56].map(x => (
        <line key={x} x1={x} y1="440" x2={x - 9} y2="451" stroke={INK_FAINT} strokeWidth="1" />
      ))}

      {/* ── Building shell ── */}
      <rect x="70" y="88" width="220" height="417" fill="rgba(41,171,226,0.04)" stroke={INK} strokeWidth="1.5" />
      <line x1="62" y1="88" x2="298" y2="88" stroke={INK} strokeWidth="2.5" />
      {/* basement fill */}
      <rect x="71" y="441" width="218" height="63" fill="rgba(2,6,23,0.28)" />
      {/* floor slabs */}
      {[176, 264, 352].map(y => (
        <line key={y} x1="70" y1={y} x2="290" y2={y} stroke={INK_FAINT} strokeWidth="1" />
      ))}
      <line x1="70" y1="440" x2="290" y2="440" stroke={INK} strokeWidth="1.5" />
      {/* windows */}
      {[88, 176, 264, 352].map(top =>
        [148, 188, 228].map(x => (
          <rect key={`${top}-${x}`} x={x} y={top + 28} width="24" height="32" fill="none" stroke={INK_FAINT} strokeWidth="1" />
        )),
      )}
      {/* floor tags */}
      {[
        { y: 104, t: '4' },
        { y: 192, t: '3' },
        { y: 280, t: '2' },
        { y: 368, t: '1' },
        { y: 458, t: 'B1' },
      ].map(f => (
        <text key={f.t} x="283" y={f.y} textAnchor="end" fontSize="9" fill={INK_FAINT} letterSpacing="1" fontFamily="monospace">
          {f.t}
        </text>
      ))}

      {/* ── Riser pipe ── */}
      <g stroke={lit(1) ? BLUE : INK} strokeWidth={lit(1) ? 2 : 1.5} opacity={lit(1) ? 0.9 : 0.7}>
        <line x1="104" y1="100" x2="104" y2="500" />
        <line x1="112" y1="100" x2="112" y2="500" />
        <line x1="104" y1="100" x2="112" y2="100" />
        {[132, 220, 308, 396].map(y => (
          <line key={y} x1="112" y1={y} x2="140" y2={y} />
        ))}
        <line x1="112" y1="490" x2="150" y2="490" />
      </g>

      {/* ── Boiler ── */}
      <g stroke={lit(0) ? BLUE : INK} strokeWidth="1.5" opacity={lit(0) ? 0.95 : 0.8} fill="none">
        <rect x="150" y="450" width="64" height="48" rx="6" />
        <circle cx="166" cy="462" r="5" />
        <line x1="166" y1="462" x2="169" y2="458" />
        <line x1="158" y1="498" x2="158" y2="504" />
        <line x1="206" y1="498" x2="206" y2="504" />
      </g>
      {/* sensor pucks */}
      <rect x="222" y="494" width="12" height="6" rx="2" fill={BLUE} opacity={lit(0) ? 1 : 0.55} />
      <rect x="118" y="252" width="12" height="6" rx="2" fill={BLUE} opacity={lit(1) ? 1 : 0.55} />

      {/* ── Rooftop gateway mast ── */}
      <g stroke={lit(2) ? BLUE : INK} strokeWidth="1.5" opacity={lit(2) ? 0.95 : 0.8} fill="none">
        <line x1="240" y1="88" x2="240" y2="56" />
        <circle cx="240" cy="53" r="3" fill={lit(2) ? BLUE : 'none'} />
        <path d="M 228 46 A 14 14 0 0 1 252 46" />
        <path d="M 221 51 A 21 21 0 0 1 259 51" />
      </g>

      {/* ── Cloud platform node ── */}
      <g stroke={lit(3) ? BLUE : INK} strokeWidth="1.5" opacity={lit(3) ? 0.95 : 0.8} fill="none">
        <rect x="372" y="62" width="128" height="56" rx="12" />
        {/* tiny portfolio glyph */}
        <rect x="416" y="92" width="8" height="14" />
        <rect x="428" y="86" width="8" height="20" />
        <rect x="440" y="94" width="8" height="12" />
      </g>
      <text x="436" y="82" textAnchor="middle" fontSize="9.5" fontWeight="600" letterSpacing="2" fontFamily="monospace" fill={lit(3) ? BLUE : INK}>
        CLOUD PLATFORM
      </text>

      {/* ── On-call phone ── */}
      <g stroke={lit(4) ? BLUE : INK} strokeWidth="1.5" opacity={lit(4) ? 0.95 : 0.8} fill="none">
        <rect x="414" y="300" width="48" height="92" rx="10" />
        <line x1="430" y1="307" x2="446" y2="307" />
        <rect x="421" y="313" width="34" height="56" rx="4" stroke={INK_FAINT} />
        <circle cx="438" cy="381" r="3" />
      </g>
      <g stroke={BLUE} strokeWidth="2" strokeLinecap="round" opacity={lit(4) ? 0.9 : 0.4}>
        <line x1="427" y1="326" x2="449" y2="326" />
        <line x1="427" y1="336" x2="443" y2="336" />
        <line x1="427" y1="346" x2="447" y2="346" />
      </g>

      {/* ── Signal paths ── */}
      {SEGMENTS.map((seg, i) => {
        const hot = seg.stops.includes(active)
        return (
          <path
            key={i}
            d={seg.d}
            fill="none"
            stroke={BLUE}
            strokeWidth={hot ? 2 : 1.5}
            opacity={hot ? 0.9 : 0.25}
            className={animate ? 'fg-bp-flow' : undefined}
            strokeDasharray={animate ? undefined : '3 9'}
          />
        )
      })}

      {/* ── Annotations ── */}
      <g fontSize="9" letterSpacing="1.5" fill={INK} fontFamily="monospace">
        <text x="182" y="526" textAnchor="middle">BOILER ROOM</text>
        <text x="90" y="232" textAnchor="end">RISERS</text>
        <text x="262" y="78">GATEWAY</text>
        <text x="438" y="412" textAnchor="middle">ON-CALL</text>
      </g>

      {/* ── Numbered hotspots ── */}
      {HOTSPOTS.map((h, i) => (
        <g
          key={i}
          role="button"
          tabIndex={0}
          aria-label={`${STOPS[i].title} specifications`}
          aria-pressed={active === i}
          className="cursor-pointer outline-none"
          onClick={() => onSelect(i)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelect(i)
            }
          }}
        >
          {/* generous invisible hit area */}
          <circle cx={h.cx} cy={h.cy} r="24" fill="transparent" />
          {/* static instrument-style outer ring on the active stop */}
          {active === i && <circle cx={h.cx} cy={h.cy} r="18" fill="none" stroke={BLUE} strokeWidth="1" opacity="0.5" />}
          <circle
            cx={h.cx}
            cy={h.cy}
            r="13"
            fill={active === i ? BLUE : '#0E1B30'}
            stroke={BLUE}
            strokeWidth="1.5"
          />
          <text
            x={h.cx}
            y={h.cy + 4}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fontFamily="monospace"
            fill={active === i ? '#FFFFFF' : BLUE}
            style={{ pointerEvents: 'none' }}
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function SpecBlueprint() {
  const [active, setActive] = useState(0)
  const [touring, setTouring] = useState(true)
  const reduced = useReducedMotion()
  const stop = STOPS[active]

  useEffect(() => {
    if (!touring || reduced) return
    const t = setInterval(() => setActive(a => (a + 1) % STOPS.length), TOUR_MS)
    return () => clearInterval(t)
  }, [touring, reduced])

  function select(i: number) {
    setTouring(false)
    setActive(i)
  }

  return (
    <section className="relative bg-[#0E1B30] py-20 sm:py-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 fg-blueprint fg-blueprint-fade" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
            <span className="fg-node" /> Platform Specifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            Specs belong on a building, not in a table.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            This is the path a leak takes through FlowGuard — from the first drop in the boiler room to the phone call that gets a human moving. Tap any numbered point.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Blueprint */}
          <div className="max-w-md sm:max-w-lg mx-auto w-full lg:max-w-none">
            <Blueprint active={active} onSelect={select} animate={!reduced} />
          </div>

          {/* Spec panel */}
          <div>
            {/* stop chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {STOPS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => select(i)}
                  aria-pressed={active === i}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                    active === i
                      ? 'bg-[#29ABE2] border-[#29ABE2] text-white'
                      : 'border-white/15 text-slate-400 hover:border-[#29ABE2]/60 hover:text-slate-200'
                  }`}
                >
                  <span className="font-mono">{i + 1}</span> · {s.title}
                </button>
              ))}
            </div>

            <div className="relative fg-panel rounded-2xl p-7 sm:p-8 overflow-hidden">
              {/* auto-tour progress */}
              {touring && !reduced && (
                <motion.div
                  key={active}
                  className="absolute top-0 left-0 h-0.5 bg-[#29ABE2]/60"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: TOUR_MS / 1000, ease: 'linear' }}
                />
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={stop.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-mono text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2">
                    Stop {active + 1} of {STOPS.length}
                  </p>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">{stop.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{stop.blurb}</p>

                  <dl className="divide-y fg-rule divide-[rgba(148,197,232,0.14)] border-t border-[rgba(148,197,232,0.14)]">
                    {stop.specs.map(row => (
                      <div key={row.label} className="py-3.5">
                        <dt className="font-mono text-[11px] font-semibold text-[#29ABE2] uppercase tracking-[0.16em] mb-1">
                          {row.label}
                        </dt>
                        <dd className="text-sm sm:text-base text-slate-200 leading-relaxed">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-xs text-slate-500 mt-4 leading-relaxed" aria-live="polite">
              {touring && !reduced
                ? 'Touring automatically — tap any point to take over.'
                : 'Device selection, gateway placement, and coverage scope are finalized during the site walk.'}
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#29ABE2] text-white px-10 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#1A6FA8] transition shadow-[0_8px_30px_rgba(41,171,226,0.2)]"
          >
            Book My Free Water-Risk Walk
          </Link>
          <p className="text-xs text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            Device selection, gateway placement, and coverage scope are finalized during the site walk. FlowGuard does not claim every property or software stack is identical.
          </p>
        </div>
      </div>
    </section>
  )
}
