'use client'

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks, navigation } from '@/components/NavLinks'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.5 8h9M9 4.5 12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  )
}

export function Header() {
  let [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-[background-color,box-shadow] duration-300',
        scrolled
          ? 'bg-gray-50/90 shadow-sm shadow-gray-900/5 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav>
        <Container
          className={clsx(
            'relative z-50 flex justify-between transition-[padding] duration-300',
            scrolled ? 'py-4' : 'py-8',
          )}
        >
          <div className="relative z-10 flex items-center gap-10 xl:gap-14">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 outline-hidden hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className={clsx(
                            'absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 shadow-2xl shadow-gray-900/20',
                            scrolled ? 'pt-20' : 'pt-28',
                          )}
                        >
                          <div className="space-y-6">
                            {navigation.map((entry) =>
                              'items' in entry ? (
                                <div key={entry.label}>
                                  <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                    {entry.label}
                                  </p>
                                  <div className="mt-2 space-y-2">
                                    {entry.items.map((item) => (
                                      <MobileNavLink
                                        key={item.href}
                                        href={item.href}
                                      >
                                        {item.label}
                                      </MobileNavLink>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <MobileNavLink key={entry.label} href={entry.href}>
                                  {entry.label}
                                </MobileNavLink>
                              ),
                            )}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="https://app.epitranquille.com" variant="outline">
                              Connexion
                            </Button>
                            <Button href="https://app.epitranquille.com/signup/">Commencer</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <Link
                href="https://app.epitranquille.com"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Connexion
              </Link>
              <Button
                href="https://app.epitranquille.com/signup/"
                className="group"
              >
                Commencer
                <ArrowRightIcon className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
