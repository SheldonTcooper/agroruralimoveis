const items = [
  { icon: '🌾', title: 'Fazendas', desc: 'Propriedades produtivas para agricultura e pecuária em todo o Paraná.' },
  { icon: '🌿', title: 'Chácaras e Sítios', desc: 'Imóveis rurais para lazer, moradia e produção familiar.' },
  { icon: '🏡', title: 'Casas Rurais', desc: 'Residências em zona rural com toda a tranquilidade do campo.' },
  { icon: '📋', title: 'Arrendamentos', desc: 'Intermediação de contratos de arrendamento rural com segurança jurídica.' },
  { icon: '🤝', title: 'Compra e Venda', desc: 'Assessoria completa em transações de imóveis rurais e urbanos.' },
  { icon: '📊', title: 'Avaliações', desc: 'Laudos e avaliações de imóveis rurais para financiamentos e partilhas.' },
]

export default function Especializacoes() {
  return (
    <section id="servicos" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green uppercase tracking-[0.3em] text-xs font-medium mb-4">O que fazemos</p>
          <h2 className="section-title">Somos especializados em</h2>
          <div className="green-divider"></div>
          <p className="section-subtitle">
            Atendimento completo para quem compra, vende ou arrenda imóveis rurais no Paraná.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="card-light group">
              <h3 className="text-green font-heading text-xl font-semibold mb-3">{item.title}</h3>
              <div className="w-8 h-px bg-green/40 mb-4"></div>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
