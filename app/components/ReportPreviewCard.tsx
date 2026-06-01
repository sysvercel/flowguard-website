const timeline: [string, string][] = [
  ['Detected', '2:14:03 AM'],
  ['Acknowledged', '2:14:24 AM'],
  ['On site', '2:22:18 AM'],
  ['Contained', '2:28:33 AM'],
  ['Resolved', '2:47:12 AM'],
]

const recap = [
  'Source isolated at unit shutoff valve',
  'Wet-vac on site, area dried',
  '6 photos captured and attached',
]

export default function ReportPreviewCard({ className = '' }: { className?: string }) {
  return (
    <div className={`fg-command-card rounded-2xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="text-[#29ABE2] font-bold text-sm">FlowGuard</span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Incident Report</span>
        </div>
        <span className="font-mono text-xs text-slate-400">██F2██C8</span>
      </div>

      {/* Status + key metrics */}
      <div className="px-5 sm:px-6 py-5 border-b border-white/10">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-1">Status</p>
            <span className="fg-chip text-emerald-300 border-emerald-400/30 bg-emerald-400/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Incident closed
            </span>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-1">Response time</p>
            <p className="font-mono font-bold text-white text-lg">33m 09s</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            ['Photo evidence', '6'],
            ['Escalation', 'Tier 1'],
            ['Audit trail', 'Full'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5">
              <p className="text-base font-bold text-[#29ABE2] leading-none mb-1">{value}</p>
              <p className="text-[9px] uppercase tracking-[0.12em] text-slate-500 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-5 sm:px-6 py-5 border-b border-white/10">
        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-3">Incident timeline</p>
        <div className="space-y-1.5 font-mono text-xs">
          {timeline.map(([label, time]) => (
            <div key={label} className="flex justify-between">
              <span className="text-slate-400">{label}</span>
              <span className="text-slate-200">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance recap */}
      <div className="px-5 sm:px-6 py-5 border-b border-white/10">
        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-3">Maintenance recap</p>
        <ul className="space-y-2">
          {recap.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
              <svg className="w-3.5 h-3.5 mt-0.5 text-[#29ABE2] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* Estimated loss prevented */}
      <div className="px-5 sm:px-6 py-4 bg-[#29ABE2]/[0.06] flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Est. loss prevented</span>
        <span className="font-mono font-bold text-[#29ABE2] text-base">$18,400*</span>
      </div>

      <p className="px-5 sm:px-6 py-3 text-[10px] leading-relaxed text-slate-500">
        *Modeled estimate based on response timing and zone risk. Illustrative only — not a claim determination, appraisal, or guarantee of avoided loss.
      </p>
    </div>
  )
}
