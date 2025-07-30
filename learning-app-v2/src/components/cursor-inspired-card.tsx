'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface CursorInspiredCardProps {
  children: ReactNode
  className?: string
}

export function CursorInspiredCard({ 
  children, 
  className = ""
}: CursorInspiredCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative rounded-2xl transition-all duration-400 ease-out ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* SUPER SIMPLE SOLID GRADIENT BORDER - guaranteed to work */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none p-[2px]"
        style={{
          background: `linear-gradient(45deg, 
            #9333ea 0%, 
            #db2777 25%, 
            #3b82f6 50%, 
            #10b981 75%, 
            #9333ea 100%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      >
        {/* Inner solid background */}
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[14px]" />
      </motion.div>

      {/* Card Content Container */}
      <div className="relative z-20 m-[2px] rounded-[14px] bg-white dark:bg-gray-800 transition-all duration-400 ease-out overflow-hidden">
        {/* Subtle Gradient Overlay - Now positioned INSIDE the card for visibility */}
        <motion.div
          className="absolute inset-0 rounded-[14px] pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(147, 51, 234, 0.03) 0%, 
              rgba(219, 39, 119, 0.02) 25%, 
              rgba(59, 130, 246, 0.03) 50%, 
              rgba(16, 185, 129, 0.02) 75%, 
              rgba(245, 158, 11, 0.01) 100%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
        />

        {/* Top Edge Accent */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[14px] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, 
              rgba(147, 51, 234, 0.4) 0%, 
              rgba(219, 39, 119, 0.4) 25%, 
              rgba(59, 130, 246, 0.4) 50%, 
              rgba(16, 185, 129, 0.4) 75%, 
              rgba(245, 158, 11, 0.4) 100%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        />

        {/* Corner Gradient Accent */}
        <motion.div 
          className="absolute top-0 right-0 w-12 h-12 pointer-events-none rounded-tr-[14px]"
          style={{
            background: `radial-gradient(circle at top right, 
              rgba(147, 51, 234, 0.1) 0%, 
              rgba(219, 39, 119, 0.05) 40%, 
              transparent 70%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
        />

        {/* Card Content */}
        <div className="relative z-20 w-full h-full">
          {children}
        </div>
      </div>

      {/* Enhanced Shadow with Gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? '0 20px 40px -12px rgba(147, 51, 234, 0.15), 0 8px 16px -8px rgba(219, 39, 119, 0.2), 0 0 0 1px rgba(255,255,255,0.05)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  )
}

// Helper function to get a consistent gradient for each card index (moved to server-side)
// This is now handled in the server component to avoid SSR issues