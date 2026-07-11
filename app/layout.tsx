import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JARVIS AI - Advanced Real-time Assistant',
  description: 'Your personal AI assistant with voice recognition, smart automation, and real-time responses',
  icons: {
    icon: '🤖',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0a14" />
      </head>
      <body className="bg-darker text-white overflow-hidden">
        {children}
      </body>
    </html>
  )
}
