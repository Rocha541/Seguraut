import type { Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

export const premiumEase = [0.22, 1, 0.36, 1] as const

export const viewportOnce = {
  once: true,
  amount: 0.25,
} as const

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: premiumEase,
    },
  },
  reduced: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
  reduced: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
}

export const copyStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  reduced: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
}

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.64,
      ease: premiumEase,
    },
  }),
  reduced: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0,
    },
  },
}

export const iconReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.44,
      ease: premiumEase,
    },
  },
  reduced: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0,
    },
  },
}

export const scaleReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.97,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      ease: premiumEase,
    },
  },
  reduced: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0,
    },
  },
}

export const accentLineReveal: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.42,
      duration: 0.54,
      ease: premiumEase,
    },
  },
  reduced: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0,
    },
  },
}

export function useShouldReduceMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    if (import.meta.env.DEV || typeof window === 'undefined') {
      setShouldReduceMotion(false)
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setShouldReduceMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => {
      mediaQuery.removeEventListener('change', updatePreference)
    }
  }, [])

  return shouldReduceMotion
}
