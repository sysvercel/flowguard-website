'use client'
import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  label: string
}

export default function StatCounter({ target, prefix = '', suffix = '', decimals = 0, duration = 2000, label }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (target - startValue) * eased
      setCount(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target, duration])

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count).toLocaleString()

  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="text-4xl md:text-5xl font-bold text-[#29ABE2] mb-2">
        {prefix}{display}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  )
}
