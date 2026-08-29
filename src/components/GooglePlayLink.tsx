import clsx from 'clsx'

import { playStoreReady, playStoreUrl } from '@/config/links'

export function GooglePlayLink({
  color = 'black',
  className,
}: {
  color?: 'black' | 'white'
  className?: string
}) {
  let badge = (
    <svg viewBox="0 0 135 40" aria-hidden="true" className="h-10">
      <svg x="3" y="6" width="28" height="28" viewBox="0 0 40 40">
        <path
          d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
          fill="#EA4335"
        />
        <path
          d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
          fill="#FBBC04"
        />
        <path
          d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
          fill="#4285F4"
        />
        <path
          d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
          fill="#34A853"
        />
      </svg>
      <text
        x="34"
        y="17"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="10"
      >
        Télécharger sur
      </text>
      <text
        x="34"
        y="30"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="600"
      >
        Google Play
      </text>
    </svg>
  )

  if (!playStoreReady) {
    return (
      <span
        aria-disabled="true"
        title="Bientôt disponible sur Google Play"
        className={clsx(
          'flex w-full cursor-not-allowed items-center justify-center rounded-lg py-2.5 opacity-50 sm:w-auto',
          color === 'black'
            ? 'bg-gray-800 text-white'
            : 'bg-white text-gray-900',
          className,
        )}
      >
        {badge}
        <span className="sr-only">Bientôt disponible sur Google Play</span>
      </span>
    )
  }

  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Télécharger sur Google Play"
      className={clsx(
        'flex w-full items-center justify-center rounded-lg py-2.5 transition-colors sm:w-auto',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
        className,
      )}
    >
      {badge}
    </a>
  )
}
