'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger animation for lists
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerChild = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1
  }
}