/**
 * Vidéos de la page /tutoriels.
 *
 * La liste vient de l'app EPI Tranquille : shared/tutorials/tutorials.json,
 * écrit par son outil `just tuto-ajouter` et publié en fichier statique à
 * chaque déploiement de l'app. Rien à modifier ici pour ajouter une vidéo.
 *
 * src/data/tutorials.json en est une copie de secours, utilisée si le fichier
 * publié est injoignable ; la recopier de temps en temps suffit.
 */

import fallbackCatalog from '@/data/tutorials.json'

export type Platform = 'web' | 'mobile'
export type Level = 'prise-en-main' | 'avance'

export interface Tutorial {
  slug: string
  title: string
  description: string
  platform: Platform
  level: Level
  youtubeId: string
  /** Date de publication sur YouTube, au format AAAA-MM-JJ. */
  publishedAt: string
  /** Durée affichée sur la vignette, par exemple '4:32'. */
  duration?: string
}

export interface TutorialCatalog {
  playlists: Record<Platform, { id: string; title: string }>
  tutorials: Tutorial[]
}

const CATALOG_URL =
  process.env.TUTORIALS_JSON_URL ??
  'https://epitranquille-static.s3.eu-west-3.amazonaws.com/tutorials/tutorials.json'

export const youtubeChannelUrl =
  'https://www.youtube.com/channel/UCVw1rgsmCZj2N8g6iJWCyUQ'

export const platforms: Record<
  Platform,
  { label: string; description: string }
> = {
  web: {
    label: 'Application web',
    description:
      'Gérez votre registre au bureau ou au local du club : import Excel, contrôles détaillés, utilisateurs, prêts et sorties.',
  },
  mobile: {
    label: 'Application mobile',
    description:
      "Sur le terrain : ajout d'EPI par scan, contrôles rapides et consultation du registre, même hors connexion.",
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

function isCatalog(data: unknown): data is TutorialCatalog {
  let catalog = data as TutorialCatalog
  return (
    Array.isArray(catalog?.tutorials) &&
    catalog.tutorials.every(
      (tutorial) =>
        typeof tutorial.youtubeId === 'string' &&
        tutorial.platform in platforms &&
        tutorial.level in levels,
    ) &&
    typeof catalog.playlists?.web?.id === 'string' &&
    typeof catalog.playlists?.mobile?.id === 'string'
  )
}

/** Lu côté serveur et mis en cache une heure : aucune requête par visiteur. */
export async function getTutorialCatalog(): Promise<TutorialCatalog> {
  try {
    let response = await fetch(CATALOG_URL, { next: { revalidate: 3600 } })
    if (response.ok) {
      let data: unknown = await response.json()
      if (isCatalog(data)) {
        return data
      }
    }
    console.warn(
      `Tutoriels : réponse inattendue de ${CATALOG_URL}, copie de secours utilisée.`,
    )
  } catch (error) {
    console.warn(
      `Tutoriels : ${CATALOG_URL} injoignable (${error instanceof Error ? error.message : error}), copie de secours utilisée.`,
    )
  }
  return fallbackCatalog as TutorialCatalog
}

export function watchUrl(tutorial: Tutorial): string {
  return `https://www.youtube.com/watch?v=${tutorial.youtubeId}`
}

export function thumbnailUrl(tutorial: Tutorial): string {
  return `https://i.ytimg.com/vi/${tutorial.youtubeId}/hqdefault.jpg`
}

export function embedUrl(tutorial: Tutorial): string {
  return `https://www.youtube-nocookie.com/embed/${tutorial.youtubeId}`
}

export function playlistUrl(playlistId: string): string {
  return `https://www.youtube.com/playlist?list=${playlistId}`
}
