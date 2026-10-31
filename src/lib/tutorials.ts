/**
 * Vidéos de la page /tutoriels.
 *
 * Pour ajouter une vidéo : ajoutez une entrée dans `tutorials` en collant le
 * lien YouTube de la vidéo (n'importe quel format : youtube.com/watch?v=…,
 * youtu.be/…, youtube.com/shorts/…). Dans chaque niveau, les vidéos
 * s'affichent dans l'ordre du tableau.
 *
 * Chaque vidéo a sa propre page /tutoriels/<slug> : c'est elle que Google
 * indexe dans ses résultats vidéo, car la vidéo y est le contenu principal.
 */

import { type VideoObject, type WithContext } from 'schema-dts'

export type Platform = 'web' | 'mobile'
export type Level = 'prise-en-main' | 'avance'

export interface Tutorial {
  /** Lien YouTube de la vidéo. */
  url: string
  /**
   * Fin de l'adresse de la page de la vidéo (/tutoriels/<slug>), en
   * minuscules et sans accents. Ne plus la modifier une fois la vidéo en
   * ligne : l'adresse est indexée par Google.
   */
  slug: string
  title: string
  description: string
  platform: Platform
  level: Level
  /**
   * Date de publication sur YouTube, au format AAAA-MM-JJ. Nécessaire pour
   * que Google affiche la vidéo dans ses résultats vidéo.
   */
  publishedAt?: string
  /** Durée affichée sur la vignette, par exemple '4:32'. */
  duration?: string
  /**
   * Transcription ou texte de la vidéo, affiché sous le lecteur. Optionnel
   * mais recommandé : Google et les moteurs IA lisent ce texte, pas la vidéo.
   */
  transcript?: string
}

export const youtubeChannelUrl =
  'https://www.youtube.com/channel/UCVw1rgsmCZj2N8g6iJWCyUQ'

export const platforms: Record<
  Platform,
  { label: string; description: string; playlistUrl: string | null }
> = {
  web: {
    label: 'Application web',
    description:
      'Gérez votre registre au bureau ou au local du club : import Excel, contrôles détaillés, utilisateurs, prêts et sorties.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLGxZkLayIBhE',
  },
  mobile: {
    label: 'Application mobile',
    description:
      "Sur le terrain : ajout d'EPI par scan, contrôles rapides et consultation du registre, même hors connexion.",
    playlistUrl: 'https://www.youtube.com/playlist?list=PLZxemK23hTqc',
  },
}

export const levels: Record<Level, { title: string; description: string }> = {
  'prise-en-main': {
    title: 'Prise en main',
    description:
      'Les bases pour démarrer : créer votre parc, ajouter vos premiers EPI et réaliser un premier contrôle.',
  },
  avance: {
    title: 'Usages avancés',
    description:
      'Pour aller plus loin : contrôles par lot, prêts et sorties, gestion à plusieurs, alertes et exports.',
  },
}

export const tutorials: Tutorial[] = [
  {
    url: 'https://youtu.be/TMn4gP75cZE',
    slug: 'creer-son-compte',
    title: 'Créer son compte',
    description:
      "Démarrez sur l'application web : création de votre compte EPI Tranquille.",
    platform: 'web',
    level: 'prise-en-main',
    publishedAt: '2026-10-26',
  },
  {
    url: 'https://youtu.be/u0UfmQGF-lU',
    slug: 'modifier-supprimer-parc',
    title: 'Modifier ou supprimer un parc',
    description:
      'Changez le nom du parc, la date du prochain contrôle ou la fréquence des contrôles, et supprimez un parc.',
    platform: 'mobile',
    level: 'avance',
    publishedAt: '2026-10-26',
  },
]

/** Extrait l'identifiant d'une vidéo depuis son lien YouTube. */
export function youtubeId(url: string): string {
  let { hostname, pathname, searchParams } = new URL(url)
  if (hostname === 'youtu.be') {
    return pathname.slice(1)
  }
  let match = pathname.match(/^\/(?:shorts|embed|live)\/([^/]+)/)
  return match ? match[1] : (searchParams.get('v') ?? '')
}

export function thumbnailUrl(url: string): string {
  return `https://i.ytimg.com/vi/${youtubeId(url)}/hqdefault.jpg`
}

export function embedUrl(url: string): string {
  return `https://www.youtube-nocookie.com/embed/${youtubeId(url)}`
}

export function tutorialPath(tutorial: Tutorial): string {
  return `/tutoriels/${tutorial.slug}`
}

/** Convertit une durée '4:32' ou '1:02:05' au format ISO 8601 (PT4M32S). */
export function isoDuration(duration: string): string {
  let [seconds = 0, minutes = 0, hours = 0] = duration
    .split(':')
    .map(Number)
    .reverse()
  return `PT${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}${seconds}S`
}

/** Durée en secondes, pour le sitemap vidéo. */
export function durationInSeconds(duration: string): number {
  return duration
    .split(':')
    .map(Number)
    .reduce((total, part) => total * 60 + part, 0)
}

export function videoObjectSchema(
  tutorial: Tutorial,
  siteUrl: string,
): WithContext<VideoObject> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${tutorial.title} — Tutoriel EPI Tranquille (${platforms[tutorial.platform].label.toLowerCase()})`,
    description: tutorial.description,
    thumbnailUrl: thumbnailUrl(tutorial.url),
    // Google ignore une vidéo sans date de publication.
    ...(tutorial.publishedAt && { uploadDate: tutorial.publishedAt }),
    ...(tutorial.duration && { duration: isoDuration(tutorial.duration) }),
    ...(tutorial.transcript && { transcript: tutorial.transcript }),
    contentUrl: tutorial.url,
    embedUrl: embedUrl(tutorial.url),
    url: `${siteUrl}${tutorialPath(tutorial)}`,
    inLanguage: 'fr',
    isFamilyFriendly: true,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'EPI Tranquille',
    },
  }
}
