import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 36,
    mass: 0.35,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-[80] h-[3px] origin-left bg-[#51c057]"
      style={{ scaleX }}
    />
  )
}
