import clsx from 'clsx'

import { Container } from '@/components/Container'

// TODO: avis provisoires à remplacer par de vrais retours utilisateurs.
interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Un gain de temps énorme',
    body: "Je gérais mon registre sur Excel depuis des années, c'était devenu ingérable. Avec EPI Tranquille j'ai retrouvé tous mes EPI en une soirée et je ne reviendrai plus en arrière.",
    author: 'Julie, monitrice d’escalade indépendante',
    rating: 5,
  },
  {
    title: 'Enfin un outil pensé pour nous',
    body: "On sent que l'application a été conçue avec des pros de la montagne, pas juste un tableur générique. Les alertes de contrôle me font gagner un temps précieux avant chaque saison.",
    author: 'Marc, guide de haute montagne',
    rating: 5,
  },
  {
    title: 'Parfait pour notre club',
    body: "Plusieurs bénévoles gèrent le matériel, et pouvoir tous accéder au même registre EPI a changé notre organisation. L'import depuis notre ancien fichier Excel s'est fait sans accroc.",
    author: 'Sophie, salle d’escalade associative',
    rating: 5,
  },
  {
    title: 'Simple et efficace',
    body: "Ajouter un EPI prend quelques secondes, et l'export PDF est parfait pour mes contrôles. Exactement ce dont j'avais besoin pour mes sorties canyoning.",
    author: 'Thomas, moniteur de canyoning',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-primary' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function ReviewCard({ title, body, author, rating }: Review) {
  return (
    <figure className="rounded-3xl bg-white p-6 shadow-md shadow-gray-900/5">
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7 text-gray-700">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="border-t border-gray-200 bg-gray-50 pt-12 pb-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="reviews-title" className="section-title">
            Ils gèrent déjà leur parc EPI l'esprit tranquille
          </h2>
          <p className="section-subtitle">
            Moniteur·rices, guides et clubs utilisent EPI Tranquille au
            quotidien.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {reviews.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>
      </Container>
    </section>
  )
}
