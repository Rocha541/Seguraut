import { ChevronDown } from 'lucide-react'

type FAQSectionProps = {
  id?: string
}

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Como a Seguraut define a solução ideal para o condomínio?',
    answer:
      'Começamos com um diagnóstico técnico da rotina, acessos, áreas sensíveis e pontos de maior risco. A partir disso, indicamos portaria, CFTV, alarmes, controle de acesso e manutenção conforme a necessidade real do condomínio.',
  },
  {
    question: 'A portaria remota substitui toda a operação presencial?',
    answer:
      'Depende do perfil do condomínio. Em alguns casos, a portaria remota assume a operação principal; em outros, funciona junto com equipe local. A recomendação considera fluxo de moradores, visitantes, prestadores e nível de risco.',
  },
  {
    question:
      'O controle de acesso atende moradores, visitantes e prestadores?',
    answer:
      'Sim. O sistema pode organizar cadastros, permissões e registros para moradores, visitantes e prestadores, usando recursos como tags, biometria, QR Code e reconhecimento de placas quando fizer sentido para o projeto.',
  },
  {
    question: 'Câmeras, alarmes e acessos são acompanhados 24 horas?',
    answer:
      'As soluções podem ser integradas à central de monitoramento 24h, com acompanhamento de ocorrências e apoio para respostas mais rápidas. O escopo é definido no plano técnico.',
  },
  {
    question: 'A implantação atrapalha a rotina do condomínio?',
    answer:
      'A implantação é planejada por etapas para reduzir impacto na rotina. Antes da execução, alinhamos prioridades, acessos, comunicação com moradores e procedimentos para manter a operação previsível.',
  },
  {
    question: 'Vocês fazem manutenção depois da instalação?',
    answer:
      'Sim. A Seguraut trabalha com suporte contínuo e manutenção preventiva para reduzir falhas, preservar equipamentos e manter o padrão de segurança ao longo do tempo.',
  },
]

export default function FAQSection({ id = 'faq' }: FAQSectionProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen min-h-[100svh] scroll-mt-28 border-t border-[#0d1a11]/14 bg-[#f8faf7] py-12 md:py-16 lg:min-h-[100dvh]"
    >
      <div className="page-wrap flex w-full flex-col justify-center">
        <h2 className="text-center text-4xl leading-tight font-bold text-[#060e09] md:text-5xl">
          Dúvidas? Nós temos as respostas.
        </h2>

        <div className="mx-auto mt-12 w-full max-w-[1000px] md:mt-16">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-t border-[#0d1a11]/35 last:border-b"
            >
              <summary className="grid min-h-[74px] cursor-pointer list-none grid-cols-[minmax(0,1fr)_2rem] items-center gap-6 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="text-base leading-snug font-medium text-[#060e09] md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 justify-self-end text-[#060e09]/70 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="pr-10 pb-6">
                <p className="max-w-3xl text-base leading-relaxed text-[#243a2d]/78 md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
