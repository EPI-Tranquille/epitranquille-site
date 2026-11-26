# SEO : ce qui est en place et ce qui reste à faire hors du code

## En place dans le site

| Sujet | Où |
| --- | --- |
| Organisation, site, application web + applications iOS/Android (JSON-LD) | `src/lib/seo.ts`, `src/app/(main)/page.tsx` |
| Fil d'Ariane (BreadcrumbList) sur les pages intérieures | `breadcrumbSchema()` dans `src/lib/seo.ts` |
| FAQ (FAQPage), réponses présentes dans le HTML même repliées | `src/components/Faqs.tsx` |
| Une page par vidéo + VideoObject + sitemap vidéo | `src/app/(main)/tutoriels/[slug]`, `src/lib/tutorials.ts` |
| Sitemap images (captures d'écran de l'accueil) | `src/app/sitemap.ts` |
| `max-image-preview:large`, `max-video-preview`, `max-snippet` | `src/app/layout.tsx` |
| Tarifs et footer rendus côté serveur (lisibles sans JavaScript) | `src/components/Pricing.tsx`, `Footer.tsx` |
| Résumé pour les assistants IA | `/llms.txt` (`src/app/llms.txt/route.ts`) |
| Guides « durée de vie des EPI » et « gestion / contrôle des EPI » | `src/app/(main)/blog/` |
| Page SNAPEC enrichie + FAQ dédiée | `src/app/(main)/snapec/page.tsx` |

### À faire vivre dans le code

- **Chaque nouveau profil officiel** (fiche Google, LinkedIn, Facebook,
  Instagram…) : l'ajouter à `sameAs` dans `src/lib/seo.ts`.
- **Note des applications** : dès qu'il y a de vrais avis sur l'App Store /
  le Play Store, renseigner `appRating` dans `src/lib/seo.ts`. C'est la
  condition pour que Google affiche le résultat enrichi « application »
  (étoiles, prix). Ne jamais inventer ni laisser vieillir la note.
- **Chaque nouvelle vidéo** : l'ajouter dans `src/lib/tutorials.ts` avec un
  `slug`, une `publishedAt`, une `duration` et si possible une `transcript`.
- **Un article par requête visée** : le blog est le meilleur levier pour
  « durée de vie EPI », « contrôle EPI », « registre EPI », « fiche de vie
  EPI », « EPI canyoning », « EPI spéléo »… Penser au champ `updated` quand
  un article est revu.

## 1. Google Search Console (prioritaire)

