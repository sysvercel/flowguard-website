import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-[#0D2E4E] mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: March 4, 2026</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard Asset Protection collects the following information to provide water leak detection and alert services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Contact Information:</strong> Email addresses and phone numbers of maintenance technicians, supervisors, and property managers</li>
                <li><strong>Property Information:</strong> Property names, addresses, and device installation locations</li>
                <li><strong>Incident Data:</strong> Leak detection timestamps, response times, resolution data, and system performance metrics</li>
                <li><strong>Device Data:</strong> Sensor status information including battery levels, signal strength, and operational status</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information solely for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sending leak detection alerts via email, SMS, and voice calls</li>
                <li>Tracking incident response times and system performance</li>
                <li>System monitoring, maintenance, and technical support</li>
                <li>Service improvement and analytics</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">3. Data Protection and Security</h2>
              <p className="text-gray-700 mb-4">We protect your data through:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Encrypted database connections and secure data transmission</li>
                <li>Secure authentication systems for all platform access</li>
                <li>Access controls limiting data access to authorized personnel only</li>
                <li>Regular security audits and system updates</li>
                <li>Industry-standard security practices and protocols</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do NOT sell, rent, or share your personal information with third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>Service Providers:</strong> With trusted service providers who assist in delivering our services (email delivery, SMS messaging, hosting providers) under strict confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with advance notice to affected users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">5. Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from SMS and email alerts at any time (see our <a href="/sms" className="text-[#3BB4E5] hover:underline">SMS Information page</a> for details)</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, contact us at <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">6. Data Retention</h2>
              <p className="text-gray-700">
                We retain incident data for 12 months for analytical and reporting purposes. Contact information is retained 
                for the duration of your service agreement. Upon termination of service, data is retained for 90 days before 
                permanent deletion, unless longer retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-700">
                Our website uses minimal cookies for essential functionality only. We do not use advertising cookies or 
                third-party tracking. You can disable cookies in your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal 
                information from children. If we become aware that a child has provided us with personal information, we will 
                take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by email 
                and by updating the "Last Updated" date at the top of this policy. Your continued use of our services after 
                such modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">10. Contact Us</h2>
              <p className="text-gray-700">
                For questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="font-semibold text-[#0D2E4E]">FlowGuard Protection Systems</p>
                <p className="text-gray-700">Email: <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></p>
                <p className="text-gray-700">General Inquiries: <a href="mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}