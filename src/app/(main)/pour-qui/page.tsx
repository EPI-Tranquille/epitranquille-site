import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pour qui est fait EPI Tranquille ?',
  description:
    "EPI Tranquille s'adresse aux moniteur·rices d'escalade, canyoning, spéléologie, via ferrata, grimpe d'arbres, aux guides de haute montagne, aux clubs, salles d'escalade et PAH qui doivent gérer un registre EPI.",
  alternates: {
    canonical: '/pour-qui',
  },
}

const audiences = [
  {
    name: "Moniteur·rices indépendant·es",
    activities: 'Escalade, canyoning, spéléologie, via ferrata, grimpe d’arbres',
    pain: "Vous tenez votre registre EPI sur un tableur, vous perdez du temps à recopier les dates de contrôle et vous craignez d'oublier un EPI arrivé en fin de vie.",
    benefit:
      "Ajoutez vos EPI en quelques clics depuis notre base de données, laissez les alertes automatiques vous prévenir des contrôles à venir, et exportez votre registre en PDF en cas de contrôle ou pour votre assurance.",
  },
  {
    name: 'Guides de haute montagne',
    activities: 'Alpinisme, cascade de glace, ski de randonnée, terrain d’aventure',
    pain: "Votre matériel est varié, engagé, et vous devez pouvoir justifier à tout moment de l'état et de l'historique de chaque EPI.",
    benefit:
      "Chaque EPI dispose d'une fiche complète (fabrication, achat, mise en service, contrôles passés, documents) pour une traçabilité rigoureuse, accessible en un instant.",
  },
  {
    name: 'Clubs et salles d’escalade',
    activities: 'Structures associatives, salles commerciales, sections FFME/FFCAM',
    pain: "Plusieurs bénévoles ou salarié·es interviennent sur le parc EPI, le volume de matériel est important, et centraliser les contrôles devient vite compliqué.",
    benefit:
      "Invitez plusieurs utilisateurs à gérer un même parc EPI, contrôlez par lot en quelques minutes, et démarrez rapidement grâce à l'import de votre registre Excel existant.",
  },
  {
    name: 'PAH — Parcours Accrobatiques en Hauteur',
    activities: 'Accrobranche, parcs aventure, structures artificielles',
    pain: "Baudriers, longes, poulies... le nombre d'EPI à contrôler régulièrement est élevé, et les obligations réglementaires ne laissent pas de place à l'approximation.",
    benefit:
      "Le contrôle par lot et les alertes de contrôle périodique paramétrables vous permettent de garder une longueur d'avance sur vos échéances, sans y passer vos journées.",
  },
  {
    name: 'Collectivités et grosses structures',
    activities: 'Bases de loisirs, collectivités territoriales, gros clubs multi-sites',
    pain: "Plusieurs sites, plusieurs équipes, des audits réguliers à préparer : il vous faut une vision d'ensemble fiable sur l'intégralité de votre parc EPI.",
    benefit:
      "Gérez plusieurs parcs EPI illimités, un nombre d'utilisateurs élargi et bénéficiez d'un support prioritaire par e-mail et téléphone avec la formule Entreprise.",
  },
]

export default function PourQuiPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-32">
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="section-title">
              Pour qui est conçu EPI Tranquille ?
            </h1>
            <p className="section-subtitle">
              Toute personne ou structure qui encadre des activités avec des
              équipements de protection individuelle (EPI) a besoin d'un registre EPI
              à jour. EPI Tranquille a été pensé pour s'adapter à votre
              pratique, seul·e ou en équipe.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.name}
                className="relative flex flex-col rounded-3xl bg-gray-50 p-8"
              >
                <h2 className="text-lg font-semibold text-gray-900">
                  {audience.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {audience.activities}
                </p>
                <p className="mt-4 text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">
                    Le problème :{' '}
                  </span>
                  {audience.pain}
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">
                    Avec EPI Tranquille :{' '}
                  </span>
                  {audience.benefit}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  )
}
