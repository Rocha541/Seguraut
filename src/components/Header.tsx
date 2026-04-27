import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="sticky top-3 z-50 pt-4 sm:top-4 sm:pt-4">
      <div className="page-wrap rounded-2xl  bg-[#51c057] backdrop-blur-lg">
        <nav className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-4 sm:py-4 lg:px-8">
          <div>
            <img
              className="h-11 w-11 md:h-14 md:w-14"
              src="/logo-seguraut.svg"
              alt="Logo Seguraut"
            />
          </div>

          <div className="order-3 hidden w-full justify-center gap-4 text-sm font-medium text-foreground sm:order-2 lg:flex sm:w-auto sm:text-base">
            <a
              href="/#about"
              className="rounded-2xl px-4 py-1.5 transition-all duration-200 hover:bg-[#102719] hover:text-[#f5f5f5] "
            >
              Quem Somos
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
              <Button className="" size="lg">
                Falar com a Seguraut
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
