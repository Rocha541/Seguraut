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
              className="absolute inset-0 bg-cover bg-center bg-no-repeat   "
              style={{
                // backgroundImage: "url('/figma/vista-de-cima-condo.webp')",
                backgroundImage: "url('/figma/seguraut-fundo.webp')",
              }}
            />

            
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] bg-[#0000004a]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{
                background:
                  'linear-gradient(96deg, rgba(7,12,9,0.86) 0%, rgba(7,12,9,0.68) 30%, rgba(7,12,9,0.38) 48%, rgba(7,12,9,0.06) 72%, rgba(7,12,9,0) 100%)',
              }}
            />

            <div className="relative z-20">
              <Header />
            </div>

            <div className="page-wrap relative z-20 flex flex-1 flex-col">
              <section className="relative z-20 flex w-full flex-1 flex-col gap-8 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:flex-row lg:items-center lg:gap-10 lg:pt-24 lg:pb-20">
                <div className="w-full lg:w-2/3 xl:w-3/5">
                  <h1 className="text-4xl font-extrabold leading-tight tracking-[1.2px] text-[#edf8e9] sm:text-5xl lg:text-6xl lg:leading-none lg:tracking-[2.4px] xl:max-w-9/10">
                    Segurança inteligente para condomínios
                  </h1>

                  <p className="mt-4 text-base font-light text-[#e8f2e4] sm:text-lg xl:mt-8 xl:max-w-6/10 xl:text-xl">
                    Monitoramento, controle de acesso e segurança eletrônica
                    para <span className="font-semibold">reduzir riscos sem complicar a gestão.</span>
                  </p>

                  <div
                    id="contato"
                    className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
                  >
                    <Button
                      className="w-full bg-[#51c057] text-[#102719] transition-all hover:bg-[#edf8e9] hover:text-[#071402] sm:w-auto"
                      size="lg"
                    >
                      Solicitar proposta
                    </Button>
                    <Button
                      className="w-full border-[#d3fad2] bg-transparent text-[#edf8e9] hover:border-[#edf8e9] hover:bg-[#edf8e9] hover:text-[#102719] sm:w-auto"
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
              className="relative z-10 mt-auto w-full overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                  backdropFilter: 'blur(26.4px)',
                  WebkitBackdropFilter: 'blur(26.4px)',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 28%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.82) 78%, rgba(0,0,0,1) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 28%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.82) 78%, rgba(0,0,0,1) 100%)',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 left-0 z-[1] h-px"
                style={{
                  background:
                    'linear-gradient(to right, rgba(211,250,210,0) 0%, rgba(211,250,210,0.45) 16%, rgba(211,250,210,0.7) 50%, rgba(211,250,210,0.45) 84%, rgba(211,250,210,0) 100%)',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/16 to-black/24"
              />
              <div className="page-wrap relative z-10 grid grid-cols-1 gap-6 py-6 text-background sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:py-8">
                <div>
                  <span className="text-4xl font-semibold">+10</span>
                  <p className="text-xl sm:text-2xl">Condominios atendidos</p>
                </div>
                <div>
                  <span className="text-4xl font-semibold">+500</span>
                  <p className="text-xl sm:text-2xl">Moradores protegidos</p>
                </div>
                <div>
                  <span className="text-4xl font-semibold">24h</span>
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
