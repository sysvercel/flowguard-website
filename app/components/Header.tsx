'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = `text-sm font-medium transition ${
    scrolled ? 'text-[#1B2F4E] hover:text-[#29ABE2]' : 'text-white hover:text-[#29ABE2]'
  }`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
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
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/how-it-works" className={navLinkClass}>How It Works</Link>
          <Link href="/demo" className={navLinkClass}>Watch Demo</Link>
          <Link href="/solutions" className={navLinkClass}>Solutions</Link>
          <Link href="/why-flowguard" className={navLinkClass}>Why FlowGuard</Link>
          <Link href="/dashboard" className={navLinkClass}>Dashboard</Link>
          <Link href="/roi-calculator" className={`text-sm font-semibold transition px-3 py-1.5 rounded-full ${
            scrolled
              ? 'bg-[#29ABE2]/10 text-[#29ABE2] hover:bg-[#29ABE2]/20'
              : 'bg-[#29ABE2]/20 text-[#29ABE2] hover:bg-white/20'
          }`}>ROI Calculator</Link>
          <Link href="/assessment" className={`text-sm font-semibold transition px-3 py-1.5 rounded-full ${
            scrolled
              ? 'bg-green-50 text-green-600 hover:bg-green-100'
              : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
          }`}>Free Assessment</Link>
          <Link href="/contact" className={navLinkClass}>Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/contact" className="bg-[#29ABE2] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1A6FA8] transition">
            Request a Demo
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 transition-all ${scrolled ? 'bg-[#1B2F4E]' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 transition-all ${scrolled ? 'bg-[#1B2F4E]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 transition-all ${scrolled ? 'bg-[#1B2F4E]' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link href="/how-it-works" className="text-sm font-medium text-[#1B2F4E]" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="/demo" className="text-sm font-medium text-[#1B2F4E]" onClick={() => setMenuOpen(false)}>Watch Demo</Link>
          <Link href="/solutions" className="text-sm font-medium text-[#1B2F4E]" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link href="/why-flowguard" className="text-sm font-medium text-[#1B2F4E]" onClick={() => setMenuOpen(false)}>Why FlowGuard</Link>
          <Link href="/dashboard" className="text-sm font-medium text-[#1B2F4E]" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link href="/roi-calculator" className="text-sm font-semibold text-[#29ABE2]" onClick={() => setMenuOpen(false)}>ROI Calculator</Link>
          <Link href="/assessment" className="text-sm font-semibold text-green-600" onClick={() => setMenuOpen(false)}>Free Assessment</Link>
          <Link href="/contact" className="text-sm font-medium text-[#1B2F4E]" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="bg-[#29ABE2] text-white px-6 py-2.5 rounded-lg text-sm font-semibold text-center" onClick={() => setMenuOpen(false)}>Request a Demo</Link>
        </div>
      )}
    </header>
  )
}
