import { Container } from '@/components/Container'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Conditions d'utilisations de nos services",
}

export default function ConditionsUtilisation() {
  return (
    <section
      // id="secondary-features"
      // aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <h1 className="text-center text-3xl font-medium tracking-tight text-gray-900">
          Conditions générales d'utilisation de nos services
        </h1>
        <div className="custom-typography">
          <p className="text-center text-sm">En vigueur au 15/09/2024</p>
          <p>
            L'accès, la consultation et l'utilisation du Site{' '}
            <Link href="/">epitranquille.com</Link>, de l’Application Web{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="http://app.epitranquille.com"
            >
              app.epitranquille.com
            </a>{' '}
            et des Applications sont subordonnés à l'acceptation sans réserve
            des présentes Conditions Générales d'Utilisation.
          </p>
          <h2>Définitions des termes</h2>
          <p>
            Chacun des termes mentionnés dans les présentes Conditions Générales
            d'Utilisation du Site, de l’Application Web et des Applications
            (ci-après dénommées les "CGU") la signification détaillée ci-dessous
            :
          </p>
          <p>
            <span className="underline">Applications :</span> désigne
            l’application Android téléchargeable gratuitement sur un téléphone
            Android depuis le Google Play Store, et l’application pour iPhone et
            iPad téléchargeable gratuitement depuis l’App Store d’Apple
            gratuitement sur un iPhone ou un iPad.
          </p>
          <p>
            <span className="underline">Application Web :</span> désigne
            l’application web disponible à l’url suivante{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="http://app.epitranquille.com"
            >
              app.epitranquille.com
            </a>{' '}
            accessible pour les Utilisateurs.
          </p>
          <p>
            <span className="underline">Base de données Produits :</span>{' '}
            désigne la base de données disponible dans l’Application Web ou les
            Applications, contenant une liste non exhaustive des EPI produits
            par des fabricants d’EPI, afin de faciliter l’ajout d’un nouvel EPI
            au registre.
          </p>
          <p>
            <span className="underline">Compte Utilisateur :</span> désigne
            l’espace accessible depuis les Applications et l’Application Web que
            toute personne doit créer afin de devenir un Utilisateur.
          </p>
          <p>
            <span className="underline">Contrôle :</span> le contrôle désigne le
            contrôle d’un ou plusieurs EPI renseigné dans l’Application Web ou
            les Applications.
          </p>
          <p>
            <span className="underline">EPI :</span> cet acronyme signifie
            Équipement de Protection Individuelle et désigne cet équipement
            ainsi que les données de cet équipement saisi dans les Applications
            ou l’Application Web.
          </p>
          <p>
            <span className="underline">Exploitant :</span> l’exploitant du
            Site, des Applications, de l’Application Web et du Service EPI
            Tranquille tel que défini dans les{' '}
            <Link href="/mentions-legales">mentions légales</Link>.
          </p>
          <p>
            <span className="underline">Notifications :</span> les notifications
            désignent les notifications pouvant être envoyées via e-mail aux
            Utilisateurs des Services ou les notifications Push envoyées aux
            appareils mobiles des Utilisateurs des Applications.
          </p>
          <p>
            <span className="underline">Registre EPI :</span> le registre EPI
            désigne l’ensemble des EPI d’un parc d’un Utilisateur donné.
          </p>
          <p>
            <span className="underline">Services :</span> désigne l’ensemble du
            Site, des Applications et de l’Application Web permettant d’assurer
            les fonctionnalités décrites en section 2 mises à la disposition des
            Utilisateurs.
          </p>
          <p>
            <span className="underline">Site :</span> désigne le site web
            disponible à l’url <Link href="/">epitranquille.com</Link>{' '}
            permettant de faire la promotion des Applications et de
            l’Application Web et de fournir de la documentation sur
            l’utilisation des Applications et de l’Application Web.
          </p>
          <p>
            <span className="underline">Utilisateur :</span> désigne toute
            personne utilisant le Site ou ayant créé un compte sur l’Application
            Web ou les Applications.
          </p>
          <h2>Article 1 - Principes</h2>
          <p>
            Les CGU ont pour objet de déterminer les conditions d'utilisation du
            Site, des Applications, de l’Application Web et du Service EPI
            Tranquille mis à disposition des Utilisateurs.
          </p>
          <p>
            Tout Utilisateur accédant et consultant le Site et/ou les
            Applications/l’ Application Web déclare avoir pris connaissance des
            présentes Conditions Générales d’Utilisation et les accepte
            expressément sans réserve et/ou modification de quelque nature que
            ce soit. Les présentes CGU sont donc pleinement opposables aux
            Utilisateurs.
          </p>
          <p>
            Les conditions de souscription par les Utilisateurs aux abonnements
            payants sont fixées dans les conditions générales de vente
            (dénommées ci-après "CGV") :
          </p>
          <ul>
            <li>aux Utilisateurs Particuliers bientôt disponibles ;</li>
            <li>aux Utilisateurs Professionnels bientôt disponibles.</li>
          </ul>
          <p>
            Tout traitement de données personnelles dans le cadre des présentes
            CGU est soumis aux dispositions de notre{' '}
            <Link href="/politique-confidentialite">
              politique de confidentialité
            </Link>
            , qui fait partie intégrante des présentes conditions.
          </p>
          <h2>Article 2 - Description des Services</h2>
          <h3>
            <span>2.1 Fonctionnalités du Site</span>
          </h3>
          <p>
            Le Site <Link href="/">epitranquille.com</Link> est accessible à
            tout Utilisateur. Les Utilisateurs peuvent :
          </p>
          <ul>
            <li>consulter les fonctionnalités des Services ;</li>
            <li>
              accéder à des visuels des Applications et de l’Application Web ;
            </li>
            <li>
              contacter l’exploitant du du Site, des Applications et de
              l’Application Web ;
            </li>
            <li>prendre connaissance des informations légales ;</li>
            <li>consulter les tarifs d’utilisation des Services ;</li>
            <li>consulter les autres informations présentes sur le Site.</li>
          </ul>
          <h3>
            <span>2.2 Fonctionnalités des Services</span>
          </h3>
          <p>
            Les Services permettent de faciliter la gestion des EPI de manière
            numérique.
          </p>
          <p>
            L’utilisation des Services nécessite la création d’un Compte par
            l’Utilisateur et que celui-ci s’y connecte (via les Applications ou
            l’Application Web). Une fois connecté, les fonctionnalités fournies
            par les Services varient en fonction selon le type d’Utilisateur
            (pas d’abonnement ou abonnement payant) et du support utilisé :
            Applications ou Application Web.
          </p>
          <p>
            En l’absence de Compte les Utilisateurs peuvent depuis les
            Applications ou l’Application Web :&nbsp;
          </p>
          <ul>
            <li>créer un Compte.</li>
          </ul>
          <p>
            Après création d’un Compte les fonctionnalités fournies par les
            Services sont détaillées ci-après.
          </p>
          <h4>
            <span>
              2.2.1 Fonctionnalités disponibles pour les Utilisateurs non
              connectés
            </span>
          </h4>
          <p>Les Utilisateurs peuvent :</p>
          <ul>
            <li>se Connecter à leur Compte avec leurs identifiants ;</li>
            <li>
              demander la réinitialisation du mot de passe de leur Compte.
            </li>
          </ul>
          <h4>
            <span>2.2.2 Fonctionnalités liées à la gestion du Compte</span>
          </h4>
          <ul>
            <li>
              gérer les informations personnelles renseignées lors de la
              création du Compte ;
            </li>
            <li>supprimer leur compte ;</li>
            <li>
              modifier les informations d’authentification permettant d’accéder
              au Compte ;
            </li>
            <li>
              consulter les limites d’utilisation de l’abonnement actuel (nombre
              d’EPI, nombres de parcs…).
            </li>
          </ul>
          <h4>
            <span>
              2.2.3 Fonctionnalités liées à la gestion des abonnements
            </span>
          </h4>
          <p>Les Utilisateurs avec un Compte “gratuit” peuvent :</p>
          <ul>
            <li>
              consulter les différents abonnements auxquels ils ont accès ;
            </li>
            <li>souscrire à un abonnement payant ;</li>
            <li>activer un abonnement via un partenariat.</li>
          </ul>
          <p>Les Utilisateurs ayant déjà un abonnement peuvent :</p>
          <ul>
            <li>
              consulter les informations relatives à leur abonnement (prochaine
              échéance, date de souscription, tarif) ;
            </li>
            <li>résilier leur abonnement ;</li>
            <li>consulter les factures disponibles ;</li>
            <li>modifier leur abonnement ;</li>
            <li>activer un autre abonnement via un partenariat.</li>
          </ul>
          <h4>
            <span>2.2.4 Fonctionnalités liées à la gestion des EPI</span>
          </h4>
          <p>Les Utilisateurs peuvent :</p>
          <ul>
            <li>créer un premier parc EPI ;</li>
            <li>modifier / supprimer les informations d’un parc ;</li>
            <li>ajouter / modifier / consulter un EPI ;</li>
            <li>lister les EPI d’un parc ;</li>
            <li>exporter le registre ;</li>
            <li>contrôler un ou plusieurs EPI.</li>
          </ul>
          <p>
            Les Utilisateurs ayant la possibilité de gérer plusieurs parcs EPI
            peuvent :
          </p>
          <ul>
            <li>créer d’autres parcs EPI.</li>
          </ul>
          <p>
            Les Utilisateurs ayant la possibilité de gérer plusieurs
            utilisateurs par parc EPI peuvent :
          </p>
          <ul>
            <li>
              inviter à un utilisateur sur un de leur parc, en choisissant un
              certain rôle ;
            </li>
            <li>supprimer une invitation ;</li>
            <li>supprimer l’accès d’un utilisateur à leur parc ;</li>
            <li>modifier le rôle d’un utilisateur sur un parc.</li>
          </ul>
          <h4>
            <span>
              2.2.4 Fonctionnalités relatives à la gestion des Notifications
            </span>
          </h4>
          <p>aucune pour le moment.</p>
          <p>
            Pour plus d'informations sur les données collectées dans le cadre de
            l’utilisation des fonctionnalités du Site ou des Services, veuillez
            consulter notre{' '}
            <Link href="/politique-confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
          <h2>Article 4&nbsp; - Responsabilités et Garanties</h2>
          <h3>
            <span>Responsabilité et obligations de l’Utilisateur</span>
          </h3>
          <p>
            Tout Utilisateur déclare être informé que l’accès aux Services
            nécessite un accès Internet et accepte que :
          </p>
          <ul>
            <li>
              les aléas inhérents à Internet peuvent provoquer des interruptions
              d’accès ou des ralentissements des Services ;
            </li>
            <li>
              tout support (téléphone, ordinateur, tablette) connecté aux
              Services est sous son entière responsabilité. L’Exploitant ne
              pourra être tenu responsable pour tout dommages qui pourraient
              subvenir du fait de leur connexion aux Services ;
            </li>
            <li>
              qu'il est seul responsable des informations renseignées lors de la
              création de son Compte. À ce titre, l’Utilisateur s'engage à ce
              que son Compte ne contienne :
            </li>
            <ul>
              <li>aucune information obligatoire fausse et/ou mensongère ;</li>
              <li>
                aucune information portant atteinte aux droits d'un tiers.
              </li>
            </ul>
          </ul>

          <p>Tout Utilisateur déclare être informé et accepte que :</p>
          <ul>
            <li>
              la gestion de ses EPI (tenue du registre, ajout, modification)
              reste sous son entière responsabilité ;
            </li>
            <li>
              le contrôle de ses EPI reste sous son entière responsabilité ;
            </li>
            <li>
              les informations présentes dans le(s) registre(s) EPI de
              l’Utilisateur sont sous son entière responsabilité et l’Exploitant
              décline toute responsabilité vis-à-vis des informations présentes
              dans ledit (lesdits) registre(s) ;
            </li>
            <li>
              certains formulaires proposent de pré-remplir des champs ou d’en
              calculer la valeur, sans intervention humaine, et que les
              informations générées peuvent parfois être inexactes. Il
              appartient donc à l’Utilisateur de vérifier les différentes
              informations présentes dans les formulaires. L’Exploitant ne
              pourra donc en aucun cas être tenu responsable du contenu des
              informations générées ;
            </li>
            <li>
              la sélection d’un EPI existant dans la base de données des
              fabricants permet de pré-remplir des champs mais l’Exploitant
              n’étant en aucun cas propriétaire ni responsable des ces données,
              il appartient encore une fois à l’Utilisateur de vérifier leur
              exactitude.
            </li>
          </ul>
          <p>
            L’Exploitant ne saurait en aucun cas être tenu responsable des
            préjudices subis par un Utilisateur :
          </p>
          <ul>
            <li>
              liés à l’utilisation ou à la mauvaise tenue de son (ses)
              registre(s) EPI via nos Services ;
            </li>
            <li>
              liés au contrôle du (des) registre(s) EPI de l’Utilisateur par des
              organismes de contrôles de l’État dans le cadre de l’obligation
              légale de gestion des EPI (
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://eur-lex.europa.eu/eli/reg/2016/425/oj?locale=fr"
              >
                règlement européen 2016/425
              </a>
              ) ;
            </li>
            <li>
              liés à des dommages directs ou indirects (moraux ou corporels) que
              subiraient l’Utilisateur ou des tiers en raison de l’utilisation
              d’un ou plusieurs EPI présent(s) dans le(s) registre(s) de
              l’Utilisateur, qui seraient normalement à mettre au rebus et dont
              l’utilisation serait donc proscrite ;
            </li>
            <li>
              liés à l’incapacité de fournir son(ses) registre(s) EPI gérées via
              nos Services aux autorités de contrôles compétentes.
            </li>
          </ul>
          <h3>
            <span>Responsabilité et obligations de l’Exploitant</span>
          </h3>
          <p>
            L’Exploitant s'engage à mettre en œuvre tous les moyens nécessaires
            afin d'assurer au mieux la disponibilité des Services (surveillance
            des services, sauvegardes, mises à jour de sécurité). Toutefois,
            l’Exploitant décline toute responsabilité en cas :
          </p>
          <ul>
            <li>
              d’interruptions, de pannes, de modifications et de
              dysfonctionnement des Services, quel que soit le support de
              communication utilisé et ce quelles qu'en soient l'origine et la
              provenance ;
            </li>
            <li>
              de perte de données ou d'informations stockées par l’Exploitant.
              Il incombe aux Utilisateurs de prendre toutes précautions
              nécessaires pour conserver les données qu'ils renseignent via le
              Services. Néanmoins l’Exploitant s’efforcera de fournir les bonnes
              pratiques et conseils d’utilisation des Services afin d’éviter ces
              pertes ;
            </li>
            <li>
              d’impossibilité momentanée d'accès aux Services en raison de
              problèmes techniques et ce quelles qu'en soient l'origine et la
              provenance ;
            </li>
            <li>
              dommages directs ou indirects causés à l'Utilisateur, quelle qu'en
              soit la nature, résultant de l'accès ou de l'utilisation des
              Services ;
            </li>
            <li>
              de l’utilisation anormale ou d'une exploitation illicite des
              Services par tout Utilisateur ;
            </li>
            <li>
              de la mauvaise exécution des paiements des abonnements des
              Utilisateurs ;
            </li>
            <li>
              d’attaque ou piratage informatique, privation, suppression ou
              interdiction, temporaire ou définitive, et pour quelque cause que
              ce soit, de l’accès au réseau internet.
            </li>
          </ul>
          <p>
            L'Utilisateur renonce à toute action contre l’Exploitant de ce fait.
          </p>
          <p>
            Rappelons que le matériel de connexion aux Services utilisé est sous
            l'entière responsabilité de l'Utilisateur qui doit prendre toutes
            les mesures appropriées pour protéger le matériel et les données
            notamment d'attaques virales par Internet.
          </p>
          <p>
            L’Exploitant ne pourra être tenu responsable en cas de poursuites
            judiciaires à l'encontre de l'Utilisateur :
          </p>
          <ul>
            <li>
              du fait du non-respect par l'Utilisateur des présentes conditions
              générales ;
            </li>
            <li>du fait de l’usage illicite des Services ;</li>
            <li>en cas de perte par un Utilisateur de son mot de passe ;</li>
            <li>en cas d’usurpation de l’identité d’un Utilisateur.</li>
          </ul>
          <p>
            Les Services sont disponibles notamment à travers les services tiers
            d’OVH, de Mailtrap, de RevenueCat et de Stripe pour certaines
            fonctionnalités. La disponibilité des Services est donc directement
            liée à celle de ces services tiers. En cas d’arrêt ou de
            dysfonctionnement des Services, l’Exploitant s’engage à mettre tous
            les moyens raisonnables pour rétablir le bon fonctionnement des
            Services dans les meilleurs délais.
          </p>
          <p>
            Pour la bonne gestion des Services, l'Exploitant se réserve le
            droit, à tout moment :
          </p>
          <ul>
            <li>
              de suspendre, d’interrompre ou de limiter l'accès à tout ou partie
              des Services - pendant un délai raisonnable - afin de procéder à
              des mises à jour ou à des correctifs de sécurité ;
            </li>
            <li>
              de supprimer toute information pouvant en perturber le
              fonctionnement ou entrant en contravention avec les lois
              nationales ou internationales ;
            </li>
            <li>
              de suspendre les Services afin de procéder à des mises à jour.
            </li>
          </ul>
          <p>
            L’Exploitant ne pourra en aucun cas être tenu responsable des
            conséquences éventuelles de cette indisponibilité sur les activités
            de l'Utilisateur. Néanmoins il s’efforcera de communiquer
            préalablement aux utilisateurs les dates et heures des interventions
            prévues - si elles durent plus d’une heure - le cas échéant.
          </p>
          <h2>Article 5 - Propriété Intellectuelle</h2>
          <h3>
            <span>5.1 Droits de propriété</span>
          </h3>
          <p>
            Tous les documents techniques,&nbsp; images, vidéos, photographies,
            logos, marques, éléments graphiques, textuels, visuels, outils,
            logiciels, documents, données, base de données, etc. -&nbsp; à
            l’exception des photographies, noms, marques&nbsp; et données
            d’Équipements de Protection Individuelle vendus par des fabricants
            qui pourraient apparaître dans les visuels du Site ou dans la base
            de données Produits -, ci-après désignés “Éléments”, sont protégés
            par les lois en vigueur au titre de la propriété intellectuelle
            (tels que notamment droits d'auteur, droits des marques et droits
            des producteurs de base de données).
          </p>
          <p>
            Ces éléments sont la propriété de l’Exploitant. Les Utilisateurs
            s’engagent à n’apporter aucune modification à ces Éléments. Toute
            reproduction, représentation, utilisation ou adaptation, sous
            quelque forme que ce soit, de tout ou partie de ces Éléments sans
            l'accord préalable et écrit de l’Exploitant, sont strictement
            interdites. Le fait pour l’Exploitant de ne pas engager de procédure
            dès la prise de connaissance de ces utilisations non autorisées ne
            vaut pas acceptation desdites utilisations et renonciation aux
            poursuites.
          </p>
          <p>
            Les marques et logos EPI Tranquille, ainsi que les marques et logos
            des partenaires d’ EPI Tranquille ou des fabricants d’EPI sont des
            marques déposées. Toute reproduction totale ou partielle de ces
            marques et/ou logos sans l'autorisation préalable et écrite d’EPI
            Tranquille, ou des partenaires ou des fabricants d’EPI est
            interdite.
          </p>
          <p>
            Il est également interdit d’inverser la conception ou l'assemblage
            (reverse engineering) ou de toute autre manière tenter de trouver le
            code source, vendre, attribuer ou transférer de quelque manière que
            ce soit tout droit afférent aux Eléments.
          </p>
          <p>Tout Utilisateur des Services s'engage notamment à ne pas :</p>
          <ul>
            <li>
              utiliser ou interroger les Services pour le compte ou au profit
              d'autrui ;
            </li>
            <li>
              copier les informations sur un support permettant de reconstituer
              tout ou partie des fichiers d'origine.
            </li>
          </ul>
          <p>
            Ces actes illicites engagent la responsabilité de leurs auteurs et
            sont susceptibles d'entraîner des poursuites judiciaires à leur
            encontre, notamment pour contrefaçon.
          </p>
          <h3>
            <span>5.2 Base de données Produits</span>
          </h3>
          <p>
            L’Exploitant est producteur d’une base de données Produits intégrée
            aux Applications et à l’Application Web. Cette base de données
            contient une liste non exhaustive des EPI fabriqués par différents
            constructeurs et permet de faciliter la saisie d’EPI. Elle a été
            indexée par l’Exploitant et contient des informations et des
            photographies de produits appartenant aux fabricants d’EPI. Ces
            informations ne sont en aucun cas la propriété de l’Exploitant. Ces
            informations et photographies sont la propriété intellectuelle des
            fabricants et sont protégées par les lois en vigueur au titre de la
            propriété intellectuelle. En conséquence, toute modification ou
            appropriation de tout ou partie des données de la base de données,
            au sens des articles L 342-1 et L 342-2 du code de la propriété
            intellectuelle, est interdite.&nbsp;
          </p>
          <p>
            Nous ne pouvons garantir que ces données sont exactes, complètes et
            à jour. Il est de la responsabilité de l’Utilisateur de s’assurer
            que ces données soient correctes lors de leur utilisation dans nos
            Services. L’Exploitant ne pourrait être tenu responsable de
            l’utilisation de ces données par l’Utilisateur.
          </p>
          <p>
            Si vous pensez que du contenu sur les Services viole vos droits
            d’auteur ou la propriété intellectuelle de votre entreprise, vous
            pouvez le signaler à l'adresse suivante :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="mailto:contact@epitranquille.com"
            >
              contact@epitranquille.com
            </a>
            . Nous traiterons votre demande le plus rapidement possible.
          </p>
          <h2>Article 6 - Liens hypertextes</h2>
          <p>
            La mise en place par les Utilisateurs de tous liens hypertextes vers
            tout ou partie du Site, des Applications ou de l’Application Web est
            autorisée par l’Exploitant. Cette autorisation n'est dans tous les
            cas que temporaire et pourra être retirée à tout moment, sans
            obligation de justification à la charge de l’Exploitant. Dans tous
            les cas, tout lien devra être retiré sur simple demande de
            l’Exploitant.
          </p>
          <p>
            Toute information accessible via un lien sur le Site, les
            Applications et l’Application Web vers d'autres sites n'est pas sous
            le contrôle de l’Exploitant qui décline toute responsabilité quant à
            leur contenu ainsi qu'aux dommages pouvant résulter de la
            consultation ou de l’utilisation des informations présentes sur ces
            sites.
          </p>
          <h2>Article 7 - Abonnements</h2>
          <h3>
            <span>7.1 Souscription</span>
          </h3>
          <p>
            Certaines fonctionnalités des Services sont disponibles seulement
            moyennant un abonnement payant. Les différents abonnements et leurs
            tarifs sont disponibles <Link href="/#pricing">ici</Link>. Les
            tarifs sont affichés en prix TTC. Le statut de l’Exploitant étant
            une entreprise individuelle, la TVA est non applicable d’après
            l’article 293 B du CGI.
          </p>
          <p>
            L’Utilisateur qui souscrit à un abonnement payant est facturé en
            avance de manière périodique selon le cycle de facturation choisi
            (mensuel ou annuel).
          </p>
          <p>
            Un moyen de paiement valide est requis pour souscrire à un
            abonnement payant. L’Utilisateur autorise l'Exploitant à prélever
            tout Mode de paiement associé au Compte de l’Utilisateur au cas où
            le Mode de paiement principal serait refusé ou ne serait plus à
            notre disposition pour le paiement des frais d'abonnement dudit
            Compte. L’Utilisateur est redevable de tout montant non prélevé.
          </p>
          <h3>
            <span>7.2 Renouvellement automatique</span>
          </h3>
          <p>
            L’Utilisateur qui souscrit à un abonnement payant accepte qu’à
            chaque fin période de facturation (mensuelle ou annuelle), son
            abonnement se renouvelle automatiquement et que le moyen de paiement
            renseigné initialement soit prélevé à nouveau sous les mêmes
            conditions que le cycle de facturation précédent. Ce renouvellement
            automatique peut être annulé par l’Utilisateur s'il annule son
            abonnement avant la date de renouvellement.
          </p>
          <p>
            Si le renouvellement automatique échoue en raison de l'expiration du
            Mode de paiement, d'un solde insuffisant ou pour tout autre motif,
            et que l’Utilisateur ne résilie pas son Abonnement, l’Exploitant se
            réserve le droit de suspendre l’accès aux Services (au bout d’un
            délai de 15 jours) jusqu'à ce que l’Utilisateur prenne action afin
            que le prélèvement d’un Mode de paiement valide fonctionne à
            nouveau.
          </p>
          <p>
            Passé ce délai de 15 jours, l’abonnement de l’Utilisateur sera
            annulé. Les conséquences pour l’Utilisateur sont détaillées en
            section 7.5.
          </p>
          <h3>
            <span>7.3 Modes de paiement</span>
          </h3>
          <p>
            Vous pouvez mettre à jour vos Modes de paiement en vous rendant sur
            l’onglet “Abonnements” depuis la page « Mon Compte » . Après toute
            mise à jour, vous autorisez l’Exploitant à continuer à prélever
            votre compte via le ou les Modes de paiement concernés.&nbsp;
          </p>
          <p>
            En utilisant un Mode de paiement sur l’Application Web ou les
            Applications, les Utilisateurs déclarent avoir pris connaissance et
            accepté les conditions générales de nos prestataires de paiements
            concernés et entrer dans une relation contractuelle avec ce dernier.
          </p>
          <h3>
            <span>7.4 Résiliation</span>
          </h3>
          <p>
            L’Utilisateur peut résilier son abonnement à tout moment et
            continuera d'avoir accès aux Services jusqu'à la fin de la période
            de facturation. L’Utilisateur peut résilier :
          </p>
          <ul>
            <li>
              soit via l’Application Web via l’onglet “Abonnement” dans “Mon
              Compte” si l’abonnement avait été souscrit via l’Application Web ;
            </li>
            <li>
              soit via les Applications via “Mon Compte” &gt; “Abonnement” (la
              résiliation se fait via l’Apple Store ou le Play Store) si
              l’abonnement avait été souscrit via les Applications ;
            </li>
            <li>
              soit en contactant le support à{' '}
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="mailto:support@epitranquille.com"
              >
                support@epitranquille.com
              </a>{' '}
              en indiquant vouloir annuler votre abonnement.
            </li>
          </ul>
          <p>
            Attention, un abonnement souscrit sur les Applications ne peut être
            modifié seulement sur les Applications et inversement un abonnement
            souscrit sur l’Application Web ne peut être modifié que sur cette
            même application. Les fonctionnalités et droits auxquels
            l’Utilisateur a accès sont partagés par tous les Services.
          </p>
          <p>
            Si un Utilisateur résilie son abonnement, les conséquences sont
            détaillées en section 7.5.
          </p>
          <h3>
            <span>7.4 Remboursement</span>
          </h3>
          <p>
            Les paiements des abonnements ne sont pas remboursables et
            l’Exploitant n’accorde aucun remboursement ou crédit pour les
            périodes d'utilisation partielle.
          </p>
          <h3>
            <span>7.5 Conséquences de l’arrêt d’un abonnement</span>
          </h3>
          <p>
            La résiliation d’un abonnement ne vaut pas fermeture du Compte d’un
            Utilisateur mais la perte éventuelle de l’accès à certaines
            fonctionnalités que lui octroyait son abonnement que l’arrêt d’un
            abonnement résulte de sa résiliation par l’Utilisateur ou de
            l’annulation par l’Exploitant en cas d’impossibilité de paiement
          </p>
          <p>
            Le Compte de l’Utilisateur sera automatiquement basculé vers la
            formule de base gratuite. Lors de cette opération l’Utilisateur peut
            perdre accès à certaines fonctionnalités que lui octroyait son
            abonnement. De plus, si les quotas du forfait gratuit ne sont pas
            respectés (par exemple un Utilisateur a trop d’EPI ou trop de parcs
            mais pas seulement) alors le compte de l’Utilisateur sera bloqué et
            passera en lecture seule. L’Utilisateur ne pourra alors plus
            effectuer de modifications du registre EPI, mais il pourra encore
            consulter la liste des EPI, la fiche de vie d’un EPI, la liste des
            contrôles et exporter son registre.
          </p>
          <p>
            Pour pouvoir à nouveau utiliser nos Services pleinement,
            l’Utilisateur devra :
          </p>
          <ul>
            <li>
              souscrire à un nouvel abonnement suffisant pour respecter les
              quotas ;
            </li>
            <li>
              contacter le support afin de supprimer des données pour que les
              quotas soient à nouveau respectés.
            </li>
          </ul>
          <h2>Article 8 - Modification des tarifs</h2>
          <p>
            Les fonctionnalités des Services qui sont gratuites aujourd’hui le
            resteront. En revanche, certaines nouvelles fonctionnalités
            pourraient être disponibles seulement dans certains abonnements
            payants.
          </p>
          <p>
            L’Exploitant se réserve le droit de faire évoluer les quotas sur les
            nombres d’EPI, de parcs EPI et d’utilisateurs/parcs ; voire
            d’ajouter de nouveaux quotas. L’Utilisateur sera notifié avant toute
            modification dans un délai raisonnable de l’évolution des quotas
            actuels de son compte.
          </p>
          <p>
            L’Exploitant peut se réserver le droit, à tout moment, de modifier
            les abonnements ainsi que leurs prix. L’Exploitant informera les
            Utilisateurs au moins un mois avant la prise d'effet de toute
            modification de tarification ou des abonnements des Utilisateurs.
            Toute modification de tarif ou d’abonnement sera effective à la fin
            du cycle de facturation actuel.
          </p>
          <p>
            Sans décision de la part de l’Utilisateur, l’abonnement sera
            reconduit à la fin du cycle de facturation avec le nouveau tarif en
            vigueur. Si l’Utilisateur ne souhaite pas accepter la modification
            de tarification ou de l’abonnement, il peut annuler son abonnement
            avant la prise d'effet de ces modifications.
          </p>
          <h2>Article 9 - Suppression d’un Compte</h2>
          <p>
            L’Exploitant se réserve le droit de suspendre ou de supprimer le
            Compte d’un Utilisateur, immédiatement, en cas de non respect des
            présentes CGU.
          </p>
          <p>
            L’Utilisateur peut choisir, à n’importe quel moment, de supprimer
            son compte depuis l’onglet “Gestion” dans “Mon Compte”. Dès
            confirmation de la part de l’Utilisateur, il va perdre immédiatement
            l’accès à son Compte. Toutes les données liées à son compte
            (informations personnelles, informations des parcs EPI, liste des
            EPI, liste des contrôles) vont être supprimées et cette opération
            est irréversible. L’Exploitant ne garde pas de copies.
          </p>
          <p>
            Il est conseillé de procéder à cette opération avec prudence et
            d’exporter son ou ses registres EPI avant de supprimer son Compte.
          </p>
          <h2>Article 10 - Évolution et durée des CGU</h2>
          <p>
            Les présentes CGU sont conclues pour une durée indéterminée. Le
            contrat produit ses effets à l'égard de l'Utilisateur à compter du
            début de l’utilisation du service.
          </p>
          <p>
            L’Exploitant se réserve la possibilité de modifier, à tout moment,
            en tout ou partie des CGU. Les Utilisateurs sont invités à consulter
            régulièrement les présentes CGU afin de prendre connaissance de
            changements éventuels effectués.
          </p>

          <p>
            Si une partie des CGU devait s'avérer illégale, invalide ou
            inapplicable, pour quelque raison que ce soit, les dispositions en
            question seraient réputées non écrites, sans remettre en cause la
            validité des autres dispositions qui continueront de s'appliquer
            entre les Utilisateurs et l’Exploitant.
          </p>
          <h2>Article 11 - Litiges / Médiation à la consommation</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de
            difficultés dans l’application des présentes CGU, l’Utilisateur
            s’adressera en priorité à l’Exploitant en vue de rechercher une
            solution amiable avant tout contentieux devant les juridictions
            compétentes (l’Utilisateur adressera une réclamation écrite auprès
            du professionnel).
          </p>

          <p>
            En cas de litige entre l'Utilisateur et l’Exploitant, ceux-ci
            s’efforceront de le résoudre à l’amiable (l'Utilisateur adressera
            une réclamation écrite auprès de l’Exploitant). À défaut d’accord
            amiable ou en l’absence de réponse de l’Exploitant dans un délai
            raisonnable d’un (1) mois, l'Utilisateur consommateur au sens de
            l’article L.133-4 du code de la consommation a la possibilité de
            saisir gratuitement, si un désaccord subsiste, le médiateur
            compétent inscrit sur la liste des médiateurs établie par la
            Commission d’évaluation et de contrôle de la médiation de la
            consommation en application de l’article L.615-1 du code de la
            consommation, à savoir :
          </p>
          <p>La Société Médiation Professionnelle</p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="http://www.mediateur-consommation-smp.fr"
            >
              www.mediateur-consommation-smp.fr
            </a>
          </p>
          <p>Alteritae 5 rue Salvaing 12000 Rodez</p>
          <h2>Article 12 - Avis et retours</h2>
          <p>
            Nous accueillons les retours, les suggestions d’améliorations et les
            idées de fonctionnalités de la part des Utilisateurs avec plaisir.
            Les Utilisateurs peuvent pour cela utiliser la roadmap disponible
            ici ou bien adresser un e-mail au support à{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="mailto:support@epitranquille.com"
            >
              support@epitranquille.com
            </a>
            .
          </p>
          <p>
            L’Utilisateur déclare être informé et accepte que la soumission d’un
            retour, d’une suggestion d’amélioration ou d’une idée de
            fonctionnalité ne donne pas de droits sur l’obligation d’implémenter
            un changement dans nos Services ni l’accès à d’éventuelles nouvelles
            fonctionnalités.
          </p>
        </div>
      </Container>
    </section>
  )
}
