'use client'

import { useState, useSyncExternalStore } from 'react'
import posthog from 'posthog-js'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function noopSubscribe() {
  return () => {}
}

function hasPendingConsentChoice() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return false
  return !posthog.has_opted_in_capturing() && !posthog.has_opted_out_capturing()
}

function getServerSnapshot() {
  // Consent state only exists in the browser (cookies/localStorage), so the
  // server always "sees" no pending choice — the client re-syncs on mount.
  return false
}

// PostHog is initialized with opt_out_capturing_by_default: true (see
// instrumentation-client.ts), so no cookie is written and no event leaves
// the browser until the visitor makes a choice here. This is what makes
// the "bannière informative" promised in /politique-cookies real.
export function CookieConsent() {
  let pendingChoice = useSyncExternalStore(
    noopSubscribe,
    hasPendingConsentChoice,
    getServerSnapshot,
  )
  let [dismissed, setDismissed] = useState(false)

  if (!pendingChoice || dismissed) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white py-4 shadow-2xl shadow-gray-900/10">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-700">
            Nous utilisons des cookies de mesure d'audience pour comprendre
            comment vous utilisez le site. Vous pouvez accepter ou refuser à
            tout moment — en savoir plus dans notre{' '}
            <Link href="/politique-cookies" className="underline">
              politique de cookies
            </Link>
            .
          </p>
          <div className="flex flex-none gap-3">
            <Button
              variant="outline"
              color="gray"
              onClick={() => {
                posthog.opt_out_capturing()
                setDismissed(true)
              }}
            >
              Refuser
            </Button>
            <Button
              color="primary"
              onClick={() => {
                posthog.opt_in_capturing()
                setDismissed(true)
              }}
            >
              Accepter
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
