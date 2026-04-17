'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-4 sm:gap-6 lg:gap-8 bg-white/85 backdrop-blur-xl border border-slate-200/60 shadow-[0_2px_12px_rgba(15,23,42,0.06)] rounded-full pl-5 pr-1.5 py-1.5">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/flowguard-logo.png"
              alt="FlowGuard Asset Protection"
              width={160}
              height={40}
              priority
              className="object-contain w-20 sm:w-24 lg:w-[104px]"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            <Link href="/how-it-works" className="text-[13px] font-medium text-slate-700 hover:text-[#29ABE2] transition">How It Works</Link>
            <Link href="/dashboard" className="text-[13px] font-medium text-slate-700 hover:text-[#29ABE2] transition">Dashboard</Link>
            <Link href="/solutions" className="text-[13px] font-medium text-slate-700 hover:text-[#29ABE2] transition">Solutions</Link>
            <Link href="/roi-calculator" className="text-[13px] font-medium text-slate-700 hover:text-[#29ABE2] transition">ROI Calculator</Link>
            <Link href="/contact" className="text-[13px] font-medium text-slate-700 hover:text-[#29ABE2] transition">Contact</Link>
          </div>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center bg-[#1B2F4E] text-white px-4 lg:px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-[#29ABE2] transition-colors"
          >
            Request a Demo
          </Link>

          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="p-2 shrink-0 text-slate-700 hover:text-[#1B2F4E] transition"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M1 1H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <path d="M1 7H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <path d="M1 13H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeDrawer}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-80 max-w-[85vw] bg-[#0D2E4E] transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <Image
              src="/flowguard-logo.png"
              alt="FlowGuard"
              width={140}
              height={35}
              className="object-contain"
            />
            <button
              onClick={closeDrawer}
              aria-label="Close menu"
              className="text-white/60 hover:text-white transition text-2xl leading-none p-1"
            >
              &times;
            </button>
          </div>

          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Platform</p>
            <nav className="flex flex-col gap-3">
              <Link href="/how-it-works" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">How It Works</Link>
              <Link href="/dashboard" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Dashboard</Link>
              <Link href="/sample-report" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Sample Report</Link>
            </nav>
          </div>

          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Solutions</p>
            <nav className="flex flex-col gap-3">
              <Link href="/solutions" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Solutions</Link>
              <Link href="/why-flowguard" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Why FlowGuard</Link>
              <Link href="/roi-calculator" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">ROI Calculator</Link>
            </nav>
          </div>

          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Get Started</p>
            <nav className="flex flex-col gap-3">
              <Link href="/why" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Protect Your Property</Link>
              <Link href="/assessment" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Free Assessment</Link>
              <Link href="/contact" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Request a Demo</Link>
              <Link href="/contact" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Contact</Link>
              <Link href="/partners" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Partners</Link>
            </nav>
          </div>

          <Link
            href="/contact"
            onClick={closeDrawer}
            className="block w-full text-center bg-[#29ABE2] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1A6FA8] transition"
          >
            Request a Demo
          </Link>
        </div>
      </aside>
    </>
  )
}
