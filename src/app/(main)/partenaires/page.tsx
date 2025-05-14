import { Container } from '@/components/Container'
import { type Metadata } from 'next'
import Image from 'next/image'
import logo_snapec from '@/images/logos/logo_snapec.png'
import logo_snpsc from '@/images/logos/logo_snpsc.jpeg'

export const metadata: Metadata = {
  title: 'Partenaires',
}

const partners = [
  {
    name: 'SNAPEC',
    role: "Syndicat NAtional des Professionnels de l'Escalade et du Canyoning",
    logo: logo_snapec,
    href: 'https://snapec.org',
  },
  {
    name: 'SNPSC',
    role: 'Syndicat National des Professionnels de la Spéléologie et du Canyonisme',
    logo: logo_snpsc,
    href: 'https://www.syndicat-speleo-canyon.org',
  },
]

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

    <section className="py-20 sm:py-32">
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
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
