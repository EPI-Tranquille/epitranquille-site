import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/WebPrimaryFeatures'

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      {/* <SecondaryFeatures /> */}
      {/* <Reviews /> */}
      <Pricing />
      <CallToAction />
      {/* <Faqs /> */}
    </>
  )
}
