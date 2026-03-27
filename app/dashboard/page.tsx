import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Live Dashboard — FlowGuard Asset Protection',
  description: 'Real-time water leak monitoring dashboard for property managers, asset owners, and maintenance teams.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#1B2F4E] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#29ABE2]/20 border border-[#29ABE2]/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[#29ABE2] text-sm font-semibold">Live 24/7 Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your entire leak protection system.<br />
            <span className="text-[#29ABE2]">Live. In one place.</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            From the moment a sensor detects water to the moment the issue is resolved —
            every action, every alert, every responder is tracked in real time on your FlowGuard dashboard.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/demo"
              className="bg-[#29ABE2] text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-[#1A8CC4] transition">
              See it in action →
            </Link>
            <Link href="/contact"
              className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B2F4E] text-center mb-4">Built for everyone on your team</h2>
          <p className="text-slate-500 text-center mb-12 text-lg">One platform, three tailored views</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Property Manager',
                lightColor: 'bg-[#29ABE2]/10',
                textColor: 'text-[#29ABE2]',
                icon: '🏢',
                description: 'Your own secure portal login. See your property\'s incidents, device health, reports, and contacts — without access to other clients\' data.',
                features: [
                  'Live active incident feed',
                  'One-click insurance reports',
                  'Device health overview',
                  'On-call schedule visibility',
                  'Incident history with full timeline',
                  'Support ticket submission',
                ],
              },
              {
                role: 'Asset Owner',
                lightColor: 'bg-purple-50',
                textColor: 'text-purple-600',
                icon: '📊',
                description: 'Portfolio-level visibility across all your properties. Compare health scores, track trends, and generate executive reports for lenders or insurers.',
                features: [
                  'Portfolio health overview',
                  'Cross-property incident trends',
                  'Response time benchmarks',
                  'Executive summary reports',
                  'Insurance package exports',
                  'Underperforming property flags',
                ],
              },
              {
                role: 'Maintenance Team',
                lightColor: 'bg-green-50',
                textColor: 'text-green-600',
                icon: '🔧',
                description: 'Alerts reach your team in seconds via SMS, email, and voice — with one-tap response buttons. No app download required.',
                features: [
                  'Instant SMS + email + voice alerts',
                  'One-tap ACK, ROUTE, SITE, CONTAINED',
                  'Escalation chain — Tier 1, 2, 3',
                  'On-call schedule management',
                  'Incident timeline tracking',
                  'Mobile installer dashboard',
                ],
              },
            ].map(item => (
              <div key={item.role} className={`${item.lightColor} rounded-2xl p-6 border border-slate-200`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold ${item.textColor} mb-2`}>{item.role}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className={`${item.textColor} mt-0.5 flex-shrink-0`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How an incident works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B2F4E] text-center mb-4">From detection to resolution in minutes</h2>
          <p className="text-slate-500 text-center mb-12 text-lg">Every step tracked. Every action logged. Everything documented.</p>
          <div className="relative">
            <div className="space-y-0">
              {[
                {
                  time: '0:00',
                  title: 'Water detected',
                  description: 'Sensor detects moisture and fires an immediate uplink to FlowGuard',
                  color: 'bg-red-500',
                  detail: 'Incident created automatically — severity assigned, property and zone identified',
                },
                {
                  time: '0:03',
                  title: 'Alerts dispatched',
                  description: 'All Tier 1 contacts alerted simultaneously via SMS, email, and voice',
                  color: 'bg-orange-500',
                  detail: 'Email contains one-tap action buttons — no login required to respond',
                },
                {
                  time: '0:45',
                  title: 'Tech acknowledges',
                  description: 'Maintenance tech replies ACK via SMS or taps the email button',
                  color: 'bg-amber-500',
                  detail: 'Dashboard updates in real time — acknowledged by, timestamp, response time all recorded',
                },
                {
                  time: '4:20',
                  title: 'Tech on site',
                  description: 'Tech sends SITE — dashboard shows responder is physically at the location',
                  color: 'bg-blue-500',
                  detail: 'Full timeline visible to property manager and ops team simultaneously',
                },
                {
                  time: '8:15',
                  title: 'Leak contained',
                  description: 'Tech sends CONTAINED — issue is under control',
                  color: 'bg-purple-500',
                  detail: 'Containment time calculated automatically — critical for insurance documentation',
                },
                {
                  time: '8:32',
                  title: 'Auto-resolved',
                  description: 'Sensor reads dry — incident automatically resolved, resolution email sent',
                  color: 'bg-green-500',
                  detail: 'One-click insurance report now available with full incident documentation',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 z-10`}>
                      <span className="text-white text-xs font-bold">{step.time}</span>
                    </div>
                    {i < 5 && <div className="w-0.5 bg-slate-200 flex-1 mt-1" />}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-lg font-bold text-[#1B2F4E]">{step.title}</h3>
                    <p className="text-slate-600 mt-1">{step.description}</p>
                    <div className="bg-slate-50 rounded-lg px-4 py-2 mt-2 border border-slate-200">
                      <p className="text-slate-500 text-sm">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard features grid */}
      <section className="py-16 px-6 bg-[#1B2F4E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Everything you need. Nothing you don't.</h2>
          <p className="text-slate-400 text-center mb-12 text-lg">Built specifically for multifamily property operations</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Real-Time Incident Feed',
                description: 'The moment a sensor fires, an incident appears on your dashboard. No refresh. No delay. Live.',
              },
              {
                icon: '📱',
                title: 'No App Required',
                description: 'Your maintenance team responds via SMS or email. One tap. Works on any phone.',
              },
              {
                icon: '📋',
                title: 'Insurance Reports',
                description: 'One click generates a complete incident report with timestamps, responder details, and resolution proof.',
              },
              {
                icon: '🏥',
                title: 'Property Health Score',
                description: 'Every property gets a 0–100 health score based on sensor coverage, incidents, battery levels, and response quality.',
              },
              {
                icon: '🔔',
                title: 'Smart Escalation',
                description: 'If Tier 1 doesn\'t respond in 5 minutes, Tier 2 is automatically alerted. Then Tier 3. No one falls through the cracks.',
              },
              {
                icon: '📅',
                title: 'On-Call Schedules',
                description: 'Set weekly schedules and date overrides. The right person gets the alert every time — including holidays.',
              },
              {
                icon: '🔋',
                title: 'Device Health Monitoring',
                description: 'Monitor battery levels, signal strength, and last heartbeat for every sensor across every property.',
              },
              {
                icon: '❄️',
                title: 'Freeze Risk Alerts',
                description: 'Get notified when temperatures drop near freezing — before pipes burst, not after.',
              },
              {
                icon: '📊',
                title: 'Portfolio Analytics',
                description: 'Asset managers see all properties in one view — health scores, incident trends, response benchmarks.',
              },
            ].map(feature => (
              <div key={feature.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / trust */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B2F4E] text-center mb-12">What this means for your properties</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: '< 30 sec',
                label: 'Alert delivery',
                description: 'From water detected to your team\'s phone',
              },
              {
                stat: '24/7',
                label: 'Live monitoring',
                description: 'Dashboard never sleeps. Neither does your protection.',
              },
              {
                stat: '1 click',
                label: 'Insurance report',
                description: 'Full incident documentation ready instantly',
              },
            ].map(item => (
              <div key={item.stat} className="p-6">
                <p className="text-5xl font-bold text-[#29ABE2] mb-2">{item.stat}</p>
                <p className="text-xl font-bold text-[#1B2F4E] mb-2">{item.label}</p>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#29ABE2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to see the dashboard live?</h2>
          <p className="text-white/80 text-lg mb-8">
            Walk through a real incident from detection to resolution.
            See exactly what your property manager would see.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/demo"
              className="bg-white text-[#29ABE2] px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-slate-100 transition">
              Start the demo →
            </Link>
            <Link href="/contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Schedule a walkthrough
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
