'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { PLATFORM_SPECS } from '@/lib/marketing-copy'

const TOUR_MS = 5200

/* Blueprint line palette — drawn on navy, so everything is light strokes. */
const INK = 'rgba(148, 184, 220, 0.45)' // structural lines
const INK_FAINT = 'rgba(148, 184, 220, 0.22)' // windows, hatching, detail
const BLUE = '#29ABE2'

/** Hotspot positions on the SVG, indexed to PLATFORM_SPECS.stops. */
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
          @keyframes fg-dash { to { stroke-dashoffset: -24; } }
          .fg-flow { stroke-dasharray: 3 9; animation: fg-dash 1.4s linear infinite; }
          @keyframes fg-ping { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.1); opacity: 0; } }
          .fg-ping { transform-origin: center; transform-box: fill-box; animation: fg-ping 1.8s ease-out infinite; }
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
        <text key={f.t} x="283" y={f.y} textAnchor="end" fontSize="9" fill={INK_FAINT} letterSpacing="1">
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
      <text x="436" y="82" textAnchor="middle" fontSize="9.5" fontWeight="600" letterSpacing="2" fill={lit(3) ? BLUE : INK}>
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
            className={animate ? 'fg-flow' : undefined}
            strokeDasharray={animate ? undefined : '3 9'}
          />
        )
      })}

      {/* ── Annotations ── */}
      <g fontSize="9" letterSpacing="1.5" fill={INK}>
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
          aria-label={`${PLATFORM_SPECS.stops[i].title} specifications`}
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
          {active === i && animate && <circle cx={h.cx} cy={h.cy} r="14" fill="none" stroke={BLUE} strokeWidth="1.5" className="fg-ping" />}
          {/* generous invisible hit area */}
          <circle cx={h.cx} cy={h.cy} r="24" fill="transparent" />
          <circle
            cx={h.cx}
            cy={h.cy}
            r="13"
            fill={active === i ? BLUE : '#1B2F4E'}
            stroke={BLUE}
            strokeWidth="1.5"
          />
          <text
            x={h.cx}
            y={h.cy + 4}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
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
  const stops = PLATFORM_SPECS.stops
  const stop = stops[active]

  useEffect(() => {
    if (!touring || reduced) return
    const t = setInterval(() => setActive(a => (a + 1) % stops.length), TOUR_MS)
    return () => clearInterval(t)
  }, [touring, reduced, stops.length])

  function select(i: number) {
    setTouring(false)
    setActive(i)
  }

  return (
    <section
      className="bg-[#16253D] py-20 sm:py-24 border-b border-white/5"
      style={{
        backgroundImage:
          'linear-gradient(rgba(148,184,220,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,184,220,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-[#29ABE2] tracking-[0.22em] uppercase mb-3">
            {PLATFORM_SPECS.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            {PLATFORM_SPECS.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{PLATFORM_SPECS.body}</p>
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
              {stops.map((s, i) => (
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
                  {i + 1} · {s.title}
                </button>
              ))}
            </div>

            <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 sm:p-8 overflow-hidden">
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
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2">
                    Stop {active + 1} of {stops.length}
                  </p>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">{stop.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{stop.blurb}</p>

                  <dl className="divide-y divide-white/10 border-t border-white/10">
                    {stop.specs.map(row => (
                      <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-0.5 sm:gap-4 py-3.5">
                        <dt className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.16em] sm:pt-1">
                          {row.label}
                        </dt>
                        <dd className="text-sm sm:text-base font-medium text-slate-100">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-xs text-slate-500 mt-4 leading-relaxed" aria-live="polite">
              {touring && !reduced ? PLATFORM_SPECS.tourHint : PLATFORM_SPECS.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
