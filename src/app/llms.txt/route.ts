import { appStoreUrl, playStoreUrl } from '@/config/links'
import { getAllArticles } from '@/lib/articles'
import { SITE_URL } from '@/lib/seo'
import { tutorialPath, tutorials } from '@/lib/tutorials'

// Généré au build : résumé du site au format llms.txt (https://llmstxt.org),
// lu par les assistants IA (ChatGPT, Claude, Perplexity…) pour décrire EPI
// Tranquille sans avoir à exécuter le JavaScript des pages.
export const dynamic = 'force-static'

export async function GET() {
  let articles = await getAllArticles()

  let body = `# EPI Tranquille

> EPI Tranquille est un logiciel de gestion des EPI (équipements de protection individuelle) et de registre EPI numérique, sur le web et en application mobile iOS et Android. Il est conçu sur mesure pour les professionnel·les et structures de l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la via ferrata, selon la norme NF S72-701.

## L'essentiel

- Pour qui : moniteur·rices et encadrant·es diplômé·es (BE, DEJEPS, DESJEPS, CQP), guides de haute montagne, clubs et salles d'escalade, parcours acrobatiques en hauteur, collectivités et fédérations.
- Fonctionnalités : base de données de produits EPI pour pré-remplir les fiches, scan du numéro de série / QR code / datamatrix, identification par photo, fiche de vie, durée de vie et date de mise au rebut théorique calculées, contrôles périodiques unitaires ou par lot (statuts valide, à surveiller, à réparer, réformé, disparu), alertes avant contrôle et avant expiration, gestion des prêts et des sorties, plusieurs parcs et plusieurs utilisateurs, import Excel, export PDF du registre, mode hors connexion sur mobile.
- Tarifs (par mois, -10 % en annuel) : Basique gratuit sans limite de durée (50 EPI, 1 parc) ; Indépendant 5 € (250 EPI, 2 parcs) ; Premium 13 € (500 EPI, 5 parcs, prêts) ; Entreprise 50 € (2000 EPI, parcs illimités, support prioritaire). Offre sur mesure sur demande.
- Partenariat SNAPEC : registre EPI gratuit pour les adhérent·es du SNAPEC (Syndicat National des Professionnels de l'Escalade et du Canyoning), activable depuis l'extranet SNAPEC ou par inscription directe.
- Données hébergées en Europe chez un hébergeur français.
- Fondée par Samuel Girardin, moniteur d'escalade (DEJEPS), à Champcella (Hautes-Alpes, France).
- Contact : contact@epitranquille.com — support : support@epitranquille.com

## Liens

- [Site](${SITE_URL}/): présentation, fonctionnalités, tarifs et FAQ
- [Application web](https://app.epitranquille.com/signup/): création de compte
- [Application iOS](${appStoreUrl})
- [Application Android](${playStoreUrl})
- [Pour qui ?](${SITE_URL}/pour-qui): publics et usages
- [SNAPEC](${SITE_URL}/snapec): offre pour les adhérent·es du SNAPEC
- [Tutoriels vidéo](${SITE_URL}/tutoriels)
- [À propos](${SITE_URL}/about)

## Guides et articles

${articles.map((article) => `- [${article.title}](${SITE_URL}/blog/${article.slug}): ${article.description}`).join('\n')}

## Tutoriels vidéo

${tutorials.map((tutorial) => `- [${tutorial.title}](${SITE_URL}${tutorialPath(tutorial)}): ${tutorial.description}`).join('\n')}
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
