type SolutionsSectionProps = {
  id?: string
}

type SolutionCardProps = {
  title: string
  description: string
  tone: 'light' | 'dark'
  className?: string
}

function SolutionCard({
  title,
  description,
  tone,
  className = '',
}: SolutionCardProps) {
  const isDark = tone === 'dark'

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-[24px] p-6 shadow-[0_14px_34px_rgba(8,34,14,0.16)] transition-transform duration-300 ease-out will-change-transform hover:-translate-y-0.5 md:rounded-[34px] md:p-8 xl:p-9 ${
        isDark ? 'bg-[#060e09] text-[#dee8d9]' : 'bg-[#d3fad2] text-[#060e09]'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`mb-4 block h-1.5 w-14 rounded-full transition-all duration-300 md:mb-5 ${
          isDark ? 'bg-[#50af47]/80 group-hover:bg-[#72c768]' : 'bg-[#50AF47]/80 group-hover:bg-[#50AF47]'
        }`}
      />
      <h3 className="max-w-[92%] text-[1.65rem] leading-[1.1] font-bold tracking-[-0.02em] md:text-[2.1rem] xl:text-[2.45rem]">
        {title}
      </h3>
      <p className="mt-4 max-w-[94%] text-[1rem] leading-relaxed font-light tracking-[-0.01em] md:mt-5 md:text-[1.2rem] md:leading-[1.4] xl:text-[1.35rem]">
        {description}
      </p>
    </article>
  )
}

export default function SolutionsSection({ id = 'solucoes' }: SolutionsSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 h-screen bg-[#47AD4C] px-4 py-6 md:px-8 md:py-9 xl:px-10">
      <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-4 md:gap-6">
        <div className="grid min-h-[360px] grid-cols-1 gap-4 md:min-h-[340px] md:gap-6 xl:grid-cols-[1.02fr_1.14fr]">
          <SolutionCard
            title="Portaria Remota 24h"
            description="Controle de acesso em tempo real, com equipe especializada, redução de custos e mais segurança para moradores."
            tone="light"
          />
          <SolutionCard
            title="Controle de Acesso Inteligente"
            description="Cadastro de moradores, visitantes e prestadores, com biometria, tags, QR Code e reconhecimento de placas."
            tone="dark"
          />
        </div>

        <div className="grid min-h-[460px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:min-h-[430px] xl:grid-cols-[0.92fr_1.04fr_0.98fr]">
          <SolutionCard
            title="Alarmes Perimetrais"
            description="Sensores de barreira, cercas elétricas e detecção de invasão para prevenção em áreas externas do condomínio."
            tone="dark"
          />
          <SolutionCard
            title="CFTV com Monitoramento"
            description="Instalação de câmeras em pontos estratégicos, gravação em nuvem e acompanhamento contínuo da central."
            tone="light"
          />
          <SolutionCard
            title="Interfonia e Comunicação Integrada"
            description="Sistemas modernos de interfone, com integração ao celular, facilitando a gestão de acessos e chamadas."
            tone="dark"
            className="md:col-span-2 xl:col-span-1"
          />
        </div>
      </div>
    </section>
  )
}
