import AboutSection from '#/components/AboutSection'
import BenefitsSection from '#/components/BenefitsSection'
import DiagnosticSection from '#/components/DiagnosticSection'
import DifferentialsSection from '#/components/DifferentialsSection'
import FAQSection from '#/components/FAQSection'
import Footer from '#/components/Footer'
import Header from '#/components/Header'
import MethodologySection from '#/components/MethodologySection'
import SolutionsSection from '#/components/SolutionsSection'
import TestimonialSection from '#/components/TestimonialSection'
import { Button } from '#/components/ui/button'
import { premiumEase, useShouldReduceMotion } from '#/lib/motion'
import { createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

const heroContentVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.12,
    },
  },
}

const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.78,
      ease: premiumEase,
    },
  },
}

const statVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: premiumEase,
    },
  },
}

function App() {
  const [isMounted, setIsMounted] = useState(false)
  const heroStackRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useShouldReduceMotion()
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const { scrollYProgress: heroStackProgress } = useScroll({
    target: heroStackRef,
    offset: ['start start', 'end start'],
  })
  const heroImageY = useTransform(heroScrollProgress, [0, 1], ['0%', '12%'])
  const heroImageScale = useTransform(heroScrollProgress, [0, 1], [1, 1.08])
  const heroOverlayOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0.78])
  const heroBlurOpacity = useTransform(heroStackProgress, [0.34, 0.58], [0, 1])
  const aboutPanelY = useTransform(heroStackProgress, [0.24, 0.58], [90, 0])
  const aboutPanelScale = useTransform(
    heroStackProgress,
    [0.24, 0.58],
    [0.985, 1],
  )
  const shouldAnimate = isMounted && !prefersReducedMotion

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section ref={heroStackRef} className="relative isolate bg-[#060e09]">
            <main
              id="home"
              ref={heroRef}
              className="sticky top-0 z-0 flex min-h-screen min-h-[100dvh] flex-col overflow-hidden"
            >
              <motion.img
                aria-hidden="true"
                src="/figma/condocamera.png"
                alt=""
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="absolute inset-0 h-full w-full object-cover object-center"
                style={{
                  y: shouldAnimate ? heroImageY : 0,
                  scale: shouldAnimate ? heroImageScale : 1,
                }}
              />

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1] bg-[#0000004a]"
                style={{ opacity: shouldAnimate ? heroOverlayOpacity : 1 }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(96deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.68)_30%,rgba(0,0,0,0.38)_48%,rgba(0,0,0,0.06)_72%,rgba(0,0,0,0)_100%)]"
              />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[15] bg-[#060e09]/42 backdrop-blur-md"
                style={{ opacity: shouldAnimate ? heroBlurOpacity : 0 }}
              />

              <div className="relative z-20">
                <Header />
              </div>

              <div className="page-wrap relative z-20 flex flex-1 flex-col">
                <motion.section
                  className="relative z-20 flex w-full flex-1 flex-col gap-8 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:flex-row lg:items-center lg:gap-10 lg:pt-24 lg:pb-20"
                  variants={heroContentVariants}
                  initial="hidden"
                  animate={isMounted ? 'visible' : 'hidden'}
                >
                  <div className="w-full lg:w-2/3 xl:w-3/5">
                    <motion.h1
                      className="text-4xl font-extrabold leading-tight tracking-[1.2px] text-[#edf8e9] sm:text-5xl lg:text-6xl lg:leading-none lg:tracking-[2.4px] xl:max-w-9/10"
                      variants={heroItemVariants}
                    >
                      Segurança inteligente para condomínios
                    </motion.h1>

                    <motion.p
                      className="mt-4 text-base font-light text-[#e8f2e4] sm:text-lg xl:mt-8 xl:max-w-6/10 xl:text-xl"
                      variants={heroItemVariants}
                    >
                      Monitoramento, controle de acesso e segurança eletrônica
                      para{' '}
                      <span className="font-semibold">
                        reduzir riscos sem complicar a gestão.
                      </span>
                    </motion.p>

                    <motion.div
                      className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
                      variants={heroItemVariants}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-[#51c057] text-[#102719] hover:bg-white hover:text-[#071402] sm:w-auto"
                      >
                        <a href="/#contato">Falar com a Seguraut</a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full border-[#d3fad2] bg-transparent text-[#edf8e9] hover:bg-white hover:text-[#071402] sm:w-auto"
                      >
                        <a href="/#contato">Solicitar proposta</a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.section>
              </div>

              <div
                id="blur-hero"
                className="relative z-10 mt-auto w-full overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-0 left-0 z-20 h-px bg-[linear-gradient(to_right,rgba(211,250,210,0)_0%,rgba(211,250,210,0.5)_20%,rgba(211,250,210,0.8)_50%,rgba(211,250,210,0.5)_80%,rgba(211,250,210,0)_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 backdrop-blur-sm"
                />
                <motion.div
                  className="page-wrap relative z-10 grid grid-cols-1 gap-6 py-6 text-background sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:py-8"
                  initial="hidden"
                  whileInView={isMounted ? 'visible' : 'hidden'}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  <motion.div variants={statVariants}>
                    <span className="text-4xl font-semibold">+10</span>
                    <p className="text-xl sm:text-2xl">Condomínios atendidos</p>
                  </motion.div>
                  <motion.div variants={statVariants}>
                    <span className="text-4xl font-semibold">+500</span>
                    <p className="text-xl sm:text-2xl">Moradores protegidos</p>
                  </motion.div>
                  <motion.div variants={statVariants}>
                    <span className="text-4xl font-semibold">24h</span>
                    <p className="text-xl sm:text-2xl">Segurança inteligente</p>
                  </motion.div>
                </motion.div>
              </div>
            </main>

            <motion.div
              className="relative z-30 min-h-screen bg-[#d3fad2] shadow-[0_-36px_90px_rgba(6,14,9,0.42)]"
              style={{
                y: shouldAnimate ? aboutPanelY : 0,
                scale: shouldAnimate ? aboutPanelScale : 1,
              }}
            >
              <AboutSection id="about" />
            </motion.div>
          </section>

          <SolutionsSection id="solucoes" />
          <TestimonialSection />
          <MethodologySection />
          <DifferentialsSection id="diferenciais" />

          <BenefitsSection />
          <DiagnosticSection />
          <FAQSection />
          <Footer />
        </div>
      </div>
    </div>
  )
}
