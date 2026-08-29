import clsx from 'clsx'

import { appStoreReady, appStoreUrl } from '@/config/links'

export function AppStoreLink({
  color = 'black',
  className,
}: {
  color?: 'black' | 'white'
  className?: string
}) {
  let badge = (
    <svg viewBox="0 0 135 40" aria-hidden="true" className="h-10">
      <svg x="3" y="6" width="28" height="28" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        />
      </svg>
      <text
        x="34"
        y="17"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
      >
        Télécharger sur
      </text>
      <text
        x="34"
        y="30"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="15"
        fontWeight="600"
      >
        App Store
      </text>
    </svg>
  )

  if (!appStoreReady) {
    return (
      <span
        aria-disabled="true"
        title="Bientôt disponible sur l'App Store"
        className={clsx(
          'flex w-full cursor-not-allowed items-center justify-center rounded-lg opacity-50 sm:w-auto',
          color === 'black'
            ? 'bg-gray-800 text-white'
            : 'bg-white text-gray-900',
          className,
        )}
      >
        {badge}
        <span className="sr-only">Bientôt disponible sur l'App Store</span>
      </span>
    )
  }

  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Télécharger sur l'App Store"
      className={clsx(
        'flex w-full items-center justify-center rounded-lg transition-colors sm:w-auto',
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
