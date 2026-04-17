import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Seguraut | Segurança para Condomínios',
      },
      {
        name: 'description',
        content:
          'Soluções de segurança para condomínios com implantação planejada, equipe técnica especializada e operação contínua.',
      },
      {
        property: 'og:title',
        content: 'Seguraut | Segurança para Condomínios',
      },
      {
        property: 'og:description',
        content:
          'Conheça a Seguraut e solicite um diagnóstico para elevar a segurança do seu condomínio.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/image-condominio.png',
        as: 'image',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: RootNotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className=" " suppressHydrationWarning>
        {children}

        {import.meta.env.DEV ? (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  )
}

function RootNotFound() {
  return (
    <main className="page-wrap py-16 text-center text-[#DEE8D9]">
      <h1 className="text-3xl font-semibold sm:text-4xl">
        Pagina nao encontrada
      </h1>
      <p className="mt-3 text-sm text-[#96BD9E] sm:text-base">
        A rota que voce tentou acessar nao existe.
      </p>
      <Link className="mt-6 inline-block underline underline-offset-4" to="/">
        Voltar para a pagina inicial
      </Link>
    </main>
  )
}
