'use client'

export default function Corretora() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green uppercase tracking-[0.3em] text-xs font-medium mb-4">Quem te atende</p>
          <h2 className="section-title">Nossa Corretora</h2>
          <div className="green-divider"></div>
        </div>

        <div className="border border-green/20 bg-white flex flex-col md:flex-row overflow-hidden shadow-sm">
          {/* Foto */}
          <div className="md:w-72 flex-shrink-0">
            <img
              src="/corretora.jpg"
              alt="Indiamara S. Domingues"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: '320px' }}
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
              }}
            />
          </div>

          {/* Info */}
          <div className="p-10 flex flex-col justify-center">
            <h3 className="font-heading text-3xl text-gray-800 mb-2">Indiamara S. Domingues</h3>
            <p className="text-green text-sm uppercase tracking-widest mb-6">Corretora de Imóveis Rurais</p>

            <div className="flex gap-4 mb-6">
              <span className="border border-green/40 text-green text-xs px-3 py-1.5 uppercase tracking-wider">
                CRECI-PR 42131
              </span>
              <span className="border border-green/40 text-green text-xs px-3 py-1.5 uppercase tracking-wider">
                CNAI.47729
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg">
              Especialista em imóveis rurais no Paraná com vasta experiência em compra, venda e arrendamento de fazendas, chácaras e sítios. Atendimento personalizado, transparente e seguro do início ao fim da negociação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5542988088285?text=Olá%20Indiamara,%20vim%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20imóveis%20rurais."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green text-center"
              >
                Falar com a Indiamara
              </a>
              <a
                href="mailto:contato@agroruralimoveis.com"
                className="btn-outline-green text-center"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
