'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Container } from '@/components/Container'
import screenshotRegistre from '@/images/screenshots/registre.jpeg'
import screenshotBdd from '@/images/screenshots/bdd.jpeg'
import screenshotDetail from '@/images/screenshots/detail.jpeg'
import screenshotBatchControl from '@/images/screenshots/controle_rapide.jpeg'
import screenshotControleDetaille from '@/images/screenshots/controle_detaille.jpeg'
import screenshotLoans from '@/images/screenshots/loans.png'
import screenshotMultiUsers from '@/images/screenshots/utilisateurs.jpeg'

const features = [
  {
    title: 'Tableau de bord',
    description:
      "Visualisez en un coup d'œil l'état de votre parc EPI et la date de votre prochaine inspection.",
    image: screenshotRegistre,
  },
  {
    title: 'Base de données',
    description:
      "Une base de données d'EPI à portée de clic afin d'accélérer la saisie de vos EPI.",
    image: screenshotBdd,
  },
  {
    title: 'Fiche détaillée',
    description:
      "Chaque EPI a sa propre fiche : historique complet (fabrication, achat, mise en service), caractéristiques, contrôles passés et documents associés.",
    image: screenshotDetail,
  },
  {
    title: 'Contrôle par lot',
    description:
      "Besoin d'inspecter un lot de plusieurs EPI rapidement ? C'est possible avec le contrôle par lot.",
    image: screenshotBatchControl,
  },
  {
    title: 'Contrôle détaillé',
    description:
      "Pour un contrôle plus poussé, renseignez un commentaire par EPI et faites évoluer son statut (valide, réformé...) en toute traçabilité.",
    image: screenshotControleDetaille,
  },
  {
    title: 'Utilisateurs',
    description:
      "Vous êtes plusieurs gestionnaires d'EPI dans un club ou une collectivité ? Vous effectuez les contrôles EPI d'un club en tant que moniteur·rice ? Invitez des personnes à rejoindre un parc EPI pour une gestion collaborative.",
    image: screenshotMultiUsers,
  },
  {
    title: 'Gestion des prêts/sorties',
    description:
      "Vous louez du matériel pour des particuliers ? Vous organisez des sorties au sein de votre club ? Faites un suivi détaillé du matériel qui rentre et sort de votre parc EPI.",
    image: screenshotLoans,
  },
]

export function WebFeatures() {
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
      id="features-web"
      aria-label="Fonctionnalités de l'application web EPI Tranquille"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center lg:mx-0 lg:max-w-3xl xl:max-w-none">
          <h2 className="section-title">
            Mais aussi sur le web
          </h2>
          <p className="section-subtitle">
            La version web permet la gestion de votre registre EPI, installé confortablement au bureau, au local de votre club ou
            dans votre salle d'escalade. Elle offre des fonctionnalités supplémentaires.
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
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-gray-900 lg:bg-gray-900/5 lg:ring-1 lg:ring-inset lg:ring-gray-900/10'
                          : 'hover:bg-gray-900/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display data-selected:not-data-focus:outline-hidden text-lg',
                            selectedIndex === featureIndex
                              ? 'text-white lg:text-gray-900'
                              : 'text-gray-600 hover:text-gray-900 lg:text-gray-900',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-gray-700'
                            : 'text-gray-500 group-hover:text-gray-700',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -bottom-17 -top-26 bg-gray-100 ring-1 ring-inset ring-gray-900/5 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-gray-700 sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-180 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-gray-900/10 ring-1 ring-gray-900/5 sm:w-auto lg:mt-0 lg:w-271.25">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
