'use client'
import Link from 'next/link'

export default function Header() {
  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#propriedades', label: 'Propriedades' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-white font-bold text-lg tracking-wide drop-shadow-lg">
          Agro Rural Imóveis
        </Link>
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest font-medium drop-shadow-lg">
                {link.label}
              </Link>
            ))}
          </div>
          <a href="https://wa.me/5542988088285" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs drop-shadow-lg">
            Falar no WhatsApp
          </a>
        </div>
      </nav>
    </header>
  )
}