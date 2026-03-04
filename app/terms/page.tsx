import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-[#0D2E4E] mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: March 4, 2026</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using FlowGuard Asset Protection water leak detection services ("Services"), you agree to be 
                bound by these Terms of Service. If you do not agree to these terms, you may not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard Asset Protection provides automated water leak detection and alert services for commercial and 
                residential properties. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Real-time water leak detection using IoT sensors</li>
                <li>Automated alerts via email, SMS, and voice calls</li>
                <li>Automatic escalation to supervisors and property managers for unclaimed incidents</li>
                <li>Incident tracking, response time monitoring, and system analytics</li>
                <li>24/7 system monitoring and technical support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">By using our Services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain sensors in proper working condition and replace batteries as needed</li>
                <li>Respond to leak alerts in a timely and appropriate manner</li>
                <li>Provide accurate and current contact information for all alert recipients</li>
                <li>Notify us promptly of any system malfunctions or technical issues</li>
                <li>Ensure sensors have adequate battery levels and network connectivity</li>
                <li>Grant necessary access to our personnel for sensor installation and maintenance</li>
                <li>Comply with all applicable laws and regulations in your use of the Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">4. Service Limitations and Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard provides detection and alerting services. We are NOT responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Physical water damage to property, contents, or structures</li>
                <li>Delays in response from maintenance personnel or property management</li>
                <li>Sensor malfunctions, hardware failures, or battery depletion</li>
                <li>Network connectivity issues, cellular outages, or internet disruptions</li>
                <li>False positive alerts or missed leak detections</li>
                <li>Damage occurring before sensor installation or during system downtime</li>
                <li>Acts of God, natural disasters, or events beyond our reasonable control</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Important:</strong> Our service is designed to assist in leak detection but should not be considered 
                a substitute for proper property maintenance, regular inspections, or adequate insurance coverage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard Asset Protection provides this service "as is" without warranties of any kind, express or implied. 
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We are not liable for property damage, financial losses, or consequential damages resulting from water leaks</li>
                <li>We are not liable for system failures, missed alerts, or delayed notifications</li>
                <li>We are not liable for indirect, incidental, special, or punitive damages</li>
                <li>Our maximum liability is limited to the total amount paid for our Services in the 12 months preceding any claim</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Some jurisdictions do not allow limitations on implied warranties or liability for incidental damages. In such 
                jurisdictions, our liability is limited to the greatest extent permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">6. Service Modifications and Availability</h2>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without 
                notice. We will make reasonable efforts to provide advance notice of significant changes that materially affect 
                service functionality. We are not liable for any modification, suspension, or discontinuation of the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">7. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Service fees are based on the pricing tier selected at the time of enrollment:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Installation fees are due upon service activation</li>
                <li>Monthly service fees are billed in advance on a recurring basis</li>
                <li>Fees are subject to change with 30 days' advance written notice</li>
                <li>Late payments may result in service suspension or termination</li>
                <li>Refunds are provided only as explicitly stated in your service agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">8. Service Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate service with 30 days' written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All monitoring and alert services will cease</li>
                <li>Account data will be retained for 90 days before permanent deletion</li>
                <li>Sensors must be returned to FlowGuard or purchased at fair market value</li>
                <li>Outstanding fees remain due and payable</li>
                <li>No refunds will be provided for partial billing periods</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to immediately terminate service for breach of these Terms, non-payment, or misuse of the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700">
                All content, software, designs, graphics, and materials provided through our Services are the property of 
                FlowGuard Asset Protection and are protected by copyright, trademark, and other intellectual property laws. 
                You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">10. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless FlowGuard Asset Protection, its officers, directors, 
                employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable 
                attorney fees) arising from your use of the Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">11. Governing Law and Disputes</h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law 
                principles. Any disputes arising from these Terms or the Services shall be resolved through binding arbitration 
                in accordance with the rules of the American Arbitration Association, or in the state or federal courts located 
                in Dallas County, Texas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">12. SMS and Communication Terms</h2>
              <p className="text-gray-700">
                By providing your phone number, you consent to receive automated SMS and voice call alerts related to water 
                leak detection. For complete information about SMS communications, including how to opt-out, please see our 
                <a href="/sms" className="text-[#3BB4E5] hover:underline"> SMS Information page</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these Terms from time to time. Material changes will be communicated via email to your registered 
                address. Continued use of the Services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">14. Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="font-semibold text-[#0D2E4E]">FlowGuard Asset Protection</p>
                <p className="text-gray-700">Email: <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></p>
                <p className="text-gray-700">General Inquiries: <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}