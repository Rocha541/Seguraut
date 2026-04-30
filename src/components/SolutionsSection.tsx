import type { ReactNode } from 'react'
import { BellRing, Camera, DoorOpen, Headphones, ScanFace } from 'lucide-react'
import { Button } from '#/components/ui/button'

type SolutionsSectionProps = {
  id?: string
}

type SolutionTone = 'paper' | 'mint'

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
    tone: 'mint',
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
    tone: 'mint',
  },
]

function SolutionCard({
  title,
  description,
  icon,
  tone = 'paper',
  className = '',
}: SolutionCardProps) {
  const isMint = tone === 'mint'

  return (
    <article
      className={`group relative flex min-h-[300px] flex-col justify-between border p-6 transition-colors duration-300 md:p-8 border-[#51c057]/30 bg-[#f9fcf8] text-[#060e09]'
          
      } ${className}`}
    >
      <div>
        <div
          className={`mb-7 flex h-12 w-12 items-center justify-center border 
               border-[#51c057]/35 bg-[#9bf9797b] text-[#060e09]
              
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
          isMint ? 'text-[#243a2d]/76' : 'text-[#243a2d]/72'
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
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-[#0d1a11]/14 bg-[#F3F6F2] py-12 md:py-16"
    >
      <img
        src="/figma/logo-tracado.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-10 -z-10 h-[460px] w-auto translate-x-[36%] -translate-y-[4%] opacity-45 md:h-[640px] md:translate-x-[30%] lg:h-[820px] lg:translate-x-[24%]"
      />
      <div className="page-wrap relative z-10">
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

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-sm border border-[#0d1a11]/12 md:grid-cols-2 xl:grid-cols-6">
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
