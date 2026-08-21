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
    pain: "Vous tenez votre registre EPI sur un tableur, vous perdez du temps à recopier les numéros de série et date de fabrication ? Vous trouvez que gérer un registre EPI est une corvée ? À la fin de saison vous perdez du temps à tout contrôler ?",
    benefit:
      "Ajoutez vos EPI en quelques clics depuis notre base de données, scannez les numéros de série, accélerez le contrôle de vos EPI via l'application mobile et exportez votre registre en PDF en cas de contrôle sur le terrain.",
  },
  {
    name: 'Guides de haute montagne',
    activities: 'Alpinisme, cascade de glace, ski de randonnée',
    pain: "Piolets, broches à glaces et crampons sont aussi des EPI !",
    benefit:
      "Nous avons pensé à tout, la base de données EPI Tranquille contient aussi le matos d'alpinisme. Vous pouvez même ajouter les DVA pour leur suivi.",
  },
  {
    name: 'Clubs et salles d’escalade',
    activities: 'Structures associatives, salles commerciales',
    pain: "Plusieurs bénévoles ou salarié·es interviennent sur le parc EPI, le volume de matériel est important, et centraliser les contrôles devient vite compliqué. Le suivi des EPI est difficile à effectuer entre chaque sortie club ?",
    benefit:
      "Invitez plusieurs utilisateurs à gérer un même parc EPI, contrôlez par lot en quelques minutes, et démarrez rapidement grâce à l'import de votre registre Excel existant. Consigner les prêts et retours des EPI de votre club après chaque sortie, vous avez ainsi un historique précis de l'utilisation de chaque EPI.",
  },
  {
    name: 'PAH — Parcours Accrobatiques en Hauteur et Via Ferrata',
    activities: 'Accrobranche, parcs aventure, locations de kits de via ferrata',
    pain: "Baudriers, longes, poulies... vous devez contrôler des EPI chaque jour. Le matériel est beaucoup sollicité.",
    benefit:
      "Le contrôle par lot et les alertes de contrôle périodique paramétrables vous permettent de garder une longueur d'avance sur vos échéances, sans y passer vos journées.",
  },
  {
    name: 'Collectivités et fédérations',
    activities: 'Bases de loisirs, collectivités territoriales, fédérations sportives',
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
