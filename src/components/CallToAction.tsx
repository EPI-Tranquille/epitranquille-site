import Link from 'next/link'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { AppStoreLink } from './AppStoreLink'
import { GooglePlayLink } from './GooglePlayLink'

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CallToAction() {
  return (
    <section
      id="essai-gratuit"
      className="relative overflow-hidden bg-gray-900 pt-12 pb-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Commencez aujourd'hui
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Créer un compte gratuitement prend 1 minute pour pouvoir ensuite
            commencer à gérer vos EPI.
          </p>
          <div className="mt-8 hidden justify-center sm:flex">
            <Button color="white" href="https://app.epitranquille.com/signup/">
              Commencer gratuitement
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <AppStoreLink color="white" />
            <GooglePlayLink color="white" />
          </div>
          <Link
            href="https://app.epitranquille.com/signup/"
            className="group mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-white hover:text-gray-200 sm:hidden"
          >
            Commencer sur le web
            <ChevronRightIcon className="h-4 w-4 flex-none transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
