'use client'
import { useEffect, useState, useRef } from 'react'

const messages = [
  { from: 'flowguard', text: 'WATER LEAK DETECTED\n\nProperty: Riverside Apts\nLocation: Boiler Room\nSeverity: CRITICAL\nIncident: A3F2B1C8\n\nReply ACK to acknowledge', delay: 500 },
  { from: 'tech', text: 'ACK', delay: 2000 },
  { from: 'flowguard', text: 'Acknowledged.\n\nReply ROUTE when en route.', delay: 3500 },
  { from: 'tech', text: 'ROUTE', delay: 5000 },
  { from: 'flowguard', text: 'En route confirmed.\n\nReply SITE when on site.', delay: 6500 },
  { from: 'tech', text: 'SITE', delay: 8000 },
  { from: 'flowguard', text: 'On site confirmed.\n\nReply CONTAINED when addressed.', delay: 9500 },
  { from: 'tech', text: 'CONTAINED', delay: 11000 },
  { from: 'flowguard', text: 'Leak contained.\n\nSystem monitoring until sensor dries.\nFull audit trail saved.', delay: 12500 },
]

export default function PhoneDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [replayKey, setReplayKey] = useState(0)
  const hasStarted = useRef(false)

  // Use native IntersectionObserver instead of Framer Motion useInView
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          runAnimation()
        }
      },
      { threshold: 0.3 }
    )
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [])

  // Replay
  useEffect(() => {
    if (replayKey === 0) return
    runAnimation()
  }, [replayKey])

  function runAnimation() {
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
  }

  // Scroll container only — never the page
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [visibleMessages, isTyping])

  return (
    <div
      ref={wrapperRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '320px',
        height: '700px',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* iPhone frame — absolutely fixed size, never grows */}
      <div style={{
        width: '320px',
        height: '640px',
        backgroundColor: 'black',
        borderRadius: '50px',
        border: '4px solid #374151',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        position: 'relative',
        flexShrink: 0,
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '120px', height: '28px',
          backgroundColor: 'black',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          zIndex: 10,
        }} />

        {/* Screen */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>

          {/* Header */}
          <div style={{ backgroundColor: '#f3f4f6', paddingTop: '40px', paddingBottom: '12px', paddingLeft: '16px', paddingRight: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#29ABE2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>FG</span>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#111827', margin: 0 }}>FlowGuard</p>
              <p style={{ fontSize: '11px', color: '#6b7280', margin: 0 }}>+1 (469) 754-8593</p>
            </div>
          </div>

          {/* Messages — FIXED height, internal scroll ONLY */}
          <div
            ref={containerRef}
            style={{
              height: '480px',
              overflowY: 'auto',
              padding: '16px 12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              backgroundColor: 'white',
              flexShrink: 0,
            }}
          >
            {messages.map((msg, index) =>
              visibleMessages.includes(index) ? (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: msg.from === 'tech' ? 'flex-end' : 'flex-start',
                    animation: 'slideIn 0.3s ease-out',
                  }}
                >
                  <div style={{
                    maxWidth: '75%',
                    padding: '8px 12px',
                    borderRadius: '18px',
                    fontSize: '11px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-line',
                    backgroundColor: msg.from === 'tech' ? '#29ABE2' : '#e5e7eb',
                    color: msg.from === 'tech' ? 'white' : '#111827',
                    borderBottomRightRadius: msg.from === 'tech' ? '4px' : '18px',
                    borderBottomLeftRadius: msg.from === 'flowguard' ? '4px' : '18px',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ) : null
            )}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ backgroundColor: '#e5e7eb', padding: '10px 14px', borderRadius: '18px', borderBottomLeftRadius: '4px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {[0, 150, 300].map((delay) => (
                    <span key={delay} style={{ width: '6px', height: '6px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1s infinite', animationDelay: `${delay}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div style={{ padding: '8px 12px', backgroundColor: '#f3f4f6', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '999px', padding: '6px 16px', fontSize: '11px', color: '#9ca3af', border: '1px solid #d1d5db' }}>
              Text Message
            </div>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#29ABE2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Replay button */}
      <button
        onClick={() => {
          setVisibleMessages([])
          setIsTyping(false)
          setTimeout(() => setReplayKey(prev => prev + 1), 100)
        }}
        style={{ marginTop: '16px', fontSize: '13px', color: '#29ABE2', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
      >
        Replay animation
      </button>
    </div>
  )
}
