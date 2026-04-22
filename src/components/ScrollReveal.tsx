import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
}

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    // Robust range: starts when the element enters viewport and completes while it crosses it.
    offset: ['start end', 'end start'],
  })

  // Smooth the raw progress so reveal feels fluid and premium.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 190,
    damping: 90,
    mass: 0.50,
  })

  // Increase perceived contrast earlier in the reveal.
  const opacity = useTransform(smoothProgress, [0, 0.12, 0.4, 1], [0, 0.72, 0.94, 1])
  const y = useTransform(smoothProgress, [0, 0.5], [250, 0])

  // SSR-safe: render static content on server/first paint to avoid hydration mismatch.
  const shouldAnimate = isMounted

  return (
    <div ref={ref} className={`relative ${className ?? ''}`}>
      <motion.div style={shouldAnimate ? { opacity, y } : undefined}>
        {children}
      </motion.div>
    </div>
  )
}
