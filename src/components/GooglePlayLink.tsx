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
      <path
        d="M13.316 19.02 1.15 31.92a2.87 2.87 0 0 0 4.223 1.73l.034-.02L18.99 26l-5.674-6.98Z"
        fill="#00D2FF"
      />
      <path
        d="M24.24 17.05l-5.263-3.045-5.913 6.955.036.033 5.877 5.802 5.25-3.005a2.867 2.867 0 0 0 0-4.995l.013-.006v.261Z"
        fill="#FFCA28"
      />
      <path
        d="M1.15 8.08c-.076.276-.117.564-.117.86v22.12c0 .296.04.584.117.86l12.593-12.65L1.15 8.08Z"
        fill="#5FDBFF"
      />
      <path
        d="M13.408 20 24.24 17.05a2.867 2.867 0 0 0 0-.1L5.407.35 5.373.33A2.87 2.87 0 0 0 1.15 8.08L13.408 20Z"
        fill="#66DE86"
      />
      <text
        x="34"
        y="17"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
      >
        Disponible sur
      </text>
      <text
        x="34"
        y="30"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="15"
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
          'inline-flex cursor-not-allowed items-center gap-2 rounded-lg px-3 py-1.5 opacity-50',
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
        'rounded-lg transition-colors',
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
