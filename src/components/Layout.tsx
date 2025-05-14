import { Header } from '@/components/Header'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
