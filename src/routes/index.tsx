import AboutSection from '#/components/AboutSection'
import Header from '#/components/Header'
import MotionSection from '#/components/MotionSection'
import SolutionsSection from '#/components/SolutionsSection'
import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main
            id="home"
            className="page-wrap relative h-screen overflow-hidden bg-[#060E09]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/figma/vista-de-cima-condo.webp')",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, #020503c6 0%, #020503c6 45%, #020503c6 72%, #0205038d 100%)',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1]  opacity-0"
            />

            <div className="relative z-10">
              <div className="relative z-10">
                <Header />
              </div>

              <section className="relative z-10 flex flex-col gap-10 pt-20 lg:flex-row lg:items-center">
                <div className="w-full lg:w-2/3">
                  <h1 className="text-4xl xl:max-w-9/10 font-bold leading-tight tracking-[1.2px] text-[#DEE8D9] sm:text-5xl xl:text-7xl lg:leading-none lg:tracking-[2.4px]">
                    Por que condomínios escolhem a Seguraut?
                  </h1>

                  <p className="mt-4 text-base font-light text-[#DEE8D9] sm:text-lg xl:mt-8 xl:max-w-6/10 xl:text-xl">
                    Agende um diagnóstico e receba uma proposta alinhada à
                    realidade do seu condomínio, sem complexidade desnecessária.
                  </p>

                  <div className="mt-6 space-y-3 text-base font-extralight text-[#DEE8D9] sm:text-lg xl:text-xl xl:mt-16">
                    
                    <div id='id-1' className="flex items-center gap-2">
                      <div className='bg-[#47ad4cd6] p-1.5 rounded-2xl '>
                      <ShieldCheck className="mt-0.5 h-8 w-8 shrink-0 text-zinc-50" />

                      </div>
                      <span>
                        Implantação planejada para a rotina do condomínio.
                      </span>

                    </div>
                  
                    <div className="flex items-center gap-2">
                      <div className="bg-[#47ad4cd6] p-1.5 rounded-2xl ">
                        <ShieldCheck className="mt-0.5 h-8 w-8 shrink-0 text-zinc-50" />
                      </div>
                      <span>
                        Equipe técnica especializada em ambiente condominial.
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#47ad4cd6] p-1.5 rounded-2xl ">
                        <ShieldCheck className="mt-0.5 h-8 w-8 shrink-0 text-zinc-50" />
                      </div>
                      <span>
                        Operação contínua, com acompanhamento e ajustes.
                      </span>
                    </div>
                  </div>

                  <div
                    id="contato"
                    className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
                  >
                    <Button
                      className=" hover:bg-[#102719] hover:text-background "
                      size="lg"
                      variant="secondary"
                    >
                      Falar com a Seguraut
                    </Button>
                    <Button
                      className="hover:bg-primary"
                      variant="outline"
                      size="lg"
                    >
                      Pedir orçamento
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </main>

          <div className="relative z-20 bg-[#d3fad2]">
            <AboutSection id="about" />
          </div>

          <SolutionsSection id="solucoes" />
          <MotionSection id="monitoramento" />
        </div>
      </div>
    </div>
  )
}
