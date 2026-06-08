import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Agro Rural Imóveis | Imóveis Rurais no Paraná',
  description: 'Especialistas em fazendas, chácaras, sítios e imóveis rurais no Paraná. Compra, venda e arrendamento com segurança. CRECI-PR 42131 | CNAI.47729',
  keywords: 'imóveis rurais paraná, fazendas à venda paraná, chácaras paraná, sítios paraná, imobiliária rural',
  openGraph: {
    title: 'Agro Rural Imóveis | Imóveis Rurais no Paraná',
    description: 'Especialistas em fazendas, chácaras e sítios no Paraná.',
    url: 'https://agroruralimoveis.com',
    siteName: 'Agro Rural Imóveis',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      <body className="pt-[280px]"></body>
    </html>
  )
}
