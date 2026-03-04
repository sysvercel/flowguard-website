export default function Footer() {
  return (
    <footer className="bg-[#0D2E4E] text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3BB4E5] to-[#0D2E4E] rounded-lg flex items-center justify-center border-2 border-white">
              <span className="text-white font-bold">FG</span>
            </div>
            <div>
              <p className="font-bold text-lg">
                <span className="text-[#3BB4E5]">Flow</span>
                <span className="text-white">Guard</span>
              </p>
              <p className="text-sm text-gray-300">Asset Protection</p>
            </div>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>&copy; 2026 FlowGuard Asset Protection LLC</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}