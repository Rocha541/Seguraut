import type { ReactNode } from 'react'
import {
  BriefcaseBusiness,
  Building2,
  CircleCheckBig,
  ClipboardList,
  ShieldCheck,
  Wallet,
} from 'lucide-react'
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

function BenefitsSection({
  sectionTitle = 'Benefícios',
  benefits = defaultBenefits,
}: BenefitsSectionProps) {
  return (
    <section className="border-t border-[#0d1a11]/14 bg-[#f3f6f2] py-12 md:py-16">
      <div className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-9 max-w-4xl">
              <h2 className="mt-4 text-4xl leading-tight font-bold text-[#060e09] md:text-5xl">
                Resultado claro para a operação do condomínio
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#243a2d]/78 md:text-lg">
                Benefícios práticos para reduzir risco, melhorar rastreabilidade
                e dar mais previsibilidade para síndicos e administradoras.
              </p>
              <a href="/#contato" className="mt-7 inline-flex w-full sm:w-auto">
                <Button
                  className="w-full bg-[#51c057] text-[#102719] hover:bg-[#060e09] hover:text-[#edf8e9] sm:w-auto"
                  size="lg"
                >
                  Falar com especialista
                </Button>
              </a>
            </div>

            <div className="grid content-start overflow-hidden rounded-sm border border-[#51c057]/30 bg-[#edf8e9] shadow-[0_24px_70px_rgba(6,14,9,0.08)] sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <article
                  key={`${benefit.title}-${index}`}
                  className="relative flex gap-4 border border-[#51c057]/30 bg-[#f3f6f2] px-6 py-8"
                >
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[#0d1a11]/16 bg-[#edf8e9] text-[#102719] [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:stroke-[1.6]">
                      {benefit.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg leading-snug font-bold text-[#060e09]">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 max-w-[34ch] text-sm leading-relaxed text-[#243a2d]/78 md:text-[0.95rem]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center overflow-visible">
            <img
              src="/figma/ilustracao-benefits.svg"
              alt="Ilustração dos benefícios da segurança eletrônica"
              className="mx-auto w-full max-w-[700px] object-contain object-center drop-shadow-[0_28px_34px_rgba(6,14,9,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
