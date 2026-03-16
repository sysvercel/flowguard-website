'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    id: 'size',
    question: 'How many units does your property have?',
    options: [
      { label: 'Under 50 units', value: 'small' },
      { label: '50–150 units', value: 'medium' },
      { label: '150–300 units', value: 'large' },
      { label: '300+ units', value: 'enterprise' },
    ]
  },
  {
    id: 'concern',
    question: 'What is your biggest water damage concern?',
    options: [
      { label: 'Just want basic visibility', value: 'basic' },
      { label: 'After-hours leaks going undetected', value: 'afterhours' },
      { label: 'Team not responding fast enough', value: 'response' },
      { label: 'Insurance documentation and reporting', value: 'insurance' },
    ]
  },
  {
    id: 'team',
    question: 'How does your maintenance team currently handle water alerts?',
    options: [
      { label: 'We find out when damage is already done', value: 'reactive' },
      { label: 'Email alerts but response is slow', value: 'slow' },
      { label: 'We have a process but want better tracking', value: 'process' },
      { label: 'Looking for a complete incident command system', value: 'command' },
    ]
  },
]

function getRecommendation(answers: Record<string, string>) {
  const { size, concern, team } = answers
  if (
    concern === 'basic' ||
    (size === 'small' && team === 'slow')
  ) {
    return 'monitor'
  }
  if (
    concern === 'afterhours' ||
    concern === 'response' ||
    concern === 'insurance' ||
    team === 'reactive' ||
    team === 'command' ||
    size === 'large' ||
    size === 'enterprise'
  ) {
    return 'respond'
  }
  return 'protect'
}

const results = {
  monitor: {
    name: 'Monitor',
    subtitle: 'Core Visibility',
    color: '#64748B',
    description: 'Based on your answers, Monitor gives you the leak visibility you need without unnecessary complexity. Email alerts, basic incident logging, and monthly summaries.',
    features: ['Real-time leak detection', 'Email alerts', 'Basic incident logging', 'Monthly summary report'],
  },
  protect: {
    name: 'Protect',
    subtitle: 'Full Protection',
    color: '#29ABE2',
    description: 'Based on your answers, Protect is the right fit. You get SMS + voice alerts, 3-tier escalation, health monitoring, freeze alerts, and insurance-ready reports.',
    features: ['Everything in Monitor', 'SMS + voice alerts', '3-tier escalation', 'Health monitoring', 'Freeze alerts', 'Insurance-ready reports'],
  },
  respond: {
    name: 'Respond',
    subtitle: 'Premium Support',
    color: '#1B2F4E',
    description: 'Based on your answers, Respond is built for your situation. You get everything in Protect plus after-hours coordination, maintenance-first response support, and priority incident handling.',
    features: ['Everything in Protect', 'After-hours coordination', 'Maintenance-first response', 'Priority incident handling', 'Backup vendor coordination'],
  },
}

export default function PackageQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [recommendation, setRecommendation] = useState<string | null>(null)

  const currentQuestion = questions[step]

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(newAnswers)
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setRecommendation(getRecommendation(newAnswers))
    }
  }

  function reset() {
    setStep(0)
    setAnswers({})
    setRecommendation(null)
  }

  const result = recommendation ? results[recommendation as keyof typeof results] : null

  return (
    <section className="bg-[#1B2F4E] py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#29ABE2]/20 text-[#29ABE2] text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wider uppercase">
            Package Selector
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Not Sure Which Package Is Right?
          </h2>
          <p className="text-slate-400">Answer 3 quick questions and we&apos;ll recommend the best fit.</p>
        </div>

        <AnimatePresence mode="wait">
          {!recommendation ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-8"
            >
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 flex-1 rounded-full transition-all duration-300"
                    style={{ backgroundColor: i <= step ? '#29ABE2' : '#e2e8f0' }}
                  />
                ))}
              </div>

              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Question {step + 1} of {questions.length}
              </p>
              <h3 className="text-xl font-bold text-[#1B2F4E] mb-6">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left px-5 py-4 rounded-xl border border-slate-200 text-slate-700 font-medium hover:border-[#29ABE2] hover:bg-[#29ABE2]/5 hover:text-[#29ABE2] transition-all duration-200"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              {/* Result header */}
              <div className="p-8 text-center" style={{ backgroundColor: result!.color }}>
                <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">
                  We recommend
                </p>
                <h3 className="text-4xl font-bold text-white mb-1">{result!.name}</h3>
                <p className="text-white/80">{result!.subtitle}</p>
              </div>

              {/* Result body */}
              <div className="p-8">
                <p className="text-slate-600 leading-relaxed mb-6">{result!.description}</p>

                <div className="space-y-2 mb-8">
                  {result!.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: result!.color }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="block w-full text-center py-4 rounded-xl font-semibold text-white transition mb-3"
                  style={{ backgroundColor: result!.color }}
                >
                  Request a Quote for {result!.name} →
                </a>

                <button
                  onClick={reset}
                  className="block w-full text-center py-3 text-sm text-slate-400 hover:text-slate-600 transition"
                >
                  ↺ Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
