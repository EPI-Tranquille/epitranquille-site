'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// posthog.init() itself lives in src/instrumentation-client.ts — this
// component just makes the client available to usePostHog() everywhere.
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
