import { useId } from 'react'

import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'
import { AppStoreLink } from './AppStoreLink'
import { GooglePlayLink } from './GooglePlayLink'
import screenshotHero from '@/images/mobile/hero.jpg'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#08c770" />
            <stop offset="1" stopColor="#08c770" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#08c770" />
            <stop offset="1" stopColor="#08c770" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 20h8M12 16v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="sm:py-26 overflow-hidden py-20 lg:pb-20 xl:pb-20">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Gérez vos EPI simplement.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Enfin une solution simple et rapide pour gérer ses parcs EPI.
              <br />
              Conçu spécifiquement pour les moniteur·rices d'escalade, de
              canyoning, de spéléo, de via ferrata ou de grimpe d'arbres, les
              guides de haute montagne, les clubs et salles d'escalade ou encore
              les PAH (Parcours Accrobatiques en Hauteur).
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
              <Button
                href="https://app.epitranquille.com/signup/"
                variant="solid"
              >
                <DesktopIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Commencer gratuitement</span>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
            <Link
              href="/snapec"
              className="group mt-10 flex items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-primary to-green-400 px-6 py-4 text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
            >
              <span className="text-sm font-semibold sm:text-base">
                Vous êtes au SNAPEC ? Bénéficiez d'un compte gratuitement !
              </span>
              <ArrowRightIcon className="h-5 w-5 flex-none transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 mask-[linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <Image
                  src={screenshotHero}
                  alt="Tableau de bord de l'application mobile EPI Tranquille"
                  className="h-full w-full object-cover"
                  priority
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
