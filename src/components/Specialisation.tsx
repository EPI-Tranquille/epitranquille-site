import Link from 'next/link'

import { Container } from '@/components/Container'

const groups = [
  {
    title: 'Vos activités',
    items: ['Escalade', 'Canyoning', 'Alpinisme', 'Spéléologie', 'Via ferrata'],
  },
  {
    title: 'Vos diplômes',
    items: [
      "Brevets d'État (BE)",
      'DEJEPS et DESJEPS',
      'Guides de haute montagne',
      'CQP',
      "Autres diplômes d'encadrement",
    ],
  },
  {
    title: 'Vos structures',
    items: [
      'Moniteur·rices indépendant·es',
      'Clubs',
      "Salles d'escalade",
      'Collectivités',
      'Fédérations',
    ],
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
            EPI Tranquille est conçu par un moniteur d'escalade, pour les
            encadrant·es et les structures des sports de montagne et de pleine
            nature. Sa base de matériel, ses contrôles et ses évolutions suivent
            vos pratiques.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 lg:max-w-none lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl bg-white p-8 ring-1 ring-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {group.title}
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <CheckIcon className="text-primary mt-0.5 h-5 w-5 flex-none" />
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-primary/25 bg-primary/10 mx-auto mt-6 flex max-w-2xl flex-col gap-4 rounded-3xl border p-8 sm:flex-row sm:items-center lg:max-w-none">
          <ShieldIcon className="text-primary h-10 w-10 flex-none" />
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">
              Conçu selon la norme NF S72-701 (2008).
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
