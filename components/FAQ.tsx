'use client'
import { useState } from 'react'

const perguntas = [
  {
    q: 'Como funciona o processo de compra de um imóvel rural?',
    a: 'Após o contato inicial, nossa equipe apresenta as opções adequadas ao seu perfil e orçamento. Verificamos a documentação, acompanhamos visitas e assessoramos a negociação e assinatura do contrato. Todo o processo é transparente e seguro.',
  },
  {
    q: 'Quais documentos são necessários para comprar uma fazenda no Paraná?',
    a: 'São necessários documentos pessoais (RG, CPF, certidões), comprovante de renda e a documentação do imóvel (matrícula atualizada, ITR, CAR, CCIR). Nossa equipe orienta e verifica todos os documentos antes de fechar negócio.',
  },
  {
    q: 'A Agro Rural Imóveis atua em quais regiões do Paraná?',
    a: 'Atuamos em todo o estado do Paraná — Curitiba e RMC, Campos Gerais, Norte Pioneiro, Norte Central, Noroeste, Oeste, Sudoeste, Centro-Sul e litoral paranaense.',
  },
  {
    q: 'Como anunciar meu imóvel rural com vocês?',
    a: 'Entre em contato pelo WhatsApp com as informações básicas do imóvel (localização, área, documentação). Nossa equipe avalia, faz o cadastro e coloca sua propriedade em evidência para compradores qualificados. Sem custo para anunciar.',
  },
  {
    q: 'Vocês realizam avaliação de imóveis rurais?',
    a: 'Sim. Realizamos laudos e avaliações de imóveis rurais para fins de compra e venda, financiamentos bancários, inventários e partilhas. Entre em contato para solicitar uma avaliação.',
  },
]

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <section id="contato" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green uppercase tracking-[0.3em] text-xs font-medium mb-4">Tire suas dúvidas</p>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="green-divider"></div>
        </div>

        <div className="space-y-3">
          {perguntas.map((item, i) => (
            <div key={i} className="border border-green/20 overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-card-light transition-colors duration-200"
                onClick={() => setAberto(aberto === i ? null : i)}
              >
                <span className="text-gray-800 font-medium text-sm pr-4">{item.q}</span>
                <span className={`text-green text-xl flex-shrink-0 transition-transform duration-200 ${aberto === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {aberto === i && (
                <div className="px-6 pb-5 pt-2 bg-card-light border-t border-green/10">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5542988088285?text=Olá,%20tenho%20uma%20dúvida%20sobre%20imóveis%20rurais."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-block"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
