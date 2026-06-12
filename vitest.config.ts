import { defineConfig } from 'vitest/config'

/**
 * Static checks for the public marketing site. These tests read source files
 * and the shared copy module — they do not render React or boot Next, so they
 * run fast in a plain Node environment.
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['lib/tests/**/*.test.ts'],
  },
})
