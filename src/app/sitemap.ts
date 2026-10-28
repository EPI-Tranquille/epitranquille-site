import type { MetadataRoute } from 'next'

import screenshotMobileAjouter from '@/images/mobile/ajouter.jpg'
import screenshotMobileAlertes from '@/images/mobile/alertes.jpg'
import screenshotMobileControles from '@/images/mobile/controles.jpg'
import screenshotMobileDashboard from '@/images/mobile/dashboard.jpg'
import screenshotMobileExportPdf from '@/images/mobile/export-pdf.jpg'
import screenshotMobileHorsConnexion from '@/images/mobile/hors-connexion.jpg'
import screenshotMobileIdentifierPhoto from '@/images/mobile/identifier-photo.jpg'
import screenshotMobileRegistre from '@/images/mobile/registre.jpg'
import screenshotWebBdd from '@/images/screenshots/bdd.jpeg'
import screenshotWebControleDetaille from '@/images/screenshots/controle_detaille.jpeg'
import screenshotWebControleRapide from '@/images/screenshots/controle_rapide.jpeg'
import screenshotWebDetail from '@/images/screenshots/detail.jpeg'
import screenshotWebLoans from '@/images/screenshots/loans.jpeg'
import screenshotWebTableauDeBord from '@/images/screenshots/tableau_de_bord.jpeg'
import screenshotWebUtilisateurs from '@/images/screenshots/utilisateurs.jpeg'
import { getAllArticles } from '@/lib/articles'
import { SITE_URL } from '@/lib/seo'
import {
  durationInSeconds,
  embedUrl,
  thumbnailUrl,
  tutorialPath,
  tutorials,
} from '@/lib/tutorials'

// Captures d'écran de la page d'accueil, déclarées pour la recherche Images.
const homeImages = [
  screenshotWebTableauDeBord,
  screenshotWebBdd,
  screenshotWebDetail,
  screenshotWebControleRapide,
  screenshotWebControleDetaille,
  screenshotWebUtilisateurs,
  screenshotWebLoans,
  screenshotMobileDashboard,
  screenshotMobileIdentifierPhoto,
  screenshotMobileAjouter,
  screenshotMobileRegistre,
  screenshotMobileExportPdf,
  screenshotMobileAlertes,
  screenshotMobileControles,
  screenshotMobileHorsConnexion,
].map((image) => `${SITE_URL}${image.src}`)

const staticRoutes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  images?: string[]
}> = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
    images: [`${SITE_URL}/opengraph-image`, ...homeImages],
  },
  { path: '/pour-qui', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/tutoriels', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/snapec', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/partenaires', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/devenir-partenaire', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/cgu', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.2 },
  {
    path: '/politique-confidentialite',
    changeFrequency: 'yearly',
    priority: 0.2,
  },
  { path: '/politique-cookies', changeFrequency: 'yearly', priority: 0.2 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let articles = await getAllArticles()

  let articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  let staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images && { images: route.images }),
  }))

  let tutorialEntries: MetadataRoute.Sitemap = tutorials.map((tutorial) => ({
    url: `${SITE_URL}${tutorialPath(tutorial)}`,
    ...(tutorial.publishedAt && {
      lastModified: new Date(tutorial.publishedAt),
    }),
    changeFrequency: 'monthly',
    priority: 0.5,
    videos: [
      {
        title: tutorial.title,
        description: tutorial.description,
        thumbnail_loc: thumbnailUrl(tutorial.url),
        player_loc: embedUrl(tutorial.url),
        ...(tutorial.publishedAt && {
          publication_date: tutorial.publishedAt,
        }),
        ...(tutorial.duration && {
          duration: durationInSeconds(tutorial.duration),
        }),
        family_friendly: 'yes' as const,
      },
    ],
  }))

  return [...staticEntries, ...tutorialEntries, ...articleEntries]
}
