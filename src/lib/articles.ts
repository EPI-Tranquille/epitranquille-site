import { readdir } from 'node:fs/promises'
import path from 'node:path'

export interface Article {
  title: string
  description: string
  author: string
  date: string
  /** Date de dernière mise à jour du contenu (AAAA-MM-JJ), si différente. */
  updated?: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

// Open Graph d'un article : défini page par page, il remplace celui du layout
// racine, d'où la reprise de siteName, locale et de l'image générée par
// src/app/opengraph-image.tsx.
export function articleOpenGraph(article: Article) {
  return {
    type: 'article' as const,
    siteName: 'EPI Tranquille',
    locale: 'fr_FR',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'EPI Tranquille - Gérez vos EPI simplement.',
      },
    ],
    publishedTime: article.date,
    authors: [article.author],
  }
}

const BLOG_DIR = path.join(process.cwd(), 'src/app/(main)/blog')

async function importArticle(slug: string): Promise<ArticleWithSlug | null> {
  try {
    let { article } = (await import(`../app/(main)/blog/${slug}/page.mdx`)) as {
      article: Article
    }
    return { slug, ...article }
  } catch {
    // Not every entry under blog/ is an article directory (e.g. page.tsx
    // itself lives one level up), skip anything that doesn't resolve.
    return null
  }
}

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  let entries = await readdir(BLOG_DIR, { withFileTypes: true })
  let slugs = entries.filter((entry) => entry.isDirectory()).map((e) => e.name)

  let articles = await Promise.all(slugs.map(importArticle))

  return articles
    .filter((article): article is ArticleWithSlug => article !== null)
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
