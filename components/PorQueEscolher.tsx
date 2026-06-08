const diferenciais = [
  { title: 'Especialistas em Rural', desc: 'Foco exclusivo em imóveis rurais e agronegócio no Paraná. Conhecemos cada região.' },
  { title: 'Atendimento Direto', desc: 'Sem intermediários. Você fala diretamente com o corretor especializado.' },
  { title: 'CRECI e CNAI Regularizados', desc: 'Corretagem segura, documentação em ordem. CRECI-PR 42131 | CNAI.47729.' },
  { title: 'Todo o Paraná', desc: 'Atuamos em todas as regiões do estado, do litoral ao Oeste paranaense.' },
  { title: 'Negociação Ágil', desc: 'Processo transparente e objetivo. Sem burocracia desnecessária.' },
  { title: 'Segurança Jurídica', desc: 'Análise completa da documentação antes de qualquer negociação.' },
]

export default function PorQueEscolher() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4">Nossos diferenciais</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">Por que escolher a Agro Rural Imóveis?</h2>
          <div className="gold-divider"></div>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Mais de uma década conectando pessoas aos melhores imóveis rurais do Paraná.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item) => (
            <div key={item.title} className="card-dark p-8">
              <h3 className="text-gold font-heading text-xl font-semibold mb-3">{item.title}</h3>
              <div className="w-8 h-px bg-gold/40 mb-4"></div>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
