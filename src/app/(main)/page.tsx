import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { PricingDynamic as Pricing } from '@/components/PricingDynamic'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { Specialisation } from '@/components/Specialisation'
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
      'EPI Tranquille — Registre EPI escalade, canyoning, alpinisme, spéléo et via ferrata',
  },
  description:
    "Le registre EPI sur mesure des pros de l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la via ferrata : moniteur·rices BE, DEJEPS, CQP, clubs, salles d'escalade et collectivités. Conçu selon la norme NF S72-701. Essai gratuit, web et mobile.",
  alternates: {
    canonical: '/',
  },
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
  image: 'https://epitranquille.com/web-app-manifest-512x512.png',
  url: 'https://epitranquille.com',
  logo: 'https://epitranquille.com/web-app-manifest-512x512.png',
  name: 'EPI Tranquille',
  description:
    "EPI Tranquille est le registre EPI sur mesure des professionnel·les de l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la via ferrata, conçu selon la norme NF S72-701.",
  email: 'contact@epitranquille.com',
  keywords:
    "Registre EPI, NF S72-701, Escalade, Canyoning, Alpinisme, Spéléologie, Via ferrata, Moniteur, BE, DEJEPS, DESJEPS, CQP, Guide de haute montagne, Club, Salle d'escalade, Collectivité, Contrôles, Mousquetons, Cordes, Baudriers, Casques",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Champcella',
    addressCountry: 'FR',
    addressRegion: 'Hautes-Alpes',
    postalCode: '05310',
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
  url: 'https://epitranquille.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  inLanguage: 'fr',
  audience: {
    '@type': 'Audience',
    audienceType:
      "Professionnel·les et structures de l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la via ferrata",
  },
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
      <Specialisation />
      <PrimaryFeatures />
      <WebFeatures />
      {/* <Reviews /> */}
      <Pricing />
      <CallToAction />
      <Faqs />
    </>
  )
}
