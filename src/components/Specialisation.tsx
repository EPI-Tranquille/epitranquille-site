import Link from 'next/link'

import { Container } from '@/components/Container'
import { normeNfS72701Url } from '@/config/links'

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l7.5 3v5.25c0 4.5-3.15 8.4-7.5 9.75-4.35-1.35-7.5-5.25-7.5-9.75V6L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 12l2.25 2.25 4.25-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Specialisation() {
  return (
    <section
      id="specialisation"
      aria-labelledby="specialisation-title"
      className="border-t border-gray-200 pt-12 pb-20 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center lg:max-w-3xl">
          <h2 id="specialisation-title" className="section-title">
            Un outil sur mesure pour les pros de l'escalade et de la montagne
          </h2>
          <p className="section-subtitle">
            EPI Tranquille n'est pas un logiciel générique de gestion
            d'équipements de protection individuelle (EPI), difficile à
            utiliser. Développé par un moniteur d'escalade en milieux naturels
            pour les encadrant·es et les clubs de sports de montagne et de
            pleine nature, cet outil est adapté à nos obligations légales et
            évolue avec nos pratiques.
          </p>
        </div>

        <div className="border-primary/25 bg-primary/10 mx-auto mt-10 flex max-w-2xl flex-col gap-4 rounded-3xl border p-8 sm:mt-12 sm:flex-row sm:items-center lg:max-w-3xl">
          <ShieldIcon className="text-primary h-10 w-10 flex-none" />
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">
              Conçu selon la norme{' '}
              <a
                href={normeNfS72701Url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                NF S72-701 (2008)
              </a>
              .
            </span>{' '}
            Identification de chaque EPI, fiche de vie, contrôles périodiques et
            historique des prêts : EPI Tranquille vous aide à tenir le suivi de
            vos EPI d'escalade, d'alpinisme et de spéléologie tel que le décrit
            la norme.{' '}
            <Link
              href="/pour-qui"
              className="font-semibold text-gray-900 underline"
            >
              Pour qui est conçu EPI Tranquille ?
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
