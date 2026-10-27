'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import {
  type Level,
  type Platform,
  type Tutorial,
  embedUrl,
  levels,
  platforms,
  thumbnailUrl,
} from '@/lib/tutorials'

type Filter = Platform | 'all'

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.1-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
  )
}

function DesktopIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 20h8M12 16v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="6.5"
        y="2.75"
        width="11"
        height="18.5"
        rx="2.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 18h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const platformIcons: Record<
  Platform,
  (props: React.ComponentPropsWithoutRef<'svg'>) => React.JSX.Element
> = {
  web: DesktopIcon,
  mobile: PhoneIcon,
}

function VideoCard({ tutorial }: { tutorial: Tutorial }) {
  let [playing, setPlaying] = useState(false)
  let PlatformIcon = platformIcons[tutorial.platform]

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-gray-200">
      <div className="relative aspect-video bg-gray-900">
        {playing ? (
          <iframe
            src={`${embedUrl(tutorial)}?autoplay=1&rel=0`}
            title={tutorial.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Lire la vidéo : ${tutorial.title}`}
          >
            <Image
              src={thumbnailUrl(tutorial)}
              alt=""
              fill
              unoptimized
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gray-900/20 transition group-hover:bg-gray-900/10" />
            <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110">
              <PlayIcon className="text-primary ml-1 h-7 w-7" />
            </span>
            {tutorial.duration && (
              <span className="absolute right-3 bottom-3 rounded-md bg-gray-900/80 px-2 py-0.5 text-xs font-medium text-white">
                {tutorial.duration}
              </span>
            )}
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-sm font-medium text-green-900">
          <PlatformIcon className="h-4 w-4 flex-none" />
          {platforms[tutorial.platform].label}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {tutorial.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{tutorial.description}</p>
      </div>
    </article>
  )
}

function ComingSoonCard({ filter }: { filter: Filter }) {
  return (
    <div className="flex aspect-video flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 p-6 text-center sm:aspect-auto sm:min-h-72">
      <PlayIcon className="h-8 w-8 text-gray-300" />
      <p className="mt-3 font-semibold text-gray-900">
        De nouvelles vidéos arrivent bientôt
      </p>
      <p className="mt-1 text-sm text-gray-600">
        {filter === 'all'
          ? 'Les tutoriels sont en cours de tournage.'
          : `Les tutoriels pour l'${platforms[filter].label.toLowerCase()} sont en cours de tournage.`}
      </p>
    </div>
  )
}

export function TutorialsBrowser({ tutorials }: { tutorials: Tutorial[] }) {
  let [filter, setFilter] = useState<Filter>('all')

  let filters: Array<{ value: Filter; label: string }> = [
    { value: 'all', label: 'Toutes les vidéos' },
    { value: 'web', label: platforms.web.label },
    { value: 'mobile', label: platforms.mobile.label },
  ]
  let visible = tutorials.filter(
    (tutorial) => filter === 'all' || tutorial.platform === filter,
  )

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrer les vidéos par application"
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map((option) => {
          let count = tutorials.filter(
            (tutorial) =>
              option.value === 'all' || tutorial.platform === option.value,
          ).length
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              aria-pressed={filter === option.value}
              className={clsx(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                filter === option.value
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100',
              )}
            >
              {option.label}
              <span
                className={clsx(
                  'ml-2',
                  filter === option.value ? 'text-gray-300' : 'text-gray-400',
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {(Object.keys(levels) as Level[]).map((level, index) => {
        let videos = visible.filter((tutorial) => tutorial.level === level)
        return (
          <section
            key={level}
            aria-labelledby={`niveau-${level}`}
            className="mt-16 sm:mt-20"
          >
            <div className="flex items-start gap-4">
              <span className="bg-primary/10 flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-semibold text-green-900">
                {index + 1}
              </span>
              <div>
                <h2 id={`niveau-${level}`} className="section-title">
                  {levels[level].title}
                </h2>
                <p className="section-subtitle">{levels[level].description}</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((tutorial) => (
                <VideoCard key={tutorial.slug} tutorial={tutorial} />
              ))}
              {videos.length === 0 && <ComingSoonCard filter={filter} />}
            </div>
          </section>
        )
      })}
    </div>
  )
}
