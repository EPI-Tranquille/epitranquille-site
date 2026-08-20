import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { partners } from '@/lib/partners'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partenaires',
}

function HandshakeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  )
}

export default function PartnersPage() {
  return (
    // <section
    //   // id="secondary-features"
    //   // aria-label="Features for building a portfolio"
    //   className="py-20 sm:py-32"
    // >
    //   <Container>
    //     <h1 className="text-center text-3xl font-medium tracking-tight text-gray-900">
    //       Partenaires
    //     </h1>

    //     <div className="bg-white py-24 sm:py-32">
    //       <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //         <div className="mx-auto max-w-2xl sm:text-center">
    //           <h2 className="text-34l text-balance font-semibold tracking-tight text-gray-900 sm:text-5xl">
    //             Meet our leadership
    //           </h2>
    //           <p className="mt-6 text-lg/8 text-gray-600">
    //             We’re a dynamic group of individuals who are passionate about
    //             what we do and dedicated to delivering the best results for our
    //             clients.
    //           </p>
    //         </div>
    //         <ul
    //           role="list"
    //           className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
    //         >
    //           {partners.map((partner) => (
    //             <li
    //               key={partner.name}
    //               className="flex flex-col gap-6 xl:flex-row"
    //             >
    //               {/* <img
    //                 alt=""
    //                 src={partner.imageUrl}
    //                 className="aspect-4/5 w-52 flex-none rounded-2xl object-cover"
    //               /> */}
    //               <Image
    //                 src={partner.logo}
    //                 alt={`Logo ${partner.name}`}
    //                 className="aspect-4/5 w-52 flex-none rounded-2xl object-cover"
    //               />
    //               <div className="flex-auto">
    //                 <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
    //                   {partner.name}
    //                 </h3>
    //                 <p className="text-base/7 text-gray-600">{partner.role}</p>
    //                 <p className="mt-6 text-base/7 text-gray-600">
    //                   {partner.bio}
    //                 </p>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </Container>
    // </section>

    <section className="pt-12 pb-20 sm:pt-16 sm:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Partenaires</h2>
          <p className="section-subtitle">
            Nous sommes fiers de collaborer avec les partenaires suivants qui
            nous soutiennent et qui vous permettent de bénéficier d'un tarif
            préférentiel.
          </p>
        </div>

        <div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {partners.map((partner) => (
              <li key={partner.name}>
                <Link
                  href={partner.href}
                  {...(partner.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex cursor-pointer flex-col items-center gap-4 xl:flex-row"
                >
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="aspect-square w-40 flex-none rounded-2xl bg-gray-50 object-contain p-4"
                  />
                  <div className="flex-auto">
                    <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                      {partner.name}
                    </h3>
                    <p className="text-base/7 text-gray-600">{partner.role}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-base text-gray-600">
            Vous représentez un syndicat, regroupement de professionnels, un
            club ou un centre de formation ?
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/devenir-partenaire" variant="outline" color="gray">
              <HandshakeIcon className="h-5 w-5 flex-none" />
              <span className="ml-2.5">Devenez partenaire</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
