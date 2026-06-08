export default function SobreNos() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/fazenda-sede.png"
                alt="Fazenda no Paraná"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green p-6 hidden lg:block">
              <p className="text-white font-heading text-4xl font-bold">10+</p>
              <p className="text-white/90 text-sm font-semibold uppercase tracking-wider">Anos de<br />Experiência</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-green uppercase tracking-[0.3em] text-xs font-medium mb-4">Quem somos</p>
            <h2 className="section-title text-left mb-4">
              Especialistas em imóveis rurais no Paraná
            </h2>
            <div className="w-16 h-0.5 bg-green mb-8"></div>
            <p className="text-gray-600 leading-relaxed mb-6">
              A Agro Rural Imóveis nasceu da paixão pelo campo e pela missão de conectar pessoas às melhores oportunidades de imóveis rurais no Paraná. Com registro CRECI-PR 42131 e CNAI.47729, oferecemos corretagem especializada com segurança jurídica e transparência.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Atuamos em toda a extensão do Paraná — das grandes fazendas produtivas às chácaras de lazer. Cada cliente recebe atendimento personalizado e acompanhamento em todas as etapas da negociação.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-green/20 pt-8">
              {[
                { n: '200+', l: 'Imóveis negociados' },
                { n: '100%', l: 'Paraná atendido' },
                { n: '10+', l: 'Anos no mercado' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-heading text-2xl text-green font-bold">{s.n}</p>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
