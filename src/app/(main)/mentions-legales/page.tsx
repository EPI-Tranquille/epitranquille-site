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
          <p className="text-center text-sm">En vigueur au 15/09/2024</p>
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
                href="http://app.epitranquille.com"
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
            nom "Mentions légales".
          </p>
          <h2>Article 1 - Mentions légales</h2>
          <h3>1.1 Éditeur (ci-après « l'Éditeur »)</h3>
          <p>
            L’édition, la direction et la publication du présent Site est
            assurée par l’entreprise individuelle Samuel Girardin, domiciliée 11
            rue fondère 13004 Marseille et immatriculée au RNE sous le numéro
            822551941, dont le numéro de téléphone est 0752673234, et l'adresse
            e-mail{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="mailto:contact@epitranquille.com"
            >
              contact@epitranquille.com
            </a>
            .
          </p>
          <h3>1.2 Hébergeur (ci-après « l'hébergeur »)</h3>
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
          <ul>
            <p>
              du fait de l'usage du Site, de l’Application ou de tout service
              accessible via Internet ;
            </p>
            <li>
              du fait du non-respect par vous des présentes mentions légales.
            </li>
          </ul>
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
          <h2>Article 8 - Collecte et protection des données</h2>
          <p>
            Pour en savoir plus sur les modalités de traitement des données
            personnelles, consultez notre{' '}
            <Link href="/politique-confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
          <h2>
            Article 9 - Conditions générales d’utilisation de nos services
          </h2>
          <p>
            Les conditions générales d’utilisation de l’Application sont
            consultables <Link href="/cgu">ici</Link>.
          </p>
          <h2>Article 10 - Conditions générales de vente</h2>
          <p>
            Les conditions générales de vente de l’Application à destination des
            Particuliers seront bientôt disponibles.
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
            .
          </p>
          <p>&nbsp;</p>
          <p>
            Ces mentions légales sont basées sur un modèle disponible sur le
            site Rocket Lawyer.
          </p>{' '}
        </div>
      </Container>
    </section>
  )
}
