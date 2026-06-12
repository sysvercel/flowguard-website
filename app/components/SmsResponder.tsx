'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/**
 * "You're on call tonight." The visitor plays the maintenance tech: the
 * leak comes in over SMS and they tap the actual replies (ACK → ROUTE →
 * SITE → CONTAINED) while FlowGuard answers, timestamps every step, and
 * files the record. Idle visitors are covered — replies auto-send after a
 * few seconds. Reduced-motion visitors get the full transcript statically.
 *
 * Same incident family as the rest of the site: the 02:14 AM boiler-room leak.
 */

type Item =
  | { who: 'fg'; text: string; t: string }
  | { who: 'me'; text: string; t: string; hint: string }
  | { who: 'record' }

const SCRIPT: Item[] = [
  { who: 'fg', text: 'WATER DETECTED\nBoiler Room · Riverside Apts\nSeverity: CRITICAL\nIncident A3F2-B1C8', t: '02:14:07' },
  { who: 'me', text: 'ACK', t: '02:14:24', hint: 'Take ownership' },
  { who: 'fg', text: 'Acknowledged — you own it.\nNearest shutoff: boiler panel B.\nReply ROUTE when you’re moving.', t: '02:14:26' },
  { who: 'me', text: 'ROUTE', t: '02:16:38', hint: 'Confirm you’re en route' },
  { who: 'fg', text: 'En route logged.\nReply SITE when you arrive.', t: '02:16:40' },
  { who: 'me', text: 'SITE', t: '02:20:19', hint: 'Confirm arrival' },
  { who: 'fg', text: 'On site logged.\nIsolate the supply valve.\nReply CONTAINED when the water is stopped.', t: '02:20:21' },
  { who: 'me', text: 'CONTAINED', t: '02:26:55', hint: 'Confirm containment' },
  { who: 'fg', text: 'Contained. Monitoring until the sensor reads dry — the incident auto-closes on confirmation.\nEvery step you took is already in the record.', t: '02:26:57' },
  { who: 'record' },
]

const TYPING_MS = 750
const AUTO_REPLY_MS = 3600

export default function SmsResponder() {
  const reduced = useReducedMotion()
  const [started, setStarted] = useState(false)
  const [pos, setPos] = useState(0) // items < pos are revealed
  const [typing, setTyping] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const feedRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Start when scrolled into view.
  useEffect(() => {
    if (reduced) return
    const el = wrapRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduced])

  // Drive the script forward. All state changes happen inside timeouts so
  // each step (typing indicator, message reveal, auto-reply) stays async.
  useEffect(() => {
    if (!started || reduced) return
    if (pos >= SCRIPT.length) return
    const next = SCRIPT[pos]
    const timers: ReturnType<typeof setTimeout>[] = []
    if (next.who === 'fg') {
      timers.push(setTimeout(() => setTyping(true), 30))
      timers.push(
        setTimeout(() => {
          setTyping(false)
          setPos((p) => p + 1)
        }, TYPING_MS),
      )
    } else if (next.who === 'me') {
      // Wait for the visitor's tap; auto-send if they just watch.
      timers.push(setTimeout(() => setPos((p) => p + 1), AUTO_REPLY_MS))
    } else {
      timers.push(setTimeout(() => setPos((p) => p + 1), 900))
    }
    timer.current = timers[timers.length - 1]
    return () => timers.forEach(clearTimeout)
  }, [pos, started, reduced])

  // Keep the newest message in view (internal scroll only).
  useEffect(() => {
    if (feedRef.current) feedRef.current.scrollTop = feedRef.current.scrollHeight
  }, [pos, typing])

  const effectivePos = reduced ? SCRIPT.length : pos
  const items = SCRIPT.slice(0, effectivePos)
  const pending = !reduced && effectivePos < SCRIPT.length ? SCRIPT[effectivePos] : null
  const awaitingReply = pending?.who === 'me' ? pending : null
  const done = effectivePos >= SCRIPT.length

  function sendReply() {
    if (!awaitingReply) return
    if (timer.current) clearTimeout(timer.current)
    setPos((p) => p + 1)
  }

  function replay() {
    if (timer.current) clearTimeout(timer.current)
    setTyping(false)
    setPos(0)
    setStarted(true)
  }

  return (
    <div ref={wrapRef} className="w-full max-w-[360px] mx-auto">
      {/* Instrument-kit handset */}
      <div className="fg-panel rounded-[26px] overflow-hidden border border-[rgba(148,197,232,0.25)]">
        {/* Header */}
        <div className="px-5 pt-4 pb-3.5 border-b fg-rule">
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-slate-400">
              SMS · FlowGuard Dispatch
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 tabular-nums">02:14 AM</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-slate-300">+1 (469) 754-8593</span>
            <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30">On-call: you</span>
          </div>
        </div>

        {/* Thread */}
        <div ref={feedRef} className="h-[380px] overflow-y-auto px-4 py-4 flex flex-col gap-2.5">
          <AnimatePresence initial={false}>
            {items.map((m, i) => {
              if (m.who === 'record') {
                return (
                  <motion.div
                    key="record"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 rounded-xl border border-emerald-400/30 bg-emerald-400/[0.07] px-4 py-3"
                  >
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-emerald-300 mb-1.5">
                      Incident record updated
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Detect &rarr; contain in <span className="font-mono text-emerald-300">12:48</span>. Four
                      actions, every one timestamped. No app, no login — and you never typed more than one word.
                    </p>
                  </motion.div>
                )
              }
              const me = m.who === 'me'
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className={`flex ${me ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${me ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`inline-block rounded-2xl px-3.5 py-2.5 text-left ${
                        me
                          ? 'bg-[#29ABE2] text-white rounded-br-md'
                          : 'bg-white/[0.06] border border-white/10 text-slate-200 rounded-bl-md'
                      }`}
                    >
                      <p className={`whitespace-pre-line leading-relaxed ${me ? 'font-mono text-sm font-semibold' : 'text-xs'}`}>
                        {m.text}
                      </p>
                    </div>
                    <p className="font-mono text-[9px] text-slate-600 tabular-nums mt-1 px-1">{m.t}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {typing && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-white/[0.06] border border-white/10 px-4 py-3 flex gap-1.5 items-center">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"
                    style={{ animationDelay: `${d * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Reply bar — the visitor is the responder */}
        <div className="px-4 py-3.5 border-t fg-rule bg-white/[0.02]">
          {awaitingReply ? (
            <div className="flex items-center gap-3">
              <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-slate-500 leading-tight">
                {awaitingReply.hint}
              </p>
              <button
                onClick={sendReply}
                className="ml-auto inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1A6FA8] text-white font-mono text-sm font-bold px-5 py-2.5 rounded-full transition"
              >
                {awaitingReply.text}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-slate-600">
                {done ? 'Incident handled · record filed' : 'Incoming…'}
              </p>
              {done && (
                <button
                  onClick={replay}
                  className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400 hover:text-[#29ABE2] transition"
                >
                  &#8635; Run it again
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <p className="font-mono text-[10px] text-slate-500 leading-relaxed mt-3 text-center">
        Live demo — tap the replies. Real responders do exactly this, by text.
      </p>
    </div>
  )
}
