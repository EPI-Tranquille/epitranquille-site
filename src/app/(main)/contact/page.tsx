import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nous contacter',
  description:
    'Une question sur EPI Tranquille, votre compte ou un partenariat ? Contactez notre équipe par e-mail, nous vous répondons rapidement.',
}

export default function ContactPage() {
  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-32">
      <Container>
        <h1 className="section-title">Nous contacter</h1>
        <p className="section-subtitle">
          Vous pouvez nous contacter par email à l'adresse suivante{' '}
          <a
            href="mailto:contact@epitranquille.com"
            className="text-blue-500 underline hover:text-blue-600"
          >
            contact@epitranquille.com
          </a>{' '}
          ou bien via le chat en bas à droite, nous répondrons avec plaisir à vos questions !
        </p>
      </Container>
    </section>
  )
}
