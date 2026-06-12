import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

/** Project root. Vitest runs with cwd at the package root. */
export const ROOT = process.cwd()

/**
 * Public page routes that must keep resolving. These are printed on QR codes /
 * fliers, linked from CTAs, or otherwise public-facing. Renaming, moving, or
 * deleting any of these would break a live URL — so the route-safety test pins
 * the exact set. `''` is the homepage (`app/page.tsx`).
 */
export const REQUIRED_PAGE_ROUTES = [
  '', // /
  'assessment',
  'contact',
  'dashboard',
  'faq',
  'how-it-works',
  'methodology',
  'partners',
  'privacy',
  'roi-calculator',
  'sample-report',
  'sms',
  'solutions',
  'terms',
  'why',
  'why-flowguard',
] as const

/** API routes that back public forms / features and must not be removed. */
export const REQUIRED_API_ROUTES = ['assessment', 'referral'] as const

/** A permanent redirect we ship today (likely on a printed flier) — /demo → /how-it-works. */
export const REQUIRED_REDIRECTS = [{ source: '/demo', destination: '/how-it-works' }] as const

export function abs(rel: string): string {
  return join(ROOT, rel)
}

export function read(rel: string): string {
  return readFileSync(abs(rel), 'utf8')
}

export function exists(rel: string): boolean {
  return existsSync(abs(rel))
}

/** Path to a page route's file, e.g. routePageFile('how-it-works') -> app/how-it-works/page.tsx */
export function routePageFile(route: string): string {
  return join('app', route, 'page.tsx')
}

/** Recursively collect every .tsx file under app/. */
export function allAppTsxFiles(): string[] {
  const out: string[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry)
      if (statSync(full).isDirectory()) walk(full)
      else if (entry.endsWith('.tsx')) out.push(relative(ROOT, full))
    }
  }
  walk(abs('app'))
  return out
}

/** Extract every href="..." / href='...' value from a source string. */
export function extractHrefs(source: string): string[] {
  const hrefs: string[] = []
  const re = /href=["']([^"']+)["']/g
  let m: RegExpExecArray | null
  while ((m = re.exec(source)) !== null) hrefs.push(m[1])
  return hrefs
}

/** Normalize smart quotes/apostrophes to ASCII so phrase matching is glyph-robust. */
export function normalizeQuotes(s: string): string {
  return s
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/—/g, '--')
}
