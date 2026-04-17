interface StatCounterProps {
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  label: string
}

export default function StatCounter({ target, prefix = '', suffix = '', decimals = 0, label }: StatCounterProps) {
  const display = decimals > 0
    ? target.toFixed(decimals)
    : target.toLocaleString()

  return (
    <div className="text-center px-6 py-4">
      <div className="text-4xl md:text-5xl font-bold text-[#29ABE2] mb-2">
        {prefix}{display}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  )
}
