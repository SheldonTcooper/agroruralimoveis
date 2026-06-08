const diferenciais = [
  { icon: '🏆', title: 'Especialistas em Rural', desc: 'Foco exclusivo em imóveis rurais e agronegócio no Paraná. Conhecemos cada região.' },
  { icon: '🤝', title: 'Atendimento Direto', desc: 'Sem intermediários. Você fala diretamente com o corretor especializado.' },
  { icon: '📋', title: 'CRECI e CNAI Regularizados', desc: 'Corretagem segura, documentação em ordem. CRECI-PR 42131 | CNAI.47729.' },
  { icon: '🗺️', title: 'Todo o Paraná', desc: 'Atuamos em todas as regiões do estado, do litoral ao Oeste paranaense.' },
  { icon: '⚡', title: 'Negociação Ágil', desc: 'Processo transparente e objetivo. Sem burocracia desnecessária.' },
  { icon: '🔒', title: 'Segurança Jurídica', desc: 'Análise completa da documentação antes de qualquer negociação.' },
]

export default function PorQueEscolher() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green uppercase tracking-[0.3em] text-xs font-medium mb-4">Nossos diferenciais</p>
          <h2 className="section-title">Por que escolher a Agro Rural Imóveis?</h2>
          <div className="green-divider"></div>
          <p className="section-subtitle">
            Mais de uma década conectando pessoas aos melhores imóveis rurais do Paraná.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item) => (
            <div key={item.title} className="card-light flex gap-4">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-green font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
