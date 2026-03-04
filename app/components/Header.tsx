export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#3BB4E5] to-[#0D2E4E] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">FG</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-[#3BB4E5]">Flow</span>
              <span className="text-[#0D2E4E]">Guard</span>
            </h1>
            <p className="text-sm text-gray-600">Asset Protection</p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="/" className="text-[#0D2E4E] hover:text-[#3BB4E5]">Home</a></li>
            <li><a href="/privacy" className="text-gray-600 hover:text-[#3BB4E5]">Privacy</a></li>
            <li><a href="/terms" className="text-gray-600 hover:text-[#3BB4E5]">Terms</a></li>
            <li><a href="/sms" className="text-gray-600 hover:text-[#3BB4E5]">SMS Info</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-[#3BB4E5]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}