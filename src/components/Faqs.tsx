import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { type FAQPage, type WithContext } from 'schema-dts'

import { Container } from '@/components/Container'

const faqs = [
  {
    question: "Suis-je obligé d'avoir un registre EPI ?",
    answer:
      "Dans votre pratique professionnelle d'encadrement d'activités utilisant des EPI, vous devez vous assurer d'avoir le registre EPI du matériel que vous utilisez (que vous soyez indépendant ou salarié). Les EPI doivent être valides et un contrôle annuel doit être effectué. Idem pour l'utilisation d'EPI dans une pratique associative en club.",
  },
  {
    question: 'Puis-je importer mon fichier Excel/Google Sheet/CSV ?',
    answer:
      "Oui pour gagner du temps vous pouvez importer votre registre EPI depuis un fichier Excel sur l'application web. Ce fichier doit respecter quelques règles de format mais c'est rapide si toutes les informations sont là ! De plus si vous avez souscrit à un abonnement vous pouvez nous envoyer votre registre par e-mail nous vous aiderons à l'importer sur votre compte.",
  },
    {
    question: "Est-ce que je peux être accompagné·e pour l'import de mon registre ?",
    answer:
      "Notre équipe est disponible par e-mail pour vous accompagner, notamment sur l'import d'un registre existant. Les formules Premium et Entreprise bénéficient en plus d'un support prioritaire.",
  },
  {
    question: 'Est-ce que je gagne du temps avec cet outil ?',
    answer:
      "Oui : l'ajout d'un EPI est très rapide grâce au scan performant et à une base de données adaptée au matériel que vous utilisez. De plus la gestion par lot et les contrôles rapides depuis l'app mobile vont feront gagner du temps !",
  },
  {
    question: "L'application est-elle disponible sur mobile et sur le web ?",
    answer:
      "EPI Tranquille est disponible sur le web et sur l'application mobile iOS et Android pour retrouver votre registre directement sur le terrain.",
  },
  {
    question: 'Puis-je essayer EPI Tranquille gratuitement ?',
    answer:
      "Oui, la formule Basique est gratuite et permet de gérer jusqu'à 50 EPI sans limite de durée. Vous pouvez ensuite passer à une formule payante à tout moment si vous avez besoin de plus de fonctionnalités ou d'EPI.",
  },
  {
    question: 'Puis-je gérer plusieurs parcs EPI avec un seul compte ?',
    answer:
      'Oui, selon votre formule vous pouvez créer plusieurs parcs EPI (par structure, activité ou site) et inviter d’autres utilisateurs à les gérer/consulter avec vous.',
  },
  {
    question: 'Puis-je accéder à mon registre hors-ligne ?',
    answer:
      "Oui ! Vous pouvez télécharger votre registre EPI en PDF depuis le web, et l'application mobile intègre un mode hors connexion : vos EPI et vos contrôles restent consultables sans réseau, avec une synchronisation automatique dès que la connexion revient.",
  },
  {
    question: 'Où sont stockées mes données ?',
    answer:
      'Vos données sont stockées de manière sécurisée en Europe chez un hébergeur français. Vous pouvez les récupérer à tout moment.',
  },
]

function PlusSmallIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 6.75v10.5M6.75 12h10.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MinusSmallIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 12h10.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faqs-title" className="section-title">
            Questions fréquentes
          </h2>
          <p className="section-subtitle">
            Trouvez rapidement la réponse à vos questions et sinon n'hésitez
            pas à{' '}
            <a
              href="mailto:contact@epitranquille.com"
              className="text-gray-900 underline"
            >
              nous contacter
            </a>
            .
          </p>
        </div>
        <dl className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10 sm:mt-20">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base/7 font-semibold">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon className="size-6 group-data-open:hidden" />
                    <MinusSmallIcon className="size-6 group-not-data-open:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </Container>
    </section>
  )
}
