import { describe, it, expect } from 'vitest'
import {
  REQUIRED_PAGE_ROUTES,
  REQUIRED_API_ROUTES,
  REQUIRED_REDIRECTS,
  routePageFile,
  exists,
  read,
} from './_helpers'

/**
 * URL / route safety (Phase 1).
 *
 * Hard requirement: do not rename, move, or delete existing public routes.
 * Existing URLs are printed on QR codes and fliers, so these checks fail loudly
 * if a route file disappears or a known redirect is dropped.
 */
describe('marketing site — route safety', () => {
  it('keeps every required public page route on disk', () => {
    const missing = REQUIRED_PAGE_ROUTES.filter((route) => !exists(routePageFile(route)))
    expect(missing, `missing page routes: ${missing.join(', ')}`).toEqual([])
  })

  it('keeps the homepage at / (app/page.tsx)', () => {
    expect(exists('app/page.tsx')).toBe(true)
  })

  it('keeps every required API route on disk', () => {
    const missing = REQUIRED_API_ROUTES.filter((route) => !exists(`app/api/${route}/route.ts`))
    expect(missing, `missing API routes: ${missing.join(', ')}`).toEqual([])
  })

  it('preserves the /demo → /how-it-works permanent redirect', () => {
    const config = read('next.config.ts')
    for (const { source, destination } of REQUIRED_REDIRECTS) {
      expect(config, `redirect source ${source} missing`).toContain(`"${source}"`)
      expect(config, `redirect destination ${destination} missing`).toContain(`"${destination}"`)
    }
    // /demo is a permanent (308) redirect — keep it that way for SEO/QR stability.
    expect(config).toContain('permanent: true')
  })

  it('does not remove the QR-sensitive entry routes', () => {
    // These are the routes most likely to live on a printed flier or QR code.
    for (const route of ['contact', 'why', 'assessment', 'sample-report', 'sms', 'how-it-works']) {
      expect(exists(routePageFile(route)), `${route} route was removed`).toBe(true)
    }
  })

  it('leaves the dashboard marketing route intact (no ops/portal route churn)', () => {
    // /dashboard here is a public marketing showcase page, not the internal ops app.
    // It must keep resolving and should not be repurposed away from a public page.
    expect(exists('app/dashboard/page.tsx')).toBe(true)
  })
})
