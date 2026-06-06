import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { MotionConfig } from 'framer-motion'

import appCss from '../styles.css?url'

const SITE_URL = 'https://seguraut.com.br'
const SITE_TITLE = 'Segurança para Condomínios | Portaria, CFTV e Acesso'
const SITE_DESCRIPTION =
  'Segurança eletrônica para condomínios com portaria remota, monitoramento 24h, CFTV, alarmes e controle de acesso planejados para reduzir riscos.'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Seguraut',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-seguraut.svg`,
      email: 'contato@seguraut.com.br',
      areaServed: 'Brasil',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Grupo Progresso',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Seguraut',
      inLanguage: 'pt-BR',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      name: 'Segurança eletrônica para condomínios',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      serviceType: [
        'Portaria remota',
        'Monitoramento 24h',
        'Controle de acesso',
        'CFTV',
        'Alarmes',
      ],
      areaServed: 'Brasil',
      audience: {
        '@type': 'Audience',
        audienceType: 'Síndicos, administradoras e condomínios',
      },
    },
  ],
}

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
        title: SITE_TITLE,
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large',
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {
        property: 'og:title',
        content: SITE_TITLE,
      },
      {
        property: 'og:description',
        content: SITE_DESCRIPTION,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: SITE_URL,
      },
      {
        property: 'og:site_name',
        content: 'Seguraut',
      },
      {
        property: 'og:locale',
        content: 'pt_BR',
      },
      {
        property: 'og:image',
        content: `${SITE_URL}/figma/condocamera.png`,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: SITE_TITLE,
      },
      {
        name: 'twitter:description',
        content: SITE_DESCRIPTION,
      },
      {
        name: 'twitter:image',
        content: `${SITE_URL}/figma/condocamera.png`,
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/figma/favicon.png',
      },
      {
        rel: 'shortcut icon',
        href: '/figma/favicon.png',
      },
      {
        rel: 'canonical',
        href: SITE_URL,
      },
      {
        rel: 'preload',
        as: 'image',
        href: '/figma/condocamera.png',
        fetchPriority: 'high',
      },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <HeadContent />
      </head>
      <body className=" " suppressHydrationWarning>
        <MotionConfig reducedMotion={import.meta.env.DEV ? 'never' : 'user'}>
          {children}
        </MotionConfig>

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
        Página não encontrada
      </h1>
      <p className="mt-3 text-sm text-[#96BD9E] sm:text-base">
        A rota que você tentou acessar não existe.
      </p>
      <Link className="mt-6 inline-block underline underline-offset-4" to="/">
        Voltar para a página inicial
      </Link>
    </main>
  )
}
