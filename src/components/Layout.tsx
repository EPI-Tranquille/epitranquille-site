import { Header } from '@/components/Header'
import { FooterDynamic as Footer } from '@/components/FooterDynamic'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
