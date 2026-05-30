import { Mail, MapPin } from 'lucide-react'

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.14 6.42 2.14 11.86c0 1.74.46 3.44 1.32 4.94L2.05 22l5.32-1.39a9.95 9.95 0 0 0 4.67 1.18h.01c5.45 0 9.89-4.42 9.89-9.86a9.8 9.8 0 0 0-2.89-7.02Zm-7 15.21h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.16.83.84-3.07-.2-.32a8.17 8.17 0 0 1-1.26-4.37c0-4.52 3.71-8.2 8.29-8.2a8.25 8.25 0 0 1 5.87 2.43 8.15 8.15 0 0 1 2.43 5.84c0 4.52-3.72 8.19-8.29 8.19Zm4.55-6.13c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.65.8-.8.97-.15.17-.29.19-.54.06-.25-.12-1.05-.38-2-1.22a7.47 7.47 0 0 1-1.38-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.66 4.24 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  const navLinks = [
    { label: 'A Seguraut', href: '/#about' },
    { label: 'Soluções', href: '/#solucoes' },
    { label: 'Diferenciais', href: '/#diferenciais' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contato', href: '/#contato' },
  ]

  const services = [
    'Monitoramento 24h',
    'Controle de acesso',
    'Portaria remota',
    'Alarmes e CFTV',
  ]

  return (
    <footer className="relative overflow-hidden bg-[#071402] text-[#edf8e9]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,rgba(211,250,210,0)_0%,rgba(211,250,210,0.58)_50%,rgba(211,250,210,0)_100%)]"
      />

      <div className="page-wrap relative z-10 py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 border-b border-[#edf8e9]/16 pb-9 lg:grid-cols-[1.05fr_1.35fr] lg:items-end">
          <div>
            <a href="/#home" className="inline-flex items-center gap-3">
              <img
                className="h-12 w-12"
                src="/figma/logo-branca.svg"
                alt="Logo Seguraut"
              />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#51c057]">
                Seguraut
              </span>
            </a>
            <p className="mt-6 max-w-xl text-2xl leading-tight font-semibold text-[#edf8e9] sm:text-3xl lg:text-4xl">
              Segurança eletrônica para condomínios com operação simples e
              controle real.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-[#d3fad2]/82 sm:grid-cols-3">
            <div className="border-l border-[#51c057]/40 pl-4">
              <strong className="block text-lg text-[#edf8e9]">24h</strong>
              <span>Monitoramento contínuo</span>
            </div>
            <div className="border-l border-[#51c057]/40 pl-4">
              <strong className="block text-lg text-[#edf8e9]">+10</strong>
              <span>Condomínios atendidos</span>
            </div>
            <div className="border-l border-[#51c057]/40 pl-4">
              <strong className="block text-lg text-[#edf8e9]">+500</strong>
              <span>Moradores protegidos</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-9 md:grid-cols-2 lg:grid-cols-[0.85fr_0.85fr_1.3fr] lg:gap-12">
          <nav aria-label="Links do rodapé">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#edf8e9]">
              Navegação
            </h2>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#edf8e9]/74 transition-colors hover:text-[#51c057]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#edf8e9]">
              Soluções
            </h2>
            <ul className="mt-5 grid list-none gap-3 p-0">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-sm text-[#edf8e9]/74"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#51c057]"
                  />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#edf8e9]">
              Contato
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-[#edf8e9]/76">
              <a
                href="mailto:contato@seguraut.com.br"
                className="group flex items-center gap-3 transition-colors hover:text-[#51c057]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[#51c057]/35 bg-[#edf8e9] text-[#102719] transition-colors group-hover:border-[#51c057]/70">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                </span>
                contato@seguraut.com.br
              </a>
              <a
                href="/#contato"
                className="group flex items-center gap-3 transition-colors hover:text-[#51c057]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[#51c057]/35 bg-[#edf8e9] text-[#102719] transition-colors group-hover:border-[#51c057]/70">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                Falar com a Seguraut
              </a>
              <p className="m-0 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[#51c057]/35 bg-[#edf8e9] text-[#102719]">
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                </span>
                Atendimento para condomínios
              </p>
            </div>
          </address>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#edf8e9]/16 pt-6 text-sm text-[#edf8e9]/76 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">&copy; {year} Seguraut</p>
          <p className="m-0">Desenvolvido pela Studio Syntra</p>
          <p className="m-0">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
