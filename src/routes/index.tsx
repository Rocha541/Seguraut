import AboutSection from '#/components/AboutSection'
import Header from '#/components/Header'
import SolutionsSection from '#/components/SolutionsSection'
import { Button } from '#/components/ui/button'
import { useGSAP } from '@gsap/react'
import { createFileRoute } from '@tanstack/react-router'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck } from 'lucide-react'
import { useRef, useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const pageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const smoothWrapperRef = useRef<HTMLDivElement>(null)
  const smoothContentRef = useRef<HTMLDivElement>(null)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const preloaderLogoRef = useRef<HTMLImageElement>(null)
  const smootherRef = useRef<ScrollSmoother | null>(null)
  const heroShadeRef = useRef<HTMLDivElement>(null)
  const aboutWrapRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!heroRef.current || !heroContentRef.current) return
      if (!heroShadeRef.current || !aboutWrapRef.current) return
      if (!smoothWrapperRef.current || !smoothContentRef.current) return

      const aboutContent = aboutWrapRef.current.querySelector('section > div')
      if (!aboutContent) return

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      ScrollSmoother.get()?.kill()
      const smoother = prefersReducedMotion
        ? null
        : ScrollSmoother.create({
            wrapper: smoothWrapperRef.current,
            content: smoothContentRef.current,
            smooth: 1.08,
            smoothTouch: 0.12,
            normalizeScroll: true,
          })
      smootherRef.current = smoother

      const mm = gsap.matchMedia()

      if (prefersReducedMotion) {
        gsap.set(heroShadeRef.current, { opacity: 0.16 })
        gsap.set(aboutWrapRef.current, {
          yPercent: 0,
          opacity: 1,
          clearProps: 'transform',
        })
        gsap.set(aboutContent, { y: 0, opacity: 1, clearProps: 'transform' })
      } else {
        const createSectionTransition = (config: {
          start: string
          end: string
          scrub: number
          heroYPercent: number
          heroScale: number
          aboutStartYPercent: number
          aboutStartOpacity: number
          aboutContentStartY: number
          aboutContentStartOpacity: number
          shadeOpacity: number
        }) => {
          gsap.set(aboutWrapRef.current, {
            yPercent: config.aboutStartYPercent,
            opacity: config.aboutStartOpacity,
          })
          gsap.set(aboutContent, {
            y: config.aboutContentStartY,
            opacity: config.aboutContentStartOpacity,
          })
          gsap.set(heroShadeRef.current, { opacity: 0 })
          gsap.set(heroContentRef.current, { yPercent: 0, scale: 1 })

          gsap
            .timeline({
              scrollTrigger: {
                trigger: aboutWrapRef.current,
                start: config.start,
                end: config.end,
                scrub: config.scrub,
                invalidateOnRefresh: true,
              },
            })
            .to(
              heroShadeRef.current,
              { opacity: config.shadeOpacity, ease: 'none' },
              0,
            )
            .to(
              heroContentRef.current,
              {
                yPercent: config.heroYPercent,
                scale: config.heroScale,
                transformOrigin: '50% 0%',
                ease: 'none',
                force3D: true,
              },
              0,
            )
            .to(
              aboutWrapRef.current,
              { yPercent: 0, opacity: 1, ease: 'none', force3D: true },
              0,
            )
            .to(
              aboutContent,
              { y: 0, opacity: 1, ease: 'none', force3D: true },
              0,
            )
        }

        mm.add('(max-width: 767px)', () => {
          createSectionTransition({
            start: 'top 96%',
            end: 'top 44%',
            scrub: -10,
            heroYPercent: -20,
            heroScale: 0.985,
            aboutStartYPercent: 32,
            aboutStartOpacity: 0.9,
            aboutContentStartY: 36,
            aboutContentStartOpacity: 0.1,
            shadeOpacity: 0.24,
          })
        })

        mm.add('(min-width: 768px)', () => {
          createSectionTransition({
            start: 'top 94%',
            end: 'top 28%',
            scrub: 1.15,
            heroYPercent: -12,
            heroScale: 0.95,
            aboutStartYPercent: 16,
            aboutStartOpacity: 0.88,
            aboutContentStartY: 52,
            aboutContentStartOpacity: 0.78,
            shadeOpacity: 0.34,
          })
        })
      }

      gsap.set(preloaderLogoRef.current, { opacity: 0, scale: 0.86 })

      gsap
        .timeline()
        .to(preloaderLogoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.1,
          ease: 'power3.out',
        })
        .to(preloaderLogoRef.current, {
          scale: 0.96,
          duration: 0.4,
          ease: 'power2.inOut',
        })
        .to(
          preloaderRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => setIsLoading(false),
          },
          '-=0.12',
        )

      return () => {
        mm.revert()
        smoother?.kill()
        smootherRef.current = null
      }
    },
    { scope: pageRef },
  )

  return (
    <div ref={pageRef}>
      {isLoading ? (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
          aria-hidden="true"
        >
          <img
            ref={preloaderLogoRef}
            src="/website/public/logo.svg"
            alt=""
            className="h-24 w-24 md:h-32 md:w-32"
          />
        </div>
      ) : null}

      <div id="smooth-wrapper" ref={smoothWrapperRef}>
        <div id="smooth-content" ref={smoothContentRef}>
          <main
            ref={heroRef}
            id="home"
            className="page-wrap relative h-screen overflow-hidden bg-[#060E09]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/image-condominio.png')",
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
              ref={heroShadeRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] bg-[#060E09] opacity-0"
            />

            <div
              ref={heroContentRef}
              className="relative z-10 will-change-transform"
              style={{ willChange: 'transform' }}
            >
              <div className="relative z-10">
                <Header />
              </div>

              <section className="relative z-10 flex flex-col gap-10 pt-20 lg:flex-row lg:items-center">
                <div className="w-full lg:w-2/3">
                  <h1 className="text-4xl xl:max-w-9/10 font-bold leading-tight tracking-[1.2px] text-[#DEE8D9] sm:text-5xl xl:text-7xl lg:leading-none lg:tracking-[2.4px]">
                    Por que condominios escolhem a Seguraut
                  </h1>

                  <p className="mt-4 text-base font-light text-[#DEE8D9] sm:text-lg xl:mt-8 xl:max-w-6/10 xl:text-xl">
                    Agende um diagnostico e receba uma proposta alinhada a
                    realidade do seu condominio, sem complexidade desnecessaria.
                  </p>

                  <div className="mt-6 space-y-3 text-base font-extralight text-[#DEE8D9] sm:text-lg xl:mt-16">
                    <p className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-50" />
                      <span>
                        Implantacao planejada para a rotina do condominio
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-50" />
                      <span>
                        Equipe tecnica especializada em ambiente condominial
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-50" />
                      <span>
                        Operacao continua com acompanhamento e ajustes
                      </span>
                    </p>
                  </div>

                  <div
                    id="contato"
                    className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
                  >
                    <Button
                      className="hover:bg-primary hover:text-background "
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
                      Pedir orcamento
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </main>

          <div
            ref={aboutWrapRef}
            className="relative z-20 bg-[#d3fad2] will-change-transform"
            style={{ willChange: 'transform, opacity' }}
          >
            <AboutSection id="about" />
          </div>

          <SolutionsSection id="solucoes" />
        </div>
      </div>
    </div>
  )
}

