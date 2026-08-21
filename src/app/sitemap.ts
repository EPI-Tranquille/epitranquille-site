import type { MetadataRoute } from 'next'

import { getAllArticles } from '@/lib/articles'

const SITE_URL = 'https://epitranquille.com'

const staticRoutes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/pour-qui', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.5 },
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
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return [...staticEntries, ...articleEntries]
}
