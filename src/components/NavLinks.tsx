'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'

type Icon = (props: React.ComponentPropsWithoutRef<'svg'>) => React.JSX.Element

export interface NavItem {
  label: string
  href: string
  description: string
  icon: Icon
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

function SparklesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.75 4.5 11 8.25 14.75 9.5 11 10.75 9.75 14.5 8.5 10.75 4.75 9.5 8.5 8.25 9.75 4.5ZM17 13.5l.75 2.25L20 16.5l-2.25.75L17 19.5l-.75-2.25L14 16.5l2.25-.75L17 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 19c.5-3 2.75-4.75 5.5-4.75S14 16 14.5 19M15.5 5.25a3.25 3.25 0 0 1 0 5.5M17.5 14.5c1.6.6 2.7 2.1 3 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PlayCircleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.25 9v6l4.75-3-4.75-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DocumentIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 3.75H7.75a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2V8L14 3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.75V8h4.25M9 12.5h6M9 15.75h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function QuestionIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.75 9.5a2.25 2.25 0 1 1 3.4 1.95c-.7.4-1.15.95-1.15 1.8v.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.25" r="0.9" fill="currentColor" />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 6.5 8 10l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Ordre d'affichage dans le bandeau : un groupe s'ouvre en menu déroulant,
// un lien seul s'affiche tel quel.
export const navigation: Array<NavGroup | { label: string; href: string }> = [
  {
    label: 'Produit',
    items: [
      {
        label: 'Fonctionnalités',
        href: '/#features',
        description: "L'application mobile et la version web",
        icon: SparklesIcon,
      },
      {
        label: 'Pour qui ?',
        href: '/pour-qui',
        description: 'Moniteur·rices, clubs, salles et collectivités',
        icon: UsersIcon,
      },
    ],
  },
  { label: 'Tarifs', href: '/#pricing' },
  {
    label: 'Ressources',
    items: [
      {
        label: 'Tutoriels',
        href: '/tutoriels',
        description: "Vidéos pour prendre en main l'application",
        icon: PlayCircleIcon,
      },
      {
        label: 'Blog',
        href: '/blog',
        description: 'Réglementation et bonnes pratiques',
        icon: DocumentIcon,
      },
      {
        label: 'FAQ',
        href: '/#faqs',
        description: 'Les réponses à vos questions',
        icon: QuestionIcon,
      },
    ],
  },
  { label: 'Partenaires', href: '/partenaires' },
]

const linkStyles =
  'relative -mx-3 -my-2 inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900'

function NavDropdown({ group }: { group: NavGroup }) {
  let [open, setOpen] = useState(false)
  let closeTimeout = useRef<number | null>(null)
  let container = useRef<HTMLDivElement>(null)
  let panelId = useId()

  function cancelClose() {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }

  function scheduleClose() {
    cancelClose()
    closeTimeout.current = window.setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    if (!open) {
      return
    }
    function onPointerDown(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => cancelClose, [])

  return (
    <div
      ref={container}
      className="relative"
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!container.current?.contains(event.relatedTarget as Node)) {
          setOpen(false)
        }
      }}
    >
      <button
        type="button"
        className={clsx(linkStyles, open && 'bg-gray-100 text-gray-900')}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        {group.label}
        <ChevronDownIcon
          className={clsx(
            'h-4 w-4 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 z-50 w-96 -translate-x-1/2 pt-4"
          >
            <div className="rounded-2xl bg-white p-2 shadow-xl ring-1 shadow-gray-900/10 ring-gray-900/5">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                >
                  <span className="bg-primary/10 text-primary group-hover:bg-primary flex h-10 w-10 flex-none items-center justify-center rounded-lg transition-colors group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-gray-900">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-gray-600">
                      {item.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function NavLinks() {
  return navigation.map((entry) =>
    'items' in entry ? (
      <NavDropdown key={entry.label} group={entry} />
    ) : (
      <Link key={entry.label} href={entry.href} className={linkStyles}>
        {entry.label}
      </Link>
    ),
  )
}
