import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlowGuard Asset Protection — Real-Time Leak Detection',
  description: 'Real-time water leak detection and incident command for multifamily properties. Alerts in seconds, not hours.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/flowguard-icon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/flowguard-icon.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/flowguard-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/flowguard-icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
