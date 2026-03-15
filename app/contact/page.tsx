'use client'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1B2F4E] py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Tell us about your property and we&apos;ll put together a custom recommendation.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <motion.section {...fadeUp} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Form — wider */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="md:col-span-3 space-y-6"
            >
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Property Name</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent"
                />
              </div>

              {/* Property Size */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Property Size</label>
                <select
                  name="property_size"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent bg-white"
                >
                  <option value="">Select unit count</option>
                  <option value="under-50">Under 50 units</option>
                  <option value="50-100">50–100 units</option>
                  <option value="100-200">100–200 units</option>
                  <option value="200-500">200–500 units</option>
                  <option value="500+">500+ units</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your property and what you're looking to solve"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#29ABE2] text-white py-4 rounded-xl font-semibold hover:bg-[#1A6FA8] transition text-sm"
              >
                Send Message
              </button>
            </form>

            {/* Info right */}
            <div className="md:col-span-2 space-y-8 pt-2">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1B2F4E] mb-1">Response Time</h3>
                <p className="text-sm text-slate-500">We typically respond within 24 hours on business days.</p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1B2F4E] mb-1">Email</h3>
                <a href="mailto:mazen@flowguardprotection.com" className="text-sm text-[#29ABE2] hover:text-[#1A6FA8] transition">
                  mazen@flowguardprotection.com
                </a>
              </div>

              <div>
                <div className="w-10 h-10 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1B2F4E] mb-1">Location</h3>
                <p className="text-sm text-slate-500">Based in Dallas, TX</p>
                <p className="text-sm text-slate-500">Serving properties across Texas</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
