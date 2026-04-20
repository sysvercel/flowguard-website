// =============================================================================
// /security — Security & Trust page
// =============================================================================
// The enterprise-trust page. Prospects who are going to sign a $50k+
// contract WILL look at this before the call. Covers infrastructure,
// encryption, authentication, monitoring, incident response, data
// retention, subprocessors, and vulnerability disclosure.
//
// Written to be honest + concrete. Every claim is true today. Things we
// don't have yet (SOC 2 Type II) are called "in progress" rather than
// omitted — enterprise buyers respect directness.
// =============================================================================

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security · FlowGuard Asset Protection',
  description:
    'How FlowGuard protects your property data — infrastructure, encryption, authentication, monitoring, and incident response.',
}

export default function Security() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-28 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-[#0D2E4E] mb-4">Security & Trust</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: April 20, 2026</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                FlowGuard monitors water-leak incidents at properties 24/7. That means we hold operational
                data on behalf of our customers — property addresses, contact phone numbers and emails,
                sensor telemetry, incident timelines, and response records. We treat that data with the
                same seriousness your property managers expect from their insurance and accounting systems.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This page is the honest, specific version of our security posture — no jargon, no vague
                "bank-grade encryption" claims. If something is in progress, we say so. If you want the
                technical deep dive before a contract, email{' '}
                <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">
                  mazen@flowguardprotection.com
                </a>{' '}
                and we'll walk through any specific area.
              </p>
            </section>

            {/* ─── Infrastructure ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Infrastructure</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard runs on established, enterprise-grade cloud providers. We do not operate our
                own servers.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Application hosting:</strong> Vercel (SOC 2 Type II certified). Our customer
                  dashboards, APIs, and public status page run on Vercel's edge network.
                </li>
                <li>
                  <strong>Database &amp; authentication:</strong> Supabase (SOC 2 Type II certified),
                  which runs Postgres on AWS. Customer data lives in a US-region Postgres instance with
                  automatic daily backups.
                </li>
                <li>
                  <strong>Sensor telemetry ingestion:</strong> The Things Network for LoRaWAN uplinks —
                  our sensors transmit over licensed LoRaWAN frequencies to ISP-independent gateways.
                </li>
                <li>
                  <strong>Error tracking:</strong> Sentry (SOC 2 Type II certified). We capture
                  production exceptions to respond to bugs faster; no customer PII is sent to Sentry.
                </li>
                <li>
                  <strong>Alert delivery:</strong> Twilio for SMS and voice, Resend for email.
                </li>
              </ul>
            </section>

            {/* ─── Encryption ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Encryption</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>In transit:</strong> All customer-facing endpoints enforce TLS 1.3. HTTP
                  requests are redirected to HTTPS; HSTS is enabled.
                </li>
                <li>
                  <strong>At rest:</strong> Database and object storage are encrypted at rest by Supabase
                  (AES-256).
                </li>
                <li>
                  <strong>Sensor uplinks:</strong> Encrypted end-to-end between the sensor and our
                  ingestion endpoint via LoRaWAN's built-in AppSKey/NwkSKey.
                </li>
                <li>
                  <strong>Secrets:</strong> API keys, database credentials, and third-party tokens are
                  stored in Vercel and Supabase environment-variable vaults, never committed to source
                  control.
                </li>
              </ul>
            </section>

            {/* ─── Authentication & access ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Authentication &amp; Access Control</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Passwordless sign-in:</strong> Customer portal access uses email-link
                  authentication (no reusable passwords to steal).
                </li>
                <li>
                  <strong>Role-based access:</strong> Six roles (property manager, asset manager,
                  regional manager, installer, ops manager, super admin) with row-level security
                  enforced at the database layer — a property manager cannot query another property's
                  data even with valid credentials.
                </li>
                <li>
                  <strong>Internal access:</strong> Only the founder and explicitly-granted operators
                  can view customer data, through an audited admin surface.
                </li>
                <li>
                  <strong>MFA (two-factor authentication):</strong> Available on request today, rolling
                  out as a standard option for all customers in 2026.
                </li>
                <li>
                  <strong>SSO / SAML:</strong> Available on enterprise contracts. Email us for
                  Okta / Azure AD / Google Workspace configuration.
                </li>
              </ul>
            </section>

            {/* ─── Monitoring & incident response ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Monitoring &amp; Incident Response</h2>
              <p className="text-gray-700 mb-4">
                We don't just monitor your properties — we monitor ourselves.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Synthetic probes:</strong> Every 15 minutes, an automated probe fires through
                  the full alerting pipeline (uplink ingest → incident creation → alert fanout →
                  resolution) to verify it works end-to-end. Results are published at{' '}
                  <a
                    href="https://status.flowguardprotection.com"
                    className="text-[#3BB4E5] hover:underline"
                  >
                    status.flowguardprotection.com
                  </a>
                  .
                </li>
                <li>
                  <strong>Background-job health:</strong> Every scheduled job (monthly reports,
                  escalation timers, dry-confirmation resolution) reports liveness to an internal health
                  table. A meta-check every 15 minutes pages the on-call engineer via SMS if any job
                  goes silent.
                </li>
                <li>
                  <strong>Error alerting:</strong> Sentry is configured with three alert rules (high-
                  volume errors, new-issue first occurrence, regression) that email the on-call
                  engineer in real time.
                </li>
                <li>
                  <strong>Incident response:</strong> For platform outages, we follow a documented
                  response process — identify, mitigate, notify affected customers, post-mortem. The
                  public status page shows historical uptime.
                </li>
              </ul>
            </section>

            {/* ─── Data handling ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Data Handling</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Data residency:</strong> All customer data is stored in the United States.
                </li>
                <li>
                  <strong>Retention:</strong> Incident records are retained for 12 months for analytics
                  and customer reporting. Contact information is retained for the duration of the
                  service agreement. Upon termination, data is retained for 90 days before permanent
                  deletion, unless longer retention is required by law.
                </li>
                <li>
                  <strong>Deletion:</strong> Customers can request deletion of specific records or full
                  account wipeout by emailing{' '}
                  <a
                    href="mailto:mazen@flowguardprotection.com"
                    className="text-[#3BB4E5] hover:underline"
                  >
                    mazen@flowguardprotection.com
                  </a>
                  .
                </li>
                <li>
                  <strong>No ads, no selling data:</strong> We do not sell, rent, or share customer data
                  with any third party for marketing or advertising purposes. Ever.
                </li>
                <li>
                  <strong>Logs &amp; metrics:</strong> Application logs contain operational context but
                  are PII-redacted before being shipped to Sentry.
                </li>
              </ul>
            </section>

            {/* ─── Subprocessors ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Subprocessors</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard uses the following subprocessors to deliver the service. All are contractually
                obligated to protect customer data with the same standards we commit to.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-2 font-semibold text-[#0D2E4E]">Provider</th>
                      <th className="text-left px-4 py-2 font-semibold text-[#0D2E4E]">Purpose</th>
                      <th className="text-left px-4 py-2 font-semibold text-[#0D2E4E]">Region</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-gray-700">Supabase</td>
                      <td className="px-4 py-2 text-gray-700">Database, auth, storage, edge functions</td>
                      <td className="px-4 py-2 text-gray-700">US</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">Vercel</td>
                      <td className="px-4 py-2 text-gray-700">Application hosting, edge delivery</td>
                      <td className="px-4 py-2 text-gray-700">Global edge (US-origin)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">Twilio</td>
                      <td className="px-4 py-2 text-gray-700">SMS and voice alert delivery</td>
                      <td className="px-4 py-2 text-gray-700">US</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">Resend</td>
                      <td className="px-4 py-2 text-gray-700">Transactional email delivery</td>
                      <td className="px-4 py-2 text-gray-700">US</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">Sentry</td>
                      <td className="px-4 py-2 text-gray-700">Error tracking (PII-redacted)</td>
                      <td className="px-4 py-2 text-gray-700">US</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">The Things Network</td>
                      <td className="px-4 py-2 text-gray-700">LoRaWAN sensor uplink ingestion</td>
                      <td className="px-4 py-2 text-gray-700">US</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                We'll notify customers in advance of material changes to this list.
              </p>
            </section>

            {/* ─── Compliance ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Compliance</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>SOC 2 Type II:</strong> Evidence collection in progress. Our infrastructure
                  providers (Supabase, Vercel, Sentry) are already SOC 2 Type II certified.
                </li>
                <li>
                  <strong>GDPR &amp; CCPA:</strong> We respect data-subject rights regardless of where a
                  customer is based. Access, correction, and deletion requests go to{' '}
                  <a
                    href="mailto:mazen@flowguardprotection.com"
                    className="text-[#3BB4E5] hover:underline"
                  >
                    mazen@flowguardprotection.com
                  </a>
                  .
                </li>
                <li>
                  <strong>DPA (Data Processing Agreement):</strong> Available on request. See our{' '}
                  <a href="/dpa" className="text-[#3BB4E5] hover:underline">
                    DPA summary
                  </a>{' '}
                  for terms.
                </li>
              </ul>
            </section>

            {/* ─── Vulnerability disclosure ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Responsible Disclosure</h2>
              <p className="text-gray-700 mb-3">
                If you believe you've found a security vulnerability in FlowGuard, please report it to{' '}
                <a
                  href="mailto:mazen@flowguardprotection.com"
                  className="text-[#3BB4E5] hover:underline"
                >
                  mazen@flowguardprotection.com
                </a>
                . We'll confirm receipt within 48 hours and keep you informed as we work on a fix.
              </p>
              <p className="text-gray-700">
                Please do not publicly disclose until we've had a reasonable opportunity to address the
                issue. We appreciate the help.
              </p>
            </section>

            {/* ─── Contact ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Contact</h2>
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="font-semibold text-[#0D2E4E]">FlowGuard Asset Protection</p>
                <p className="text-gray-700">
                  Security &amp; compliance inquiries:{' '}
                  <a
                    href="mailto:mazen@flowguardprotection.com"
                    className="text-[#3BB4E5] hover:underline"
                  >
                    mazen@flowguardprotection.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Public status page:{' '}
                  <a
                    href="https://status.flowguardprotection.com"
                    className="text-[#3BB4E5] hover:underline"
                  >
                    status.flowguardprotection.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
