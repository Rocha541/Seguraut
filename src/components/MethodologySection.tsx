import {
  ClipboardCheck,
  PanelsTopLeft,
  Rocket,
  SearchCheck,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'

type MethodologySectionProps = {
  id?: string
}

type MethodologyStep = {
  title: string
  description: string
  icon: LucideIcon
}

type RevealOnViewProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const steps: MethodologyStep[] = [
  {
    title: 'Diagnóstico',
    description:
      'Levantamos a rotina do condomínio, pontos vulneráveis, fluxos de entrada e necessidades dos moradores. Entregável: mapa claro do que precisa melhorar e por onde começar.',
    icon: SearchCheck,
  },
  {
    title: 'Plano de ação',
    description:
      'Definimos prioridades, soluções indicadas, cronograma e responsabilidades para aumentar a segurança sem travar a operação do condomínio.',
    icon: ClipboardCheck,
  },
  {
    title: 'Implantação',
    description:
      'Executamos os ajustes combinados, orientamos equipe e moradores e organizamos os procedimentos para que a operação funcione no dia a dia.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Acompanhamento',
    description:
      'Monitoramos os primeiros resultados, corrigimos desvios e mantemos um plano de evolução para preservar o padrão de segurança do condomínio.',
    icon: Rocket,
  },
]

function RevealOnView({
  children,
  className = '',
  delay = 0,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.24, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default function MethodologySection({
  id = 'metodologia',
}: MethodologySectionProps) {
  return (
    <section
      id={id}
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-[var(--line)] bg-background py-16 text-foreground md:py-24"
    >
      <div className="page-wrap">
        <RevealOnView>
          <header className="mx-auto max-w-5xl text-center">
            
            <h2 className="mt-4 text-balance text-4xl leading-tight font-bold text-foreground md:text-6xl">
              Metodologia & Entregáveis
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Um processo claro para entender o contexto, definir prioridades,
              implantar melhorias e acompanhar a segurança do condomínio.
            </p>
          </header>
        </RevealOnView>

        <div className="relative mx-auto mt-14 max-w-[960px] md:mt-20">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-6 w-px bg-[repeating-linear-gradient(180deg,var(--line)_0_2px,transparent_2px_9px)] md:left-1/2 md:-translate-x-1/2"
          />
          <div
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-6 w-[7px] rounded-full bg-[linear-gradient(180deg,rgba(81,192,87,0.08),var(--brand-green)_24%,var(--brand-green)_76%,rgba(81,192,87,0.08))] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="grid gap-14 md:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <RevealOnView
                  key={step.title}
                  className="relative"
                  delay={index * 90}
                >
                  <article className="relative grid min-h-[168px] grid-cols-[3rem_minmax(0,1fr)] items-start gap-5 md:min-h-[202px] md:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] md:gap-0">
                    <div
                      className={`col-start-2 row-start-1 min-w-0 pt-0 md:pt-1 ${
                        isEven
                          ? 'md:col-start-1 md:pr-10 md:text-left'
                          : 'md:col-start-3 md:pl-10 md:text-left'
                      }`}
                    >
                      <div className="max-w-[390px]">
                        <h3 className="text-3xl leading-none font-bold text-foreground md:text-[2rem]">
                          {step.title}
                        </h3>
                        <p className="mt-5 text-base leading-[1.55] text-muted-foreground md:text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 z-10 row-start-1 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-background text-[var(--brand-green)] shadow-[0_0_0_10px_var(--background),0_10px_30px_rgba(6,14,9,0.08)] transition-transform duration-500 ease-out md:static md:col-start-2 md:mx-auto md:h-12 md:w-12">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>
                  </article>
                </RevealOnView>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
