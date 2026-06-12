'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/**
 * The 2 AM cold open. On first visit the page goes dark and a leak plays
 * out in five seconds — detection, escalation, containment, HANDLED — then
 * the overlay lifts into the normal hero, where the same incident sits
 * archived in the record card. Skippable by click, key, scroll, or the
 * skip control; plays once per session; reduced-motion visitors never see it.
 *
 * The beats reuse the exact timestamps from the hero's incident record so
 * the intro you watch is the record you land on.
 */

type Tone = 'red' | 'cyan' | 'emerald'

const BEATS: { at: number; clock: string; text: string; tone: Tone }[] = [
  { at: 0, clock: '02:14:03', text: 'Water detected — Riser · Mechanical Room', tone: 'red' },
  { at: 950, clock: '02:14:09', text: 'Alert → on-call · SMS + voice', tone: 'red' },
  { at: 1900, clock: '02:14:24', text: 'Acknowledged — Tier 1 owns it', tone: 'cyan' },
  { at: 2800, clock: '02:22:18', text: 'On site — source isolated', tone: 'cyan' },
  { at: 3650, clock: '02:28:33', text: 'Contained — area drying', tone: 'emerald' },
  { at: 4500, clock: '02:47:12', text: 'Resolved — auto-confirmed dry', tone: 'emerald' },
]
const PUNCH_AT = 5400
const EXIT_AT = 6800

const NODE: Record<Tone, string> = {
  red: 'bg-red-400',
  cyan: 'bg-[#29ABE2]',
  emerald: 'bg-emerald-400',
}
const LINE: Record<Tone, string> = {
  red: 'rgba(248,113,113,0.85)',
  cyan: 'rgba(41,171,226,0.85)',
  emerald: 'rgba(52,211,153,0.85)',
}

export default function ColdOpen({ run }: { run: number }) {
  const [visible, setVisible] = useState(false)
  const [beat, setBeat] = useState(-1) // index of latest fired beat; BEATS.length = punch
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const reduced = useReducedMotion()

  function clearTimers() {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  function skip() {
    clearTimers()
    setVisible(false)
  }

  useEffect(() => {
    const auto = run === 0
    const seen = sessionStorage.getItem('fgColdOpenSeen') === '1'
    if (auto && (reduced || seen)) return
    sessionStorage.setItem('fgColdOpenSeen', '1')

    setBeat(-1)
    setVisible(true)
    BEATS.forEach((b, i) => {
      timers.current.push(setTimeout(() => setBeat(i), b.at + 350))
    })
    timers.current.push(setTimeout(() => setBeat(BEATS.length), PUNCH_AT))
    timers.current.push(setTimeout(() => setVisible(false), EXIT_AT))
    return clearTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run])

  // Any scroll or keypress skips.
  useEffect(() => {
    if (!visible) return
    const onAny = () => skip()
    window.addEventListener('wheel', onAny, { passive: true })
    window.addEventListener('touchmove', onAny, { passive: true })
    window.addEventListener('keydown', onAny)
    return () => {
      window.removeEventListener('wheel', onAny)
      window.removeEventListener('touchmove', onAny)
      window.removeEventListener('keydown', onAny)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const punch = beat >= BEATS.length
  const current = BEATS[Math.min(Math.max(beat, 0), BEATS.length - 1)]
  const lines = beat < 0 ? [] : BEATS.slice(0, Math.min(beat, BEATS.length - 1) + 1)
  const progress = beat < 0 ? 0 : Math.min(((beat + 1) / BEATS.length) * 100, 100)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none', transition: { duration: 0.6, ease: 'easeInOut' } }}
          transition={{ duration: 0.25 }}
          onClick={skip}
          className="fixed inset-0 z-[80] bg-[#0E1B30] cursor-pointer select-none"
        >
          <div aria-hidden className="absolute inset-0 fg-blueprint fg-blueprint-fade" />

          <div className="relative h-full max-w-2xl mx-auto px-6 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!punch ? (
                <motion.div
                  key="tape"
                  exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
                  className="w-full"
                >
                  {/* clock */}
                  <div className="text-center mb-8">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-3">
                      Saturday · One of your properties
                    </p>
                    <p className="font-mono text-5xl sm:text-7xl font-bold text-white tabular-nums tracking-tight">
                      {beat < 0 ? '02:14:02' : current.clock}
                      <span className="text-xl sm:text-3xl text-slate-500 ml-2">AM</span>
                    </p>
                  </div>

                  {/* waterline progress */}
                  <div className="h-px w-full bg-white/10 mb-8 overflow-hidden">
                    <div
                      className="h-full transition-all duration-700 ease-out"
                      style={{ width: `${progress}%`, background: beat < 0 ? LINE.red : LINE[current.tone] }}
                    />
                  </div>

                  {/* event lines */}
                  <div className="space-y-2.5 min-h-[150px] sm:min-h-[168px]">
                    {lines.map((l, i) => {
                      const latest = i === lines.length - 1
                      return (
                        <motion.div
                          key={l.clock + l.text}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: latest ? 1 : 0.45, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-3"
                        >
                          <span className={`w-[7px] h-[7px] shrink-0 ${NODE[l.tone]}`} />
                          <span className="font-mono text-[11px] sm:text-sm tracking-[0.14em] uppercase text-slate-200">
                            {l.text}
                          </span>
                          <span className="ml-auto font-mono text-[10px] sm:text-xs text-slate-500 tabular-nums">
                            {l.clock}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="punch"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="text-center"
                >
                  <p className="font-mono text-sm sm:text-base text-slate-500 tabular-nums mb-4">
                    02:14:03 &rarr; 02:47:12
                  </p>
                  <p className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-5">
                    Handled<span className="text-[#29ABE2]">.</span>
                  </p>
                  <p className="font-mono text-[11px] sm:text-sm tracking-[0.2em] uppercase text-emerald-300">
                    33m 09s &middot; documented end to end
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-600 mt-6">
                    No one woke the owner.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* chrome */}
          <div className="absolute bottom-5 inset-x-0 px-6 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate-600">
              Illustrative incident &middot; times vary
            </span>
            <button
              tabIndex={-1}
              onClick={skip}
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-slate-400 hover:text-white transition"
            >
              Skip &#9656;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
