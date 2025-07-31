'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { getCategoryHoverGradient, getCategoryShadowColor, CURSOR_INSPIRED_GRADIENT, CURSOR_INSPIRED_OVERLAY } from '@/lib/gradients'

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
  
  // Helper function to convert Tailwind gradient to CSS colors
  const getGradientColors = (gradient: string) => {
    const colorMap: Record<string, string> = {
      'blue-500': '59, 130, 246', 'cyan-500': '6, 182, 212',
      'blue-600': '37, 99, 235', 'cyan-600': '8, 145, 178',
      'purple-500': '147, 51, 234', 'pink-500': '236, 72, 153',
      'purple-600': '126, 34, 206', 'pink-600': '219, 39, 119',
      'green-500': '34, 197, 94', 'emerald-500': '16, 185, 129',
      'green-600': '22, 163, 74', 'emerald-600': '5, 150, 105',
      'orange-500': '249, 115, 22', 'red-500': '239, 68, 68',
      'orange-600': '234, 88, 12', 'red-600': '220, 38, 38',
      'indigo-500': '99, 102, 241', 'indigo-600': '79, 70, 229',
      'teal-500': '20, 184, 166', 'teal-600': '13, 148, 136',
      'rose-500': '244, 63, 94', 'rose-600': '225, 29, 72'
    };
    
    const [from, to] = gradient.replace('from-', '').replace(' to-', ' ').split(' ');
    return {
      from: colorMap[from] || '147, 51, 234',
      to: colorMap[to] || '219, 39, 119'
    };
  };

  // Use category-specific gradient if categoryId is provided, otherwise use default
  const gradientColors = categoryId ? getGradientColors(getCategoryHoverGradient(categoryId)) : null;
  
  const borderGradient = gradientColors 
    ? `linear-gradient(45deg, rgb(${gradientColors.from}) 0%, rgb(${gradientColors.to}) 100%)` 
    : CURSOR_INSPIRED_GRADIENT
    
  const overlayGradient = gradientColors
    ? `linear-gradient(135deg, rgba(${gradientColors.from}, 0.03) 0%, rgba(${gradientColors.to}, 0.02) 100%)`
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

      {/* Card Content Container */}
      <div className="relative z-20 m-[2px] rounded-[14px] bg-white dark:bg-gray-800 transition-all duration-400 ease-out overflow-hidden">
        {/* Subtle Gradient Overlay - Now positioned INSIDE the card for visibility */}
        <motion.div
          className="absolute inset-0 rounded-[14px] pointer-events-none"
          style={{
            background: overlayGradient
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
            background: gradientColors 
              ? `linear-gradient(90deg, rgba(${gradientColors.from}, 0.4) 0%, rgba(${gradientColors.to}, 0.4) 100%)`
              : `linear-gradient(90deg, 
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
            background: gradientColors
              ? `radial-gradient(circle at top right, 
                  rgba(${gradientColors.from}, 0.1) 0%, 
                  rgba(${gradientColors.to}, 0.05) 40%, 
                  transparent 70%)`
              : `radial-gradient(circle at top right, 
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
            ? `0 20px 40px -12px ${shadowColor}, 0 8px 16px -8px rgba(219, 39, 119, 0.2), 0 0 0 1px rgba(255,255,255,0.05)`
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  )
}

// Helper function to get a consistent gradient for each card index (moved to server-side)
// This is now handled in the server component to avoid SSR issues