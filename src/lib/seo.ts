import {
  type BreadcrumbList,
  type Organization,
  type WithContext,
} from 'schema-dts'

import { appStoreUrl, playStoreUrl } from '@/config/links'
import { youtubeChannelUrl } from '@/lib/tutorials'

export const SITE_URL = 'https://epitranquille.com'

/** Logo en PNG : Google n'accepte pas le SVG pour le logo d'une organisation. */
export const LOGO_URL = `${SITE_URL}/web-app-manifest-512x512.png`

/**
 * Identifiants stables des entités décrites en JSON-LD. Les autres pages s'y
 * réfèrent (`{ '@id': ORGANIZATION_ID }`) au lieu de redécrire l'organisation,
 * ce qui permet à Google et aux moteurs IA de relier toutes les pages à la
 * même entité.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const WEB_APP_ID = `${SITE_URL}/#webapp`

/**
 * Profils officiels d'EPI Tranquille sur d'autres sites. Google s'en sert pour
 * construire le panneau de connaissances de la marque : ajoutez ici chaque
 * nouveau profil (fiche Google Business Profile, LinkedIn, Facebook,
 * Instagram…) dès qu'il existe.
 */
export const sameAs = [youtubeChannelUrl, appStoreUrl, playStoreUrl]

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'EPI Tranquille',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: '512',
    height: '512',
  },
  image: LOGO_URL,
  description:
    "EPI Tranquille est le registre EPI sur mesure des professionnel·les de l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la via ferrata, conçu selon la norme NF S72-701. Application web et mobile (iOS, Android).",
  slogan: 'Gérez vos EPI simplement',
  email: 'contact@epitranquille.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Champcella',
    addressRegion: 'Hautes-Alpes',
    postalCode: '05310',
    addressCountry: 'FR',
  },
  areaServed: { '@type': 'Country', name: 'France' },
  knowsAbout: [
    'Registre EPI',
    'Gestion des équipements de protection individuelle',
    'Contrôle périodique des EPI',
    'Durée de vie des EPI',
    'Norme NF S72-701',
    'Escalade',
    'Canyoning',
    'Alpinisme',
    'Spéléologie',
    'Via ferrata',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@epitranquille.com',
    availableLanguage: 'French',
  },
  founder: {
    '@type': 'Person',
    name: 'Samuel Girardin',
    jobTitle: "Moniteur d'escalade (DEJEPS)",
  },
  sameAs,
}

/**
 * Fil d'Ariane en JSON-LD : Google l'affiche à la place de l'URL brute dans
 * ses résultats. `items` liste les pages après l'accueil, la dernière étant
 * la page courante.
 */
export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Accueil', path: '/' }, ...items].map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      }),
    ),
  }
}

/**
 * Note moyenne des applications, affichée en étoiles dans les résultats
 * Google (résultat enrichi « application logicielle », qui exige une note).
 * À renseigner uniquement avec de vrais avis, par exemple ceux de l'App Store
 * et du Play Store, et à tenir à jour : une note inventée ou périmée expose à
 * une action manuelle de Google.
 */
export const appRating: { ratingValue: number; ratingCount: number } | null =
  null
