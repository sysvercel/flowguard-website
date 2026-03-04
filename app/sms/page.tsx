import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SMS() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-[#0D2E4E] mb-4">SMS Alert Information</h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: March 4, 2026
          </p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">How SMS Alerts Work</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard sends automated SMS text message alerts when water leaks are detected at your property. 
                These critical notifications are sent to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintenance technicians for immediate leak response</li>
                <li>Supervisors when leaks remain unclaimed after 10 minutes</li>
                <li>Property managers when leaks remain unclaimed after 15 minutes</li>
              </ul>
              <p className="text-gray-700 mt-4">
                SMS alerts work alongside email notifications to ensure your team is notified through multiple channels 
                for maximum reliability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Message Frequency</h2>
              <p className="text-gray-700 mb-4">
                You will only receive SMS messages in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>When a water leak is detected at your property (immediate alert)</li>
                <li>When an incident is escalated to your role level (supervisor or property manager)</li>
                <li>When a leak is successfully resolved (confirmation message)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Typical message volume:</strong> 0-10 messages per month depending on leak incidents at your specific property. 
                Most properties receive 0-2 messages per month. SMS messages are only sent for actual leak events, not for routine 
                system notifications or marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">How to Opt-In</h2>
              <p className="text-gray-700 mb-4">
                You are automatically opted-in to receive SMS alerts when:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your property manager or building owner adds your phone number to the FlowGuard system</li>
                <li>You provide explicit consent to receive automated leak alerts at the time of enrollment</li>
                <li>You are designated as a contact person for water leak emergencies</li>
              </ul>
              <p className="text-gray-700 mt-4">
                By providing your phone number for FlowGuard alerts, you expressly consent to receive automated SMS text messages 
                related to water leak detection and emergency notifications. This consent is not a condition of purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">How to Opt-Out</h2>
              <p className="text-gray-700 mb-4">
                You can stop receiving SMS alerts at any time using any of these methods:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Text STOP:</strong> Reply "STOP" to any FlowGuard SMS message to immediately unsubscribe</li>
                <li><strong>Email us:</strong> Send your opt-out request to <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></li>
                <li><strong>Contact your property manager:</strong> Request removal from the notification list</li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm font-semibold text-yellow-800 mb-2">⚠️ Important Notice:</p>
                <p className="text-sm text-yellow-700">
                  If you opt-out of SMS alerts, you will no longer receive text message notifications about water leaks at your property. 
                  Email alerts will continue unless you opt-out separately. We recommend maintaining at least one alert method 
                  (email or SMS) to ensure you are notified of water emergencies.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Help & Support</h2>
              <p className="text-gray-700 mb-4">
                For assistance with SMS alerts or questions about the service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Text HELP:</strong> Reply "HELP" to any FlowGuard SMS message for assistance information</li>
                <li><strong>Email Support:</strong> <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></li>
                <li><strong>Customer Service:</strong> Available Monday-Friday, 9:00 AM - 5:00 PM CST</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Emergency leak monitoring operates 24/7, even outside business hours. For urgent technical issues with the 
                leak detection system, please contact your property manager directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Message & Data Rates</h2>
              <p className="text-gray-700">
                Message and data rates may apply to all SMS messages sent and received. Standard carrier charges from your 
                mobile service provider will apply. FlowGuard does not charge for SMS messages, but your carrier may charge 
                based on your mobile plan. Contact your mobile carrier for details about your specific messaging plan and rates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Supported Carriers</h2>
              <p className="text-gray-700 mb-4">
                FlowGuard SMS alerts work with all major US mobile carriers including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>AT&T</li>
                <li>Verizon Wireless</li>
                <li>T-Mobile / Sprint</li>
                <li>US Cellular</li>
                <li>Cricket Wireless</li>
                <li>Metro by T-Mobile</li>
                <li>Boost Mobile</li>
                <li>And most other major and regional carriers</li>
              </ul>
              <p className="text-gray-700 mt-4">
                If you experience issues receiving messages on your carrier, please contact our support team for assistance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-700">
                Your phone number and SMS communication preferences are protected under our <a href="/privacy" className="text-[#3BB4E5] hover:underline">Privacy Policy</a>. 
                We do not sell, rent, or share your phone number with third parties for marketing purposes. Your number is used 
                solely for sending water leak alerts and system notifications related to your property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Terms of Service</h2>
              <p className="text-gray-700">
                SMS alert services are provided subject to our <a href="/terms" className="text-[#3BB4E5] hover:underline">Terms of Service</a>. 
                By opting in to SMS alerts, you agree to receive automated text messages from FlowGuard Protection Systems 
                related to water leak detection and property monitoring.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about SMS alerts or to manage your preferences:
              </p>
              <div className="p-4 bg-gray-50 rounded">
                <p className="font-semibold text-[#0D2E4E]">FlowGuard Protection Systems</p>
                <p className="text-gray-700">Email: <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></p>
                <p className="text-gray-700">General Inquiries: <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">mazen@flowguardprotection.com</a></p>
                <p className="text-gray-700 mt-2 text-sm">Business Hours: Monday-Friday, 9:00 AM - 5:00 PM CST</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}