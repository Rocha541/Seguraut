import { Button } from './ui/button'

type AboutSectionProps = {
  id?: string
}

export default function AboutSection({ id = 'about' }: AboutSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 flex min-h-[100svh] items-center bg-[#47AD4C] px-4 py-6 md:py-8"
    >
      <div className="relative mx-auto w-full max-w-[1720px]">
       

        <h2 className="mx-auto max-w-[1080px] text-center text-3xl leading-tight font-bold tracking-[-0.03em] text-[#060e09] md:text-5xl lg:text-6xl">
          Segurança eletrônica feita para condomínios
        </h2>

        <p className="mx-auto mt-3 max-w-[1060px] text-center text-base leading-relaxed font-normal tracking-[-0.02em] text-[#172521] md:text-xl lg:text-2xl">
          Protegemos condomínios residenciais com soluções integradas de câmeras,
          controle de acesso e portaria remota, com operação contínua e suporte
          técnico especializado.
        </p>

        <div className="relative mx-auto mt-4 max-w-[1640px] overflow-hidden rounded-[20px] shadow-[0_18px_45px_rgba(6,14,9,0.2)] md:mt-5">
          <img
            src="/figma/frente-condo.webp"
            alt="Vista aérea de condomínio com áreas comuns e controle de acesso"
            className="h-[190px] w-full object-cover sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[550px]"
            loading="lazy"
          />
        </div>

        <div className="-mt-5 relative z-30 flex justify-center md:-mt-6">
          <Button
            size="lg"
            className="h-[57px] rounded-2xl px-[30px] text-xl font-normal text-[#dee8d9] hover:bg-[#f5f5f5] hover:text-primary"
          >
            Falar com a Seguraut
          </Button>
        </div>
      </div>
    </section>
  )
}

function DecorativeAsterisk({ className }: { className?: string }) {
  return (
    <div
      className={`absolute h-[110px] w-[110px] sm:h-[140px] sm:w-[140px] md:h-[190px] md:w-[190px] lg:h-[288px] lg:w-[288px] ${className ?? ''}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-[#314b3b]"
        style={{
          WebkitMaskImage: "url('/figma/asterisk-mask.png')",
          maskImage: "url('/figma/asterisk-mask.png')",
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 mix-blend-hard-light"
        style={{
          WebkitMaskImage: "url('/figma/asterisk-mask.png')",
          maskImage: "url('/figma/asterisk-mask.png')",
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          backgroundImage: "url('/figma/asterisk-texture.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  )
}
