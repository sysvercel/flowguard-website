/**
 * Centralized marketing copy for the FlowGuard public website.
 *
 * Why this file exists:
 *  - Brand tone is plainspoken, operator-led, and honest. Keeping the canonical
 *    wording in one place keeps that voice consistent across pages.
 *  - These strings are rendered through JSX expressions (`{copy.x}`), which keeps
 *    apostrophes/quotes out of literal JSX text nodes (no entity-escaping needed).
 *  - The marketing-site tests import this module so the copy assertions and the
 *    rendered site share a single source of truth.
 *
 * Positioning spine: "Anyone can detect a leak. We own what happens next."
 */

export const HERO = {
  eyebrow: 'Built for Multifamily Operators',
  headline: 'Anyone can detect a leak. We own what happens next.',
  body:
    'FlowGuard runs the entire response — the alert goes straight to your maintenance team, the system guides them through containment, escalates relentlessly until a human acts, and documents every second. You don’t get an alarm. You get a handled incident.',
  primaryCta: 'Book My Free Water-Risk Walk',
  secondaryCta: 'See How FlowGuard Handles a Leak',
} as const

/** Operational proof bar — true, measurable, no overpromising. */
export const PROOF = [
  { big: '< 60s', label: 'Alert fires after detection' },
  { big: '3-Tier', label: 'Escalation until a human acts' },
  { big: '24/7', label: 'Monitored coverage' },
  { big: '100%', label: 'Incidents logged automatically' },
] as const

/** "What happens next" — detection is step one; we run the rest. */
export const PROCESS = {
  eyebrow: 'What Happens Next',
  heading: 'Detecting water is step one. We run the other five.',
  body:
    'Most systems stop at the alarm. FlowGuard carries the incident all the way from the first drop to a closed, documented record — without anyone dropping the ball.',
  chain: [
    { step: 'Detect', desc: 'A sensor sees water and the incident opens instantly.' },
    { step: 'Alert', desc: 'Email, SMS, and voice reach your on-call team in under 60 seconds.' },
    { step: 'Acknowledge', desc: 'The responder takes ownership with one tap — no app, no login.' },
    { step: 'Route', desc: 'They mark en route and on site; the timeline updates in real time.' },
    { step: 'Contain', desc: 'Guided steps walk them to a contained, isolated water source.' },
    { step: 'Document', desc: 'Every action is timestamped into a record that auto-closes when dry.' },
  ],
} as const

/** Phase 3 — Built for maintenance. The tech is the hero. No surveillance language. */
export const BUILT_FOR_MAINTENANCE = {
  eyebrow: 'Built for Maintenance',
  heading: 'Built for the people on the ground.',
  body1:
    'When water hits the floor at 2am, it’s not the owner who deals with it — it’s your maintenance tech, on a cracked phone, half-asleep. FlowGuard is built around them. The alert lands on the right person with one-tap actions, walks them through the response, and logs exactly what they did and how fast they did it.',
  body2:
    'When it’s over, the record shows your team caught it and contained it — not that they missed something. We don’t watch your team. We back them up, and we make them look as good as they actually are.',
} as const

/** Phase 4 — We own the response. Enforced escalation, not a suggestion. */
export const OWN_THE_RESPONSE = {
  eyebrow: 'We Own the Response',
  heading: 'An alert nobody acts on is just noise.',
  body1:
    'Most systems fire an alert and call it done. That alert goes off at 2am on a Saturday, lands on a phone that’s face-down, and the water runs for six hours.',
  body2:
    'We don’t let that happen. The alert escalates through every person and every channel until someone acknowledges it and acts — then we track the response to containment and confirm it’s actually dry. The response isn’t a suggestion. It’s enforced, all the way to handled.',
  tiers: [
    { tier: 'Tier 1', who: 'On-call maintenance tech', detail: 'SMS, email, and voice. A few minutes to respond.' },
    { tier: 'Tier 2', who: 'Supervisor + backup', detail: 'No response from Tier 1? The chain moves on its own.' },
    { tier: 'Tier 3', who: 'Property manager', detail: 'Still no human? Escalation keeps going. No dead ends.' },
  ],
} as const

/** Phase 5 — Hardware-agnostic. Positioning, not attack copy. No competitors named. */
export const HARDWARE_AGNOSTIC = {
  eyebrow: 'Hardware-Agnostic',
  heading: 'The product isn’t the sensor. It’s what happens when the sensor sees water.',
  body1:
    'We’re not here to sell you overpriced proprietary devices and lock you into them. Sensors are a commodity — the response is the product.',
  body2:
    'FlowGuard works with off-the-shelf hardware, so you’re never trapped, never paying a premium for a logo on a box, and never stuck when something better comes along. The intelligence isn’t on the wall. It’s in the engine behind it.',
  points: [
    { title: 'Off-the-shelf hardware', desc: 'Commercial-grade sensors you can actually source — no single-vendor lock-in.' },
    { title: 'The response engine', desc: 'The intelligence lives in the platform: routing, escalation, and documentation.' },
    { title: 'No premium for a logo', desc: 'You pay for the system that handles the incident, not a badge on a plastic box.' },
  ],
} as const

