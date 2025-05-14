import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nous contacter',
}

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <h1 className="section-title">Nous contacter</h1>
        <p className="section-subtitle">
          Vous pouvez nous contacter par email à l'adresse suivante{' '}
          <a
            href="mailto:contact@epitranquille.com"
            className="text-blue-500 underline hover:text-blue-600"
          >
            contact@epitranquille.com
          </a>
          .
        </p>
      </Container>
    </section>
  )
}
