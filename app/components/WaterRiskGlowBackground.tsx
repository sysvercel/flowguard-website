type Props = {
  className?: string
  /** Show expanding radar rings (slightly heavier visual). Default false. */
  radar?: boolean
  /** Use the finer grid spacing. Default false. */
  fine?: boolean
}

/**
 * Ambient "water-risk command center" backdrop.
 * Pure CSS/SVG, no hooks, no heavy animation. Sits behind dark sections.
 */
export default function WaterRiskGlowBackground({ className = '', radar = false, fine = false }: Props) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Blueprint grid, faded toward the edges */}
      <div className={`absolute inset-0 ${fine ? 'fg-grid-fine' : 'fg-grid'} fg-grid-mask`} />

      {/* Soft cyan + deep-blue glows */}
      <div className="absolute -top-24 left-[18%] w-[30rem] h-[30rem] rounded-full bg-[#29ABE2]/15 blur-3xl" />
      <div className="absolute -bottom-32 right-[14%] w-[26rem] h-[26rem] rounded-full bg-[#1A6FA8]/15 blur-3xl" />

      {/* Optional radar rings */}
      {radar && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px]">
          <span className="fg-radar-ring" />
          <span className="fg-radar-ring" style={{ animationDelay: '1.5s' }} />
          <span className="fg-radar-ring" style={{ animationDelay: '3s' }} />
        </div>
      )}
    </div>
  )
}
