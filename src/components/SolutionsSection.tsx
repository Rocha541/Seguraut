import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { BellRing, Camera, DoorOpen, Headphones, ScanFace } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { premiumEase } from '#/lib/motion'
import { motion } from 'framer-motion'

type SolutionsSectionProps = {
  id?: string
}

type SolutionTone = 'paper' | 'mint'

type SolutionCardProps = {
  title: string
  description: string
  icon: ReactNode
  tone?: SolutionTone
  illustrationSrc?: string
  softIllustrationGradient?: boolean
}

type RevealItemProps = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
  blur?: number
}

function RevealItem({
  children,
  className,
  delay = 0,
  distance = 18,
  blur = 8,
}: RevealItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: distance,
          filter: `blur(${blur}px)`,
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        },
      }}
      transition={{
        duration: 0.82,
        delay,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  )
}

function CardRevealItem({
  children,
  className,
  delay = 0,
}: Pick<RevealItemProps, 'children' | 'className' | 'delay'>) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 34,
          scale: 0.985,
          filter: 'blur(8px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
      }}
      transition={{
        duration: 0.76,
        delay,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  )
}

const solutions: SolutionCardProps[] = [
  {
    title: 'Portaria Remota 24h',
    description:
      'Controle de acesso em tempo real, com equipe especializada, redução de custos e mais segurança para moradores.',
    icon: <Headphones />,
    illustrationSrc: '/figma/ilustracao-portaria.png',
    tone: 'paper',
  },
  {
    title: 'Controle de Acesso Inteligente',
    description:
      'Cadastro de moradores, visitantes e prestadores de serviço, com biometria, tags, QR Code e reconhecimento de placas.',
    icon: <ScanFace />,
    illustrationSrc: '/figma/ilustracao-controle-de-acesso.svg',
    softIllustrationGradient: true,
    tone: 'mint',
  },
  {
    title: 'Alarmes Perimetrais',
    description:
      'Sensores de barreira, cercas elétricas e detecção de invasão para prevenção em áreas externas do condomínio.',
    icon: <BellRing />,
    illustrationSrc: '/figma/ilustracao-alarme.svg',
    softIllustrationGradient: true,
    tone: 'paper',
  },
  {
    title: 'CFTV com Monitoramento',
    description:
      'Instalação de câmeras em pontos estratégicos, gravação em nuvem e acompanhamento contínuo da central.',
    icon: <Camera />,
    illustrationSrc: '/figma/ilustracao-monitoramento.svg',
    tone: 'paper',
  },
  {
    title: 'Interfonia e Comunicação Integrada',
    description:
      'Sistemas modernos de interfone, com integração ao celular, facilitando a gestão de acessos e chamadas.',
    icon: <DoorOpen />,
    illustrationSrc: '/figma/ilustracao-interfone.svg',
    softIllustrationGradient: true,
    tone: 'mint',
  },
]

function SolutionCard({
  title,
  description,
  icon,
  tone = 'paper',
  illustrationSrc,
  softIllustrationGradient = false,
}: SolutionCardProps) {
  const isMint = tone === 'mint'
  const hasIllustration = Boolean(illustrationSrc)

  return (
    <article className="group relative isolate flex h-full min-h-[300px] overflow-hidden border border-[#51c057]/30 bg-[#f9fcf8] p-6 text-[#060e09] transition-colors duration-300 md:p-8">
      {illustrationSrc ? (
        <>
          <img
            src={illustrationSrc}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className={`pointer-events-none absolute inset-y-0 -right-10 z-0 hidden h-full w-[48%] object-cover object-left lg:block ${
              softIllustrationGradient
                ? '[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.18)_8%,rgba(0,0,0,0.55)_20%,#000_42%)]'
                : ''
            }`}
          />
          {softIllustrationGradient ? null : (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-[calc(32%-40px)] z-[1] hidden w-[26%] bg-gradient-to-r from-[#f9fcf8] via-[#f9fcf8]/90 to-transparent lg:block"
            />
          )}
        </>
      ) : null}

      <div
        className={`relative z-10 flex min-h-full flex-col justify-between ${
          hasIllustration ? 'lg:max-w-[58%]' : 'w-full'
        }`}
      >
        <div>
          <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-sm border border-[#51c057]/35 bg-[#edf8e9] text-[#060e09] [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-[1.4]">
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
      </div>
    </article>
  )
}

export default function SolutionsSection({
  id = 'solucoes',
}: SolutionsSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || hasEntered) {
      return
    }

    const content = contentRef.current

    if (!content) {
      return
    }

    const revealContent = () => setHasEntered(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealContent()
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -14% 0px',
        threshold: 0.08,
      },
    )

    observer.observe(content)

    return () => {
      observer.disconnect()
    }
  }, [hasEntered, isMounted])

  return (
    <section
      id={id}
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-[#0d1a11]/14 bg-[#f8faf7] py-12 md:py-16"
    >
      <motion.div
        ref={contentRef}
        className="page-wrap relative z-10"
        initial="visible"
        animate={!isMounted || hasEntered ? 'visible' : 'hidden'}
      >
        <div className="mb-8 grid gap-6 md:mb-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="flex w-full flex-col gap-7">
            <RevealItem distance={16}>
              <h2 className="mt-5 max-w-3xl text-4xl leading-tight font-bold text-primary md:text-5xl">
                Segurança eletrônica com operação simples e controle real
              </h2>
            </RevealItem>
            <RevealItem delay={0.22} distance={16}>
              <p className="max-w-4xl text-base leading-relaxed text-[#243a2d]/78 md:justify-self-start md:text-lg">
                Portaria, acesso, CFTV, alarmes e comunicação integrados em uma
                estrutura confiável para síndicos, moradores e administradoras.
              </p>
            </RevealItem>
          </div>
        </div>

        <RevealItem className="mb-8 md:mb-10" delay={0.38} distance={14}>
          <Button
            asChild
            className="w-full bg-[#51c057] text-[#102719] hover:bg-primary hover:text-background sm:w-auto"
            size="lg"
          >
            <a href="/#contato">Avaliar operação</a>
          </Button>
        </RevealItem>

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-sm md:grid-cols-2 xl:grid-cols-6">
          {solutions.map((solution, index) => (
            <CardRevealItem
              key={solution.title}
              className={index < 2 ? 'xl:col-span-3' : 'xl:col-span-2'}
              delay={index < 2 ? 0.58 + index * 0.12 : 0.86 + (index - 2) * 0.1}
            >
              <SolutionCard {...solution} />
            </CardRevealItem>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
