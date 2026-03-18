'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DemoWalkthroughProps {
  firstName: string
  propertyName: string
}

export default function DemoWalkthrough({ firstName, propertyName }: DemoWalkthroughProps) {
  const [step, setStep] = useState(0)
  const totalSteps = 6
  const prop = propertyName || 'Your Property'
  const incidentId = 'A3F2B1C8'
  const time = '2:14 AM'

  const steps = [
    {
      id: 'alert',
      headline: `It's 2AM. ${prop}'s boiler room is flooding.`,
      subtext: `FlowGuard detected moisture and fired this alert in under 60 seconds. Your maintenance tech just woke up to this text.`,
      content: (
        <div className="flex justify-center">
          <div className="w-72 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800">
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#29ABE2] flex items-center justify-center">
                <span className="text-white text-xs font-bold">FG</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">FlowGuard</p>
                <p className="text-xs text-gray-500">+1 (469) 754-8593</p>
              </div>
            </div>
            <div className="p-4 bg-[#F8FAFC] min-h-48">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 text-xs leading-relaxed text-gray-800 whitespace-pre-line max-w-xs"
              >
                {`🚨 WATER LEAK DETECTED\n\nProperty: ${prop}\nLocation: Boiler Room\nSeverity: CRITICAL\nIncident: ${incidentId}\n\nDetected: ${time}\n\nReply ACK to acknowledge`}
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'response',
      headline: 'No app. No login. Just a text.',
      subtext: `Your maintenance team responds the same way they already communicate — by SMS. Four commands. That's the entire workflow.`,
      content: (
        <div className="flex justify-center">
          <div className="w-72 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800">
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#29ABE2] flex items-center justify-center">
                <span className="text-white text-xs font-bold">FG</span>
              </div>
              <div>
                <p className="text-xs font-semibold">FlowGuard</p>
                <p className="text-xs text-gray-500">+1 (469) 754-8593</p>
              </div>
            </div>
            <div className="p-4 bg-[#F8FAFC] space-y-2 min-h-48">
              {[
                { from: 'fg', text: `🚨 WATER LEAK DETECTED\n\nProperty: ${prop}\nLocation: Boiler Room\nReply ACK to acknowledge`, delay: 0.1 },
                { from: 'tech', text: 'ACK', delay: 0.4 },
                { from: 'fg', text: '✅ Acknowledged.\nReply ROUTE when en route.', delay: 0.7 },
                { from: 'tech', text: 'ROUTE', delay: 1.0 },
                { from: 'fg', text: '🚗 En route confirmed.\nReply SITE when on site.', delay: 1.3 },
                { from: 'tech', text: 'SITE', delay: 1.6 },
                { from: 'fg', text: '📍 On site confirmed.\nReply CONTAINED when addressed.', delay: 1.9 },
                { from: 'tech', text: 'CONTAINED', delay: 2.2 },
              ].map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: msg.delay }}
                  className={`flex ${msg.from === 'tech' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                    msg.from === 'tech' ? 'bg-[#29ABE2] text-white rounded-br-sm' : 'bg-gray-200 text-gray-800 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'escalation',
      headline: 'Nobody falls through the cracks.',
      subtext: `FlowGuard escalates automatically through your custom response chain. Every contact gets a unique claim link. The system keeps going until someone responds.`,
      content: (
        <div className="max-w-md mx-auto space-y-4">
          {[
            { time: '0:00', label: 'Leak detected', detail: `Alert fires instantly at ${prop}`, color: '#29ABE2', delay: 0.1 },
            { time: '0:05', label: 'Tier 1 alerted', detail: 'Maintenance tech — SMS + email + voice call', color: '#29ABE2', delay: 0.4 },
            { time: '5:00', label: 'Tier 2 escalation', detail: 'Supervisor alerted automatically', color: '#F59E0B', delay: 0.7 },
            { time: '10:00', label: 'Tier 3 — You get called', detail: 'Property manager notified. Immediate.', color: '#EF4444', delay: 1.0 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay }}
              className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold font-mono" style={{ backgroundColor: item.color }}>
                {item.time}
              </div>
              <div>
                <p className="font-bold text-[#1B2F4E] text-sm">{item.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'incident',
      headline: 'Every incident documented automatically.',
      subtext: `Every alert, response, escalation, and resolution is time-stamped and logged. No manual reporting. No he-said-she-said. Just facts.`,
      content: (
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
          >
            <div className="bg-[#1B2F4E] px-6 py-4">
              <p className="text-white font-bold text-sm">INCIDENT RECORD</p>
              <p className="text-slate-400 text-xs mt-1">{prop} · Boiler Room · CRITICAL</p>
            </div>
            <div className="p-6 font-mono text-xs space-y-2">
              {[
                { label: 'Detected', value: `03/17/2026  ${time}`, status: '✓' },
                { label: 'Alert sent', value: `03/17/2026  ${time}`, status: '✓' },
                { label: 'Acknowledged', value: '03/17/2026  2:16 AM', status: '✓' },
                { label: 'En route', value: '03/17/2026  2:18 AM', status: '✓' },
                { label: 'On site', value: '03/17/2026  2:24 AM', status: '✓' },
                { label: 'Contained', value: '03/17/2026  2:31 AM', status: '✓' },
                { label: 'Resolved', value: '03/17/2026  2:47 AM', status: '✓' },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex justify-between items-center py-1 border-b border-slate-50"
                >
                  <span className="text-slate-500 w-28">{row.label}</span>
                  <span className="text-[#1B2F4E] font-medium">{row.value}</span>
                  <span className="text-green-500 ml-2">{row.status}</span>
                </motion.div>
              ))}
              <div className="pt-3 flex justify-between items-center">
                <span className="text-slate-500">Response time</span>
                <span className="font-bold text-[#1B2F4E]">33 minutes</span>
              </div>
            </div>
            <div className="px-6 py-4 bg-green-50 border-t border-green-100 flex items-center justify-between">
              <span className="text-green-700 font-bold text-sm">RESOLVED</span>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">✓ Closed</span>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'insurance',
      headline: 'Your claim defense. Built automatically.',
      subtext: `When your insurer asks what happened and how fast you responded — you hand them this. Properties with documented monitoring history negotiate better premiums and win claim disputes.`,
      content: (
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
          >
            <div className="bg-[#29ABE2] px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-white font-bold">INSURANCE INCIDENT REPORT</p>
                <p className="text-blue-100 text-xs mt-1">Generated automatically by FlowGuard</p>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-white text-xs font-bold">PDF</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Property</p>
                <p className="font-semibold text-[#1B2F4E]">{prop}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Detection time</p>
                  <p className="font-semibold text-[#1B2F4E] text-sm">2:14 AM</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Response time</p>
                  <p className="font-semibold text-green-600 text-sm">2 minutes</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Contained</p>
                  <p className="font-semibold text-[#1B2F4E] text-sm">17 minutes</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Resolved</p>
                  <p className="font-semibold text-[#1B2F4E] text-sm">33 minutes</p>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-green-700 text-xs font-semibold">✓ DOCUMENTED MONITORING ACTIVE</p>
                <p className="text-green-600 text-xs mt-1">Continuous sensor monitoring confirmed at time of incident. Full audit trail available.</p>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'health',
      headline: 'Proactive monitoring. Not just reactive alerts.',
      subtext: `Every morning at 8AM you get a health summary for every property. Offline sensors, low battery warnings, freeze risk. You know about problems before they become emergencies.`,
      content: (
        <div className="max-w-md mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
          >
            <div className="bg-[#1B2F4E] px-6 py-4">
              <p className="text-white font-bold text-sm">Daily Health Summary</p>
              <p className="text-slate-400 text-xs mt-1">{prop} · March 17, 2026 · 8:00 AM</p>
            </div>
            <div className="p-6 space-y-3">
              {[
                { icon: '✅', color: 'text-green-600', bg: 'bg-green-50', text: '47 sensors online and reporting' },
                { icon: '⚠️', color: 'text-amber-600', bg: 'bg-amber-50', text: '1 sensor offline — Unit 204 Bathroom (22 hours)' },
                { icon: '🔋', color: 'text-amber-600', bg: 'bg-amber-50', text: '2 sensors low battery — Boiler Room, Riser 3' },
                { icon: '❄️', color: 'text-blue-600', bg: 'bg-blue-50', text: 'No freeze risk detected — all zones normal' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className={`flex items-center gap-3 ${item.bg} rounded-xl px-4 py-3`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className={`text-sm font-medium ${item.color}`}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },
  ]

  const currentStep = steps[step]

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Progress bar */}
      <div className="bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
          <div className="flex gap-1.5 flex-1">
            {steps.map((_, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full transition-all duration-300"
                style={{ backgroundColor: i <= step ? '#29ABE2' : '#e2e8f0' }}
              />
            ))}
          </div>
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {step + 1} of {totalSteps}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Headline */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2F4E] mb-3">
                {currentStep.headline}
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                {currentStep.subtext}
              </p>
            </div>

            {/* Step visual */}
            <div className="mb-12">
              {currentStep.content}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-6 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>

          {step < totalSteps - 1 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              className="px-8 py-3 bg-[#29ABE2] text-white rounded-xl text-sm font-semibold hover:bg-[#1A6FA8] transition"
            >
              Next →
            </button>
          ) : (
            <a
              href={`/contact?property=${encodeURIComponent(prop)}`}
              className="px-8 py-3 bg-[#1B2F4E] text-white rounded-xl text-sm font-semibold hover:bg-[#29ABE2] transition"
            >
              Get a Scope for {prop} →
            </a>
          )}
        </div>

        {/* End screen extra CTA */}
        {step === totalSteps - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-[#1B2F4E] rounded-2xl p-8 text-center max-w-md mx-auto"
          >
            <h3 className="text-white font-bold text-xl mb-2">
              {prop} could be live in 3 days.
            </h3>
            <div className="grid grid-cols-3 gap-4 my-6 text-sm">
              {[
                { day: 'Day 1', desc: 'Sensors configured and registered' },
                { day: 'Day 2', desc: 'Installation — mount, scan, verify' },
                { day: 'Day 3', desc: 'Live monitoring active' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-3">
                  <p className="text-[#29ABE2] font-bold text-sm">{item.day}</p>
                  <p className="text-slate-300 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <a
              href={`/contact?property=${encodeURIComponent(prop)}`}
              className="block w-full bg-[#29ABE2] text-white py-4 rounded-xl font-semibold hover:bg-[#1A6FA8] transition"
            >
              Request a Custom Scope →
            </a>
            <p className="text-slate-400 text-xs mt-3">No commitment required. We&apos;ll scope it and send you a proposal.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
