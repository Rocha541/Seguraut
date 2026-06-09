import { Button } from '#/components/ui/button'
import {
  accentLineReveal,
  cardReveal,
  copyStaggerContainer,
  fadeUp,
  iconReveal,
  useShouldReduceMotion,
  viewportOnce,
} from '#/lib/motion'
import { motion } from 'framer-motion'

type DifferentialsSectionProps = {
  id?: string
}

type DifferentialIllustration =
  | 'custom-plan'
  | 'always-on-support'
  | 'in-house-team'
  | 'preventive-maintenance'

type DifferentialItem = {
  label: string
  title: string
  emphasis: string
  description: string
  illustration: DifferentialIllustration
}

function CardIllustration({ type }: { type: DifferentialIllustration }) {
  if (type === 'custom-plan') {
    return (
      <svg
        viewBox="0 0 320 190"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="32"
          y="38"
          width="204"
          height="104"
          rx="12"
          stroke="#102719"
          strokeWidth="1.7"
        />
        <rect
          x="58"
          y="62"
          width="58"
          height="28"
          rx="6"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <rect
          x="128"
          y="60"
          width="68"
          height="40"
          rx="7"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <rect
          x="58"
          y="102"
          width="44"
          height="24"
          rx="6"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <rect
          x="114"
          y="112"
          width="50"
          height="14"
          rx="6"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <rect
          x="174"
          y="112"
          width="24"
          height="14"
          rx="6"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <rect
          x="250"
          y="44"
          width="16"
          height="88"
          rx="8"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <path
          d="M254 52h8M254 60h8M254 68h8M254 76h8M254 84h8M254 92h8M254 100h8M254 108h8M254 116h8M254 124h8"
          stroke="#102719"
          strokeWidth="1"
        />
        <path
          d="M46 26h176M46 26l8-5M46 26l8 5M222 26l-8-5M222 26l-8 5"
          stroke="#102719"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 48v82M18 48l-5 8M18 48l5 8M18 130l-5-8M18 130l5-8"
          stroke="#102719"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="162" cy="80" r="10" stroke="#51c057" strokeWidth="1.4" />
        <path
          d="M152 80h20M162 70v20"
          stroke="#51c057"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <rect x="104" y="138" width="112" height="22" rx="11" fill="#51c057" />
      </svg>
    )
  }

  if (type === 'always-on-support') {
    return (
      <svg
        viewBox="0 0 320 190"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="140" cy="94" r="52" stroke="#102719" strokeWidth="1.8" />
        <circle
          cx="140"
          cy="94"
          r="40"
          stroke="#102719"
          strokeWidth="1.2"
          strokeOpacity="0.34"
        />
        <path
          d="M140 52v9M140 127v9M98 94h9M173 94h9"
          stroke="#102719"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M110 64l5 6M170 64l-5 6M110 124l5-6M170 124l-5-6"
          stroke="#102719"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M140 94V70M140 94L158 106"
          stroke="#51c057"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="140" cy="94" r="3" fill="#51c057" />
        <circle cx="224" cy="64" r="16" stroke="#51c057" strokeWidth="1.3" />
        <text
          x="224"
          y="68"
          textAnchor="middle"
          fontSize="7.5"
          fill="#102719"
          fontFamily="ui-sans-serif, system-ui"
        >
          24h
        </text>
        <rect
          x="222"
          y="94"
          width="62"
          height="34"
          rx="11"
          stroke="#102719"
          strokeWidth="1.4"
        />
        <path
          d="M234 107h36M234 117h22"
          stroke="#51c057"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <rect x="104" y="138" width="112" height="22" rx="11" fill="#51c057" />
      </svg>
    )
  }

  if (type === 'in-house-team') {
    return (
      <svg
        viewBox="0 0 320 190"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="96" cy="90" r="15" stroke="#102719" strokeWidth="1.3" />
        <path
          d="M72 130c3-15 12-25 24-25s21 10 24 25"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <circle cx="158" cy="76" r="21" stroke="#102719" strokeWidth="1.6" />
        <path
          d="M127 134c4-20 16-32 31-32s27 12 31 32"
          stroke="#102719"
          strokeWidth="1.5"
        />
        <circle cx="220" cy="90" r="15" stroke="#102719" strokeWidth="1.3" />
        <path
          d="M196 130c3-15 12-25 24-25s21 10 24 25"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <rect
          x="248"
          y="62"
          width="46"
          height="58"
          rx="9"
          stroke="#102719"
          strokeWidth="1.3"
        />
        <path
          d="M260 78h22M260 92h22M260 106h15"
          stroke="#102719"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <rect x="104" y="138" width="112" height="22" rx="11" fill="#51c057" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M96 68h8l4-12h10l4 12h8l8-8 8 6-4 11 6 6 12-2 4 10-10 7v10l10 7-4 10-12-2-6 6 4 11-8 6-8-8h-8l-4 12h-10l-4-12h-8l-8 8-8-6 4-11-6-6-12 2-4-10 10-7V98l-10-7 4-10 12 2 6-6-4-11 8-6 8 8z"
        stroke="#102719"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="113" cy="106" r="28" stroke="#102719" strokeWidth="1.5" />
      <path
        d="M103 106l8 8 16-18"
        stroke="#51c057"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="198"
        cy="118"
        r="17"
        stroke="#102719"
        strokeOpacity="0.45"
        strokeWidth="1.3"
      />
      <circle
        cx="198"
        cy="118"
        r="7.5"
        stroke="#102719"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <rect
        x="242"
        y="58"
        width="44"
        height="36"
        rx="8"
        stroke="#102719"
        strokeWidth="1.3"
      />
      <path
        d="M242 71h44M253 54v8M275 54v8"
        stroke="#102719"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M257 81l4 4 8-9"
        stroke="#51c057"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="104" y="138" width="112" height="22" rx="11" fill="#51c057" />
    </svg>
  )
}

const differentials: DifferentialItem[] = [
  {
    label: 'Diagnóstico',
    title: 'Projeto sob medida',
    emphasis: 'sem pacote genérico',
    description:
      'Levantamento técnico conforme o perfil do condomínio para dimensionar tecnologia, cobertura e operação na medida certa.',
    illustration: 'custom-plan',
  },
  {
    label: '24h',
    title: 'Suporte contínuo',
    emphasis: '24 horas por dia',
    description:
      'Central disponível todos os dias, com monitoramento ativo e ação rápida em ocorrências.',
    illustration: 'always-on-support',
  },
  {
    label: 'Time técnico',
    title: 'Equipe própria',
    emphasis: 'especialistas dedicados',
    description:
      'Operação e implantação com profissionais da Seguraut, garantindo padrão e qualidade em cada etapa.',
    illustration: 'in-house-team',
  },
  {
    label: 'Prevenção',
    title: 'Manutenção preventiva',
    emphasis: 'rotina programada',
    description:
      'Rotina periódica de verificação e ajustes para evitar interrupções e aumentar a vida útil da operação.',
    illustration: 'preventive-maintenance',
  },
]

type DifferentialCardProps = {
  item: DifferentialItem
  index: number
  shouldReduceMotion: boolean
}

function DifferentialCard({
  item,
  index,
  shouldReduceMotion,
}: DifferentialCardProps) {
  return (
    <motion.article
      className={`relative bg-[#f3f6f2] px-6 py-8 ${
        index % 2 === 0 ? 'xl:border-r xl:border-[#0d1a11]/14' : ''
      } ${index < differentials.length - 1 ? 'border-b border-[#0d1a11]/14' : ''} ${
        index >= 2 ? 'xl:border-b-0' : ''
      }`}
      custom={index}
      initial="hidden"
      whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
      viewport={viewportOnce}
      variants={cardReveal}
    >
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:gap-8">
        <div className="min-w-0 flex-1">
          <h3 className="mt-6 max-w-[20ch] text-3xl leading-[1.04] font-semibold tracking-[-0.03em] text-[#0a130d] md:text-4xl">
            {item.title}
            <span className="mt-2 block font-serif text-[0.72em] leading-[1.05] font-medium italic text-[#1f2f24]">
              {item.emphasis}
            </span>
          </h3>
          <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-[#33443a] md:text-base">
            {item.description}
          </p>
        </div>

        <motion.div
          className="h-[180px] w-full max-w-[290px] self-center opacity-95 md:h-[210px] md:w-[250px] md:max-w-none md:justify-self-end"
          variants={iconReveal}
        >
          <CardIllustration type={item.illustration} />
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function DifferentialsSection({
  id = 'diferenciais',
}: DifferentialsSectionProps) {
  const shouldReduceMotion = useShouldReduceMotion()

  return (
    <section id={id} className="scroll-mt-28 bg-[#f8faf7] py-12 md:py-16">
      <div className="page-wrap">
        <motion.div
          className="mx-auto mb-10 max-w-5xl text-center"
          initial="hidden"
          whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
          viewport={viewportOnce}
          variants={copyStaggerContainer}
        >
          <motion.div
            className="mx-auto mb-6 h-1 w-14 origin-center bg-[#51c057]"
            variants={accentLineReveal}
          />
          <motion.h2
            className="mx-auto max-w-5xl text-4xl leading-tight font-bold text-[#060e09] md:text-5xl"
            variants={fadeUp}
          >
            Operação assistida para manter a segurança simples no dia a dia
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#243a2d]/78 md:text-lg"
            variants={fadeUp}
          >
            Estrutura técnica, suporte e manutenção integrados em uma operação
            confiável para síndicos, moradores e administradoras.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-8 flex justify-center"
          initial="hidden"
          whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <Button
            asChild
            className="w-full bg-[#51c057] text-[#102719] hover:bg-[#060e09] hover:text-[#edf8e9] sm:w-auto"
            size="lg"
          >
            <a href="/#contato">Planejar operação</a>
          </Button>
        </motion.div>

        <div className="grid overflow-hidden rounded-sm border border-[#0d1a11]/14 shadow-[0_24px_70px_rgba(6,14,9,0.08)] xl:grid-cols-2">
          {differentials.map((item, index) => (
            <DifferentialCard
              key={item.title}
              item={item}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
