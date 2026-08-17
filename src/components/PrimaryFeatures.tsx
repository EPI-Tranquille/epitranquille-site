'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import screenshotDashboard from '@/images/mobile/dashboard.jpg'
import screenshotIdentifierPhoto from '@/images/mobile/identifier-photo.jpg'
import screenshotAjouter from '@/images/mobile/ajouter.jpg'
import screenshotRegistre from '@/images/mobile/registre.jpg'
import screenshotExportPdf from '@/images/mobile/export-pdf.jpg'
import screenshotAlertes from '@/images/mobile/alertes.jpg'
import screenshotControles from '@/images/mobile/controles.jpg'
import screenshotHorsConnexion from '@/images/mobile/hors-connexion.jpg'

const features = [
  {
    name: 'Tableau de bord',
    description:
      "Visualisez en un coup d'œil l'état de votre parc EPI et la date de votre prochaine inspection.",
    image: screenshotDashboard,
  },
  {
    name: 'Identifier par photo',
    description:
      "Photographiez votre EPI pour identifier automatiquement le produit pendant que vous scannez son numéro de série, QR Code ou datamatrix.",
    image: screenshotIdentifierPhoto,
  },
  {
    name: 'Ajouter un EPI rapidement',
    description:
      'Ajoutez un EPI à votre registre en quelques secondes, grâce aux informations pré-remplies.',
    image: screenshotAjouter,
  },
  {
    name: 'Registre complet',
    description:
      'Retrouvez tous vos EPI, leur statut et leur emplacement, toujours à jour dans votre poche.',
    image: screenshotRegistre,
  },
  {
    name: 'Export PDF',
    description:
      'Exportez votre registre EPI en PDF et consultez-le à tout moment, même hors-connexion.',
    image: screenshotExportPdf,
  },
  {
    name: 'Alertes personnalisables',
    description:
      "Choisissez comment et quand être alerté·e avant l'expiration ou le contrôle de votre parc.",
    image: screenshotAlertes,
  },
  {
    name: 'Historique des contrôles',
    description:
      'Retrouvez tout l’historique de vos contrôles : dates, auteur·e et statut de chaque EPI contrôlé.',
    image: screenshotControles,
  },
  {
    name: 'Mode hors-connexion',
    description:
      'Votre registre reste consultable même sans réseau : accéder aux registre PDF, aux fiches EPI et aux contrôles.',
    image: screenshotHorsConnexion,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Fonctionnalités de l'application mobile EPI Tranquille"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center lg:mx-0 lg:max-w-3xl xl:max-w-none">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Votre registre EPI, dans votre poche
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            L'application mobile vous accompagne sur le terrain : ajoutez,
            identifiez et contrôlez vos EPI en quelques secondes. Consultez votre registre même hors
            connexion.
          </p>
        </div>

        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.name}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display data-selected:not-data-focus:outline-hidden text-lg',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.name}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <div className="relative col-span-7">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CircleBackground
                    color="#08c770"
                    className="animate-spin-slower"
                  />
                </div>
                <TabPanels>
                  {features.map((feature) => (
                    <TabPanel
                      key={feature.name}
                      unmount={false}
                      className="relative mx-auto max-w-[366px]"
                    >
                      <div className="relative sm:px-6 lg:hidden">
                        <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                          {feature.description}
                        </p>
                      </div>
                      <PhoneFrame className="relative z-10 mx-auto mt-6 w-full max-w-[366px] lg:mt-0">
                        <Image
                          src={feature.image}
                          alt={feature.name}
                          className="h-full w-full object-cover"
                          sizes="366px"
                        />
                      </PhoneFrame>
                    </TabPanel>
                  ))}
                </TabPanels>
              </div>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
