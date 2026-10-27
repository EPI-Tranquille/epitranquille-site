/**
 * Vidéos de la page /tutoriels.
 *
 * Pour ajouter une vidéo : ajoutez une entrée dans `tutorials` en collant le
 * lien YouTube de la vidéo (n'importe quel format : youtube.com/watch?v=…,
 * youtu.be/…, youtube.com/shorts/…). Dans chaque niveau, les vidéos
 * s'affichent dans l'ordre du tableau.
 */

export type Platform = 'web' | 'mobile'
export type Level = 'prise-en-main' | 'avance'

export interface Tutorial {
  /** Lien YouTube de la vidéo. */
  url: string
  title: string
  description: string
  platform: Platform
  level: Level
  /** Date de publication sur YouTube, au format AAAA-MM-JJ. */
  publishedAt: string
  /** Durée affichée sur la vignette, par exemple '4:32'. */
  duration?: string
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
    // Lien de la playlist YouTube des tutoriels web.
    playlistUrl: null,
  },
  mobile: {
    label: 'Application mobile',
    description:
      "Sur le terrain : ajout d'EPI par scan, contrôles rapides et consultation du registre, même hors connexion.",
    // Lien de la playlist YouTube des tutoriels mobile.
    playlistUrl: null,
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
  // {
  //   url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  //   title: 'Créer son compte et ajouter ses premiers EPI',
  //   description: 'Création du compte, du premier parc et ajout d’EPI depuis la base de données.',
  //   platform: 'web',
  //   level: 'prise-en-main',
  //   publishedAt: '2026-10-27',
  //   duration: '4:32',
  // },
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
