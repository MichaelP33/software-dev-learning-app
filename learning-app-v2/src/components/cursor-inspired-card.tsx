'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { getCategoryHoverGradient, getCategoryShadowColor, CURSOR_INSPIRED_GRADIENT, CURSOR_INSPIRED_OVERLAY } from '@/lib/gradients'
import { createLinearGradient, createOverlayGradient } from '@/lib/utils/colors'

interface CursorInspiredCardProps {
  children: ReactNode
  className?: string
  categoryId?: string // Optional category ID for category-specific gradients
}

export function CursorInspiredCard({ 
  children, 
  className = "",
  categoryId
}: CursorInspiredCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Use category-specific gradient if categoryId is provided, otherwise use default
  const borderGradient = categoryId 
    ? createLinearGradient(getCategoryHoverGradient(categoryId), 45)
    : CURSOR_INSPIRED_GRADIENT
    
  const overlayGradient = categoryId
    ? createOverlayGradient(getCategoryHoverGradient(categoryId), 135, [0.03, 0.02])
    : CURSOR_INSPIRED_OVERLAY
    
  const shadowColor = categoryId ? getCategoryShadowColor(categoryId) : 'rgba(147, 51, 234, 0.15)'

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
      {/* CATEGORY-AWARE GRADIENT BORDER */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none p-[2px]"
        style={{
          background: borderGradient
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

      {/* SUBTLE CATEGORY-AWARE BACKGROUND OVERLAY */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: overlayGradient
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      />

      {/* CATEGORY-AWARE SHADOW */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: `0 20px 40px -8px ${shadowColor}`
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      />

      {/* CONTENT CONTAINER */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden h-full">
        {children}
      </div>
    </motion.div>
  )
}