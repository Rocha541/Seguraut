import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#102719]/20 bg-[#51c057]/95 shadow-[0_10px_24px_rgba(6,14,9,0.24)] backdrop-blur-lg">
      <div className="page-wrap">
        <nav className="flex flex-wrap items-center justify-between gap-3 px-0 py-3 sm:py-4">
          <div>
            <img
              className="h-11 w-11 md:h-14 md:w-14"
              src="/logo-seguraut.svg"
              alt="Logo Seguraut"
            />
          </div>

          <div className="order-3 hidden w-full justify-center gap-4 text-sm font-medium text-[#102719] sm:order-2 sm:w-auto sm:text-base lg:flex">
            <a
              href="/#about"
              className="rounded-2xl px-4 py-1.5 transition-all duration-200 hover:bg-[#102719] hover:text-[#f5f5f5]"
            >
              A Seguraut
            </a>
            <a
              href="/#solucoes"
              className="rounded-2xl px-4 py-1.5 transition-colors duration-200 hover:bg-[#102719] hover:text-background "
            >
              Soluções
            </a>
            <a
              href="/#contato"
              className="rounded-2xl px-4 py-1.5 transition-colors duration-200 hover:bg-[#102719] hover:text-background "
            >
              Contato
            </a>
          </div>

          <div className="order-2 sm:order-3">
            <a href="/#contato">
              <Button
                className="border border-[#d3fad2]  text-[#ffffff] transition-all hover:bg-[#edf8e9] hover:text-[#071402] "
                variant="outline"
                size="lg"
              >
                Falar com a Seguraut
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
