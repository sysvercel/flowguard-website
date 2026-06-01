type Cell =
  | { kind: 'zone'; label: string; risk?: boolean }
  | { kind: 'unit' }

const cells: Cell[] = [
  { kind: 'zone', label: 'Mechanical Room' },
  { kind: 'unit' },
  { kind: 'unit' },
  { kind: 'zone', label: 'Water Heater', risk: true },
  { kind: 'unit' },
  { kind: 'zone', label: 'Riser Closet' },
  { kind: 'zone', label: 'Unit Kitchen' },
  { kind: 'unit' },
  { kind: 'zone', label: 'Laundry' },
  { kind: 'unit' },
  { kind: 'unit' },
  { kind: 'zone', label: 'Boiler Room', risk: true },
]

export default function ProtectedPropertyMap({ className = '' }: { className?: string }) {
  return (
    <div className={`fg-command-card rounded-2xl p-5 sm:p-6 w-full ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="fg-node" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            Property Protection Map
          </span>
        </div>
        <span className="fg-chip text-[#29ABE2] border-[#29ABE2]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" /> Live
        </span>
      </div>

      {/* Floor plan */}
      <div className="relative rounded-xl border border-white/10 p-3 sm:p-4 overflow-hidden">
        <div aria-hidden className="absolute inset-0 fg-grid-fine fg-grid-mask opacity-60" />
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
          {cells.map((cell, i) =>
            cell.kind === 'zone' ? (
              <div
                key={i}
                className={`relative rounded-lg border px-2.5 py-3 min-h-[58px] flex flex-col justify-between ${
                  cell.risk
                    ? 'border-[#F59E0B]/30 bg-[#F59E0B]/[0.06]'
                    : 'border-[#29ABE2]/25 bg-[#29ABE2]/[0.05]'
                }`}
              >
                <span className={cell.risk ? 'fg-node fg-node-amber' : 'fg-node'} />
                <span className="text-[9px] sm:text-[10px] leading-tight font-medium text-slate-200 mt-2">
                  {cell.label}
                </span>
              </div>
            ) : (
              <div
                key={i}
                className="rounded-lg border border-white/5 bg-white/[0.015] min-h-[58px] flex items-center justify-center"
              >
                <span className="text-[8px] uppercase tracking-[0.18em] text-slate-600">Unit</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#29ABE2]" />
          <span className="text-[10px] sm:text-xs text-slate-400">Protected</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="fg-node" />
          <span className="text-[10px] sm:text-xs text-slate-400">Monitoring</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="text-[10px] sm:text-xs text-slate-400">High-risk zone</span>
        </div>
      </div>
    </div>
  )
}
