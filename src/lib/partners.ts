import logo_snapec from '@/images/logos/logo_snapec.png'
import logo_snpsc from '@/images/logos/logo_snpsc.jpeg'

export interface Partner {
  name: string
  role: string
  logo: typeof logo_snapec
  href: string
  external: boolean
}

export const partners: Partner[] = [
  {
    name: 'SNAPEC',
    role: "Syndicat NAtional des Professionnels de l'Escalade et du Canyoning",
    logo: logo_snapec,
    href: '/snapec',
    external: false,
  },
  // Partenariat SNPSC masqué temporairement : pas encore finalisé.
  // Décommenter pour le réafficher (partout où `partners` est utilisé).
  // {
  //   name: 'SNPSC',
  //   role: 'Syndicat National des Professionnels de la Spéléologie et du Canyonisme',
  //   logo: logo_snpsc,
  //   href: 'https://www.syndicat-speleo-canyon.org',
  //   external: true,
  // },
]
