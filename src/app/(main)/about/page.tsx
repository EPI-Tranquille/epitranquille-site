import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "L'histoire et la mission d'EPI Tranquille, l'application qui simplifie la gestion du registre EPI pour les professionnels de l'escalade, du canyoning, de la spéléologie et des sports de montagne.",
}

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="section-title">À propos d'EPI Tranquille</h1>
            <p className="section-subtitle">
              Basée à Marseille, EPI Tranquille est née d'un constat simple :
              tenir un registre EPI à jour est une obligation réglementaire,
              mais c'est presque toujours une corvée gérée sur un tableur.
            </p>
          </div>

          <div className="custom-typography mx-auto mt-16 max-w-2xl">
            <h2>Notre mission</h2>
            <p>
              Les moniteur·rices et structures qui encadrent des activités
              avec des équipements de protection individuelle (escalade,
              canyoning, spéléologie, via ferrata, grimpe d'arbres, PAH...)
              ont une obligation claire : s'assurer que chaque EPI est valide
              et contrôlé régulièrement. En pratique, ce suivi se fait
              souvent à la main, sur des fichiers Excel qui se perdent, se
              dupliquent ou finissent par ne plus être à jour.
            </p>
            <p>
              EPI Tranquille a été conçue pour remplacer ce tableur par un
              outil pensé spécifiquement pour le registre EPI : ajout rapide
              depuis une base de données, contrôles par lot, alertes
              automatiques avant expiration, export PDF pour vos contrôles
              et vos assurances. L'objectif est simple : que la gestion de
              votre parc EPI ne vous prenne plus de temps que la pratique
              elle-même.
            </p>
            <h2>Notre exigence</h2>
            <p>
              Nous travaillons en lien avec des acteurs reconnus du secteur,
              notamment le{' '}
              <Link href="/partenaires" className="underline">
                SNAPEC
              </Link>{' '}
              (Syndicat NAtional des Professionnels de l'Escalade et du
              Canyoning) et le SNPSC (Syndicat National des Professionnels de
              la Spéléologie et du Canyonisme), pour que l'application colle
              au plus près des besoins réels du terrain et des obligations
              réglementaires du métier.
            </p>
            <p>
              Vos données sont hébergées de manière sécurisée en Europe,
              chez un hébergeur français, et vous restent accessibles à tout
              moment. C'est un principe auquel nous ne dérogeons pas :
              votre registre vous appartient.
            </p>
            <h2>Et la suite ?</h2>
            <p>
              EPI Tranquille est disponible dès aujourd'hui sur le web, et
              l'application mobile arrive très prochainement sur iOS et
              Android pour retrouver votre registre directement sur le
              terrain. Une question, une suggestion ? L'équipe est
              joignable à{' '}
              <a href="mailto:contact@epitranquille.com" className="underline">
                contact@epitranquille.com
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  )
}
