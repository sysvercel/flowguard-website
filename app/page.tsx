import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#3BB4E5] to-[#0D2E4E] text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Protect Your Property from Water Damage
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              FlowGuard provides 24/7 automated water leak detection and instant alerts 
              to your maintenance team with automatic escalation to ensure no leak goes unnoticed.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#0D2E4E] mb-12 text-center">
              How FlowGuard Works
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3BB4E5] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Leak Detected</h3>
                <p className="text-gray-600">Sensors detect water leaks instantly in real-time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3BB4E5] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Instant Alerts</h3>
                <p className="text-gray-600">Email and SMS alerts sent to your maintenance team</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3BB4E5] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Auto Escalation</h3>
                <p className="text-gray-600">Unclaimed incidents escalate to supervisors and property managers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3BB4E5] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-lg mb-2">Resolution</h3>
                <p className="text-gray-600">System tracks response times and confirms leak resolution</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#0D2E4E] mb-12 text-center">
              Comprehensive Water Protection
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-[#0D2E4E]">Real-Time Monitoring</h3>
                <p className="text-gray-600">IoT sensors provide 24/7 continuous monitoring with instant leak detection and immediate notifications to prevent damage.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-[#0D2E4E]">Multi-Channel Alerts</h3>
                <p className="text-gray-600">Receive alerts via email, SMS, and voice calls to ensure your team is notified through their preferred communication method.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-[#0D2E4E]">Automatic Escalation</h3>
                <p className="text-gray-600">Incidents automatically escalate from technicians to supervisors to property managers if unclaimed within specified timeframes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-[#0D2E4E]">Complete Tracking</h3>
                <p className="text-gray-600">Track incident response times, resolution data, and system performance with comprehensive reporting and analytics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0D2E4E] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Property Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join property managers across the country who trust FlowGuard to prevent costly water damage.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#3BB4E5] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2da3d4] transition"
            >
              Request Information
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}