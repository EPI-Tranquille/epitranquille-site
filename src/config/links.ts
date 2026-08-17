/**
 * Central place for the mobile app store links.
 *
 * The iOS/Android apps are currently in submission. As long as the
 * corresponding `*Ready` flag is `false`, download buttons render in a
 * disabled "Bientôt disponible" state instead of linking out.
 *
 * Once an app is live, just set its URL below and flip its flag to `true`
 * — every button using `AppStoreLink`/`GooglePlayLink` picks it up
 * automatically, no other file needs to change.
 */
export const appStoreReady = false
export const appStoreUrl = 'https://apps.apple.com/app/epi-tranquille/idXXXXXXXXXX'

export const playStoreReady = false
export const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.epitranquille.app'
