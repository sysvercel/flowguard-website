'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const navLinkClass = `text-sm font-medium transition ${
    scrolled ? 'text-[#1B2F4E] hover:text-[#29ABE2]' : 'text-white hover:text-[#29ABE2]'
  }`

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/flowguard-logo.png"
              alt="FlowGuard Asset Protection"
              width={160}
              height={40}
              priority
              className="object-contain w-32 md:w-40"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Link href="/roi-calculator" className={navLinkClass}>ROI Calculator</Link>
            <Link href="/contact" className={navLinkClass}>Contact</Link>
            <Link href="/contact" className="bg-[#29ABE2] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1A6FA8] transition">
              Request a Demo
            </Link>
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="p-2"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 transition-all ${scrolled ? 'bg-[#1B2F4E]' : 'bg-white'}`} />
              <span className={`block h-0.5 w-6 transition-all ${scrolled ? 'bg-[#1B2F4E]' : 'bg-white'}`} />
              <span className={`block h-0.5 w-6 transition-all ${scrolled ? 'bg-[#1B2F4E]' : 'bg-white'}`} />
            </div>
          </button>
        </div>
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
          {/* Close button + logo */}
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

          {/* PLATFORM */}
          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Platform</p>
            <nav className="flex flex-col gap-3">
              <Link href="/how-it-works" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">How It Works</Link>
              <Link href="/demo" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Watch Demo</Link>
              <Link href="/sample-report" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Sample Report</Link>
              <Link href="/dashboard" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Dashboard</Link>
            </nav>
          </div>

          {/* SOLUTIONS */}
          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Solutions</p>
            <nav className="flex flex-col gap-3">
              <Link href="/solutions" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Solutions</Link>
              <Link href="/why-flowguard" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">Why FlowGuard</Link>
              <Link href="/roi-calculator" onClick={closeDrawer} className="text-sm text-slate-300 hover:text-[#29ABE2] transition">ROI Calculator</Link>
            </nav>
          </div>

          {/* GET STARTED */}
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

          {/* CTA */}
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
