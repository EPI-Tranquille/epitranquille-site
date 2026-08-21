import Link from 'next/link'
import { type BlogPosting, type WithContext } from 'schema-dts'

import { Container } from '@/components/Container'
import { type Article } from '@/lib/articles'

const SITE_URL = 'https://epitranquille.com'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function ArticleLayout({
  article,
  slug,
  children,
}: {
  article: Article
  slug: string
  children: React.ReactNode
}) {
  let url = `${SITE_URL}/blog/${slug}`
  let articleSchema: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EPI Tranquille',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
  }

  return (
    <Container className="pt-12 pb-20 sm:pt-16 sm:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="group inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4 stroke-gray-500 group-hover:stroke-gray-700" />
          Retour au blog
        </Link>
        <article className="mt-10">
          <header className="flex flex-col">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-gray-500"
            >
              {formatDate(article.date)}
            </time>
            <p className="mt-2 text-sm text-gray-500">Par {article.author}</p>
          </header>
          <div className="custom-typography mt-8">{children}</div>
        </article>
      </div>
    </Container>
  )
}
