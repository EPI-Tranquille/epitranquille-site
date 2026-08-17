import { Container } from '@/components/Container'
import { getAllArticles } from '@/lib/articles'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Conseils, actualités et bonnes pratiques pour gérer votre registre EPI : obligations réglementaires, contrôles, escalade, canyoning, spéléologie et via ferrata.",
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function BlogPage() {
  let articles = await getAllArticles()

  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="section-title">Le blog EPI Tranquille</h1>
          <p className="section-subtitle">
            Conseils, réglementation et bonnes pratiques pour gérer
            sereinement votre registre EPI.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
          {articles.length === 0 && (
            <p className="text-center text-gray-600">
              Les premiers articles arrivent très bientôt.
            </p>
          )}
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="relative flex flex-col gap-2"
              >
                <time
                  dateTime={article.date}
                  className="text-sm text-gray-500"
                >
                  {formatDate(article.date)}
                </time>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                  <Link href={`/blog/${article.slug}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-700">{article.description}</p>
                <span
                  aria-hidden="true"
                  className="text-sm font-medium text-primary"
                >
                  Lire la suite &rarr;
                </span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
