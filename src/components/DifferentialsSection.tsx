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
        <rect x="104" y="138" width="112" height="22" rx="11" fill="#0d1210" />
        <rect x="32" y="38" width="204" height="104" rx="12" stroke="#0d1210" strokeWidth="1.7" />
        <rect x="58" y="62" width="58" height="28" rx="6" stroke="#0d1210" strokeWidth="1.3" />
        <rect x="128" y="60" width="68" height="40" rx="7" stroke="#0d1210" strokeWidth="1.3" />
        <rect x="58" y="102" width="44" height="24" rx="6" stroke="#0d1210" strokeWidth="1.3" />
        <rect x="114" y="112" width="50" height="14" rx="6" stroke="#0d1210" strokeWidth="1.3" />
        <rect x="174" y="112" width="24" height="14" rx="6" stroke="#0d1210" strokeWidth="1.3" />
        <rect x="250" y="44" width="16" height="88" rx="8" stroke="#0d1210" strokeWidth="1.3" />
        <path d="M254 52h8M254 60h8M254 68h8M254 76h8M254 84h8M254 92h8M254 100h8M254 108h8M254 116h8M254 124h8" stroke="#0d1210" strokeWidth="1" />
        <path d="M46 26h176M46 26l8-5M46 26l8 5M222 26l-8-5M222 26l-8 5" stroke="#0d1210" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 48v82M18 48l-5 8M18 48l5 8M18 130l-5-8M18 130l5-8" stroke="#0d1210" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="162" cy="80" r="10" stroke="#0d1210" strokeWidth="1.2" />
        <path d="M152 80h20M162 70v20" stroke="#0d1210" strokeWidth="1.2" strokeLinecap="round" />
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
        <rect x="104" y="138" width="112" height="22" rx="11" fill="#0d1210" />
        <circle cx="140" cy="94" r="52" stroke="#0d1210" strokeWidth="1.8" />
        <circle cx="140" cy="94" r="40" stroke="#0d1210" strokeWidth="1.2" strokeOpacity="0.34" />
        <path d="M140 52v9M140 127v9M98 94h9M173 94h9" stroke="#0d1210" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M110 64l5 6M170 64l-5 6M110 124l5-6M170 124l-5-6" stroke="#0d1210" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M140 94V70M140 94L158 106" stroke="#0d1210" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="140" cy="94" r="3" fill="#0d1210" />
        <circle cx="224" cy="64" r="16" stroke="#0d1210" strokeWidth="1.3" />
        <text x="224" y="68" textAnchor="middle" fontSize="7.5" fill="#0d1210" fontFamily="ui-sans-serif, system-ui">24h</text>
        <rect x="222" y="94" width="62" height="34" rx="11" stroke="#0d1210" strokeWidth="1.4" />
        <path d="M234 107h36M234 117h22" stroke="#0d1210" strokeWidth="1.2" strokeLinecap="round" />
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
        <rect x="104" y="138" width="112" height="22" rx="11" fill="#0d1210" />
        <circle cx="96" cy="90" r="15" stroke="#0d1210" strokeWidth="1.3" />
        <path d="M72 130c3-15 12-25 24-25s21 10 24 25" stroke="#0d1210" strokeWidth="1.3" />
        <circle cx="158" cy="76" r="21" stroke="#0d1210" strokeWidth="1.6" />
        <path d="M127 134c4-20 16-32 31-32s27 12 31 32" stroke="#0d1210" strokeWidth="1.5" />
        <circle cx="220" cy="90" r="15" stroke="#0d1210" strokeWidth="1.3" />
        <path d="M196 130c3-15 12-25 24-25s21 10 24 25" stroke="#0d1210" strokeWidth="1.3" />
        <rect x="248" y="62" width="46" height="58" rx="9" stroke="#0d1210" strokeWidth="1.3" />
        <path d="M260 78h22M260 92h22M260 106h15" stroke="#0d1210" strokeWidth="1.1" strokeLinecap="round" />
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
      <rect x="104" y="138" width="112" height="22" rx="11" fill="#0d1210" />
      <path d="M96 68h8l4-12h10l4 12h8l8-8 8 6-4 11 6 6 12-2 4 10-10 7v10l10 7-4 10-12-2-6 6 4 11-8 6-8-8h-8l-4 12h-10l-4-12h-8l-8 8-8-6 4-11-6-6-12 2-4-10 10-7V98l-10-7 4-10 12 2 6-6-4-11 8-6 8 8z" stroke="#0d1210" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="113" cy="106" r="28" stroke="#0d1210" strokeWidth="1.5" />
      <path d="M103 106l8 8 16-18" stroke="#0d1210" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="198" cy="118" r="17" stroke="#0d1210" strokeOpacity="0.45" strokeWidth="1.3" />
      <circle cx="198" cy="118" r="7.5" stroke="#0d1210" strokeOpacity="0.45" strokeWidth="1.2" />
      <rect x="242" y="58" width="44" height="36" rx="8" stroke="#0d1210" strokeWidth="1.3" />
      <path d="M242 71h44M253 54v8M275 54v8" stroke="#0d1210" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M257 81l4 4 8-9" stroke="#0d1210" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const differentials: DifferentialItem[] = [
  {
    label: 'Diagnostico',
    title: 'Projeto sob medida',
    emphasis: 'sem pacote generico',
    description:
      'Levantamento tecnico por perfil do condominio para dimensionar tecnologia, cobertura e operacao na medida certa.',
    illustration: 'custom-plan',
  },
  {
    label: '24h',
    title: 'Suporte continuo',
    emphasis: '24 horas por dia',
    description:
      'Central disponivel todos os dias, com monitoramento ativo e acao rapida em ocorrencias.',
    illustration: 'always-on-support',
  },
  {
    label: 'Time tecnico',
    title: 'Equipe propria',
    emphasis: 'especialistas dedicados',
    description:
      'Operacao e implantacao com profissionais da Seguraut, garantindo padrao e qualidade em cada etapa.',
    illustration: 'in-house-team',
  },
  {
    label: 'Prevencao',
    title: 'Manutencao preventiva',
    emphasis: 'rotina programada',
    description:
      'Rotina periodica de verificacao e ajustes para evitar interrupcoes e aumentar a vida util da operacao.',
    illustration: 'preventive-maintenance',
  },
]