1. Ajouter la propriété **Domaine** `epitranquille.com` (validation DNS chez
   le registrar). À défaut, une propriété « préfixe d'URL » validée par
   balise : mettre la valeur dans la variable d'environnement Vercel
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
2. Envoyer `https://epitranquille.com/sitemap.xml`.
3. Après déploiement, tester l'accueil, `/snapec`, une page
   `/tutoriels/...` et un article dans le
   [test des résultats enrichis](https://search.google.com/test/rich-results),
   puis « Inspection de l'URL » → « Demander une indexation ».
4. Suivre les rapports **Améliorations** (fil d'Ariane, vidéos, FAQ,
   applications) et **Performances** (requêtes « snapec », « registre epi »,
   « durée de vie epi »…).

Faire de même dans **Bing Webmaster Tools** (import direct depuis Search
Console) : Bing alimente ChatGPT Search et Copilot.

## 2. Fiche Google Business Profile

**Éligibilité, à lire avant de créer la fiche.** Google réserve les fiches
aux établissements qui rencontrent leurs clients en personne, à une adresse
ou en se déplaçant. Une activité 100 % en ligne n'est pas éligible et
risque la suspension. La fiche est légitime si vous accueillez des clients
ou vous déplacez réellement chez eux (formation au registre, aide aux
contrôles dans les clubs, installation sur place…). Dans ce cas :

- **Type** : établissement de service (« zone desservie »), **adresse
  masquée** (Champcella, 05310, n'apparaît pas publiquement).
- **Nom** : `EPI Tranquille`, exactement, sans mots-clés ajoutés (interdit).
- **Catégorie principale** : `Développeur de logiciels` (ou `Société de
  logiciels`, selon ce que propose la liste au moment de la création).
  **Catégories secondaires** possibles si elles correspondent à une
  activité réelle : `Consultant`, `Service de formation`.
- **Zone desservie** : Hautes-Alpes, Isère, Savoie, Haute-Savoie, région
  Provence-Alpes-Côte d'Azur, Auvergne-Rhône-Alpes… (20 zones max).
- **Site web** : `https://epitranquille.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- **Description** (750 caractères max), à adapter :

  > EPI Tranquille est le registre EPI numérique des professionnel·les de
  > l'escalade, du canyoning, de l'alpinisme, de la spéléologie et de la
  > via ferrata. Conçue par un moniteur d'escalade DEJEPS selon la norme
  > NF S72-701, l'application web et mobile (iOS, Android) permet
  > d'ajouter ses EPI depuis une base de produits, de suivre leur durée de
  > vie, de réaliser les contrôles périodiques, de gérer les prêts et
  > d'exporter son registre en PDF. Gratuit jusqu'à 50 EPI. Partenaire du
  > SNAPEC : registre gratuit pour les adhérent·es.

- **Services** : Registre EPI numérique · Contrôle périodique des EPI ·
  Suivi de la durée de vie des EPI · Import de registre Excel ·
  Accompagnement des clubs et structures.
- **Produits** (onglet Produits, avec photo, prix et lien) : formules
  Basique (gratuit), Indépendant (5 €/mois), Premium (13 €/mois),
  Entreprise (50 €/mois), et l'application mobile.
- **Photos** : logo, image de couverture, 5 à 10 captures d'écran (web et
  mobile), photos réelles de contrôles d'EPI sur le terrain. Les photos
  réelles comptent plus que les visuels marketing.
- **Vidéos** : téléverser les tutoriels (30 s à 2 min).
- **Posts** : un post par nouvel article ou nouvelle vidéo.
- **Avis** : demander un avis aux utilisateurs satisfaits (lien court
  fourni par Google), y répondre systématiquement.

Une fois la fiche validée, ajouter son URL (lien « maps.google.com/?cid=… »)
à `sameAs` dans `src/lib/seo.ts`.

**Si la fiche n'est pas éligible**, le panneau de connaissances de la marque
(logo, liens, description à droite des résultats) se construit sans elle, à
partir des données `Organization` déjà en place, des profils `sameAs` et des
mentions sur d'autres sites : c'est le levier à privilégier.

## 3. Apparaître sur « snapec », « gestion epi », « durée de vie epi »…

- **Liens entrants** : c'est le facteur le plus important. Demander :
  - au SNAPEC un lien vers `https://epitranquille.com/snapec` depuis sa page
    « Gestion de mes EPI » et sa page partenaires (avec le texte « registre
    EPI » ou « EPI Tranquille ») ;
  - au SNPSC, à la FFCAM, aux comités départementaux, aux salles et clubs
    utilisateurs une mention avec lien ;
  - des articles invités dans la presse spécialisée (Grimper, Vertical,
    sites de canyoning et de spéléo).
- **Une requête = une page** : pour « snapec », la page `/snapec` ; pour
  « durée de vie epi », l'article dédié ; pour « gestion epi » et
  « contrôle epi », le guide dédié. Ne pas créer deux pages sur le même
  sujet, elles se concurrenceraient.
- **YouTube** : titres et descriptions des vidéos avec les mots-clés
  (« registre EPI », « contrôle EPI ») et un lien vers la page
  `/tutoriels/...` correspondante en première ligne de description.
- **App Store / Play Store** : sous-titre et description courte avec
  « registre EPI », « contrôle EPI », « escalade », « canyoning ».

## 4. Résultats IA (AI Overviews, ChatGPT, Perplexity, Claude…)

- Le contenu important est maintenant dans le HTML (tarifs, FAQ, footer) :
  les robots IA n'exécutent généralement pas le JavaScript.
- `/llms.txt` résume l'offre ; le mettre à jour si les tarifs ou
  fonctionnalités changent (il est généré à partir des articles et vidéos,
  mais le bloc « L'essentiel » est écrit à la main).
- `robots.ts` autorise tous les robots, IA compris. Pour exclure un robot
  d'entraînement précis (ex. `GPTBot`, `Google-Extended`) sans perdre la
  visibilité dans les réponses, ajouter une règle `disallow` pour lui seul.
- Les assistants citent les sources qui donnent des réponses courtes,
  factuelles et datées : garder le format « En bref » en tête des guides
  et les FAQ à jour.
- Être cité ailleurs (SNAPEC, forums, Reddit, presse) pèse autant que le
  site lui-même dans les réponses IA.

## 5. Résultats enrichis : ce qui n'est pas applicable

- **Produit (Product / fiche marchand)** : réservé aux biens vendus ; un
  logiciel par abonnement doit utiliser `SoftwareApplication` (en place).
  Le déclarer en `Product` est contraire aux consignes de Google.
- **FAQ** : depuis 2023, Google n'affiche plus les FAQ enrichies que pour
  les sites gouvernementaux et de santé. Le balisage reste utile pour les
  moteurs IA et Bing.
- **Avis / étoiles sur l'organisation** : interdits pour les avis publiés
  par l'entreprise elle-même sur son site.
