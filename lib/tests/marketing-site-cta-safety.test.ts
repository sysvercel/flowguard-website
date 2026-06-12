import { describe, it, expect } from 'vitest'
import {
  REQUIRED_PAGE_ROUTES,
  allAppTsxFiles,
  extractHrefs,
  exists,
  read,
} from './_helpers'
import { HERO, WATER_RISK_WALK } from '../marketing-copy'

const tsxFiles = allAppTsxFiles()
const homepage = read('app/page.tsx')

/** Internal paths that resolve today: every page route, plus the /demo redirect. */
const validInternalPaths = new Set<string>(['/'])
for (const route of REQUIRED_PAGE_ROUTES) if (route) validInternalPaths.add(`/${route}`)
validInternalPaths.add('/demo')

/** Phrases banned from public CTA copy (Phases 8 & 11). */
const BANNED_CTA_PHRASES = ['schedule a meeting', 'book a meeting', 'sales call']

describe('marketing site — CTA safety', () => {
  it('uses no banned "meeting" CTA language in public pages/components', () => {
    const offenders: string[] = []
    for (const file of tsxFiles) {
      const lower = read(file).toLowerCase()
      for (const phrase of BANNED_CTA_PHRASES) {
        if (lower.includes(phrase)) offenders.push(`${file}: "${phrase}"`)
      }
    }
    expect(offenders, `banned CTA phrases found:\n${offenders.join('\n')}`).toEqual([])
  })

  it('uses the water-risk walk framing for the primary CTA', () => {
    expect(WATER_RISK_WALK.primaryCta).toBe('Book My Free Water-Risk Walk')
    expect(HERO.primaryCta).toBe('Book My Free Water-Risk Walk')
    // The booking CTAs route to the existing /contact page (an unchanged URL).
    expect(homepage).toContain('href="/contact"')
  })

  it('keeps the sample-report secondary CTA pointed at a real route', () => {
    expect(WATER_RISK_WALK.secondaryCta).toBe('View Sample Report')
    expect(homepage).toContain('href="/sample-report"')
    expect(exists('app/sample-report/page.tsx')).toBe(true)
  })

  it('points every internal CTA href at a route or asset that exists', () => {
    const broken: string[] = []
    for (const file of tsxFiles) {
      for (const href of extractHrefs(read(file))) {
        if (!href.startsWith('/')) continue // mailto:, tel:, http(s):, anchors — out of scope
        const clean = href.split('#')[0].split('?')[0] || '/'
        if (validInternalPaths.has(clean)) continue
        if (exists(`public${clean}`)) continue // static asset in /public
        broken.push(`${file}: ${href}`)
      }
    }
    expect(broken, `internal hrefs with no matching route/asset:\n${broken.join('\n')}`).toEqual([])
  })
})
