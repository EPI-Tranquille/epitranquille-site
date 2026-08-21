import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { partners } from '@/lib/partners'
import { type Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Devenir partenaire',
  description:
    "Syndicats, regroupements de professionnels, clubs et centres de formation : proposez à vos adhérent·es un accès privilégié à EPI Tranquille.",
}

const CONTACT_MAIL = 'contact@epitranquille.com'
const CONTACT_SUBJECT = encodeURIComponent('Devenir partenaire EPI Tranquille')
const CONTACT_HREF = `mailto:${CONTACT_MAIL}?subject=${CONTACT_SUBJECT}`

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BoltIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  )
}

function BuildingIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="5"
        y="3"
        width="14"
        height="18"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 21v-4h6v4M9 7.5h1M9 11h1M14 7.5h1M14 11h1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function NetworkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 7.5 10.5 16M17 7.5 13.5 16M8.5 6h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="6" cy="6" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s7-6.05 7-11.5A7 7 0 0 0 5 9.5C5 14.95 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function AcademicCapIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 4 9 4.5-9 4.5-9-4.5 9-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.5V15c0 1.38 2.462 2.5 5.5 2.5s5.5-1.12 5.5-2.5v-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const audiences = [
  {
    icon: BuildingIcon,
    title: 'Syndicats professionnels',
    description:
      "Offrez à vos adhérent·es un outil adapté, développé au plus près du terrain, pour répondre à une obligation du métier",
  },
  {
    icon: NetworkIcon,
    title: 'Fédérations sportives',
    description:
      "Proposez à vos clubs un outil de gestion des EPI adaptés à des parcs importants avec des entrées/sorties de matériel fréquentes.",
  },
  {
    icon: MapPinIcon,
    title: 'Clubs et salles',
    description:
      "Facilitez la gestion du parc EPI de vos bénévoles et salarié·es, avec une solution pensée pour la gestion collaborative.",
  },
  {
    icon: AcademicCapIcon,
    title: 'Centres de formation',
    description:
      "Proposez aux stagiaires un outil de de suivi EPI adapté pendant la formation, qu'ils garderont ensuite dans leur pratique professionnelle.",
  },
]

const steps = [
  {
    title: 'On échange',
    description:
      "Parlez-nous de votre organisation, du nombre d'adhérent·es concerné·es et de ce que vous souhaitez leur proposer.",
  },
  {
    title: 'Vous soutenez le projet',
    description:
      "Une subvention adaptée à la taille de votre structure permet de financer l'accès préférentiel de vos adhérent·es.",
  },
  {
    title: 'Vos adhérent·es en profitent',
    description:
      "Chacun·e crée gratuitement ou à tarif préférentiel son compte EPI Tranquille, avec un accompagnement dédié au démarrage.",
  },
]

export default function DevenirPartenairePage() {
  return (
    <>
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-green-900">
              <BoltIcon className="h-4 w-4 flex-none text-primary" />
              Partenariats
            </span>
            <h1 className="section-title mt-6">
              Faisons rimer <span className="text-primary">registre EPI</span>{' '}
              et <span className="text-primary">simplicité</span> pour vos
              adhérent·es
            </h1>
            <p className="section-subtitle">
              Syndicats, regroupements de professionnels, clubs, centres de
              formation : offrez à vos membres un accès à EPI
              Tranquille à tarif préférentiel
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={CONTACT_HREF} variant="solid">
                <MailIcon className="h-5 w-5 flex-none" />
                <span className="ml-2.5">Discuter d'un partenariat</span>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Ils nous font déjà confiance
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {partners.map((partner) => (
                <div key={partner.name} className="flex items-center gap-3">
                  <Image
                    src={partner.logo}
                    alt=""
                    className="h-12 w-auto rounded-lg"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {partner.name}
                    </p>
                    <p className="text-xs text-gray-500">{partner.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-2xl text-center">
            <h2 className="section-title">Comment fonctionne un partenariat ?</h2>
            <p className="section-subtitle">
              Le principe : une subvention de votre organisation finance un
              tarif préférentiel — souvent gratuit — pour vos adhérent·es.
            </p>
          </div>
          <div className="relative mx-auto mt-12 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/5 ring-1 ring-gray-900/5"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-primary to-green-400" />
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-2xl text-center">
            <h2 className="section-title">Pour quel type d'organisation ?</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="flex gap-4 rounded-3xl bg-gray-50 p-8"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <audience.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-24 max-w-3xl rounded-3xl bg-gray-50 p-8 text-center sm:p-10">
            <h2 className="text-xl font-semibold text-gray-900">
              Une autre idée de partenariat en tête ?
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              Le modèle « subvention contre tarif préférentiel » n'est qu'une
              option parmi d'autres. Contenu pédagogique, événements,
              retours terrain pour faire évoluer l'application, mise en
              avant croisée... on est ouverts à en discuter, quelle que soit
              la forme que ça prend.
            </p>
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
          <CircleBackground color="#08c770" className="animate-spin-slower" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Parlons de votre organisation
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Décrivez-nous votre structure et le nombre d'adhérent·es
              concerné·es, on revient vers vous rapidement.
            </p>
            <div className="mt-8 flex justify-center">
              <Button color="white" href={CONTACT_HREF}>
                Discuter d'un partenariat
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Ou écrivez-nous directement à{' '}
              <a href={CONTACT_HREF} className="underline">
                {CONTACT_MAIL}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
