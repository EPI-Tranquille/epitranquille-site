import logo from '@/images/logos/logo_nobg_primary.svg'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { partners } from '@/lib/partners'
import Link from 'next/link'
import { AppStoreLink } from './AppStoreLink'
import { GooglePlayLink } from './GooglePlayLink'

const navigation = {
  solutions: [
    { name: 'Fonctionnalités', href: '/#features' },
    { name: 'Tarifs', href: '/#pricing' },
    { name: 'Pour qui ?', href: '/pour-qui' },
    { name: 'FAQ', href: '/#faqs' },
  ],
  support: [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation (bientôt)', href: '#' },
    { name: 'Tutoriels (bientôt)', href: '#' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Partenaires', href: '/partenaires' },
    { name: 'Devenir partenaire', href: '/devenir-partenaire' },
    { name: 'Nous contacter', href: '/contact' },
  ],
  legal: [
    { name: "Conditions générales d'utilisation", href: '/cgu' },
    {
      name: 'Politique de confidentialité',
      href: '/politique-confidentialite',
    },
    { name: 'Politique de gestion des cookies', href: '/politique-cookies' },
    { name: 'Mentions légales', href: '/mentions-legales' },
  ],
  social: [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCVw1rgsmCZj2N8g6iJWCyUQ',
      icon: (props: React.ComponentPropsWithoutRef<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-gray-200"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex items-center text-gray-900">
              <Image src={logo} alt="Logo" className="h-10 w-auto" />

              <div className="ml-4">
                <p className="text-base font-semibold">EPI Tranquille</p>
                <p className="mt-0.5 text-sm">Gérez vos EPI simplement.</p>
                <a
                  href="mailto:contact@epitranquille.com"
                  className="text-sm text-blue-500 underline"
                >
                  contact@epitranquille.com
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6">
                    Notre solution
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6">
                    Des questions ?
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6">
                    À propos d'EPI Tranquille
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6">
                    Informations légales
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold leading-6">
                Emportez votre registre EPI partout
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                L'application mobile EPI Tranquille arrive bientôt sur iOS et
                Android.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 lg:mt-0">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
          </div>
          <div className="mt-10 border-t border-gray-200 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              En partenariat avec
            </p>
            <ul role="list" className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
              {partners.map((partner) => (
                <li key={partner.name}>
                  <Link
                    href={partner.href}
                    {...(partner.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="flex items-center gap-2 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0"
                  >
                    <Image
                      src={partner.logo}
                      alt=""
                      className="h-7 w-auto rounded"
                    />
                    <span className="text-sm text-gray-500">
                      {partner.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} EPI Tranquille. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
