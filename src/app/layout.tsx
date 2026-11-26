import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import { type Metadata, type Viewport } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'
import { CSPostHogProvider } from './providers'
import { CookieConsent } from '@/components/CookieConsent'
import { PostHogPageView } from '@/components/PostHogPageView'
import CrispChat from '@/components/CrispChat'
import { appStoreId } from '@/config/links'

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
  applicationName: 'EPI Tranquille',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'EPI Tranquille',
  },
  twitter: {
    card: 'summary_large_image',
  },
  // Autorise Google à afficher de grandes images, des aperçus vidéo et des
  // extraits complets (recherche Images, Discover, aperçus IA).
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  // Bannière « Ouvrir dans l'App Store » de Safari sur iPhone.
  itunes: {
    appId: appStoreId,
  },
  // Validation de la propriété du site. Google Search Console : balise
  // facultative, inutile si le domaine est déjà validé par un enregistrement
  // DNS. Bing Webmaster Tools : ne pas retirer la balise, Bing la revérifie.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
    other: {
      'msvalidate.01': '2C03293268E614354DAD38576D69A7C1',
    },
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
