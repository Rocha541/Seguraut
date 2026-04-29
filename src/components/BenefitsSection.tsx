import type { ReactNode } from 'react'
import {
  BriefcaseBusiness,
  Building2,
  CircleCheckBig,
  ClipboardList,
  ShieldCheck,
  Wallet,
} from 'lucide-react'

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
    title: 'Reducao de custos operacionais',
    description:
      'Diminua despesas com portaria e operacao, mantendo alto padrao de seguranca no condominio.',
    icon: <Wallet />,
  },
  {
    title: 'Ambiente condominial confiavel',
    description:
      'Tranquilidade e bem-estar reforcados para moradores e visitantes.',
    icon: <ShieldCheck />,
  },
  {
    title: 'Governanca com rastreabilidade',
    description:
      'Mais visibilidade operacional para decisoes seguras e assertivas.',
    icon: <ClipboardList />,
  },
  {
    title: 'Rotina operacional consistente',
    description:
      'Menos falhas e maior previsibilidade nos processos do condominio.',
    icon: <CircleCheckBig />,
  },
  {
    title: 'Valorizacao patrimonial',
    description:
      'Seguranca e gestao qualificada fortalecem o valor do empreendimento.',
    icon: <Building2 />,
  },
  {
    title: 'Gestao mais produtiva',
    description:
      'Mais foco para sindico e administradora acompanharem o que importa.',
    icon: <BriefcaseBusiness />,
  },
]

function BenefitsSection({
  sectionTitle = 'Beneficios',
  benefits = defaultBenefits,
}: BenefitsSectionProps) {
  return (
    <section className="border-t border-[#0d1a11]/14 bg-[#f3f6f2] py-14 md:py-20">
      <div className="page-wrap min-h-screen">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div className="flex flex-col gap-10">
            <h2 className="mt-5 text-4xl leading-tight font-bold text-[#060e09] md:text-5xl">
              Resultado claro para a operação do condomínio
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#243a2d]/78 md:justify-self-start md:text-lg">
              Benefícios práticos para reduzir risco, melhorar rastreabilidade e
              dar mais previsibilidade para síndicos e administradoras.
            </p>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-sm border border-[#0d1a11]/14 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={`${benefit.title}-${index}`}
              className="min-h-[260px] border-[#0d1a11]/14 bg-[#f3f6f2] p-7 md:border-r md:p-8 xl:[&:nth-child(3n)]:border-r-0 [&:not(:nth-last-child(-n+1))]:border-b md:[&:not(:nth-last-child(-n+2))]:border-b xl:[&:not(:nth-last-child(-n+3))]:border-b"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center border border-[#0d1a11]/16 text-[#102719] [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-[1.4]">
                {benefit.icon}
              </div>
              <h3 className="max-w-[18ch] text-2xl leading-tight font-bold text-[#060e09]">
                {benefit.title}
              </h3>
              <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-[#243a2d]/78">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
