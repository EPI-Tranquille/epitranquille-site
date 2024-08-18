import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
}

export default function AboutPage() {
  return (
    <section
      // id="secondary-features"
      // aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <h1 className="text-center text-3xl font-medium tracking-tight text-gray-900">
          À propos
        </h1>
        <p className="alert-warning">En cours de rédaction</p>
      </Container>
    </section>
  )
}
