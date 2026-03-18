import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1B2F4E] text-white">
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
              <Link href="/demo" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Watch Demo</Link>
              <Link href="/solutions" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Solutions</Link>
              <Link href="/why-flowguard" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Why FlowGuard</Link>
              <Link href="/roi-calculator" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">ROI Calculator</Link>
              <Link href="/assessment" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Free Assessment</Link>
              <Link href="/faq" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">FAQ</Link>
              <Link href="/contact" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Terms of Service</Link>
              <Link href="/sms" className="text-sm text-slate-300 hover:text-[#29ABE2] transition">SMS Information</Link>
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
