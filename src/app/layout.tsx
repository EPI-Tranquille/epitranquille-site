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
    "EPI Tranquille, le registre EPI sur mesure des pros de l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la via ferrata. Conçu selon la norme NF S72-701.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'EPI Tranquille',
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
