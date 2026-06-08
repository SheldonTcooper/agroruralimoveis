'use client'
import Link from 'next/link'

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/propriedades', label: 'Propriedades' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <img
        src="/hero-banner.jpg"
        alt="Agro Rural Imóveis"
        className="w-full h-auto block"
      />
      
      {/* Nav Sobreposta */}
      <nav className="absolute top-6 right-6 flex items-center gap-6 md:gap-8">
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest font-medium drop-shadow-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
          href="https://wa.me/5542988088285"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xs drop-shadow-lg"
        >
          Falar no WhatsApp
        </a>
      </nav>
    </header>
  )
}