import { Button } from './ui/button'
import { Camera, ShieldCheck, Waypoints } from 'lucide-react'

type AboutSectionProps = {
  id?: string
}

export default function AboutSection({ id = 'about' }: AboutSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 w-full border-y border-[#0d1a11]/14 bg-[#f3f6f2]"
    >
      <div className="page-wrap grid min-h-screen grid-cols-1 gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          <div className="mt-7 h-1 w-14 bg-[#51c057]" />
          <h2 className="mt-6 text-3xl leading-tight font-bold text-primary sm:text-4xl lg:text-5xl">
            Soluções inteligentes para condomínios mais protegidos
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary/78 sm:text-lg">
            A Seguraut faz parte do Grupo Progresso, referência em soluções para
            condomínios. Somos especialistas em segurança eletrônica para
            portarias, controle de acesso e áreas comuns.
          </p>

          <div className="mt-5 space-y-3 text-sm text-primary/85 sm:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#2e6f31]" />
              <span>Proteção ativa 24h para moradores e patrimônio.</span>
            </div>
            <div className="flex items-center gap-2">
              <Waypoints className="h-4 w-4 text-[#2e6f31]" />
              <span>Controle de acesso inteligente com rastreabilidade.</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4 text-[#2e6f31]" />
              <span>CFTV integrado para monitoramento contínuo.</span>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-8 w-full bg-[#51c057] text-[#071402] hover:bg-primary hover:text-[#dff5dc] sm:w-auto"
          >
            Falar com especialista
          </Button>
        </div>

        <div className="relative min-h-[340px] overflow-hidden rounded-sm border border-[#0d1a11]/14 sm:min-h-[460px] lg:min-h-[640px] bg-[url(/figma/condominio-santapaula.png)] bg-cover" />
      </div>
    </section>
  )
}
