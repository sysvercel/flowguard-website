'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    title: "Getting Started",
    faqs: [
      {
        q: "Can we start with just critical areas like the boiler room and risers?",
        a: "Absolutely — and we recommend it. Most properties start with a phased deployment covering boiler rooms, mechanical rooms, and riser closets first. These are your highest-risk, highest-cost areas. Once the system is proven and your team is comfortable, expanding to units is straightforward. You don't have to deploy 500 sensors on day one."
      },
      {
        q: "Do we have to cover every unit on day one?",
        a: "No. Most properties start with a phased rollout. FlowGuard is specifically designed to let you begin with critical areas first, prove the system, and expand over time. You do not need to install hundreds of sensors on day one to start reducing risk."
      },
      {
        q: "What happens during a pilot?",
        a: "During a pilot, we deploy FlowGuard in the agreed high-risk areas, configure your escalation contacts, monitor all events live, and provide reporting throughout the trial period. At the end of the pilot, we review the results with you, identify remaining exposure points, and recommend the next phase of coverage if you decide to continue."
      },
      {
        q: "How long does installation take?",
        a: "Most properties are fully live within 1-3 days on site. We pre-configure every sensor and register all devices before we arrive, so installation is mount, scan, and verify. A 150-200 unit property typically takes 2 days with a small crew. You're protected from day one."
      },
    ]
  },
  {
    title: "Operations",
    faqs: [
      {
        q: "Does my maintenance team need to download an app?",
        a: "No app required. Your maintenance team responds entirely via SMS text message. They reply ACK to acknowledge, ROUTE when en route, SITE when on site, and CONTAINED when the issue is addressed. If they can send a text, they can use FlowGuard. No training, no downloads, no login."
      },
      {
        q: "How quickly can my team learn the system?",
        a: "Very quickly. FlowGuard is intentionally simple for field teams. Maintenance responds by SMS using plain-text commands like ACK, ROUTE, SITE, and CONTAINED. Property managers receive alerts and reports by email and text. Most teams understand the workflow after one short walkthrough."
      },
      {
        q: "What happens when a leak is detected at 2 AM?",
        a: "FlowGuard immediately opens an incident and alerts your on-call maintenance contact by text, email, and voice call if the incident is critical. If no one responds, the system automatically escalates through your custom response chain. Your team can acknowledge and update the incident entirely by SMS. For Respond clients, FlowGuard also supports after-hours coordination and backup vendor escalation when needed."
      },
      {
        q: "What happens if nobody responds to an alert?",
        a: "If no one responds, FlowGuard automatically escalates to the next contact in your response chain based on the timing and rules set for your property. That can include backup maintenance, supervisors, property managers, and regional contacts. The system keeps escalating until someone claims the incident or responds through the approved channel."
      },
      {
        q: "Do we need to replace our current plumber or maintenance process?",
        a: "No. FlowGuard is designed to work with your existing maintenance team and vendors. Your on-call maintenance staff remains the first responder, because they know the property and can usually contain the issue fastest. FlowGuard strengthens your response process by making sure alerts are seen, escalations happen automatically, and every incident is documented."
      },
      {
        q: "Do you include plumber dispatch?",
        a: "FlowGuard is designed as a maintenance-first response system. In most cases, your maintenance team is alerted first and determines whether outside help is needed. For Respond clients, FlowGuard can support backup vendor coordination when the property's approved response plan requires it. Third-party repair labor is billed separately."
      },
    ]
  },
  {
    title: "System & Reliability",
    faqs: [
      {
        q: "How does FlowGuard handle false alarms?",
        a: "We built confirmation logic directly into the system. Standard zones require two consecutive wet readings before an incident is created and alerts fire — eliminating most false positives from condensation or brief moisture contact. Critical zones like boiler rooms trigger immediately because speed matters more than caution there. If an alert does fire and your team determines it's a false alarm, they reply FALSE via SMS and the incident closes with no further escalation."
      },
      {
        q: "What happens if a sensor goes offline or the battery dies?",
        a: "FlowGuard monitors every device 24/7. If a sensor hasn't reported in 24 hours, your property manager receives a proactive health alert email — before it becomes a problem. Low battery warnings fire automatically when a sensor drops below 20%. You'll always know the status of every device."
      },
      {
        q: "Does FlowGuard work during freeze events?",
        a: "Yes. FlowGuard monitors temperature in supported zones and automatically creates freeze-risk incidents when temperatures drop below your thresholds. This gives your team earlier warning in boiler rooms, riser closets, and other vulnerable areas before a burst pipe becomes a major water-loss event. This is especially critical for Texas properties during winter storm events."
      },
      {
        q: "Is Wi-Fi required for every sensor?",
        a: "No. FlowGuard sensors communicate over LoRaWAN — a long-range, low-power wireless network designed for building-wide coverage. The sensors do not rely on property Wi-Fi to function. A single gateway covers most properties end to end."
      },
      {
        q: "What sensors do you use and how long do the batteries last?",
        a: "We deploy Milesight EM300 series sensors — industrial-grade LoRaWAN devices rated for 8-10 years of battery life. Spot sensors detect pooled water at a single point. Rope sensors run along perimeters and walls for linear coverage. Both communicate over LoRaWAN and require no WiFi or cellular connection on the sensor itself."
      },
    ]
  },
  {
    title: "Reporting & Value",
    faqs: [
      {
        q: "What kind of reporting do we receive?",
        a: "Depending on your package, FlowGuard provides monthly system summaries, incident timelines, health monitoring reports, insurance-ready event documentation, and executive summaries. Our reports show what happened, who responded, how quickly the incident was contained, and where your biggest remaining risks are."
      },
      {
        q: "Can FlowGuard help with insurance documentation?",
        a: "Yes. FlowGuard creates a complete incident record with timestamps, alert history, acknowledgments, escalation activity, and resolution details. For Protect and Respond clients, we generate insurance-ready incident reports that can help support internal review, claims documentation, and vendor coordination."
      },
      {
        q: "What does the monthly service actually include?",
        a: "Your monthly FlowGuard service covers live monitoring, alerts, escalation workflows, incident tracking, reporting, health monitoring, and package-specific support features. It is not just software access — it is the operating layer that helps your property respond faster and document incidents properly."
      },
      {
        q: "How is FlowGuard different from other leak detection systems?",
        a: "FlowGuard is built for what happens after the alert — not just leak detection. We combine real-time water detection with maintenance-first escalation, automatic incident tracking, health monitoring, and professional reporting. Instead of simply telling you there is a leak, FlowGuard helps your team respond faster, escalate correctly, and document every event from start to finish."
      },
      {
        q: "What areas of a property should be protected first?",
        a: "We typically recommend starting with the highest-risk, highest-consequence areas first: boiler rooms, mechanical rooms, riser closets, pump rooms, and other common-area water exposure points. These areas often create the largest losses when leaks go undetected. From there, most properties expand coverage in phases based on results and risk profile."
      },
    ]
  },
  {
    title: "Pricing & Terms",
    faqs: [
      {
        q: "How is pricing structured?",
        a: "FlowGuard pricing typically includes an upfront installation and hardware component, plus a recurring monthly service fee based on your selected package and deployment scope. Many properties begin with a critical-area rollout and expand in phases rather than deploying everywhere at once. We scope every property individually — contact us for a custom quote."
      },
      {
        q: "Who owns the hardware?",
        a: "The property owns the installed hardware. FlowGuard installs and configures the system, then provides the recurring monitoring, escalation, health monitoring, reporting, and package-specific support services. Your sensors are a capital asset on your balance sheet — not a subscription you pay forever."
      },
      {
        q: "Is there a long-term contract commitment?",
        a: "We work on pilot agreements for new properties — typically 3-6 months to prove the system before any long-term commitment. After the pilot, most clients move to annual agreements. We don't lock you into multi-year contracts before you've seen the system work at your property."
      },
    ]
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2F4E] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything property managers ask before booking a demo.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#29ABE2] mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.faqs.map((faq, index) => {
                  const key = `${category.title}-${index}`
                  return (
                    <div key={key} className="border border-slate-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpen(open === key ? null : key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition"
                      >
                        <span className="font-semibold text-[#1B2F4E] pr-4">{faq.q}</span>
                        <span className={`text-[#29ABE2] text-xl font-light flex-shrink-0 transition-transform duration-200 ${open === key ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open === key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="bg-[#29ABE2] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1A6FA8] transition inline-block"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  )
}
