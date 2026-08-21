/**
 * Central place for the mobile app store links.
 *
 * Both apps are live as of 2026-08-21. As long as the corresponding
 * `*Ready` flag is `false`, download buttons render in a disabled
 * "Bientôt disponible" state instead of linking out — flip a flag back
 * to `false` (e.g. during a takedown) and every button using
 * `AppStoreLink`/`GooglePlayLink` picks it up automatically, no other
 * file needs to change.
 */
export const appStoreReady = true
export const appStoreUrl = 'https://apps.apple.com/fr/app/epi-tranquille/id6478505798'

export const playStoreReady = true
export const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.epitranquille.app'
