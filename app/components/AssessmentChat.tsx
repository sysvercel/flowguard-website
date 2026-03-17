'use client'
import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi! I'm Ryan, a water damage prevention specialist at FlowGuard. I'd love to learn about your property and help you figure out the best way to protect it. To start — what type of property are you managing and roughly how many units does it have?"
}

export default function AssessmentChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, isLoading])

  async function sendMessage() {
    if (!input.trim() || isLoading) return
    const userMessage: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)
    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      if (data.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry I ran into an issue. Please reach out directly at mazen@flowguardprotection.com" }])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.12)] overflow-hidden border border-slate-100">
      <div className="bg-[#1B2F4E] px-6 py-4 flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[#29ABE2] flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#1B2F4E]" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Ryan</p>
          <p className="text-slate-400 text-xs">FlowGuard Prevention Specialist · Online</p>
        </div>
        <div className="ml-auto">
          <a href="/contact" className="bg-[#29ABE2] text-white text-xs px-4 py-2 rounded-lg font-semibold hover:bg-[#1A6FA8] transition">
            Book a Demo
          </a>
        </div>
      </div>
      <div ref={containerRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-[#F8FAFC]">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-[#29ABE2] flex items-center justify-center flex-shrink-0 mr-2 mt-1">
                <span className="text-white font-bold text-xs">R</span>
              </div>
            )}
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-[#29ABE2] text-white rounded-br-sm'
                : 'bg-white text-slate-700 rounded-bl-sm shadow-sm border border-slate-100'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-[#29ABE2] flex items-center justify-center flex-shrink-0 mr-2 mt-1">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-slate-100 flex gap-1 items-center">
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>
      <div className="px-4 py-4 bg-white border-t border-slate-100 flex gap-3 items-center">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] disabled:opacity-50 transition"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="w-11 h-11 bg-[#29ABE2] rounded-xl flex items-center justify-center hover:bg-[#1A6FA8] transition disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
