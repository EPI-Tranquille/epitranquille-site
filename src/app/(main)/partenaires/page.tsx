import { Container } from '@/components/Container'
import { partners } from '@/lib/partners'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partenaires',
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
                    className="aspect-4/5 w-52 flex-none rounded-2xl object-cover"
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

        <div className="mx-auto mt-16 max-w-2xl space-y-2 text-center">
          <p className="text-base text-gray-600">
            Membre du SNAPEC ?{' '}
            <Link href="/snapec" className="font-semibold text-primary underline">
              Créez votre compte EPI Tranquille gratuitement
            </Link>
            .
          </p>
          <p className="text-base text-gray-600">
            Vous représentez un syndicat, un regroupement, un club ou un
            centre de formation ?{' '}
            <Link
              href="/devenir-partenaire"
              className="font-semibold text-primary underline"
            >
              Devenez partenaire
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}
