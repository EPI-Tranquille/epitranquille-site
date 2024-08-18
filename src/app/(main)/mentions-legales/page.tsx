import { Container } from '@/components/Container'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales',
}

export default function MentionsLegales() {
  return (
    <section
      // id="secondary-features"
      // aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <h1 className="text-center text-3xl font-medium tracking-tight text-gray-900">
          Mentions légales
        </h1>
        <div className="custom-typography">
          <p className="text-center text-sm">En vigueur au 10/09/2024</p>
          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l'économie numérique, il est porté à la
            connaissance des utilisateurs et visiteurs, ci-après l’
            “Utilisateur" des services suivants :
          </p>
          <ul>
            <li>
              le site disponible à l’url <Link href="/">epitranquille.com</Link>
              , ci-après le “Site”
            </li>
            <li>
              l’application web disponible à l’url{' '}
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://app.epitranquille.com"
              >
                app.epitranquille.com
              </a>{' '}
              et l’application mobile “EPI Tranquille” disponible sur le Play
              Store et l’Apple Store ci-après l’ “Application”
            </li>
          </ul>
          <p>les présentes mentions légales.</p>
          <p>
            La navigation sur le Site ou l’Application par l’Utilisateur
            implique acceptation intégrale et sans réserve des présentes
            mentions légales.
          </p>
          <p>
            La version actuellement en ligne de ces mentions légales est la
            seule opposable pendant toute la durée d'utilisation du site et
            jusqu'à ce qu'une nouvelle version la remplace.
          </p>
          <p>
            Ces dernières sont accessibles sur le Site et l’Application sous le
            nom&nbsp; "Mentions légales".
          </p>
          <h2>Article 1 - Mentions légales</h2>
          <h3>
            <span>1.1 Éditeur (ci-après « l'Éditeur »)</span>
          </h3>
          <p>
            L’édition, la direction et la publication du présent Site est
            assurée par l’entreprise individuelle Samuel Girardin, domiciliée 11
            rue fondère 13004 Marseille et immatriculée au RCS de Marseille
            822551941, dont le numéro de téléphone est 0752673234, et l'adresse
            e-mail{' '}
            <a
              rel="noopener noreferrer nofollow"
              href="mailto:contact@epitranquille.com"
            >
              <span>contact@epitranquille.com</span>
            </a>
            .
          </p>
          <h3>
            <span>1.2 Hébergeur (ci-après « l'hébergeur »)</span>
          </h3>
          <p>
            Le Site est hébergé par la société Vercel Inc., située 340 S Lemon
            Ave #4133 Walnut, CA 91789, et joignable au (559) 288-7060.
          </p>
          <p>
            L’ Application (serveur API et version web) est hébergée en France
            par la société OVH SAS, située 2 rue Kellermann - BP 80157 - 59053
            Roubaix Cedex 1, (contact téléphonique ou email : 1007).
          </p>
          <h2>Article 2 - Accès au site</h2>
          <p>
            L'accès au site et son utilisation sont réservés à un usage
            strictement personnel. Vous vous engagez à ne pas utiliser ce site
            et les informations ou données qui y figurent à des fins
            commerciales, politiques, publicitaires et pour toute forme de
            sollicitation commerciale et notamment l'envoi de courriers
            électroniques non sollicités.
          </p>
          <h2>Article 3 - Contenu du Site et de l’Application</h2>
          <p>
            Toutes les marques, photographies, textes, commentaires,
            illustrations, images animées ou non, séquences vidéo, sons, et plus
            généralement tous les éléments reproduits ou utilisés sur le Site (à
            l’exception des éventuelles photographies, noms, marques
            d’Équipements de Protection Individuelle qui pourraient apparaître
            dans les visuels) sont protégés par les lois en vigueur au titre de
            la propriété intellectuelle.
          </p>
          <p>
            Ils sont la propriété pleine et entière de l'Éditeur (à l’exception
            des éventuelles photographies, noms, marques d’Équipements de
            Protection Individuelle qui pourraient apparaître dans les visuels)
            ou de ses partenaires. Toute reproduction, représentation,
            utilisation ou adaptation, sous quelque forme que ce soit, de tout
            ou partie de ces éléments, y compris les applications informatiques,
            sans l'accord préalable et écrit de l'Éditeur, sont strictement
            interdites. Le fait pour l'Éditeur de ne pas engager de procédure
            dès la prise de connaissance de ces utilisations non autorisées ne
            vaut pas acceptation desdites utilisations et renonciation aux
            poursuites.
          </p>
          <p>
            Si vous pensez que du contenu sur le Site ou l’Application viole vos
            droits d’auteur ou la propriété intellectuelle, vous pouvez le
            signaler à l'adresse suivante :{' '}
            <a
              rel="noopener noreferrer nofollow"
              href="mailto:contact@epitranquille.com"
            >
              contact@epitranquille.com
            </a>
            .
          </p>
          <h2>Article 4 - Base de données d’EPI</h2>
          <p>
            L’ Application contient une base de données non exhaustive des EPI
            (Équipements de Protection Individuelle) permettant de faciliter la
            saisie d’EPI. Cette base de données a été indexée par l’Éditeur et
            contient des informations et des photographies de produits
            appartenant à des fabricants d’EPI. Ces informations ne sont en
            aucun cas la propriété de l’Éditeur. Ces informations et
            photographies sont la propriété intellectuelle des fabricants et
            sont protégées par les lois en vigueur au titre de la propriété
            intellectuelle.
          </p>
          <p>
            Nous ne pouvons garantir que ces données sont exactes, complètes et
            à jour. Il est de la responsabilité de l’Utilisateur de s’assurer
            que ces données sont correctes lors de leur utilisation dans
            l’Application. L’Éditeur ne pourrait être tenu responsable de
            l’utilisation de ces données par l’Utilisateur.
          </p>
          <h2>Article 5 - Gestion du Site et de l’Application</h2>
          <h3>
            <span>4.1 Gestion du Site</span>
          </h3>
          <p>Pour la bonne gestion du site, l'Éditeur pourra à tout moment :</p>
          <ul>
            <li>
              <p>
                suspendre, interrompre ou limiter l'accès à tout ou partie du
                site, réserver l'accès au site, ou à certaines parties du site,
                à une catégorie déterminée d'internautes ;
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                supprimer toute information pouvant en perturber le
                fonctionnement ou entrant en contravention avec les lois
                nationales ou internationales ;
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>suspendre le site afin de procéder à des mises à jour.</p>
            </li>
          </ul>
          <p>
            L'Éditeur ne pourra en aucun cas être tenu responsable des
            conséquences éventuelles de cette indisponibilité sur les activités
            de l'Utilisateur. Néanmoins il s’efforcera de communiquer
            préalablement aux utilisateurs les dates et heures des interventions
            prévues.
          </p>
          <h3>
            <span>4.1 Gestion de l’Application</span>
          </h3>
          <p>
            Pour la bonne gestion de l’Application, l'Éditeur pourra à tout
            moment suspendre l’Application - pendant un délai raisonnable - afin
            de procéder à des mises à jour ou à des correctifs.
          </p>
          <p>
            Il s’efforcera bien sûr de communiquer préalablement aux
            utilisateurs les dates et heures des interventions prévues si elles
            durent plus d’une heure.
          </p>
          <p>
            L'Éditeur ne pourra en aucun cas être tenu responsable des
            conséquences éventuelles de cette indisponibilité sur les activités
            de l'Utilisateur.
          </p>
          <h2>Article 6 - Limitation de responsabilité</h2>
          <p>
            La responsabilité de l'Éditeur ne peut être engagée en cas de
            défaillance, panne, difficulté ou interruption de fonctionnement,
            empêchant l'accès au Site ou à l’Application.
          </p>
          <p>
            Le matériel de connexion au site que vous utilisez est sous votre
            entière responsabilité. Vous devez prendre toutes les mesures
            appropriées pour protéger votre matériel et vos propres données
            notamment d'attaques virales par Internet. Vous êtes par ailleurs
            seul responsable des sites et données que vous consultez.
          </p>
          <p>
            L'Éditeur ne pourra être tenu responsable en cas de poursuites
            judiciaires à votre encontre :
          </p>
          <p>
            -&nbsp; du fait de l'usage du Site, de l’Application ou de tout
            service accessible via Internet ;
          </p>
          <p>
            -&nbsp; du fait du non-respect par vous des présentes mentions
            légales.
          </p>
          <p>
            L'Éditeur n'est pas responsable des dommages causés à vous-même, à
            des tiers et/ou à votre équipement du fait de votre connexion ou de
            votre utilisation du Site ou de l’Application et vous renoncez à
            toute action contre lui de ce fait.
          </p>
          <p>
            Si l'Éditeur venait à faire l'objet d'une procédure amiable ou
            judiciaire en raison de votre utilisation du Site ou de
            l’Application, il pourra se retourner contre vous pour obtenir
            l'indemnisation de tous les préjudices, sommes, condamnations et
            frais qui pourraient découler de cette procédure.
          </p>
          <p>
            L’Éditeur ne garantit pas l'exactitude, la fiabilité ou
            l'exhaustivité des informations fournies dans l'Application et
            décline toute responsabilité en cas d'erreurs ou d'omissions.
          </p>
          <h2>Article 7 - Liens hypertextes</h2>
          <p>
            La mise en place par les utilisateurs de tous liens hypertextes vers
            tout ou partie du Site est autorisée par l'Éditeur. Tout lien devra
            être retiré sur simple demande de l'Éditeur.&nbsp;
          </p>
          <p>
            Toute information accessible via un lien vers d'autres sites n'est
            pas publiée par l'Éditeur. L'Éditeur ne dispose d'aucun droit sur le
            contenu présent dans ledit lien.&nbsp;
          </p>
          <h2>Article 8 - Collecte et protection des données</h2>
          <p>
            Pour en savoir plus sur les modalités de traitement des données
            personnelles, consultez notre{' '}
            <Link href="/politique-confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
          <h2>Article 9 - Conditions générales d’utilisation</h2>
          <p>
            Les conditions générales d’utilisation de l’Application sont
            consultables ici.
          </p>
          <h2>Article 10 - Conditions générales de vente</h2>
          <p>
            Les conditions générales de vente de l’Application à destination des
            Particuliers sont disponibles ici.
          </p>
          <h2>Contactez-nous</h2>
          <p>
            Pour toute question, information sur les services présentés sur le
            Site ou l’Application, ou concernant le Site lui-même, vous pouvez
            nous contacter à l'adresse suivante :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="mailto:contact@epitranquille.com"
            >
              contact@epitranquille.com
            </a>
            .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p>&nbsp;</p>
          <p>
            Ces mentions légales sont basées sur un modèle disponible sur le
            site Rocket Lawyer.
          </p>
        </div>
      </Container>
    </section>
  )
}