/** Phase 6 — Honest install. The honesty is the point. Do not over-soften. */
export const NO_SEAMLESS = {
  eyebrow: 'Honest Install',
  heading: 'We’re not going to tell you it’s ‘seamless.’',
  body1:
    'Every vendor in this space promises seamless integration. It’s the most overused phrase in proptech and it’s almost never true — so we won’t say it.',
  body2:
    'Here’s the honest version instead: FlowGuard fits the way your maintenance team already works, so we’re not forcing a new process on people who are already stretched. Setup is a real install — we place sensors where water is most likely to hit, stand up the gateway, and get your team onboarded. It takes a day, not a magic wand.',
  body3:
    'We’d rather tell you exactly what to expect than sell you a word you stopped believing years ago.',
} as const

/** Phase 7 — Reports / defensible record. Cautious wording only — no guarantees. */
export const DEFENSIBLE_RECORD = {
  eyebrow: 'Reporting',
  heading: 'Not just an alert. A defensible record.',
  body:
    'Every incident creates a defensible record that helps document response and supports insurance conversations — without anyone rebuilding the timeline from memory.',
  points: [
    'Every second timestamped',
    'Response chain captured',
    'Containment documented',
    'Photo evidence supported',
    'Maintenance actions logged',
    'Estimated loss prevented, shown with its assumptions',
  ],
  footnote:
    'Sample reports support ownership and insurance conversations. FlowGuard creates a defensible record of response — not a claim determination, damage appraisal, or promise of avoided loss.',
} as const

/**
 * Solutions page — interactive platform specifications ("the blueprint").
 * Specs are presented on a building cross-section: each stop is a physical
 * place on the property (or the path the signal takes off it), with the
 * spec rows that actually live there. Same facts as the old static table.
 */
export const PLATFORM_SPECS = {
  eyebrow: 'Platform Specifications',
  heading: 'Specs belong on a building, not in a table.',
  body:
    'This is the path a leak takes through FlowGuard — from the first drop in the boiler room to the phone call that gets a human moving. Tap any numbered point.',
  tourHint: 'Touring automatically — tap any point to take over.',
  footnote:
    'FlowGuard uses field-proven commercial hardware. Device selection, gateway placement, and coverage are scoped to the property during install.',
  stops: [
    {
      id: 'boiler',
      title: 'Boiler Room',
      blurb:
        'Where the expensive failures start. Sensors go under boilers, water heaters, pumps, and tanks first — the places where one failure soaks everything around it.',
      specs: [
        { label: 'Coverage Strategy', value: 'High-risk zones and critical areas first' },
        { label: 'Hardware Ecosystem', value: 'Commercial-grade LoRaWAN devices' },
      ],
    },
    {
      id: 'risers',
      title: 'Risers & Unit Stacks',
      blurb:
        'Wireless sensors placed along risers and in units with a history — no drywall cut, no rewiring, and nothing riding on property Wi-Fi.',
      specs: [
        { label: 'Deployment Model', value: 'Wireless, low-disruption installation' },
        { label: 'Network Required', value: 'None — sensors never touch property Wi-Fi' },
      ],
    },
    {
      id: 'gateway',
      title: 'Rooftop Gateway',
      blurb:
        'Every sensor reports to a LoRaWAN gateway — long-range, low-power radio built for concrete-and-steel buildings, not a consumer smart-home hub.',
      specs: [
        { label: 'Connectivity', value: 'LoRaWAN wireless' },
        { label: 'Gateway Placement', value: 'Scoped to the property during install' },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud Platform',
      blurb:
        'Incidents, device health, and reporting live in one place — for a single building or your whole portfolio.',
      specs: [
        { label: 'Monitoring Platform', value: 'Cloud-based' },
        { label: 'Property Visibility', value: 'Single-site and portfolio-level' },
        { label: 'Integration', value: 'Expandable for future integrations' },
      ],
    },
    {
      id: 'phone',
      title: 'Your On-Call Phone',
      blurb:
        'The signal ends with a human. Alerts go out by SMS, email, and phone call — and escalate through your response chain until someone acts.',
      specs: [
        { label: 'Alerting', value: 'SMS, email, and phone call' },
        { label: 'Escalation', value: 'Configurable response chain' },
      ],
    },
  ],
} as const

/** Phase 8 — Water-risk walk CTA. Site-walk framing, never "meeting". */
export const WATER_RISK_WALK = {
  heading: 'Book My Free Water-Risk Walk',
  supporting:
    '20 minutes. No cost. We’ll identify your highest-risk water zones and show where protection would go first.',
  primaryCta: 'Book My Free Water-Risk Walk',
  secondaryCta: 'View Sample Report',
} as const
