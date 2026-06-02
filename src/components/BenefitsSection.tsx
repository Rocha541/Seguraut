import type { ReactNode } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  BriefcaseBusiness,
  Building2,
  CircleCheckBig,
  ClipboardList,
  ShieldCheck,
  Wallet,
} from 'lucide-react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Button } from '#/components/ui/button'

type BenefitItem = {
  title: string
  description: string
  icon?: ReactNode
}

type BenefitsSectionProps = {
  sectionTitle?: string
  benefits?: BenefitItem[]
}

const defaultBenefits: BenefitItem[] = [
  {
    title: 'Redução de custos operacionais',
    description:
      'Diminua despesas com portaria e operação, mantendo alto padrão de segurança.',
    icon: <Wallet />,
  },
  {
    title: 'Ambiente condominial confiável',
    description:
      'Tranquilidade e bem-estar reforcados para moradores e visitantes.',
    icon: <ShieldCheck />,
  },
  {
    title: 'Governança com rastreabilidade',
    description:
      'Mais visibilidade operacional para decisões seguras e assertivas.',
    icon: <ClipboardList />,
  },
  {
    title: 'Rotina operacional consistente',
    description:
      'Menos falhas e maior previsibilidade nos processos do condomínio.',
    icon: <CircleCheckBig />,
  },
  {
    title: 'Valorização patrimonial',
    description:
      'Segurança e gestão qualificada fortalecem o valor do empreendimento.',
    icon: <Building2 />,
  },
  {
    title: 'Gestão mais produtiva',
    description:
      'Mais foco para síndico e administradora acompanharem o que importa.',
    icon: <BriefcaseBusiness />,
  },
]

const copyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const copyItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.34,
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.985,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.78,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.12,
      duration: 0.46,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.985,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: 0.18,
      duration: 0.96,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function BenefitsSection({
  sectionTitle = 'Benefícios',
  benefits = defaultBenefits,
}: BenefitsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const hasTriggeredAnimation = useRef(false)
  const [isMounted, setIsMounted] = useState(false)
  const [hasStartedReveal, setHasStartedReveal] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])
  const shouldAnimate = isMounted && !prefersReducedMotion
  const startReveal = useCallback(() => {
    if (hasTriggeredAnimation.current) {
      return
    }

    hasTriggeredAnimation.current = true
    setHasStartedReveal(true)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) {
      return
    }

    if (prefersReducedMotion) {
      hasTriggeredAnimation.current = true
      setHasStartedReveal(true)
      return
    }

    const startRevealWhenSectionIsOnScreen = () => {
      const section = sectionRef.current

      if (!section) {
        return false
      }

      const sectionRect = section.getBoundingClientRect()
      const triggerLine = window.innerHeight * 0.82

      if (sectionRect.top <= triggerLine) {
        startReveal()
        return true
      }

      return false
    }

    let animationFrame = window.requestAnimationFrame(function checkSection() {
      if (hasTriggeredAnimation.current) {
        return
      }

      if (!startRevealWhenSectionIsOnScreen()) {
        animationFrame = window.requestAnimationFrame(checkSection)
      }
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [isMounted, prefersReducedMotion, startReveal])

  return (
    <motion.section
      ref={sectionRef}
      className="border-t border-[#0d1a11]/14 bg-[#f8faf7] py-12 md:py-16"
    >
      <div className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              className="mb-9 max-w-4xl"
              variants={copyVariants}
              initial="hidden"
              animate={hasStartedReveal ? 'visible' : 'hidden'}
            >
              <motion.h2
                className="mt-4 text-4xl leading-tight font-bold text-[#060e09] md:text-5xl"
                variants={copyItemVariants}
              >
                Resultado claro para a operação do condomínio
              </motion.h2>
              <motion.p
                className="mt-5 max-w-3xl text-base leading-relaxed text-[#243a2d]/78 md:text-lg"
                variants={copyItemVariants}
              >
                Benefícios práticos para reduzir risco, melhorar rastreabilidade
                e dar mais previsibilidade para síndicos e administradoras.
              </motion.p>
              <motion.div variants={copyItemVariants}>
                <Button
                  asChild
                  className="mt-7 w-full bg-[#51c057] text-[#102719] hover:bg-[#060e09] hover:text-[#edf8e9] sm:w-auto"
                  size="lg"
                >
                  <a href="/#contato">Otimizar custos</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid content-start overflow-hidden rounded-sm border border-[#51c057]/30 bg-[#edf8e9] shadow-[0_24px_70px_rgba(6,14,9,0.08)] sm:grid-cols-2"
              variants={gridVariants}
              initial="hidden"
              animate={hasStartedReveal ? 'visible' : 'hidden'}
            >
              {benefits.map((benefit, index) => (
                <motion.article
                  key={`${benefit.title}-${index}`}
                  className="relative flex gap-4 border border-[#51c057]/30 bg-[#f3f6f2] px-6 py-8"
                  variants={cardVariants}
                >
                  <div className="flex min-w-0 gap-4">
                    <motion.div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[#0d1a11]/16 bg-[#edf8e9] text-[#102719] [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:stroke-[1.6]"
                      variants={iconVariants}
                    >
                      {benefit.icon}
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-lg leading-snug font-bold text-[#060e09]">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 max-w-[34ch] text-sm leading-relaxed text-[#243a2d]/78 md:text-[0.95rem]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center overflow-visible"
            variants={imageVariants}
            initial="hidden"
            animate={hasStartedReveal ? 'visible' : 'hidden'}
            style={{ y: shouldAnimate ? imageY : 0 }}
          >
            <img
              src="/figma/image 41.webp"
              alt="Ilustração dos benefícios da segurança eletrônica"
              className="mx-auto w-full max-w-[700px] object-contain object-center drop-shadow-[0_28px_34px_rgba(6,14,9,0.18)]"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default BenefitsSection
