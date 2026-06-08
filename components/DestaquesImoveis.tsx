'use client'
import { useState } from 'react'

const imoveis = [
  {
    id: 1,
    tipo: 'Fazenda',
    titulo: 'Fazenda Produtiva',
    area: '120 alqueires',
    local: 'Guarapuava, PR',
    img: '/fazenda-sede.png',
    destaque: 'Pecuária e soja',
  },
  {
    id: 2,
    tipo: 'Chácara',
    titulo: 'Chácara com Casa',
    area: '5 alqueires',
    local: 'Ponta Grossa, PR',
    img: '/chacara-piscina.png',
    destaque: 'Lazer e moradia',
  },
  {
    id: 3,
    tipo: 'Sítio',
    titulo: 'Sítio Familiar',
    area: '8 alqueires',
    local: 'Cascavel, PR',
    img: '/sitio-horta.png',
    destaque: 'Fruticultura',
  },
  {
    id: 4,
    tipo: 'Fazenda',
    titulo: 'Fazenda Estruturada',
    area: '200 alqueires',
    local: 'Londrina, PR',
    img: '/fazenda-silos.png',
    destaque: 'Grãos e silos',
  },
  {
    id: 5,
    tipo: 'Haras',
    titulo: 'Haras com Lago',
    area: '30 alqueires',
    local: 'Maringá, PR',
    img: '/chacara-haras.png',
    destaque: 'Lazer e eventos',
  },
  {
    id: 6,
    tipo: 'Sítio',
    titulo: 'Sítio à Beira do Lago',
    area: '12 alqueires',
    local: 'Foz do Iguaçu, PR',
    img: '/sitio-lago.png',
    destaque: 'Natureza e lazer',
  },
]

const VISIBLE = 3

export default function DestaquesImoveis() {
  const [index, setIndex] = useState(0)
  const total = imoveis.length
  const maxIndex = total - VISIBLE

  const prev = () => setIndex((i) => Math.max(i - 1, 0))
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex))

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

        {/* Carrossel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
          >
            {imoveis.map((imovel) => (
              <div
                key={imovel.id}
                className="w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white border border-green/20 overflow-hidden group hover:border-green/50 transition-all duration-300 shadow-sm hover:shadow-md">
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
                    <div className="flex items-center justify-between pt-4 border-t border-green/10">
                      <span className="text-green font-semibold">Consulte</span>
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
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-12 h-12 border border-green/40 text-green flex items-center justify-center hover:bg-green hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-xl"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === index ? 'bg-green w-6' : 'bg-green/30'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className="w-12 h-12 border border-green/40 text-green flex items-center justify-center hover:bg-green hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-xl"
          >
            ›
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5542988088285?text=Olá,%20gostaria%20de%20ver%20mais%20propriedades%20disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-green inline-block"
          >
            Ver Todas as Propriedades
          </a>
        </div>
      </div>
    </section>
  )
}
