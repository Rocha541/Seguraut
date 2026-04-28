import { Button } from './ui/button'

type AboutSectionProps = {
  id?: string
}

export default function AboutSection({ id = 'about' }: AboutSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 w-full bg-[#F3F6F2]">
      <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center">
          <div className="w-full px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16 lg:py-20">
            <h2 className="mt-4 text-3xl leading-tight font-bold text-primary sm:text-4xl lg:text-5xl">
              Soluções inteligentes para condomínios mais protegidos
            </h2>
            <p className="mt-6 text-base text-primary/80 sm:text-lg">
              A Seguraut faz parte do Grupo Progresso, referência em soluções para
              condomínios. Somos especialistas em segurança eletrônica para
              portarias, acessos e áreas comuns.
            </p>
            <p className="mt-4 text-base text-primary/80 sm:text-lg">
              Criamos projetos sob medida com tecnologia confiável e operação
              simples no dia a dia. Mais proteção, mais controle e mais
              tranquilidade para moradores, síndicos e administradoras.
            </p>
            <Button
              size="lg"
              className="mt-8 w-full bg-[#51c057] hover:bg-primary hover:text-[#dff5dc] sm:w-auto"
            >
              Falar com especialista
            </Button>
          </div>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[100svh]">
          <img
            src="/figma/condominio-santapaula.png"
            alt="Equipe de segurança em condomínio"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
