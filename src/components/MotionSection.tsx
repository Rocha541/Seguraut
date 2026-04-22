import ScrollReveal from '#/components/ScrollReveal'

type MotionSectionProps = {
  id?: string
}

export default function MotionSection({ id = 'motion' }: MotionSectionProps) {
  return (
    <section id={id} className="relative min-h-[100svh] bg-[#060e09] px-4 py-16 md:px-10 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        
      />

      <div className="relative mx-auto w-full max-w-[1640px] pt-14 md:pt-[232px]">
        <ScrollReveal className="max-w-[1032px]">
          <p className="text-5xl leading-tight font-bold tracking-[0.02em] text-[#ceddc6] sm:text-6xl lg:text-7xl">
           Segurança reforçada, gestão simples e custos sob controle.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