export default function DifferentialsSection({
  id = 'diferenciais',
}: DifferentialsSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 min-h-screen bg-[#f3f6f2] px-4 py-8 md:px-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="grid grid-cols-1 border border-[#0d1a11]/14 md:grid-cols-2">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              className={`relative min-h-[400px] bg-[#f3f6f2] p-7 md:min-h-[460px] md:p-10 ${
                index % 2 === 0 ? 'md:border-r md:border-[#0d1a11]/14' : ''
              } ${index < 2 ? 'border-b border-[#0d1a11]/14' : ''}`}
            >
              <div className="relative z-10 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(220px,0.95fr)] md:items-center md:gap-7">
                <div>
                  <span className="inline-flex rounded-full border border-[#0d1a11]/18 bg-white/70 px-3 py-1 text-xs tracking-wide text-[#1a2a1f] uppercase">
                    {item.label}
                  </span>
                  <h3 className="mt-8 max-w-[20ch] text-3xl leading-[1.04] font-semibold tracking-[-0.03em] text-[#0a130d] md:text-5xl">
                    {item.title}
                    <span className="mt-2 block font-serif text-[0.72em] leading-[1.05] font-medium italic text-[#1f2f24]">
                      {item.emphasis}
                    </span>
                  </h3>
                  <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-[#33443a] md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="mt-7 h-[190px] w-full md:mt-0 md:h-[232px] md:justify-self-end">
                  <CardIllustration type={item.illustration} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
