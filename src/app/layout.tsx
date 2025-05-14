import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'
import { CSPostHogProvider } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - EPI Tranquille',
    default: 'EPI Tranquille - Gérez vos EPI simplement.',
  },
  description:
    'EPI Tranquille est une application permettant de gérer vos équipements de protection individuelle (EPI) simplement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <CSPostHogProvider>
        <body className="flex h-full flex-col">
          {children}
          <SpeedInsights />
        </body>
      </CSPostHogProvider>
    </html>
  )
}
