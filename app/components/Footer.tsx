import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0E1B30] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/flowguard-logo.png"
              alt="FlowGuard Asset Protection"
              width={160}
              height={40}
              className="object-contain mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">Stop water damage before it starts. Real-time leak detection and incident command for multifamily properties.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link href="/how-it-works" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">How It Works</Link>
              <Link href="/integration" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Integration</Link>
              <Link href="/solutions" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Solutions</Link>
              <Link href="/why-flowguard" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Why FlowGuard</Link>
              <Link href="/dashboard" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Dashboard</Link>
              <Link href="/assessment" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Free Assessment</Link>
              <Link href="/faq" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">FAQ</Link>
              <Link href="/contact" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Contact</Link>
              <Link href="/partners" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Partners</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Legal &amp; Trust</h4>
            <div className="flex flex-col gap-3">
              <Link href="/security" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Security</Link>
              <Link href="/privacy" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Terms of Service</Link>
              <Link href="/dpa" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Data Processing Agreement</Link>
              <Link href="/sms" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">SMS Information</Link>
              <a href="https://status.flowguardprotection.com" className="text-sm text-slate-300 hover:text-[#29ABE2] transition inline-flex items-center gap-1.5">
                System Status
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
          © 2026 FlowGuard Asset Protection LLC — Dallas, TX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
