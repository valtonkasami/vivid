import Image from 'next/image'
import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

import { Providers } from './GlobalRedux/provider'

export const metadata: Metadata = {
  title: 'Vivid',
  description: 'Discover the best Hairstylists in the World!',
  icons: {
    icon: '/flower.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>
        <Navbar />
        {children}
        </Providers>
      </body>
    </html>
  )
}
