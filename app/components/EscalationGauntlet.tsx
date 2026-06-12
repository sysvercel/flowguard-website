'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/**
 * "Try to kill the alert." The visitor plays the responder who won't
 * respond: trigger a critical leak, then keep pressing IGNORE. The alert
 * climbs the tiers, and after Tier 3 it loops back around and re-dials
 * every tier on every channel — the demo can only end when a human
 * answers. The product claim ("no ignored alerts") becomes a game the
 * visitor loses on purpose.
 */

const TIERS = [
  { tier: 'Tier 1', who: 'On-call maintenance tech', name: 'M. Torres' },
  { tier: 'Tier 2', who: 'Supervisor + backup', name: 'D. Reyes' },
  { tier: 'Tier 3', who: 'Property manager', name: 'S. Whitfield' },
]

const CHANNELS = ['SMS', 'Email', 'Voice']

/** Elapsed seconds when a given tier starts ringing. */
function activationSeconds(round: number, tierIdx: number): number {
  if (round === 1) return [5, 300, 600][tierIdx]
  // Round 2+: the engine re-dials every tier, every channel, two minutes apart.
  return 600 + (((round - 2) * 3 + tierIdx) + 1) * 120
}

function fmt(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function EscalationGauntlet() {
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState<'idle' | 'ringing' | 'answered'>('idle')
  const [tierIdx, setTierIdx] = useState(0)
  const [round, setRound] = useState(1)
  const [lit, setLit] = useState(0) // channels lit on the ringing tier
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clockSec =
    phase === 'idle' ? 0 : activationSeconds(round, tierIdx)

  // Light up channels in sequence each time a tier starts ringing. The
  // reset to 0 happens in the event handlers; here we only schedule steps.
  useEffect(() => {
    if (phase !== 'ringing' || reduced) return
    let i = 0
    const step = () => {
      i += 1
      setLit(i)
      if (i < CHANNELS.length) timer.current = setTimeout(step, 380)
    }
    timer.current = setTimeout(step, 320)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [phase, tierIdx, round, reduced])

  function trigger() {
    setRound(1)
    setTierIdx(0)
    setLit(0)
    setPhase('ringing')
  }

  function ignore() {
    setLit(0)
    if (tierIdx < TIERS.length - 1) {
      setTierIdx(tierIdx + 1)
    } else {
      setRound(round + 1)
      setTierIdx(0)
    }
  }

  function answer() {
    setPhase('answered')
  }

  function reset() {
    setPhase('idle')
    setTierIdx(0)
    setRound(1)
    setLit(0)
  }

  const ignoredCount = (round - 1) * TIERS.length + tierIdx
  // Reduced-motion visitors skip the channel light-up sequence.
  const shownLit = reduced ? CHANNELS.length : lit

  return (
    <div className="fg-panel rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b fg-rule">
        <div className="flex items-center gap-2.5">
          <span className="fg-mark" />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-slate-300">
            Escalation engine
          </span>
        </div>
        <div className="flex items-center gap-3">
          {round > 1 && phase === 'ringing' && (
            <span className="fg-chip text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10">Round {round}</span>
          )}
          <span
            className={`font-mono text-lg sm:text-xl font-bold tabular-nums ${
              phase === 'answered' ? 'text-emerald-300' : phase === 'ringing' && tierIdx > 0 ? 'text-[#F59E0B]' : 'text-white'
            }`}
          >
            T+{fmt(clockSec)}
          </span>
        </div>
      </div>

      {/* Tier rows */}
      <div className="p-4 sm:p-5 space-y-2.5">
        {TIERS.map((t, i) => {
          const ringing = phase === 'ringing' && i === tierIdx
          const missed = phase === 'ringing' && (i < tierIdx || round > 1)
          const won = phase === 'answered' && i === tierIdx
          const dimmed = (phase === 'answered' && i !== tierIdx) || phase === 'idle'
          return (
            <div
              key={t.tier}
              className={`rounded-xl border px-4 sm:px-5 py-3.5 transition-all duration-300 ${
                ringing
                  ? 'border-[#29ABE2]/50 bg-[#29ABE2]/[0.07]'
                  : won
                    ? 'border-emerald-400/40 bg-emerald-400/[0.07]'
                    : 'border-white/10 bg-white/[0.02]'
              } ${dimmed ? 'opacity-50' : ''}`}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span
                  className={`font-mono text-xl font-bold tabular-nums leading-none ${
                    ringing ? 'text-[#29ABE2]' : won ? 'text-emerald-300' : 'text-slate-600'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white leading-tight">
                    {t.who} <span className="font-mono text-[11px] font-medium text-slate-500">· {t.name}</span>
                  </p>
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate-500 mt-0.5">
                    {t.tier} · rings at T+{fmt(activationSeconds(phase === 'ringing' ? round : 1, i))}
                  </p>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  {/* channel chips */}
                  {(ringing || won) &&
                    CHANNELS.map((c, ci) => (
                      <span
                        key={c}
                        className={`fg-chip transition-all duration-300 ${
                          won || ci < shownLit
                            ? 'text-[#29ABE2] border-[#29ABE2]/40 bg-[#29ABE2]/10'
                            : 'text-slate-600 border-white/10'
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  {missed && !ringing && (
                    <span className="fg-chip text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10">
                      No response · escalated
                    </span>
                  )}
                  {won && (
                    <span className="fg-chip text-emerald-300 border-emerald-400/30 bg-emerald-400/10">
                      Acknowledged T+{fmt(clockSec)}
                    </span>
                  )}
                </div>
              </div>

              {/* live controls on the ringing tier */}
              {ringing && (
                <div className="flex flex-wrap items-center gap-3 mt-3.5 pt-3.5 border-t border-white/10">
                  <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-400">
                    Ringing{".".repeat(Math.max(shownLit, 1))}
                  </p>
                  <div className="ml-auto flex items-center gap-2.5">
                    <button
                      onClick={ignore}
                      disabled={shownLit < CHANNELS.length}
                      className="font-mono text-xs font-semibold px-4 py-2 rounded-lg border border-white/20 text-slate-300 hover:border-[#F59E0B]/60 hover:text-[#F59E0B] transition disabled:opacity-40"
                    >
                      Ignore it
                    </button>
                    <button
                      onClick={answer}
                      disabled={shownLit < CHANNELS.length}
                      className="font-mono text-xs font-bold px-4 py-2 rounded-lg bg-[#29ABE2] text-white hover:bg-[#1A6FA8] transition disabled:opacity-40"
                    >
                      Answer
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* state line / CTA */}
        <AnimatePresence mode="wait">
          {phase === 'idle' && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center pt-3 pb-1.5">
              <button
                onClick={trigger}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0E1B30] font-semibold text-sm px-6 py-3 rounded-xl transition"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Trigger a critical leak
              </button>
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 mt-3">
                Then try to ignore it. See how far you get.
              </p>
            </motion.div>
          )}

          {phase === 'ringing' && round > 1 && (
            <motion.p
              key="loop"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-slate-300 leading-relaxed pt-2 pb-1"
            >
              You&rsquo;ve ignored it{' '}
              <span className="font-mono text-[#F59E0B]">{ignoredCount}</span> times. It&rsquo;s still ringing —
              every tier, every channel, until a human acts.
            </motion.p>
          )}

          {phase === 'answered' && (
            <motion.div
              key="won"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-emerald-400/30 bg-emerald-400/[0.07] px-4 sm:px-5 py-4 text-center"
            >
              <p className="text-sm sm:text-base font-bold text-white mb-1">
                {TIERS[tierIdx].name} owns the response at T+{fmt(clockSec)}.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                {ignoredCount === 0
                  ? 'First ring, first answer — that’s the normal night. The tiers exist for every other night.'
                  : `It survived ${ignoredCount} ignored ${ignoredCount === 1 ? 'alert' : 'alerts'} to get there. An alert you can’t kill is the whole point.`}
              </p>
              <button
                onClick={reset}
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400 hover:text-[#29ABE2] transition"
              >
                &#8635; Run it again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-5 sm:px-6 py-3 border-t fg-rule">
        <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-slate-600 leading-relaxed">
          Demo timings compressed · tiers, contacts, and wait times are configured per property
        </p>
      </div>
    </div>
  )
}
