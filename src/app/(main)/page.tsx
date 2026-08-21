import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { PricingDynamic as Pricing } from '@/components/PricingDynamic'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { WebFeatures } from '@/components/WebPrimaryFeatures'
import { type Metadata } from 'next'
import {
  OnlineBusiness,
  WebApplication,
  WebSite,
  WithContext,
} from 'schema-dts'

export const metadata: Metadata = {
  title: {
    absolute:
      "EPI Tranquille — Gestion de registre EPI pour l'escalade, le canyoning et la spéléo",
  },
  description:
    "Gérez votre registre EPI simplement, sur le web et mobile. Ajout rapide, alertes automatiques, contrôles par lot. Essai gratuit, pensé pour les moniteur·rices d'escalade, canyoning, spéléologie et via ferrata.",
}

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
    addressLocality: 'Champcella',
    addressCountry: 'FR',
    addressRegion: 'Hautes-Alpes',
    postalCode: '03510',
  },
  slogan: 'Gérez vos EPI simplement',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Support clients',
    email: 'support@epitranquille.com',
  },
  founder: {
    '@type': 'Person',
    name: 'Samuel Girardin',
    jobTitle: "Moniteur d'escalade (DEJEPS)",
  },
}
const WebApplicationSchema: WithContext<WebApplication> = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'EPI Tranquille',
  applicationCategory: 'UtilitiesApplication',
  offers: [
    {
      '@type': 'Offer',
      name: 'Basique',
      price: 0.0,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'Indépendant',
      price: 5.0,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'Premium',
      price: 13.0,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'Entreprise',
      price: 50.0,
      priceCurrency: 'EUR',
    },
  ],
  downloadUrl: 'https://epitranquille.com',
}
const PageSchema = [WebSiteSchema, OnlineBusinessSchema, WebApplicationSchema]
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PageSchema) }}
      />
      <Hero />
      <PrimaryFeatures />
      <WebFeatures />
      {/* <Reviews /> */}
      <Pricing />
      <CallToAction />
      <Faqs />
    </>
  )
}
