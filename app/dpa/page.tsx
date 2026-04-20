// =============================================================================
// /dpa — Data Processing Agreement summary
// =============================================================================
// Summary DPA page. The full signed DPA is attached to enterprise contracts
// via DocuSign; this page is the readable web version so prospects can
// review terms before signing. Covers the GDPR Article 28 essentials:
// nature + purpose of processing, categories of data, rights, security,
// sub-processors, breach notification, return/deletion.
//
// Written to be enterprise-legible without being a wall of legalese.
// =============================================================================

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Processing Agreement · FlowGuard Asset Protection',
  description:
    'How FlowGuard processes customer data on behalf of property management customers. GDPR Article 28–aligned.',
}

export default function DPA() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-28 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-[#0D2E4E] mb-4">Data Processing Agreement</h1>
          <p className="text-sm text-gray-600 mb-4">Last Updated: April 20, 2026</p>

          <div className="mb-8 p-4 bg-[#EFF6FF] border border-[#29ABE2]/20 rounded">
            <p className="text-sm text-[#0D2E4E]">
              <strong>What this is:</strong> a plain-English summary of how FlowGuard processes customer
              data on your behalf. For enterprise contracts, we sign a full GDPR Article 28–aligned DPA
              as part of the master service agreement. Email{' '}
              <a
                href="mailto:mazen@flowguardprotection.com"
                className="text-[#3BB4E5] hover:underline"
              >
                mazen@flowguardprotection.com
              </a>{' '}
              to request the full signable document.
            </p>
          </div>

          <div className="prose max-w-none">
            {/* ─── Parties ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">1. Parties</h2>
              <p className="text-gray-700">
                This agreement is between <strong>FlowGuard Asset Protection LLC</strong>{' '}
                ("Processor," "we," "us") and the Customer who signs a FlowGuard service agreement
                ("Controller," "you"). Where a service agreement is in place, that agreement's DPA
                addendum takes precedence over this summary.
              </p>
            </section>

            {/* ─── Nature and purpose ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">2. Nature &amp; Purpose of Processing</h2>
              <p className="text-gray-700 mb-3">
                FlowGuard processes personal data only to deliver water-leak detection and alerting
                services to you. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Receive sensor uplinks from your properties and detect leak events</li>
                <li>Send alerts (SMS, email, voice) to contacts you designate</li>
                <li>Track response, escalation, and resolution of each incident</li>
                <li>Generate monthly reports and on-demand insurance packages</li>
                <li>Provide the customer portal (dashboards, incident history, documents)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We do not process personal data for any other purpose. We do not sell, rent, or share
                personal data with third parties for advertising or marketing.
              </p>
            </section>

            {/* ─── Data categories ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">3. Categories of Data &amp; Data Subjects</h2>
              <p className="text-gray-700 mb-3">
                <strong>Data subjects</strong> are typically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Property managers, asset managers, and regional managers</li>
                <li>Maintenance technicians and supervisors (alert recipients)</li>
                <li>Installer technicians (when applicable)</li>
              </ul>
              <p className="text-gray-700 mb-3">
                <strong>Data categories</strong> we process:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Contact details (name, email, phone number, role) for alert delivery and portal access
                </li>
                <li>Property information (name, address, unit count)</li>
                <li>Sensor metadata (device ID, location, zone, battery level)</li>
                <li>Incident records (detection time, responder, resolution, notes)</li>
                <li>System interaction logs (portal logins, report downloads)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We do not process sensitive categories (health, religion, sexuality, biometric data) or
                data from children under 18.
              </p>
            </section>

            {/* ─── Sub-processors ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">4. Sub-processors</h2>
              <p className="text-gray-700 mb-3">
                Our current sub-processors are listed on our{' '}
                <a href="/security" className="text-[#3BB4E5] hover:underline">
                  Security page
                </a>
                . All are contractually bound to protect personal data to the same standards we commit
                to here. We will notify you in advance of any new sub-processor and give you a chance
                to object.
              </p>
            </section>

            {/* ─── Security ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">5. Security Measures</h2>
              <p className="text-gray-700 mb-3">
                We implement technical and organizational measures appropriate to the risk, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>Role-based access control enforced at the database layer</li>
                <li>Passwordless authentication with MFA available</li>
                <li>Access logging and auditable audit trail</li>
                <li>Synthetic monitoring of the alert pipeline and background jobs</li>
                <li>Sentry error tracking with PII redaction</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Full detail is published on our{' '}
                <a href="/security" className="text-[#3BB4E5] hover:underline">
                  Security page
                </a>
                .
              </p>
            </section>

            {/* ─── Breach notification ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">6. Breach Notification</h2>
              <p className="text-gray-700">
                If we become aware of a personal data breach, we will notify you without undue delay,
                and in any case within <strong>72 hours</strong> of becoming aware. The notification
                will include the nature of the breach, categories and approximate number of data
                subjects and records affected, likely consequences, and measures taken or proposed.
              </p>
            </section>

            {/* ─── Data subject rights ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">7. Data Subject Rights</h2>
              <p className="text-gray-700 mb-3">
                Where applicable law grants data-subject rights (access, rectification, erasure,
                restriction, portability, objection), we will assist you in responding within the
                timeframes required by law. Forward requests to{' '}
                <a
                  href="mailto:mazen@flowguardprotection.com"
                  className="text-[#3BB4E5] hover:underline"
                >
                  mazen@flowguardprotection.com
                </a>{' '}
                and we'll coordinate.
              </p>
            </section>

            {/* ─── International transfers ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700">
                All customer data is stored in the United States. If you are outside the US and your
                jurisdiction requires additional safeguards (Standard Contractual Clauses, UK IDTA,
                Swiss equivalent), we will execute the appropriate mechanism as part of your service
                agreement.
              </p>
            </section>

            {/* ─── Return & deletion ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">9. Return &amp; Deletion</h2>
              <p className="text-gray-700">
                On termination of the service agreement, we will, at your option, either return or
                delete all customer personal data within <strong>90 days</strong>, unless retention is
                required by law. Backups are purged on a rolling schedule.
              </p>
            </section>

            {/* ─── Audit ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">10. Audit Rights</h2>
              <p className="text-gray-700">
                On reasonable notice, we will make available all information necessary to demonstrate
                compliance with the obligations in this DPA and allow for, and contribute to, audits
                including inspections, conducted by you or an auditor mandated by you, no more than
                once per 12-month period, at your expense.
              </p>
            </section>

            {/* ─── Contact ─── */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">11. Contact</h2>
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="font-semibold text-[#0D2E4E]">FlowGuard Asset Protection LLC</p>
                <p className="text-gray-700">
                  Data protection inquiries:{' '}
                  <a
                    href="mailto:mazen@flowguardprotection.com"
                    className="text-[#3BB4E5] hover:underline"
                  >
                    mazen@flowguardprotection.com
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  To request the full signable DPA (PDF), email the address above with "DPA request"
                  in the subject line.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
