import Header from '#/components/Header'
import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'


export const Route = createFileRoute('/')({ component: App })

function App() {
  return (

    <main
      className="page-wrap bg-cover bg-center h-screen bg-no-repeat "
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(6, 14, 9, 0.90) 0%, rgba(6, 14, 9, 0.85) 40%, rgba(6, 14, 9, 0.6) 65%, rgba(6, 14, 9, 0) 100%), url('/image-condominio.png')",
      }}
    ><Header />
      <section className="flex flex-col gap-10 lg:flex-row lg:items-center pt-20">
        <div className="w-full lg:w-2/3 ">
          <h1 className="text-4xl xl:max-w-9/10 font-semibold leading-tight tracking-[1.2px] text-[#DEE8D9] sm:text-5xl xl:text-7xl lg:leading-none lg:tracking-[2.4px]">
           Por que condomínios escolhem a Seguraut
          </h1>
             <p className='xl:mt-8 mt-4 xl:max-w-6/10 space-y-3 text-base font-light text-[#DEE8D9] sm:text-lg xl:text-xl'>Agende um diagnóstico e receba uma proposta alinhada à realidade do seu condomínio, sem complexidade desnecessária.</p>

          <div className=" mt-6 xl:mt-16 space-y-3 text-base font-extralight text-[#DEE8D9] sm:text-lg ">
            <p className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-50" />
              <span>Implantação planejada para a rotina do condomínio</span>
            </p>
            <p className="flex items-start  gap-2">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-50" />
              <span>Equipe técnica especializada em ambiente condominial</span>
            </p>
            <p className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-50" />
              <span>Operação contínua com acompanhamento e ajustes</span>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Button size="lg" variant="secondary">
              Falar com a Seguraut
            </Button>
            <Button variant="outline" size="lg">
              Pedir orçamento
            </Button>
          </div>
        </div>

        
      </section>
    </main>
  )
}
