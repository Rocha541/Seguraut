import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  amount?: number
}

const directionOffset = {
  up: { x: 0, y: 34 },
  down: { x: 0, y: -34 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 34,
  direction = 'up',
  amount = 0.22,
}: ScrollRevealProps) {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const offset = directionOffset[direction]
  const x = offset.x === 0 ? 0 : Math.sign(offset.x) * distance
  const y = offset.y === 0 ? 0 : Math.sign(offset.y) * distance
  const visible = { opacity: 1, x: 0, y: 0 }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isMounted && prefersReducedMotion ? visible : undefined}
      whileInView={isMounted && !prefersReducedMotion ? visible : undefined}
      viewport={{ once: true, amount, margin: '0px 0px -12% 0px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
