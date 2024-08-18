import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions d'utilisations de nos services",
}

export default function ConditionsUtilisation() {
  return (
    <section
      // id="secondary-features"
      // aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <h1 className="text-center text-3xl font-medium tracking-tight text-gray-900">
          Conditions d'utilisation de nos services
        </h1>
        <div className="custom-typography">
          <p className="text-center text-sm">En vigueur au 10/09/2024</p>
          <p className="alert-warning">En cours de rédaction</p>
        </div>
      </Container>
    </section>
  )
}
