'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

// Next.js App Router client-side navigations don't produce the history
// events PostHog's automatic pageview capture listens for, so we send
// $pageview manually on every route change instead (capture_pageview:
// false is set in instrumentation-client.ts). useSearchParams() requires
// a Suspense boundary, hence the wrapper below.
function PostHogPageViewInner() {
  let pathname = usePathname()
  let searchParams = useSearchParams()
  let posthog = usePostHog()

  useEffect(() => {
    if (!pathname || !posthog) return

    let url = window.origin + pathname
    let query = searchParams.toString()
    if (query) {
      url += `?${query}`
    }

    posthog.capture('$pageview', { $current_url: url })
  }, [pathname, searchParams, posthog])

  return null
}

export function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageViewInner />
    </Suspense>
  )
}
