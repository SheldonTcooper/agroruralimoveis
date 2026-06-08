const passos = [
  {
    numero: '01',
    titulo: 'Entre em Contato',
    desc: 'Fale conosco pelo WhatsApp ou formulário. Conte o que busca ou o que quer vender. Sem compromisso.',
  },
  {
    numero: '02',
    titulo: 'Consultoria Especializada',
    desc: 'Nossa equipe apresenta as melhores opções para o seu perfil, com análise de documentação e localização.',
  },
  {
    numero: '03',
    titulo: 'Negócio Fechado',
    desc: 'Acompanhamos todo o processo até a assinatura do contrato. Segurança jurídica do início ao fim.',
  },
]

export default function ComoFunciona() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green uppercase tracking-[0.3em] text-xs font-medium mb-4">Simples assim</p>
          <h2 className="section-title">Como funciona</h2>
          <div className="green-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-green/30 z-0"></div>

          {passos.map((passo, i) => (
            <div key={passo.numero} className="relative z-10 text-center px-8 py-10">
              <div className="w-24 h-24 border border-green/40 mx-auto flex items-center justify-center mb-6 relative">
                <span className="font-heading text-4xl text-green font-bold">{passo.numero}</span>
                {i < passos.length - 1 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-green/40 text-2xl">→</div>
                )}
              </div>
              <h3 className="text-gray-800 font-heading text-xl font-semibold mb-3">{passo.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{passo.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5542988088285?text=Olá,%20quero%20conhecer%20imóveis%20rurais%20no%20Paraná."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-block"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
