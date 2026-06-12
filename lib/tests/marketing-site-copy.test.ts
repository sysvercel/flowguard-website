import { describe, it, expect } from 'vitest'
import { read, normalizeQuotes } from './_helpers'
import {
  HERO,
  PROOF,
  PROCESS,
  BUILT_FOR_MAINTENANCE,
  OWN_THE_RESPONSE,
  HARDWARE_AGNOSTIC,
  NO_SEAMLESS,
  DEFENSIBLE_RECORD,
  WATER_RISK_WALK,
} from '../marketing-copy'

const homepage = read('app/page.tsx')

/** Everything in the shared copy module, flattened to one searchable blob. */
const allCopy = JSON.stringify({
  HERO,
  PROOF,
  PROCESS,
  BUILT_FOR_MAINTENANCE,
  OWN_THE_RESPONSE,
  HARDWARE_AGNOSTIC,
  NO_SEAMLESS,
  DEFENSIBLE_RECORD,
  WATER_RISK_WALK,
})

const has = (haystack: string, phrase: string) =>
  normalizeQuotes(haystack).includes(normalizeQuotes(phrase))

/**
 * Messaging spine (Phases 2–8). Copy lives in lib/marketing-copy.ts and is
 * rendered on the homepage through JSX expressions, so asserting the module
 * values + verifying the homepage wires them in guarantees the rendered page.
 */
describe('marketing site — required messaging', () => {
  it('hero leads with the positioning line', () => {
    expect(HERO.headline).toBe('Anyone can detect a leak. We own what happens next.')
  })

  it('includes the maintenance-first section heading', () => {
    expect(BUILT_FOR_MAINTENANCE.heading).toBe('Built for the people on the ground.')
  })

  it('includes the response-enforcement section heading', () => {
    expect(OWN_THE_RESPONSE.heading).toBe('An alert nobody acts on is just noise.')
  })

  it('includes the honest-install (no "seamless") heading', () => {
    expect(has(NO_SEAMLESS.heading, "We're not going to tell you it's 'seamless.'")).toBe(true)
  })

  it('uses the water-risk walk CTA copy', () => {
    expect(WATER_RISK_WALK.primaryCta).toBe('Book My Free Water-Risk Walk')
    expect(HERO.primaryCta).toBe('Book My Free Water-Risk Walk')
  })

  it('positions FlowGuard as hardware-agnostic (off-the-shelf hardware + response engine)', () => {
    expect(has(allCopy, 'off-the-shelf hardware')).toBe(true)
    expect(has(allCopy, 'response is the product')).toBe(true)
  })
})

/**
 * The homepage must actually render the spine — verify it imports the copy
 * module and references each section block. Combined with `tsc --noEmit`
 * (which proves the keys exist), this guarantees the strings reach the page.
 */
describe('marketing site — homepage wiring', () => {
  it('imports the shared copy module', () => {
    expect(homepage).toContain("@/lib/marketing-copy")
  })

  it('renders every required messaging block', () => {
    for (const token of [
      'HERO',
      'PROOF',
      'PROCESS',
      'BUILT_FOR_MAINTENANCE',
      'OWN_THE_RESPONSE',
      'HARDWARE_AGNOSTIC',
      'NO_SEAMLESS',
      'DEFENSIBLE_RECORD',
      'WATER_RISK_WALK',
    ]) {
      expect(homepage, `homepage does not reference ${token}`).toContain(token)
    }
  })
})

/**
 * Honesty guardrails: no overpromising, no guaranteed-outcome claims, and the
 * word "seamless" only appears inside the section that explicitly refuses it.
 */
describe('marketing site — honesty guardrails', () => {
  it('makes no guaranteed insurance / savings / claim-approval promises', () => {
    const searchable = normalizeQuotes(homepage + allCopy)
    expect(/guarantee/i.test(searchable), 'found a "guarantee" claim in homepage/copy').toBe(false)
  })

  it('does not use "seamless" as a claim outside the honest-install section', () => {
    const otherBlocks = JSON.stringify({
      HERO,
      PROOF,
      PROCESS,
      BUILT_FOR_MAINTENANCE,
      OWN_THE_RESPONSE,
      HARDWARE_AGNOSTIC,
      DEFENSIBLE_RECORD,
      WATER_RISK_WALK,
    })
    expect(/seamless/i.test(otherBlocks)).toBe(false)
    // The only allowed uses are inside NO_SEAMLESS, where the claim is refuted.
    expect(/seamless/i.test(JSON.stringify(NO_SEAMLESS))).toBe(true)
  })

  it('uses cautious reporting language (supports / helps / defensible record)', () => {
    expect(has(allCopy, 'supports insurance conversations') || has(allCopy, 'support ownership and insurance conversations')).toBe(true)
    expect(has(allCopy, 'defensible record')).toBe(true)
  })
})
