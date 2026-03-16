'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    time: '0:00',
    event: 'Leak detected',
    detail: 'Sensor triggers. Alert fires instantly via email, SMS, and voice call for critical incidents.',
    color: '#29ABE2',
    tier: null,
  },
  {
    time: '0:05',
    event: 'Tier 1 — Maintenance tech alerted',
    detail: 'Your on-call maintenance contact receives SMS + email + voice call. 5 minutes to respond.',
    color: '#29ABE2',
    tier: 'Tier 1',
  },
  {
    time: '5:00',
    event: 'Tier 2 — Supervisor alerted',
    detail: 'No response from Tier 1. Supervisor and backup contacts alerted automatically.',
    color: '#F59E0B',
    tier: 'Tier 2',
  },
  {
    time: '10:00',
    event: 'Tier 3 — Property manager notified',
    detail: 'No response from Tier 2. Property manager contacted immediately. No further delay.',
    color: '#EF4444',
    tier: 'Tier 3',
  },
]

export default function EscalationTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(-1)
  const [hasStarted, setHasStarted] = useState(false)
  const [clock, setClock] = useState('0:00')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    const timings = [500, 2000, 4000, 6500]
    const clockTimings = [
      { at: 500, val: '0:05' },
      { at: 2000, val: '5:00' },
      { at: 4000, val: '10:00' },
    ]
    const timers: ReturnType<typeof setTimeout>[] = []
    timings.forEach((t, i) => {
      timers.push(setTimeout(() => setActiveStep(i), t))
    })
    clockTimings.forEach(({ at, val }) => {
      timers.push(setTimeout(() => setClock(val), at))
    })
    return () => timers.forEach(clearTimeout)
  }, [hasStarted])

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      {/* Clock display */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-[#29ABE2] bg-[#1B2F4E] mb-4">
          <span className="text-3xl font-bold text-white font-mono">{clock}</span>
        </div>
        <p className="text-slate-500 text-sm">Time elapsed since detection</p>
      </div>

      {/* Timeline steps */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex gap-6 transition-all duration-500 ${
                activeStep >= index ? 'opacity-100' : 'opacity-20'
              }`}
            >
              {/* Dot */}
              <div
                className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 border-2"
                style={{
                  backgroundColor: activeStep >= index ? step.color : '#e2e8f0',
                  borderColor: activeStep >= index ? step.color : '#cbd5e1',
                }}
              >
                <span className="text-white text-xs font-bold font-mono">{step.time}</span>
              </div>

              {/* Content */}
              <div className="pt-2 pb-4">
                {step.tier && (
                  <span
                    className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1 text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.tier}
                  </span>
                )}
                <h4 className="font-bold text-[#1B2F4E] mb-1">{step.event}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Replay */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            setActiveStep(-1)
            setClock('0:00')
            setTimeout(() => setHasStarted(false), 100)
            setTimeout(() => setHasStarted(true), 200)
          }}
          className="text-sm text-[#29ABE2] hover:underline"
        >
          ↺ Replay
        </button>
      </div>
    </div>
  )
}
