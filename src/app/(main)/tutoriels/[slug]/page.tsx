import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, breadcrumbSchema } from '@/lib/seo'
import {
  embedUrl,
  levels,
  platforms,
  thumbnailUrl,
  tutorialPath,
  tutorials,
  videoObjectSchema,
} from '@/lib/tutorials'

// Seules les vidéos listées dans src/lib/tutorials.ts ont une page.
export const dynamicParams = false

export function generateStaticParams() {
  return tutorials.map((tutorial) => ({ slug: tutorial.slug }))
}

function findTutorial(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  let tutorial = findTutorial((await params).slug)
  if (!tutorial) {
    return {}
  }
  let platform = platforms[tutorial.platform].label.toLowerCase()
  return {
    title: `${tutorial.title} — Tutoriel ${platform}`,
    description: `${tutorial.description} Tutoriel vidéo EPI Tranquille pour l'${platform}.`,
    alternates: {
      canonical: tutorialPath(tutorial),
    },
    openGraph: {
      type: 'video.other',
      siteName: 'EPI Tranquille',
      locale: 'fr_FR',
      title: tutorial.title,
      description: tutorial.description,
      url: tutorialPath(tutorial),
      images: [{ url: thumbnailUrl(tutorial.url), width: 480, height: 360 }],
      videos: [{ url: embedUrl(tutorial.url) }],
    },
  }
}

export default async function TutorielPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let tutorial = findTutorial((await params).slug)
  if (!tutorial) {
    notFound()
  }

  let platform = platforms[tutorial.platform]
  let related = tutorials.filter(
    (other) =>
      other.slug !== tutorial.slug && other.platform === tutorial.platform,
  )

  return (
    <>
      <JsonLd
        data={[
          videoObjectSchema(tutorial, SITE_URL),
          breadcrumbSchema([
            { name: 'Tutoriels vidéo', path: '/tutoriels' },
            { name: tutorial.title, path: tutorialPath(tutorial) },
          ]),
        ]}
      />
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500">
              <Link href="/tutoriels" className="hover:text-gray-700">
                Tutoriels vidéo
              </Link>
              <span aria-hidden="true"> / </span>
              <span>
                {platform.label} · {levels[tutorial.level].title}
              </span>
            </nav>
            <h1 className="mt-4 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {tutorial.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{tutorial.description}</p>

            <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl bg-gray-900 ring-1 ring-gray-200">
              <iframe
                src={`${embedUrl(tutorial.url)}?rel=0`}
                title={tutorial.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>

            {tutorial.transcript && (
              <div className="custom-typography mt-12">
                <h2>Transcription</h2>
                {tutorial.transcript.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-xl font-semibold text-gray-900">
                  Autres tutoriels pour l'{platform.label.toLowerCase()}
                </h2>
                <ul className="mt-4 space-y-2">
                  {related.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={tutorialPath(other)}
                        className="font-medium text-green-900 underline"
                      >
                        {other.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-12">
              <Link
                href="/tutoriels"
                className="text-sm font-semibold text-gray-900 underline"
              >
                Voir tous les tutoriels vidéo
              </Link>
            </p>
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  )
}
