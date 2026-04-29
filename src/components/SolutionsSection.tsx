import type { ReactNode } from 'react'
import { BellRing, Camera, DoorOpen, Headphones, ScanFace } from 'lucide-react'
import { Button } from '#/components/ui/button'

type SolutionsSectionProps = {
  id?: string
}

type SolutionTone = 'paper' | 'ink'

type SolutionCardProps = {
  title: string
  description: string
  icon: ReactNode
  tone?: SolutionTone
  className?: string
}

const solutions: Array<Omit<SolutionCardProps, 'className'>> = [
  {
    title: 'Portaria Remota 24h',
    description:
      'Controle de acesso em tempo real, com equipe especializada, reducao de custos e mais seguranca para moradores.',
    icon: <Headphones />,
    tone: 'paper',
  },
  {
    title: 'Controle de Acesso Inteligente',
    description:
      'Cadastro de moradores, visitantes e prestadores, com biometria, tags, QR Code e reconhecimento de placas.',
    icon: <ScanFace />,
    tone: 'ink',
  },
  {
    title: 'Alarmes Perimetrais',
    description:
      'Sensores de barreira, cercas eletricas e deteccao de invasao para prevencao em areas externas do condominio.',
    icon: <BellRing />,
    tone: 'paper',
  },
  {
    title: 'CFTV com Monitoramento',
    description:
      'Instalacao de cameras em pontos estrategicos, gravacao em nuvem e acompanhamento continuo da central.',
    icon: <Camera />,
    tone: 'paper',
  },
  {
    title: 'Interfonia e Comunicacao Integrada',
    description:
      'Sistemas modernos de interfone, com integracao ao celular, facilitando a gestao de acessos e chamadas.',
    icon: <DoorOpen />,
    tone: 'ink',
  },
]

function SolutionCard({
  title,
  description,
  icon,
  tone = 'paper',
  className = '',
}: SolutionCardProps) {
  const isInk = tone === 'ink'

  return (
    <article
      className={`group relative flex min-h-[300px] flex-col justify-between rounded-sm border p-6 transition-colors duration-300 md:p-8 ${
        isInk
          ? 'bg-[#060e09] text-[#edf8e9]'
          : 'bg-[#51c057] text-primary-foreground'
      } ${isInk ? 'border-[#d3fad2]/15' : 'border-[#0d1a11]/15'} ${className}`}
    >
      <div>
        <div
          className={`mb-7 flex h-12 w-12 items-center justify-center border ${
            isInk
              ? 'border-[#51c057] text-primary bg-[#51c057]/95 '
              : 'border-primary text-[#76f97d] bg-primary/95'
          } [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-[1.4]`}
        >
          {icon}
        </div>
        <h3 className="max-w-[14ch] text-2xl leading-tight font-bold md:text-3xl">
          {title}
        </h3>
      </div>
      <p
        className={`mt-8 max-w-[46ch] text-base leading-relaxed ${
          isInk ? 'text-[#edf8e9]/74' : 'text-[#edf8e9]/74'
        }`}
      >
        {description}
      </p>
    </article>
  )
}

export default function SolutionsSection({
  id = 'solucoes',
}: SolutionsSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[#0d1a11]/14 bg-[#F3F6F2] py-12 md:py-16"
    >
      <div className="page-wrap">
        <div className="mb-8 grid gap-6 md:mb-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="flex flex-col  gap-7 w-full">
            <h2 className="mt-5 max-w-3xl text-4xl leading-tight font-bold text-primary md:text-5xl">
              Segurança eletrônica com operação simples e controle real
            </h2>
            <p className="max-w-4xl text-base leading-relaxed text-[#243a2d]/78 md:justify-self-start md:text-lg">
              Portaria, acesso, CFTV, alarmes e comunicação integrados em uma
              estrutura confiável para síndicos, moradores e administradoras.
            </p>
          </div>
        </div>
        <div className="mb-8 md:mb-10">
          <Button
            className="w-full bg-[#51c057] text-[#102719] hover:bg-[#edf8e9] hover:text-[#071402] sm:w-auto"
            size="lg"
          >
            Falar com especialista
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-0 rounded-sm md:grid-cols-2 xl:grid-cols-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              className={index < 2 ? 'xl:col-span-3' : 'xl:col-span-2'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
