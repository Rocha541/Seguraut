import { ClipboardCheck, MapPinned, ShieldAlert } from 'lucide-react'
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
import { motion } from 'framer-motion'

const diagnosticItems = [
  {
    title: 'Leitura do risco',
    description:
      'Mapeamento dos acessos, áreas sensíveis, rotina da portaria e pontos de maior exposição do condomínio.',
    icon: ShieldAlert,
  },
  {
    title: 'Plano técnico',
    description:
      'Recomendação objetiva de tecnologias, prioridades e etapas para melhorar segurança sem travar a operação.',
    icon: ClipboardCheck,
    hasDividers: true,
  },
  {
    title: 'Rota de implantação',
    description:
      'Próximos passos claros para síndicos e administradoras decidirem com previsibilidade de escopo.',
    icon: MapPinned,
  },
]

const dividerClass =
  'h-px bg-[linear-gradient(to_right,rgba(6,14,9,0)_0%,rgba(6,14,9,0.08)_18%,rgba(81,192,87,0.38)_50%,rgba(6,14,9,0.08)_82%,rgba(6,14,9,0)_100%)]'

export default function DiagnosticSection() {
  const shouldReduceMotion = useShouldReduceMotion()

  return (
    <section
      id="contato"
      className="flex min-h-screen min-h-[100svh] border-t border-[#0d1a11]/14 bg-[#f8faf7] text-[#060e09] lg:min-h-[100dvh]"
    >
      <div className="page-wrap grid w-full gap-10 py-14 md:py-18 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
          viewport={viewportOnce}
          variants={copyStaggerContainer}
        >
          <motion.h2
            className="text-4xl leading-tight font-bold md:text-5xl"
            variants={fadeUp}
          >
            Diagnóstico de segurança para o seu condomínio
          </motion.h2>
          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-[#243a2d]/78 md:text-lg"
            variants={fadeUp}
          >
            A Seguraut avalia a rotina do condomínio, identifica riscos e
            apresenta um plano de ação para portaria, acesso, CFTV, alarmes e
            manutenção.
          </motion.p>
          <motion.div
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            variants={fadeUp}
          >
            <Button
              asChild
              size="lg"
              className="w-full bg-[#51c057] text-[#102719] hover:-translate-y-0.5 hover:bg-[#060e09] hover:text-[#edf8e9] hover:shadow-[0_12px_28px_rgba(6,14,9,0.2)] motion-reduce:transform-none sm:w-auto"
            >
              <a href="/#contato">Agendar diagnóstico</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-[#102719]/24 bg-transparent text-[#102719] hover:bg-[#edf8e9] hover:text-[#102719] sm:w-auto"
            >
              <a href="/#faq">Tirar dúvidas</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-0"
          initial="hidden"
          whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
          viewport={viewportOnce}
          variants={scaleReveal}
        >
          <div>
            {diagnosticItems.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  initial="hidden"
                  whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
                  viewport={viewportOnce}
                  variants={cardReveal}
                >
                  {item.hasDividers ? (
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
                      <h3 className="text-2xl leading-tight font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[56ch] text-base leading-relaxed text-[#243a2d]/76">
                        {item.description}
                      </p>
                    </div>
                  </article>
                  {item.hasDividers ? (
                    <div aria-hidden="true" className={dividerClass} />
                  ) : null}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
