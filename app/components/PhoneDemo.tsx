'use client'
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const messages = [
  { from: 'flowguard', text: '🚨 WATER LEAK DETECTED\n\nProperty: Riverside Apts\nLocation: Boiler Room\nSeverity: CRITICAL\nIncident: A3F2B1C8\n\nReply ACK to acknowledge', delay: 500 },
  { from: 'tech', text: 'ACK', delay: 2000 },
  { from: 'flowguard', text: '✅ Acknowledged.\n\nReply ROUTE when en route.', delay: 3500 },
  { from: 'tech', text: 'ROUTE', delay: 5000 },
  { from: 'flowguard', text: '🚗 En route confirmed.\n\nReply SITE when on site.', delay: 6500 },
  { from: 'tech', text: 'SITE', delay: 8000 },
  { from: 'flowguard', text: '📍 On site confirmed.\n\nReply CONTAINED when addressed.', delay: 9500 },
  { from: 'tech', text: 'CONTAINED', delay: 11000 },
  { from: 'flowguard', text: '✅ Leak contained.\n\nSystem monitoring until sensor dries.\nFull audit trail saved.', delay: 12500 },
]

export default function PhoneDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [replayKey, setReplayKey] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isInView && replayKey === 0) return

    setVisibleMessages([])
    setIsTyping(false)

    const timers: ReturnType<typeof setTimeout>[] = []

    messages.forEach((msg, index) => {
      if (msg.from === 'flowguard' && index > 0) {
        timers.push(setTimeout(() => setIsTyping(true), msg.delay - 800))
      }
      timers.push(setTimeout(() => {
        setIsTyping(false)
        setVisibleMessages(prev => [...prev, index])
      }, msg.delay))
    })

    return () => timers.forEach(clearTimeout)
  }, [isInView, replayKey])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [visibleMessages, isTyping])

  return (
    <div className="flex flex-col items-center" style={{ minHeight: '700px' }}>
      <div ref={ref} className="flex justify-center">
        {/* iPhone frame */}
        <div className="relative w-[320px] h-[620px] bg-black rounded-[50px] shadow-2xl border-4 border-gray-800 overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />

          {/* Screen */}
          <div className="absolute inset-0 bg-white flex flex-col">

            {/* Messages header */}
            <div className="bg-gray-100 pt-10 pb-3 px-4 flex items-center gap-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#29ABE2] flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">FG</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">FlowGuard</p>
                <p className="text-xs text-gray-500">+1 (469) 754-8593</p>
              </div>
            </div>

            {/* Messages body — fixed height, internal scroll */}
            <div
              ref={containerRef}
              className="overflow-y-auto px-3 py-4 space-y-2 bg-white"
              style={{ height: '460px' }}
            >
              {messages.map((msg, index) => (
                visibleMessages.includes(index) && (
                  <div
                    key={index}
                    className={`flex ${msg.from === 'tech' ? 'justify-end' : 'justify-start'}`}
                    style={{ animation: 'slideIn 0.3s ease-out' }}
                  >
                    <div
                      className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                        msg.from === 'tech'
                          ? 'bg-[#29ABE2] text-white rounded-br-sm'
                          : 'bg-gray-200 text-gray-900 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                )
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div className="px-3 py-2 bg-gray-100 border-t border-gray-200 flex items-center gap-2">
              <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-xs text-gray-400 border border-gray-300">
                Text Message
              </div>
              <div className="w-7 h-7 rounded-full bg-[#29ABE2] flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setVisibleMessages([])
          setIsTyping(false)
          setReplayKey(prev => prev + 1)
        }}
        className="mt-4 text-sm text-[#29ABE2] hover:underline"
      >
        ↺ Replay animation
      </button>
    </div>
  )
}
