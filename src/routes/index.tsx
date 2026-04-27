import AboutSection from '#/components/AboutSection'
import BenefitsSection from '#/components/BenefitsSection'
import Header from '#/components/Header'
import SolutionsSection from '#/components/SolutionsSection'
import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main
            id="home"
            className="relative flex min-h-screen min-h-[100dvh] flex-col"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                // backgroundImage: "url('/figma/vista-de-cima-condo.webp')",
                backgroundImage: "url('/figma/seguraut-fundo.webp')",
              }}
            />

            <div aria-hidden="true" className="absolute inset-0" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1]  opacity-0"
            />

            <div className="page-wrap relative z-10 flex flex-1 flex-col">
              <div className="relative z-10">
                <Header />
              </div>

              <section className="relative z-10 flex w-full flex-1 flex-col  gap-8 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:flex-row lg:items-center lg:gap-10 lg:pt-24 lg:pb-20 ">
                <div className="w-full lg:w-2/3 xl:w-3/5">
                  <h1 className="text-4xl font-extrabold leading-tight tracking-[1.2px] text-green-950 sm:text-5xl lg:text-6xl lg:leading-none lg:tracking-[2.4px] xl:max-w-9/10">
                    Segurança inteligente para condomínios
                  </h1>

                  <p className="mt-4 text-base font-light text-primary/80 sm:text-lg xl:mt-8 xl:max-w-6/10 xl:text-xl">
                    Monitoramento, controle de acesso e segurança eletrônica
                    para reduzir riscos sem complicar a gestão.
                  </p>

                  <div
                    id="contato"
                    className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
                  >
                    <Button
                      className="w-full bg-[#51c057] transition-all hover:bg-primary hover:text-[#dff5dc] sm:w-auto"
                      size="lg"
                    >
                      Solicitar proposta
                    </Button>
                    <Button
                      className="w-full border-[#51c057] text-[#51c057] hover:bg-primary hover:text-[#dff5dc] sm:w-auto"
                      variant="outline"
                      size="lg"
                    >
                      Conhecer soluções
                    </Button>
                  </div>
                </div>
              </section>
            </div>

            <div
              id="blur-hero"
              className="relative py-2 z-10 mt-auto w-full border-t border-primary/35 bg-linear-to-b from-black/20 to-black/25 backdrop-blur-sm"
            >
              <div className="page-wrap grid grid-cols-1 gap-6 py-6 text-background sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:py-8">
                <div>
                  <span className="text-4xl font-semibold">+10</span>
                  <p className="text-xl sm:text-2xl">Condominios atendidos</p>
                </div>
                <div>
                  <span className="text-4xl font-semibold">+500</span>
                  <p className="text-xl sm:text-2xl">Moradores protegidos</p>
                </div>
                <div>
                  <span className="text-4xl font-semibold">+24h</span>
                  <p className="text-xl sm:text-2xl">De segurança inteligente</p>
                </div>
              </div>
            </div>
          </main>

          <div className="relative z-20 bg-[#d3fad2]">
            <AboutSection id="about" />
          </div>

          <SolutionsSection id="solucoes" />

          <BenefitsSection />
        </div>
      </div>
    </div>
  )
}
