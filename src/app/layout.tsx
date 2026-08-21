import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import { type Metadata, type Viewport } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'
import { CSPostHogProvider } from './providers'
import { CookieConsent } from '@/components/CookieConsent'
import { PostHogPageView } from '@/components/PostHogPageView'
import CrispChat from '@/components/CrispChat'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://epitranquille.com'),
  title: {
    template: '%s - EPI Tranquille',
    default: 'EPI Tranquille - Gérez vos EPI simplement.',
  },
  description:
    'EPI Tranquille est une application permettant de gérer vos équipements de protection individuelle (EPI) simplement.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'EPI Tranquille',
    url: 'https://epitranquille.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  themeColor: '#08c770',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <CSPostHogProvider>
        <body className="flex h-full flex-col">
          <PostHogPageView />
          <CrispChat />
          {children}
          <CookieConsent />
          <SpeedInsights />
        </body>
      </CSPostHogProvider>
    </html>
  )
}
