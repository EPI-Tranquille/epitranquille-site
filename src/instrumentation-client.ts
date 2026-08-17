import posthog from 'posthog-js'

// Runs on the client before the app hydrates (Next.js "instrumentation-client"
// convention). This replaces the old pattern of calling posthog.init() inside
// providers.tsx behind a `typeof window !== 'undefined'` check.
const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    // Every visitor gets a person profile, even anonymous ones — needed to
    // get GA-style visitor/session dashboards on a site with no login.
    person_profiles: 'always',
    // We track pageviews manually (see PostHogPageView.tsx) because
    // Next.js App Router client-side navigations don't fire the events
    // PostHog's automatic pageview capture relies on.
    capture_pageview: false,
    // No cookie is written and no event leaves the browser until the visitor
    // accepts the cookie banner (see CookieConsent.tsx), which calls
    // posthog.opt_in_capturing(). This is PostHog's documented pattern for
    // consent-gated tracking — required here since our politique-cookies
    // page promises a consent banner before any audience-measurement cookie.
    opt_out_capturing_by_default: true,
  })
} else if (process.env.NODE_ENV === 'development') {
  console.info(
    '[PostHog] NEXT_PUBLIC_POSTHOG_KEY is not set — analytics disabled. See .env.example.',
  )
}
