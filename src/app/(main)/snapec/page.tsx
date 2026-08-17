import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Faqs } from '@/components/Faqs'
import { type Metadata } from 'next'
import Image from 'next/image'
import logo_snapec from '@/images/logos/logo_snapec.png'

export const metadata: Metadata = {
  title: 'EPI Tranquille x SNAPEC',
  description:
    "En tant que membre du SNAPEC, gérez votre registre EPI simplement et créez gratuitement votre compte EPI Tranquille.",
}

const SIGNUP_URL =
  'https://app.epitranquille.com/signup/?utm_source=snapec&utm_medium=partner&utm_campaign=snapec-org'

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

export default function SnapecPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex items-center justify-center gap-6">
              <Image
                src={logo_snapec}
                alt="Logo SNAPEC"
                className="h-16 w-auto rounded-xl"
              />
            </div>
            <h1 className="section-title">
              Membre du SNAPEC ? Gérez votre registre EPI simplement.
            </h1>
            <p className="section-subtitle">
              EPI Tranquille est développée aux côtés du SNAPEC (Syndicat
              NAtional des Professionnels de l'Escalade et du Canyoning) pour
              vous simplifier une obligation du métier : le suivi de votre
              registre EPI. Créez votre compte gratuitement, sans engagement.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={SIGNUP_URL} variant="solid">
                Créer mon compte gratuitement
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:mt-24 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl bg-gray-50 p-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-sm text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-2xl text-center">
            <Button href={SIGNUP_URL} variant="solid">
              Créer mon compte gratuitement
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              Vous avez déjà plus de 50 EPI ou besoin de gérer plusieurs
              parcs ? Découvrez nos{' '}
              <a href="/#pricing" className="underline">
                autres formules
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
      <Faqs />
    </>
  )
}
