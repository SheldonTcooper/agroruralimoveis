const imoveis = [
  {
    id: 1,
    tipo: 'Fazenda',
    titulo: 'Fazenda Produtiva — Região de Guarapuava',
    area: '120 alqueires',
    local: 'Guarapuava, PR',
    preco: 'Consulte',
    img: '/fazenda-sede.png',
    destaque: 'Soja e milho',
  },
  {
    id: 2,
    tipo: 'Chácara',
    titulo: 'Chácara com Casa — Região de Ponta Grossa',
    area: '5 alqueires',
    local: 'Ponta Grossa, PR',
    preco: 'Consulte',
    img: '/chacara-piscina.png',
    destaque: 'Lazer e moradia',
  },
  {
    id: 3,
    tipo: 'Sítio',
    titulo: 'Sítio Estruturado — Região de Cascavel',
    area: '10 alqueires',
    local: 'Cascavel, PR',
    preco: 'Consulte',
    img: '/sitio-horta.png',
    destaque: 'Fruticultura',
  },
]

export default function DestaquesImoveis() {
  return (
    <section id="propriedades" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green uppercase tracking-[0.3em] text-xs font-medium mb-4">Selecionados para você</p>
          <h2 className="section-title">Imóveis em Destaque</h2>
          <div className="green-divider"></div>
          <p className="section-subtitle">
            Propriedades selecionadas com documentação verificada e localização estratégica no Paraná.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {imoveis.map((imovel) => (
            <div key={imovel.id} className="bg-white border border-green/20 overflow-hidden group hover:border-green/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={imovel.img}
                  alt={imovel.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {imovel.tipo}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-green text-xs px-3 py-1 border border-green/30">
                    {imovel.destaque}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-800 font-heading text-lg mb-3 leading-snug">{imovel.titulo}</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>📍 {imovel.local}</span>
                  <span>📐 {imovel.area}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-green/10">
                  <span className="text-green font-semibold">{imovel.preco}</span>
                  <a
                    href={`https://wa.me/5542988088285?text=Olá,%20tenho%20interesse%20no%20imóvel:%20${encodeURIComponent(imovel.titulo)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green border border-green/40 px-4 py-2 hover:bg-green hover:text-white transition-all duration-200 uppercase tracking-wider"
                  >
                    Tenho Interesse
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/5542988088285?text=Olá,%20gostaria%20de%20ver%20mais%20propriedades%20disponíveis." target="_blank" rel="noopener noreferrer" className="btn-outline-green inline-block">
            Ver Todas as Propriedades
          </a>
        </div>
      </div>
    </section>
  )
}
