import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Collegites AI',
  description: 'An AI Video solution application aimed at helping students learn',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
