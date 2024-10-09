import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/WebPrimaryFeatures'
import {
  OnlineBusiness,
  WebApplication,
  WebSite,
  WithContext,
} from 'schema-dts'

export default function Home() {
  const WebSiteSchema: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EPI Tranquille',
    url: 'https://epitranquille.com/',
  }
  const OnlineBusinessSchema: WithContext<OnlineBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'OnlineBusiness',
    image: 'https://epitranquille.com/logo.svg',
    url: 'https://epitranquille.com',
    logo: 'https://epitranquille.com/logo.svg',
    name: 'EPI Tranquille',
    description:
      'EPI Tranquille est une application permettant de gérer vos équipements de protection individuelle (EPI) simplement.',
    email: 'contact@epitranquille.com',
    keywords:
      "EPI, Canyoning, Escalade, Spéléo, Gestion, Contrôles, Mousquetons, Cordes, Baudriers, Casques, Moniteur, Via Ferrata, Grimpe d'arbres, Guide de haute montagne, Club, Salle d'escalade, PAH",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marseille',
      addressCountry: 'FR',
      addressRegion: 'Bouches-du-Rhône',
      postalCode: '13004',
    },
    slogan: 'Gérez vos EPI simplement',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Support clients',
      email: 'support@epitranquille.com',
    },
  }
  const WebApplicationSchema: WithContext<WebApplication> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'EPI Tranquille',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: 0.0,
      priceCurrency: 'EUR',
    },
    downloadUrl: 'https://epitranquille.com',
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(OnlineBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(WebApplicationSchema),
        }}
      />
      <Hero />
      <PrimaryFeatures />
      {/* <SecondaryFeatures /> */}
      {/* <Reviews /> */}
      <Pricing />
      <CallToAction />
      {/* <Faqs /> */}
    </>
  )
}
