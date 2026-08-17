'use client'

import { useState, useSyncExternalStore } from 'react'
import posthog from 'posthog-js'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

// PostHog's opt_out_capturing_by_default makes has_opted_out_capturing()
// return true for a visitor who simply hasn't chosen yet ("pending" reads
// as "denied" internally — see ConsentManager.isOptedOut in posthog-js).
// So we can't use PostHog's own state to decide whether to show the
// banner; we track "has this visitor made a choice at all" ourselves.
const CONSENT_STORAGE_KEY = 'epitranquille-cookie-consent'

function noopSubscribe() {
  return () => {}
}

function hasStoredChoice() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return true
  return window.localStorage.getItem(CONSENT_STORAGE_KEY) !== null
}

function getServerSnapshot() {
  // Consent state only exists in the browser, so the server always "sees"
  // a choice already made (banner hidden) — the client re-syncs on mount.
  return true
}

// PostHog is initialized with opt_out_capturing_by_default: true (see
// instrumentation-client.ts), so no cookie is written and no event leaves
// the browser until the visitor makes a choice here. This is what makes
// the "bannière informative" promised in /politique-cookies real.
export function CookieConsent() {
  let hasChoice = useSyncExternalStore(
    noopSubscribe,
    hasStoredChoice,
    getServerSnapshot,
  )
  let [dismissed, setDismissed] = useState(false)

  if (hasChoice || dismissed) return null

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
                window.localStorage.setItem(CONSENT_STORAGE_KEY, 'refused')
                setDismissed(true)
              }}
            >
              Refuser
            </Button>
            <Button
              color="primary"
              onClick={() => {
                posthog.opt_in_capturing()
                // The pageview for whatever page the visitor is already on
                // was suppressed while opted out by default — capture it
                // now instead of waiting for their next navigation.
                posthog.capture('$pageview', {
                  $current_url: window.location.href,
                })
                window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted')
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
