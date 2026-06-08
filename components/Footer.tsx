import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gold/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + desc */}
          <div className="md:col-span-2">
            <Image src="/logo.png" alt="Agro Rural Imóveis" width={180} height={70} className="h-14 w-auto mb-4" unoptimized />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Especialistas em imóveis rurais no Paraná. Fazendas, chácaras, sítios e propriedades rurais para compra, venda e arrendamento.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs text-gold/60 border border-gold/20 px-2 py-1">CRECI-PR 42131</span>
              <span className="text-xs text-gold/60 border border-gold/20 px-2 py-1">CNAI.47729</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Início' },
                { href: '/servicos', label: 'Serviços' },
                { href: '/propriedades', label: 'Propriedades' },
                { href: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-gold text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="https://wa.me/5542988088285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-200 flex items-center gap-2"
                >
                  <span>📱</span> (42) 98808-8285
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> Paraná, Brasil
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span> Seg–Sáb: 8h às 18h
              </li>
            </ul>
            <a
              href="https://wa.me/5542988088285?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-gold text-xs inline-block"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Agro Rural Imóveis. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Desenvolvido por <span className="text-gold/60">TauriTech</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
