import { Container } from '@/components/Container'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
}

export default function PolitiqueCookies() {
  return (
    <section
      // id="secondary-features"
      // aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <h1 className="text-center text-3xl font-medium tracking-tight text-gray-900">
          Politique de gestion des cookies
        </h1>
        <div className="custom-typography">
          <p className="text-center text-sm">En vigueur au 10/09/2024</p>
          <p>
            Lors de l’utilisation de nos services des cookies (ou autres
            traceurs) sont déposés ou lus sur l’appareil que vous utilisez
            (ordinateur, mobile tablette). Ce document va expliciter quels sont
            ces cookies et comment sont-ils utilisés. Nous vous expliquerons
            aussi quels sont vos droits relatifs à l’utilisation de ces cookies
            sur vos appareils.
          </p>
          <h2>Services concernés</h2>
          <p>
            La politique de gestion des cookies s’applique à l’ensemble des
            services fournis par EPI Tranquille à savoir :
          </p>
          <ul>
            <li>
              <p>
                le site disponible à l’url{' '}
                <Link href="/">epitranquille.com</Link>, ci-après le “Site”
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                l’application web disponible à l’url{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://app.epitranquille.com"
                >
                  app.epitranquille.com
                </a>{' '}
                et l’application mobile “EPI Tranquille” disponible sur le Play
                Store et l’Apple Store, ci-après l’ “Application”
              </p>
            </li>
          </ul>
          <p>
            Sauf mention explicite contraire, les sections ci-dessous
            s’appliquent au Site et à l’Application.
          </p>
          <p></p>
          <p>
            La présente politique des gestion des cookies est faite conformément
            aux dispositions de la Loi n°78-17 du 6 janvier 1978 (dite « Loi
            informatique et libertés » ou « LIL ») et du Règlement Général sur
            la protection des Données Personnelles (« RGDP ») n°2016/679.
          </p>
          <h2>Qu’est-ce qu’un « cookie » ?</h2>
          <p>
            Un « cookie 🍪 » ou traceur est un fichier électronique déposé sur
            un terminal (ordinateur, tablette, smartphone,…) et lu par exemple
            lors de la consultation d'un site internet, de la lecture d'un
            courrier électronique, de l'installation ou de l'utilisation d'un
            logiciel ou d'une application mobile et ce, quel que soit le type de
            terminal utilisé (source :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
            >
              https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi
            </a>
            ).
          </p>
          <p>
            Un cookie peut collecter différentes données personnelles à votre
            sujet comme par exemple, l’adresse IP de votre ordinateur, le
            navigateur utilisé, la date et l’heure de connexion, les pages
            visités sur le site, etc.
          </p>
          <p>
            Le Site ou l’Application peut collecter automatiquement des
            informations standards. Toutes les informations collectées
            indirectement ne seront utilisées que pour suivre le volume, le type
            et la configuration du trafic sur le Site ou l’Application, pour en
            développer la conception et l'agencement et à d'autres fins
            administratives et de planification et plus généralement pour
            améliorer le service que nous vous offrons.
          </p>
          <p>
            Le cas échéant, des « cookies » émanant de l'éditeur du site et/ou
            des sociétés tiers pourront être déposés sur votre terminal, avec
            votre accord. Dans ce cas, lors de la première navigation sur ce
            site, une bannière explicative sur l’utilisation des « cookies »
            apparaîtra. Avant de poursuivre la navigation, le client et/ou le
            prospect devra accepter ou refuser l’utilisation desdits « cookies
            ». Le consentement donné sera valable pour une période de treize
            (13) mois. L'utilisateur a la possibilité de désactiver les cookies
            à tout moment.
          </p>
          <h2>Quels cookies sont utilisés sur nos Site et Application ?</h2>
          <p>Nous utilisons les cookies suivants :</p>
          <ul>
            <li>
              <p>
                Cookies fonctionnels : ils nous permettent d'améliorer le
                fonctionnement du site internet et de le rendre plus convivial
                pour le visiteur.
              </p>
            </li>
            <li>
              <p>
                Cookies de mesure d'audience : ils garantissent qu'un cookie
                anonyme est généré à chaque fois que vous visitez un site
                internet. Ces cookies permettent de savoir si vous avez déjà
                visité le site auparavant ou non. Ce n'est que lors de la
                première visite qu’un cookie est créé. Lors des visites
                suivantes, l'utilisation du cookie déjà existant est
                automatique. Ce cookie n'est utilisé qu'à des fins statistiques.
                De cette façon, les données suivantes peuvent être collectées
                :&nbsp;
              </p>
              <ul>
                <li>
                  <p>le nombre de visiteurs uniques</p>
                </li>
                <li>
                  <p>
                    la fréquence à laquelle les utilisateurs visitent le site
                  </p>
                </li>
                <li>
                  <p>quelles pages les visiteurs consultent</p>
                </li>
                <li>
                  <p>
                    combien de temps les utilisateurs consultent une page
                    particulière
                  </p>
                </li>
                <li>
                  <p>
                    la page à partir de laquelle les visiteurs quittent le site
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <p>Liste des cookies utilisés :&nbsp;</p>
          <ul>
            <li>
              <p>ProductHog : permet de faire du suivi d'audiences….</p>
            </li>
          </ul>
          <p>La durée de vie de ces cookies est de treize mois.</p>
          <h2>Consentement&nbsp;</h2>
          <p>
            Votre consentement est requis pour l'utilisation de certains
            cookies. Nous le recueillons au moyen d'une bannière informative
            présente sur le Site et l’Application.
          </p>
          <h2>Vos droits à l'égard de vos données personnelles</h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification, de limitation et
            de suppression de vos données personnelles. En outre, vous avez le
            droit de vous opposer au traitement des données personnelles et le
            droit à la transférabilité de vos données. Vous pouvez exercer ces
            droits en nous envoyant un mail à l'adresse suivante{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="mailto:data@epitranquille.com"
            >
              data@epitranquille.com
            </a>
            . Afin de prévenir les abus, nous pouvons vous demander de vous
            identifier sur notre site. Lorsqu'il s'agit d'accéder à des données
            personnelles liées à un cookie, nous vous demandons de nous envoyer
            une copie du cookie en question. Vous pouvez les trouver dans les
            paramètres de votre navigateur.
          </p>
          <p>
            Vous trouverez plus d’informations sur notre politique de gestion
            des données personnelles ici.
          </p>
          <h2>Blocage et suppression des cookies</h2>
          <p>
            Vous pouvez facilement bloquer et supprimer vous-même les cookies à
            tout moment par votre navigateur Internet. Vous pouvez également
            configurer votre navigateur Internet de manière à recevoir un
            message lorsqu'un cookie est installé. Vous pouvez également
            indiquer que certains cookies ne peuvent pas être installés. Pour
            cela, veuillez consulter la fonction d'aide de votre navigateur. Si
            vous supprimez les cookies de votre navigateur, cela peut le cas
            échéant avoir des conséquences sur l'utilisation de notre site
            internet (notamment le besoin de se ré-authentifier, la perte de
            certaines préférences de navigation, la perte du thème choisi).
          </p>
          <p>
            &nbsp;Les étapes à suivre pour ajuster vos paramètres varient d'un
            navigateur à un autre. Si nécessaire, consultez la fonction d'aide
            de votre navigateur, ou rendez-vous sur l’un des liens ci-dessous
            pour accéder directement au manuel de votre navigateur.
          </p>
          <p>
            Firefox :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information"
            >
              https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information
            </a>
          </p>
          <p>
            Google Chrome :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&amp;hl=fr"
            >
              https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&amp;hl=fr
            </a>
          </p>
          <p>
            Internet Explorer :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://support.microsoft.com/fr-fr/help/278835/how-to-delete-cookie-files-in-internet-explorer"
            >
              https://support.microsoft.com/fr-fr/help/278835/how-to-delete-cookie-files-in-internet-explorer
            </a>
          </p>
          <p>
            Safari :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://support.apple.com/kb/ph21411?locale=fr_FR"
            >
              https://support.apple.com/kb/ph21411?locale=fr_FR
            </a>
          </p>
          <h2>Remarques</h2>
          <p>
            Nous devrons mettre à jour cette politique d'utilisation des cookies
            régulièrement par exemple lorsque nous modifions notre site Web ou
            les règles le concernant. Nous vous prions de consulter cette page
            pour prendre connaissance de la dernière version de notre politique
            d'utilisation des cookies.
          </p>
          <p>
            Si vous avez des questions et/ou des commentaires, veuillez nous
            contacter à l'adresse e-mail suivante :{' '}
            <a
              rel="noopener noreferrer nofollow"
              href="mailto:data@epitranquille.com"
            >
              data@epitranquille.com
            </a>
          </p>
          <p>
            Ce document a été rédigé sur la base d’un modèle disponible sur le
            site Rocket Lawyer.
          </p>
        </div>
      </Container>
    </section>
  )
}
