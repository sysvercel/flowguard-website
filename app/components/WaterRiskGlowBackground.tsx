type Props = {
  className?: string
  /** Retained for compatibility; no longer renders radar rings. */
  radar?: boolean
  /** Retained for compatibility. */
  fine?: boolean
}

/**
 * Ambient backdrop for dark sections.
 * Precision-instrument look: a sharp structural blueprint grid that
 * fades downward. No glow orbs, no radar — pure CSS, no hooks.
 */
export default function WaterRiskGlowBackground({ className = '' }: Props) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 fg-blueprint fg-blueprint-fade" />
    </div>
  )
}
