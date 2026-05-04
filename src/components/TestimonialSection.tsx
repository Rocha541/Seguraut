import { Quote } from 'lucide-react'

type TestimonialSectionProps = {
  id?: string
}

export default function TestimonialSection({
  id = 'depoimento',
}: TestimonialSectionProps) {
  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-[#060e09] py-20 text-[#edf8e9] md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,rgba(211,250,210,0)_0%,rgba(211,250,210,0.42)_50%,rgba(211,250,210,0)_100%)]"
      />
      <div className="page-wrap">
        <figure className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Quote
            aria-hidden="true"
            className="mb-9 h-11 w-11 text-[#51c057] md:mb-10"
            strokeWidth={1.7}
          />

          <blockquote>
            <p className="text-balance text-2xl leading-snug font-semibold text-[#f6fff3] italic md:text-4xl md:leading-tight">
              A Seguraut trouxe mais controle para a portaria, respostas mais
              rápidas nas ocorrências e uma rotina muito mais tranquila para
              moradores e administradoras.
            </p>
          </blockquote>

          <figcaption className="mt-9">
            <p className="text-base font-bold text-[#f6fff3] md:text-lg">
              Síndico do Condomínio Jardim Botânico
            </p>
            <p className="mt-1 text-sm text-[#edf8e9]/62 md:text-base">
              Portaria remota, CFTV e controle de acesso integrados
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
