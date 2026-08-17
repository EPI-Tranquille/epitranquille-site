import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Faqs } from '@/components/Faqs'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logo_snapec from '@/images/logos/logo_snapec.png'

export const metadata: Metadata = {
  title: 'EPI Tranquille x SNAPEC',
  description:
    "En tant que membre du SNAPEC, gérez votre registre EPI simplement et créez gratuitement votre compte EPI Tranquille.",
}

const SIGNUP_URL =
  'https://app.epitranquille.com/signup/?utm_source=snapec&utm_medium=partner&utm_campaign=snapec-org'
const SNAPEC_EXTRANET_URL = 'https://snapec.org/espace.syndique.e-65.php'
const SNAPEC_EPI_URL =
  'https://snapec.org/gestion.de.mes.epi-3630000-6-68-300.php'

const benefits = [
  {
    title: 'Un registre EPI conforme, sans effort',
    description:
      "Ajoutez vos EPI depuis notre base de données, laissez les alertes automatiques vous prévenir des contrôles à venir et exportez votre registre en PDF à tout moment.",
  },
  {
    title: 'Pensé avec les professionnels du secteur',
    description:
      "EPI Tranquille est développée en lien avec le SNAPEC et le SNPSC pour coller aux réalités du terrain et aux obligations réglementaires du métier.",
  },
  {
    title: 'Gratuit pour démarrer',
    description:
      "La formule Basique est gratuite et permet de gérer jusqu'à 50 EPI, sans limite de durée. Vous pourrez évoluer vers une formule payante si votre parc grandit.",
  },
]

function ExternalLinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.5 10.5 21 3M21 3h-6M21 3v6M12 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserPlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 19c0-2.761 2.686-5 6-5s6 2.239 6 5M19 8v6M22 11h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StepCard({
  icon,
  title,
  description,
  steps,
  note,
  cta,
}: {
  icon: React.ReactNode
  title: string
  description: string
  steps: React.ReactNode[]
  note?: React.ReactNode
  cta: { label: string; href: string; external?: boolean }
}) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/5 ring-1 ring-gray-900/5">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-primary to-green-400" />
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-gray-600">{description}</p>
      <ol className="mt-6 flex-auto space-y-5">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              {index + 1}
            </span>
            <span className="pt-1 text-sm text-gray-700">{step}</span>
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-6 rounded-xl bg-gray-50 p-4 text-xs text-gray-600">
          {note}
        </p>
      )}
      <Button
        href={cta.href}
        color="primary"
        className="mt-8 justify-center"
        {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {cta.label}
      </Button>
    </div>
  )
}

export default function SnapecPage() {
  return (
    <>
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-10 flex items-center justify-center">
              <a
                href="https://snapec.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le site du SNAPEC"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src={logo_snapec}
                  alt="Logo SNAPEC"
                  className="h-32 w-auto rounded-2xl sm:h-40"
                />
              </a>
            </div>
            <h1 className="section-title">
              Membre du SNAPEC ? Gérez votre registre EPI facilement et gratuitement.
            </h1>
            <p className="section-subtitle">
              EPI Tranquille est partenaire du SNAPEC pour
              simplifier la gestion de vos EPI : un forfait développé spécialement pour vous
              est mis à disposition gratuitement afin que vous puissiez gérer votre parc et éventuellement ceux des clubs/structures dans lesquels vous travailler.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-2xl text-center">
            <h2 className="section-title">Comment activer votre compte ?</h2>
            <p className="section-subtitle">
              Deux façons d'y arriver, au choix — le résultat est le même : un
              compte EPI Tranquille gratuit, réservé aux adhérent·es SNAPEC.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <StepCard
              icon={<ExternalLinkIcon className="h-6 w-6" />}
              title="Depuis l'extranet SNAPEC"
              description="Le plus simple si vous êtes déjà connecté·e à votre espace syndiqué·e."
              steps={[
                <>
                  Connectez-vous à{' '}
                  <a
                    href={SNAPEC_EXTRANET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    l'extranet du SNAPEC
                  </a>
                  .
                </>,
                <>
                  Rendez-vous sur la page{' '}
                  <a
                    href={SNAPEC_EPI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    « Gestion de mes EPI »
                  </a>
                  .
                </>,
                <>
                  Cliquez sur <strong>« Connexion / Création de compte »</strong> :
                  votre compte EPI Tranquille est créé automatiquement, sans
                  aucune information à renseigner. Vous recevez un mail de confirmation vous invitant à valider votre compte.
                </>,
                <>
                  Cliquez sur le lien de vérification reçu par e-mail — c'est
                  prêt.
                </>,
              ]}
              note={
                <>
                  Pour vous reconnecter ensuite, utilisez ce même bouton
                  depuis l'extranet si vous êtes déconnecté·e de
                  l'application. Vous pourrez également définir votre mot de passe depuis l'application par la suite.
                </>
              }
              cta={{
                label: "Aller sur l'extranet du SNAPEC",
                href: SNAPEC_EXTRANET_URL,
                external: true,
              }}
            />
            <StepCard
              icon={<UserPlusIcon className="h-6 w-6" />}
              title="Directement sur EPI Tranquille"
              description="Idéal si vous préférez créer votre compte vous-même, en quelques clics."
              steps={[
                <>
                  Inscrivez-vous sur EPI Tranquille avec votre{' '}
                  <strong>e-mail d'adhésion au SNAPEC</strong>.
                </>,
                <>
                  Choisissez le profil <strong>Professionnel</strong> puis{' '}
                  <strong>SNAPEC</strong>.
                </>,
                <>Votre adhésion active est vérifiée automatiquement.</>,
                <>
                  Votre compte est créé gratuitement. Vous recevez un mail de confirmation vous invitant à valider votre compte.
                </>,
                 <>
                  Cliquez sur le lien de vérification reçu par e-mail — c'est
                  prêt.
                </>,
              ]}
              cta={{ label: 'Créer mon compte gratuitement', href: SIGNUP_URL }}
            />
          </div>

        </Container>
      </section>
      <Faqs />
    </>
  )
}
