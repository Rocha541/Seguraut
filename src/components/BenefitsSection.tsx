import type { ElementType } from 'react'
import { useRef } from 'react'
import { ClipboardList, ShieldCheck, Wallet } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '#/components/ui/button'
import {
  cardReveal,
  copyStaggerContainer,
  fadeUp,
  iconReveal,
  scaleReveal,
  useShouldReduceMotion,
  viewportOnce,
} from '#/lib/motion'

type BenefitItem = {
  title: string
  description: string
  icon: ElementType
  hasDividers?: boolean
}

type BenefitsSectionProps = {
  benefits?: BenefitItem[]
}

const defaultBenefits: BenefitItem[] = [
  {
    title: 'Redução de custos operacionais',
    description:
      'Diminua despesas com portaria e operação, mantendo alto padrão de segurança.',
    icon: Wallet,
  },
  {
    title: 'Ambiente condominial confiável',
    description:
      'Tranquilidade e bem-estar reforcados para moradores e visitantes.',
    icon: ShieldCheck,
    hasDividers: true,
  },
  {
    title: 'Governança com rastreabilidade',
    description:
      'Mais visibilidade operacional para decisões seguras e assertivas.',
    icon: ClipboardList,
  },
]

const dividerClass =
  'h-px bg-[linear-gradient(to_right,rgba(6,14,9,0)_0%,rgba(6,14,9,0.08)_18%,rgba(81,192,87,0.38)_50%,rgba(6,14,9,0.08)_82%,rgba(6,14,9,0)_100%)]'

function BenefitsSection({ benefits = defaultBenefits }: BenefitsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])
  const shouldReduceMotion = useShouldReduceMotion()

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-[#0d1a11]/14 bg-[#f8faf7] py-12 md:py-16"
    >
      <div className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              className="mb-9 max-w-4xl"
              initial="hidden"
              whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
              viewport={viewportOnce}
              variants={copyStaggerContainer}
            >
              <motion.h2
                className="mt-4 text-4xl leading-tight font-bold text-[#060e09] md:text-5xl"
                variants={fadeUp}
              >
                Resultado claro para a operação do condomínio
              </motion.h2>
              <motion.p
                className="mt-5 max-w-3xl text-base leading-relaxed text-[#243a2d]/78 md:text-lg"
                variants={fadeUp}
              >
                Benefícios práticos para reduzir risco,{' '}
                <span className="font-semibold text-[#060e09]">
                  melhorar rastreabilidade e dar mais previsibilidade para
                  síndicos e administradoras.
                </span>
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button
                  asChild
                  className="mt-7 w-full bg-[#51c057] text-[#102719] hover:bg-[#060e09] hover:text-[#edf8e9] sm:w-auto"
                  size="lg"
                >
                  <a href="/#contato">Otimizar custos</a>
                </Button>
              </motion.div>
            </motion.div>

            <div className="grid gap-0">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon

                return (
                  <motion.div
                    key={`${benefit.title}-${index}`}
                    custom={index}
                    initial="hidden"
                    whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
                    viewport={viewportOnce}
                    variants={cardReveal}
                  >
                    {benefit.hasDividers ? (
                      <div aria-hidden="true" className={dividerClass} />
                    ) : null}
                    <article className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 p-5 md:grid-cols-[3.5rem_minmax(0,1fr)] md:p-6">
                      <motion.div
                        className="flex h-12 w-12 self-center items-center justify-center rounded-sm border border-[#51c057]/35 bg-[#edf8e9] text-[#102719]"
                        variants={iconReveal}
                      >
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </motion.div>
                      <div className="min-w-0">
                        <h3 className="text-2xl leading-tight font-bold text-[#060e09]">
                          {benefit.title}
                        </h3>
                        <p className="mt-2 max-w-[56ch] text-base leading-relaxed text-[#243a2d]/76">
                          {benefit.description}
                        </p>
                      </div>
                    </article>
                    {benefit.hasDividers ? (
                      <div aria-hidden="true" className={dividerClass} />
                    ) : null}
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            className="relative flex items-center justify-center overflow-visible"
            initial="hidden"
            whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
            viewport={viewportOnce}
            variants={scaleReveal}
            style={{ y: shouldReduceMotion ? 0 : imageY }}
          >
            <img
              src="/figma/image 41.webp"
              alt="Ilustração dos benefícios da segurança eletrônica"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[700px] object-contain object-center drop-shadow-[0_28px_34px_rgba(6,14,9,0.18)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
