import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: "Suis-je obligé d'avoir un registre EPI ?",
      answer:
        "Dans votre pratique professionnelle d'encadrement d'activités utilisant des EPI, vous devez vous assurer d'avoir le registre EPI du matériel que vous utilisez (que vous soyez indépendant ou salarié). Les EPI doivent être valides et un contrôle annuel doit être effectué. Idem pour l'utilisation d'EPI dans une pratique associative en club.",
    },
    {
      question: 'Puis-je importer mon fichier Excel/Google Sheet/CSV ?',
      answer:
        "Oui pour gagner du temps vous pouvez importer votre registre EPI depuis un fichier Excel sur l'application web. Ce fichier doit respecter quelques règles de format mais c'est rapide si toutes les informations sont là !",
    },
    {
      question: 'Est-ce que je gagne du temps avec cet outil ?',
      answer:
        "Oui : l'ajout d'un EPI depuis notre base de données, les contrôles par lot et les alertes automatiques de péremption remplacent en quelques clics ce qui prenait auparavant des heures sur un tableur.",
    },
  ],
  [
    {
      question: "L'application est-elle disponible sur mobile et sur le web ?",
      answer:
        "EPI Tranquille est disponible dès maintenant sur le web, accessible depuis n'importe quel navigateur. Notre application mobile iOS et Android arrive très prochainement pour retrouver votre registre directement sur le terrain.",
    },
    {
      question: 'Puis-je essayer EPI Tranquille gratuitement ?',
      answer:
        "Oui, la formule Basique est gratuite et permet de gérer jusqu'à 50 EPI sans limite de durée. Vous pouvez ensuite passer à une formule payante à tout moment si vous avez besoin de plus de fonctionnalités ou d'EPI.",
    },
    {
      question: 'Puis-je gérer plusieurs parcs EPI avec un seul compte ?',
      answer:
        'Oui, selon votre formule vous pouvez créer plusieurs parcs EPI (par structure, activité ou site) et inviter d’autres utilisateurs à les gérer avec vous.',
    },
  ],
  [
    {
      question: "Est-ce que je peux être accompagné·e pour l'import de mon registre ?",
      answer:
        "Notre équipe est disponible par e-mail pour vous accompagner, notamment sur l'import d'un registre existant. Les formules Premium et Entreprise bénéficient en plus d'un support prioritaire.",
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
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Questions fréquentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Trouvez rapidement la réponse à vos questions et sinon n'hésitez pas à {' '}
            <a
              href="mailto:contact@epitranquille.com"
              className="text-gray-900 underline"
            >
              nous contacter
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
