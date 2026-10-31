# SEO : prochaines pistes d'amélioration

Pistes classées par priorité. Pour chacune : qui s'en charge et ce que ça
apporte. L'état actuel est décrit dans [`SEO.md`](./SEO.md).

## Priorité 1 : liens entrants et avis

C'est ce qui fera le plus bouger le classement : le site est maintenant
techniquement prêt, il lui manque surtout des signaux de confiance venus
d'ailleurs.

- [ ] **Lien du SNAPEC** vers `https://epitranquille.com/snapec`, depuis sa
  page « Gestion de mes EPI » et sa page partenaires. Premier levier pour
  la requête « snapec ». *(vous)*
- [ ] **Liens des utilisateurs** : clubs, salles, comités départementaux,
  bases de loisirs. Une simple mention avec lien sur leur site suffit.
  *(vous)*
- [ ] **Annuaires de logiciels** (Capterra, Appvizer…) : fiche gratuite
  avec lien et avis clients. *(vous)*
- [ ] **Presse et sites spécialisés** : article invité ou mention dans les
  médias d'escalade, de canyoning et de spéléo. *(vous, je peux rédiger
  les textes)*
- [ ] **Avis sur l'App Store et le Play Store**, puis renseigner
  `appRating` dans `src/lib/seo.ts` pour afficher les étoiles dans Google.
  *(vous, puis moi)*
- [ ] **Profils officiels** (LinkedIn, Facebook, Instagram, fiche Google
  Business Profile si éligible) : à créer, puis à ajouter à `sameAs` dans
  `src/lib/seo.ts`. *(vous, puis moi)*

## Priorité 2 : contenu

Une page par requête visée, sans doublon. Je rédige, vous relisez la
partie technique.

- [ ] **Modèle de registre EPI gratuit (Excel / PDF)** à télécharger, avec
  un article qui l'accompagne. Requêtes très recherchées (« modèle registre
  EPI », « registre EPI Excel ») et bonne porte d'entrée vers
  l'application.
- [ ] **Articles par activité** : EPI en canyoning, en spéléologie, en via
  ferrata et parcours acrobatiques, matériel d'alpinisme (piolets,
  crampons, broches, DVA).
- [ ] **Fiche de vie EPI** : ce qu'elle contient, avec un exemple.
- [ ] **La norme NF S72-701 expliquée** simplement.
- [ ] **Obligations du moniteur indépendant** et **gestion des EPI en
  club** (prêts, bénévoles, contrôle de fin de saison).
- [ ] **Registre EPI : Excel ou logiciel ?** Comparatif honnête.
- [ ] **Glossaire EPI** (réformer, fiche de vie, contrôle périodique,
  EPI de catégorie III…), utile aussi pour les réponses IA.
- [ ] **Documentation / centre d'aide** (annoncé « bientôt » dans le
  footer) : chaque page d'aide est aussi une page indexable.

## Priorité 3 : vidéos et images

- [ ] **Transcription de chaque tutoriel** (champ `transcript` dans
  `src/lib/tutorials.ts`) : Google et les moteurs IA lisent le texte, pas
  la vidéo. *(vous fournissez le texte ou les sous-titres YouTube)*
- [ ] **Durée des vidéos** (champ `duration`) pour l'afficher dans les
  résultats vidéo.
- [ ] **YouTube** : lien vers la page `/tutoriels/...` en première ligne
  de chaque description, chapitres, mots-clés dans les titres. *(vous)*
- [ ] **Photos réelles dans les articles** (points de contrôle d'un
  baudrier, usure d'un mousqueton…) avec légendes : bien placées dans la
  recherche Images. *(vous fournissez les photos)*
- [ ] **Image de partage propre à chaque article** au lieu de l'image
  commune : meilleure présence sur les réseaux et dans Google Discover.
  *(moi)*

## Priorité 4 : pages et technique

- [ ] **Page `/tarifs` dédiée** (aujourd'hui une ancre `/#pricing`) pour
  les recherches « prix logiciel registre EPI ». *(moi)*
- [ ] **Auteur des articles en tant que personne** (Samuel Girardin,
  moniteur d'escalade DEJEPS) plutôt que « EPI Tranquille », avec une
  courte biographie : Google valorise l'expertise de l'auteur sur les
  sujets de sécurité. *(moi)*
- [ ] **Fil d'Ariane visible** sur les pages intérieures (il n'existe
  aujourd'hui qu'en données structurées). *(moi)*
- [ ] **Vitesse du site** : mesurer avec PageSpeed Insights, en
  particulier l'effet des scripts Crisp et PostHog sur mobile. *(moi)*
- [ ] **Application `app.epitranquille.com`** : vérifier que seules les
  pages d'inscription et de connexion sont indexables, pour ne pas
  concurrencer le site. *(moi)*
- [ ] **Date de mise à jour des articles dans le sitemap** (champ
  `updated`). *(moi, facultatif)*
- [ ] **IndexNow** pour signaler les nouvelles pages à Bing en quelques
  heures. *(moi, facultatif)*

## À plus long terme

- [ ] **Pages publiques de durée de vie par produit ou par marque**, à
  partir de la base de produits de l'application (par exemple « durée de
  vie Petzl GRIGRI »). Fort potentiel de trafic, mais seulement si les
  durées de vie de la base sont vérifiées produit par produit : beaucoup
  sont aujourd'hui des valeurs par défaut (10 ans textile, illimité
  métal).
- [ ] **Version anglaise**, si l'application vise un jour d'autres pays.

## Suivi

- [ ] **Dans 3 à 4 semaines** : Search Console, onglet « Performances »,
  relever les requêtes sur lesquelles le site apparaît, puis ajuster
  titres et contenus.
- [ ] **Chaque mois** : rapports « Pages » (pages non indexées) et
  « Améliorations » (erreurs de données structurées) dans Search Console
  et Bing Webmaster Tools.
