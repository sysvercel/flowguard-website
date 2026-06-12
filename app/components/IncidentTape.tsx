'use client'
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * The hero's incident record, replaying itself on a loop. Rows reveal in
 * order with a running T+ counter, hold on the resolved state, then start
 * over — an instrument quietly demonstrating the product. Reduced-motion
 * visitors get the full static record.
 */

const ROWS: { t: string; event: string; meta: string; tplus: string; done?: boolean }[] = [
  { t: '02:14:03', event: 'Detected', meta: 'Riser · Mechanical Room', tplus: 'T+0:00' },
  { t: '02:14:24', event: 'Acknowledged', meta: 'On-call · Tier 1', tplus: 'T+0:21' },
  { t: '02:22:18', event: 'On site', meta: 'Source isolated', tplus: 'T+8:15' },
  { t: '02:28:33', event: 'Contained', meta: 'Wet-vac · area drying', tplus: 'T+14:30' },
  { t: '02:47:12', event: 'Resolved', meta: 'Auto-confirmed dry', tplus: '33m 09s', done: true },
]

const STEP_MS = 1500
const HOLD_MS = 4200

export default function IncidentTape() {
  const reduced = useReducedMotion()
  const [loopIdx, setLoopIdx] = useState(0) // rows 0..idx are revealed

  useEffect(() => {
    if (reduced) return
    let t: ReturnType<typeof setTimeout>
    const tick = (i: number) => {
      t = setTimeout(
        () => {
          const next = i >= ROWS.length - 1 ? 0 : i + 1
          setLoopIdx(next)
          tick(next)
        },
        i >= ROWS.length - 1 ? HOLD_MS : STEP_MS,
      )
    }
    tick(0)
    return () => clearTimeout(t)
  }, [reduced])

  // Reduced-motion visitors get the full static record.
  const idx = reduced ? ROWS.length - 1 : loopIdx
  const resolved = idx === ROWS.length - 1

  return (
    <div className="fg-panel rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b fg-rule">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-slate-400">Incident Record</span>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#29ABE2]">Response owned</span>
      </div>

      <div className="px-5 sm:px-6 py-5">
        {ROWS.map((r, i) => {
          const shown = i <= idx
          const latest = i === idx
          return (
            <div
              key={r.event}
              className={`grid grid-cols-[58px_1fr] sm:grid-cols-[64px_1fr] gap-4 transition-opacity duration-500 ${
                shown ? 'opacity-100' : 'opacity-25'
              }`}
            >
              <div className="relative text-right pr-4 border-r fg-rule py-2">
                <span className="font-mono text-[11px] text-slate-500 tabular-nums">{r.t}</span>
                <span
                  className={`absolute -right-[4px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] transition-colors duration-500 ${
                    !shown ? 'bg-white/15' : r.done ? 'bg-emerald-400' : 'bg-[#29ABE2]'
                  }`}
                />
              </div>
              <div className="py-2">
                <p className={`text-sm font-semibold leading-tight ${shown ? 'text-white' : 'text-slate-400'}`}>
                  {r.event}
                  {latest && shown && !reduced && (
                    <span className="ml-2 font-mono text-[9px] tracking-[0.18em] uppercase text-[#29ABE2] align-middle">
                      {resolved ? '■ closed' : '▸ live'}
                    </span>
                  )}
                </p>
                <p className="font-mono text-[11px] text-slate-500 leading-tight mt-0.5">{r.meta}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between px-5 py-3.5 border-t fg-rule">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-500">
          {resolved ? 'Time to resolved' : 'Elapsed'}
        </span>
        <span
          className={`font-mono text-sm font-semibold tabular-nums transition-colors duration-500 ${
            resolved ? 'text-emerald-300' : 'text-white'
          }`}
        >
          {ROWS[idx].tplus}
        </span>
      </div>
    </div>
  )
}
