import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import Pricing from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { Specialisation } from '@/components/Specialisation'
import { WebFeatures } from '@/components/WebPrimaryFeatures'
import { JsonLd } from '@/components/JsonLd'
import { appStoreUrl, playStoreUrl } from '@/config/links'
import screenshotMobileDashboard from '@/images/mobile/dashboard.jpg'
import screenshotMobileRegistre from '@/images/mobile/registre.jpg'
import screenshotWebDetail from '@/images/screenshots/detail.jpeg'
import screenshotWebTableauDeBord from '@/images/screenshots/tableau_de_bord.jpeg'
import {
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  WEB_APP_ID,
  appRating,
  organizationSchema,
} from '@/lib/seo'
import { type Metadata } from 'next'
import {
  type MobileApplication,
  type Offer,
  type WebApplication,
  type WebSite,
  type WithContext,
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

const description =
  "Registre EPI numérique pour l'escalade, le canyoning, l'alpinisme, la spéléologie et la via ferrata : base de données de produits, durée de vie et date de mise au rebut calculées, contrôles périodiques (unitaires ou par lot), alertes, prêts et sorties, export PDF du registre. Conçu selon la norme NF S72-701."

const featureList = [
  "Base de données d'EPI pour pré-remplir les fiches",
  'Scan du numéro de série, QR code ou datamatrix',
  'Durée de vie et date de mise au rebut théorique de chaque EPI',
  'Contrôles périodiques unitaires ou par lot',
  'Alertes avant contrôle et avant expiration',
  'Gestion des prêts et des sorties',
  'Registre EPI exportable en PDF',
  'Import du registre depuis Excel',
  'Plusieurs parcs et plusieurs utilisateurs',
  'Mode hors connexion sur mobile',
]

const audience = {
  '@type': 'Audience',
  audienceType:
    "Professionnel·les et structures de l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la via ferrata",
} as const

const aggregateRating = appRating
  ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: appRating.ratingValue,
        ratingCount: appRating.ratingCount,
      } as const,
    }
  : {}

function monthlyOffer(name: string, price: number, description: string): Offer {
  return {
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/#pricing`,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency: 'EUR',
      unitCode: 'MON',
      referenceQuantity: {
        '@type': 'QuantitativeValue',
        value: 1,
        unitCode: 'MON',
      },
    },
  }
}

const WebSiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'EPI Tranquille',
  alternateName: ['EPI Tranquille, registre EPI', 'epitranquille.com'],
  url: `${SITE_URL}/`,
  inLanguage: 'fr',
  publisher: { '@id': ORGANIZATION_ID },
}

const WebApplicationSchema: WithContext<WebApplication> = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': WEB_APP_ID,
  name: 'EPI Tranquille',
  url: 'https://app.epitranquille.com',
  description,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Registre EPI',
  operatingSystem: 'Web',
  browserRequirements: 'Navigateur web récent',
  inLanguage: 'fr',
  isAccessibleForFree: true,
  featureList,
  screenshot: [
    `${SITE_URL}${screenshotWebTableauDeBord.src}`,
    `${SITE_URL}${screenshotWebDetail.src}`,
  ],
  image: `${SITE_URL}/opengraph-image`,
  audience,
  publisher: { '@id': ORGANIZATION_ID },
  offers: [
    monthlyOffer(
      'Basique',
      0,
      "Gratuit, sans limite de durée : jusqu'à 50 EPI et 1 parc.",
    ),
    monthlyOffer(
      'Indépendant',
      5,
      "Jusqu'à 250 EPI et 2 parcs, alertes EPI et contrôles.",
    ),
    monthlyOffer(
      'Premium',
      13,
      "Jusqu'à 500 EPI et 5 parcs, gestion des prêts d'EPI.",
    ),
    monthlyOffer(
      'Entreprise',
      50,
      "Jusqu'à 2000 EPI, parcs illimités, support prioritaire.",
    ),
  ],
  ...aggregateRating,
}

function mobileApplicationSchema(
  operatingSystem: 'iOS' | 'Android',
  installUrl: string,
): WithContext<MobileApplication> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `${SITE_URL}/#app-${operatingSystem.toLowerCase()}`,
    name: 'EPI Tranquille',
    url: installUrl,
    installUrl,
    description,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Registre EPI',
    operatingSystem,
    inLanguage: 'fr',
    featureList,
    screenshot: [
      `${SITE_URL}${screenshotMobileDashboard.src}`,
      `${SITE_URL}${screenshotMobileRegistre.src}`,
    ],
    audience,
    publisher: { '@id': ORGANIZATION_ID },
    // Le téléchargement est gratuit, les formules payantes sont décrites
    // dans l'application web.
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'EUR',
    },
    ...aggregateRating,
  }
}

const PageSchema = [
  WebSiteSchema,
  organizationSchema,
  WebApplicationSchema,
  mobileApplicationSchema('iOS', appStoreUrl),
  mobileApplicationSchema('Android', playStoreUrl),
]

export default function Home() {
  return (
    <>
      <JsonLd data={PageSchema} />
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
