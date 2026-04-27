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
    title: 'Reducao de Custos Operacionais',
    description:
      'Diminua despesas com portaria e operacao, mantendo alto padrao de seguranca no condominio.',
    icon: <Wallet />,
  },
  {
    title: 'Ambiente condominial mais confiavel',
    description: 'Tranquilidade e bem-estar reforcados para moradores e visitantes.',
    icon: <ShieldCheck />,
  },
  {
    title: 'Governanca com maior rastreabilidade',
    description: 'Mais visibilidade operacional para decisoes seguras e assertivas.',
    icon: <ClipboardList />,
  },
  {
    title: 'Excelencia na rotina operacional',
    description: 'Menos falhas e maior consistencia nos processos do condominio.',
    icon: <CircleCheckBig />,
  },
  {
    title: 'Valorizacao patrimonial continua',
    description: 'Seguranca e gestao qualificada fortalecem o valor do empreendimento.',
    icon: <Building2 />,
  },
  {
    title: 'Alta performance administrativa',
    description: 'Mais produtividade para sindico e gestao, com foco estrategico.',
    icon: <BriefcaseBusiness />,
  },
]

function BenefitsSection({
  sectionTitle = 'Beneficios',
  benefits = defaultBenefits,
}: BenefitsSectionProps) {
  return (
    <section className="bg-primary py-20">
      <div className="page-wrap min-h-screen">
        <h1 className="text-zinc-50 text-5xl">{sectionTitle}</h1>

        <div className="grid gap-8 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={`${benefit.title}-${index}`}
              className={`card-${index + 1} flex flex-col gap-7 rounded-[56px] border-2 p-10 `}
            >
              <div className="flex h-20 w-20 items-center justify-center bg-[#e1fce7] text-[#172521] rounded-2xl [&_svg]:h-10 [&_svg]:w-8">
                {benefit.icon 
            }
              </div>
              <h1 className="text-4xl font-bold text-zinc-50">{benefit.title}</h1>
              <p className="text-2xl font-light text-zinc-50">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
