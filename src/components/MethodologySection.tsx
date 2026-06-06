import {
  ClipboardCheck,
  PanelsTopLeft,
  Rocket,
  SearchCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { premiumEase, useShouldReduceMotion } from '#/lib/motion'

type MethodologySectionProps = {
  id?: string
}

type MethodologyStep = {
  title: string
  description: string
  icon: LucideIcon
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

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.76,
      ease: premiumEase,
    },
  },
}

const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.85,
      staggerChildren: 0.24,
    },
  },
}

const lineVariants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      delay: 0.62,
      duration: 1.35,
      ease: premiumEase,
    },
  },
}

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.78,
      ease: premiumEase,
    },
  },
}

const iconVariants = {
  hidden: {
    opacity: 0.6,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: premiumEase,
    },
  },
}

export default function MethodologySection({
  id = 'metodologia',
}: MethodologySectionProps) {
  const [isMounted, setIsMounted] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useShouldReduceMotion()
  const shouldReduceMotion = isMounted && prefersReducedMotion

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      id={id}
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-[var(--line)] bg-[#f8faf7] py-16 text-foreground md:py-24"
    >
      <div className="page-wrap">
        <motion.header
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          animate={shouldReduceMotion ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: true, amount: 0.42, margin: '0px 0px -12% 0px' }}
          variants={revealVariants}
        >
          <h2 className="mt-4 text-balance text-4xl leading-tight font-bold text-foreground md:text-6xl">
            Metodologia & Entregáveis
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Um processo claro para entender o contexto, definir prioridades,
            implantar melhorias e acompanhar a segurança do condomínio.
          </p>
        </motion.header>

        <motion.div
          ref={timelineRef}
          className="relative mx-auto mt-14 max-w-[960px] md:mt-20"
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: false, amount: 0.08, margin: '0px 0px -12% 0px' }}
          variants={timelineVariants}
        >
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-6 w-px bg-[repeating-linear-gradient(180deg,var(--line)_0_2px,transparent_2px_9px)] md:left-1/2 md:-translate-x-1/2"
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-6 w-[7px] rounded-full bg-[linear-gradient(180deg,rgba(81,192,87,0.08),var(--brand-green)_24%,var(--brand-green)_76%,rgba(81,192,87,0.08))] md:left-1/2 md:-translate-x-1/2"
            variants={lineVariants}
            style={{ transformOrigin: 'top' }}
          />

          <div className="grid gap-14 md:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.article
                  key={step.title}
                  className="relative grid min-h-[168px] grid-cols-[3rem_minmax(0,1fr)] items-start gap-5 md:min-h-[202px] md:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] md:gap-0"
                  variants={stepVariants}
                >
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

                  <motion.div
                    className="absolute top-0 left-0 z-10 row-start-1 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-background text-[var(--brand-green)] shadow-[0_0_0_10px_var(--background),0_10px_30px_rgba(6,14,9,0.08)] md:static md:col-start-2 md:mx-auto md:h-12 md:w-12"
                    variants={iconVariants}
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </motion.div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
