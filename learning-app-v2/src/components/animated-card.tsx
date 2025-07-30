'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  href?: string
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.5,
          delay: delay * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating animation component
export function FloatingCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileHover={{ 
        y: -6,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Progress bar animation
export function AnimatedProgressBar({ 
  percentage, 
  gradient, 
  delay = 0 
}: { 
  percentage: number
  gradient: string
  delay?: number 
}) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div 
        className={`h-full bg-gradient-to-r ${gradient}`}
        initial={{ width: 0 }}
        animate={{ 
          width: `${percentage}%`,
          transition: {
            duration: 1.2,
            delay: delay * 0.1 + 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
      />
    </div>
  )
}

// Counter animation
export function AnimatedCounter({ 
  value, 
  className = "",
  delay = 0 
}: { 
  value: number
  className?: string
  delay?: number 
}) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: delay * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { duration: 0.3, delay: delay * 0.1 + 0.3 }
        }}
      >
        {value}
      </motion.span>
    </motion.div>
  )
}