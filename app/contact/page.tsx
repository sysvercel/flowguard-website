import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-[#0D2E4E] mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Get in touch with our team for questions, support, or information about our water leak detection services.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Company Information</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Company Name</h3>
                  <p className="text-gray-700">FlowGuard Asset Protection LLC</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Email Contacts</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">General Inquiries</h3>
                  <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">
                    mazen@flowguardprotection.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">For general questions about our services</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">Technical Support</h3>
                  <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">
                    mazen@flowguardprotection.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">For technical assistance and system issues</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">Privacy Inquiries</h3>
                  <a href="mailto:mazen@flowguardprotection.com" className="text-[#3BB4E5] hover:underline">
                    mazen@flowguardprotection.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">For privacy-related questions and data requests</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Business Address</h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  5900 Balcones Drive
STE 100
Austin, TX, 78731, US
                </p>
                <p className="text-sm text-gray-500 mt-3">
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Phone</h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">[972-246-8309]</p>
                <p className="text-sm text-gray-500 mt-3">
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Business Hours</h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Customer Service:</strong><br />
                  Monday - Friday: 9:00 AM - 5:00 PM CST<br />
                  Saturday - Sunday: Closed
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Emergency leak alerts are monitored 24/7 year-round. Our automated leak detection system 
                  operates continuously to protect your property.
                </p>
              </div>
            </section>

            <section>
              <div className="p-6 bg-blue-50 border-l-4 border-[#3BB4E5] rounded-lg">
                <h3 className="font-semibold text-lg text-[#0D2E4E] mb-2">🚨 Emergency Leak Alerts</h3>
                <p className="text-gray-700">
                  Our automated leak detection system operates 24/7 to protect your property. If you receive a leak alert 
                  via email or SMS, follow the instructions in the message to claim and resolve the incident immediately. 
                  For urgent system issues outside business hours, contact your property manager directly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0D2E4E] mb-4">Request Information</h2>
              <p className="text-gray-700 mb-4">
                Interested in FlowGuard's water leak detection services for your property? Contact us using any of the 
                email addresses above or visit our <a href="/" className="text-[#3BB4E5] hover:underline">homepage</a> to 
                learn more about how we can help protect your property from costly water damage.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}