import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlowGuard — Water Leak Response for Multifamily Properties',
  description: 'FlowGuard detects water leaks, escalates response, guides maintenance teams, and documents every second for multifamily property owners.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/flowguard-icon.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/flowguard-icon.png" />
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
