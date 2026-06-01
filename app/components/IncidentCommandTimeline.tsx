'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Step = {
  label: string
  time: string
  icon: ReactNode
  accent?: 'amber'
}

const steps: Step[] = [
  {
    label: 'Detected',
    time: '0:00',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Alerted',
    time: '0:00',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Acknowledged',
    time: '0:21',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'En Route',
    time: '2:38',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M3 12h11l3 3h3M3 12V8a1 1 0 011-1h7l3 4M5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Contained',
    time: '14:11',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 3l7 3v5c0 4.2-2.9 7.5-7 8.6-4.1-1.1-7-4.4-7-8.6V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 12l1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Documented',
    time: '14:12',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.6a1 1 0 01.7.3l5.4 5.4a1 1 0 01.3.7V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function IncidentCommandTimeline({ className = '' }: { className?: string }) {
  return (
    <div className={`fg-command-card rounded-2xl p-6 sm:p-8 ${className}`}>
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-2.5">
          <span className="fg-node" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            Incident Command
          </span>
        </div>
        <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30">Response owned</span>
      </div>

      <div className="relative">
        {/* connectors */}
        <div aria-hidden className="lg:hidden absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#29ABE2]/40 via-[#29ABE2]/20 to-transparent" />
        <div aria-hidden className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-[#29ABE2]/10 via-[#29ABE2]/40 to-[#29ABE2]/10" />

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative flex lg:flex-col items-center lg:text-center gap-4 lg:gap-3"
            >
              <div
                className={`relative z-10 w-12 h-12 shrink-0 rounded-full flex items-center justify-center border ${
                  step.accent === 'amber'
                    ? 'border-[#F59E0B]/40 text-[#F59E0B] bg-[#F59E0B]/10'
                    : 'border-[#29ABE2]/40 text-[#29ABE2] bg-[#29ABE2]/10'
                } fg-border-glow`}
              >
                <span className="w-5 h-5">{step.icon}</span>
              </div>
              <div className="lg:mt-1">
                <p className="text-sm font-bold text-white leading-tight">{step.label}</p>
                <p className="text-xs font-mono text-[#29ABE2] mt-0.5">{step.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-7">
        Illustrative incident timeline. Actual response times vary by property, staffing, and severity.
      </p>
    </div>
  )
}
