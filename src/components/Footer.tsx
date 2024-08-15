import logo from '@/images/logos/logo_nobg_primary.svg'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { NavLinks } from '@/components/NavLinks'
import Link from 'next/link'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
function Envelope(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
      <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:pb-10 lg:pt-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Image src={logo} alt="Logo" className="h-10 w-auto" />

              <div className="ml-4">
                <p className="text-base font-semibold">EPI Tranquille</p>
                <p className="mt-0.5 text-sm">Gérez vos EPI simplement.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
            <div className="mt-4 flex items-center space-x-2">
              <Envelope className="h-5 w-5 text-gray-400" />
              <Link
                href="mailto:contact@epitranquille.com"
                className="text-sm text-gray-700 transition-colors hover:text-gray-900"
              >
                contact@epitranquille.com
              </Link>
            </div>
          </div>
          {/* TODO: re-enable QR code download link and add a second one */}
          {/* <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form
            className="flex w-full flex-wrap items-stretch justify-center sm:flex-nowrap md:w-auto"
            method="POST"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfk9x4DRODPaQ-UPbzlQXpG7mgd69fmaXgx-_CLsPv2FaTygA/formResponse"
          >
            <TextField
              type="email"
              name="entry.1488880179"
              aria-label="Email address"
              placeholder="Adresse e-mail"
              autoComplete="email"
              required
              className="w-60 min-w-0 grow sm:shrink"
            />
            <Button
              type="submit"
              color="primary"
              className="mt-4 flex-auto sm:ml-4 sm:mt-0 sm:flex-none"
            >
              {/* <BellAlert className="h-5 w-5 flex-none" /> */}
              <span className="hidden lg:inline">
                Être notifié du lancement
              </span>
              <span className="lg:hidden">Être notifié du lancement</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            EPI Tranquille &copy; Copyright {new Date().getFullYear()}. Tous
            droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  )
}
