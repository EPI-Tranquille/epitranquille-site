import { type Metadata } from 'next'
import { type ItemList, type WithContext } from 'schema-dts'

import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { TutorialsBrowser } from '@/components/TutorialsBrowser'
import {
  type Platform,
  embedUrl,
  platforms,
  thumbnailUrl,
  tutorials,
  youtubeChannelUrl,
} from '@/lib/tutorials'

export const metadata: Metadata = {
  title: 'Tutoriels vidéo',
  description:
    "Tutoriels vidéo pour prendre en main EPI Tranquille sur le web et sur l'application mobile : créer votre parc, ajouter vos EPI, faire vos contrôles, puis aller plus loin.",
  alternates: {
    canonical: '/tutoriels',
  },
}

const videoListSchema: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tutoriels vidéo EPI Tranquille',
  itemListElement: tutorials.map((tutorial, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'VideoObject',
      name: tutorial.title,
      description: tutorial.description,
      thumbnailUrl: thumbnailUrl(tutorial.url),
      uploadDate: tutorial.publishedAt,
      contentUrl: tutorial.url,
      embedUrl: embedUrl(tutorial.url),
      inLanguage: 'fr',
    },
  })),
}

function YouTubeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function TutorielsPage() {
  return (
    <>
      {tutorials.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoListSchema) }}
        />
      )}
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="bg-primary/10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-green-900">
              <YouTubeIcon className="h-4 w-4" />
              Tutoriels vidéo
            </p>
            <h1 className="section-title mt-6 sm:text-4xl">
              Apprenez à utiliser EPI Tranquille en quelques minutes
            </h1>
            <p className="section-subtitle">
              Des vidéos courtes pour prendre en main l'application web et
              l'application mobile, puis découvrir les usages avancés. Commencez
              par la prise en main, à votre rythme.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
            <TutorialsBrowser tutorials={tutorials} />
          </div>

          <div className="mx-auto mt-20 max-w-6xl sm:mt-28">
            <h2 className="section-title text-center">
              Retrouvez toutes les vidéos sur YouTube
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {(Object.keys(platforms) as Platform[]).map((platform) => (
                <div
                  key={platform}
                  className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Playlist {platforms[platform].label.toLowerCase()}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {platforms[platform].description}
                  </p>
                  <a
                    href={platforms[platform].playlistUrl ?? youtubeChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
                  >
                    Voir la playlist
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
              <div className="flex flex-col rounded-3xl bg-gray-900 p-8">
                <h3 className="text-lg font-semibold text-white">
                  Abonnez-vous à la chaîne
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-300">
                  Soyez averti·e dès qu'un nouveau tutoriel est en ligne.
                </p>
                <a
                  href={`${youtubeChannelUrl}?sub_confirmation=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                >
                  <YouTubeIcon className="h-5 w-5 text-[#ff0000]" />
                  S'abonner
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  )
}
