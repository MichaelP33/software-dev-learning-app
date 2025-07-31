'use client'

import { BookOpen, TrendingUp, Target } from 'lucide-react'
import { getAllCategories, calculateCategoryProgress, getCompletionPercentage } from '@/lib/data'

import { PageTransition } from '@/components/page-transition'
import { FloatingCard } from '@/components/animated-card'
import { CategoryCardClient } from '@/components/category-card-client'
import { motion } from 'framer-motion'

// Gradient presets for category cards
const gradientPresets = [
  'from-purple-500 to-pink-500', // Purple to Pink
  'from-blue-500 to-cyan-500',   // Blue to Cyan  
  'from-orange-500 to-red-500',  // Orange to Red
  'from-green-500 to-teal-500',  // Green to Teal
  'from-indigo-500 to-purple-500', // Indigo to Purple
  'from-pink-500 to-rose-500',   // Pink to Rose
]

function getCardGradient(index: number): string {
  return gradientPresets[index % gradientPresets.length]
}

export default function HomePage() {
  const categories = getAllCategories()
  
  // Calculate overall stats
  const totalArticles = categories.reduce((sum, cat) => {
    const progress = calculateCategoryProgress(cat)
    return sum + progress.total
  }, 0)
  
  const completedArticles = categories.reduce((sum, cat) => {
    const progress = calculateCategoryProgress(cat)
    return sum + progress.completed
  }, 0)
  
  // Removed inProgressArticles as it's no longer needed
  
  const overallCompletion = totalArticles > 0 ? Math.round((completedArticles / totalArticles) * 100) : 0

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header - Theme-aware Cursor-style gradient background */}
      <header className="relative overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-8 mt-4 header-gradient">
        {/* Light mode gradient overlay */}
        <div className="absolute inset-0 dark:hidden" style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 0.45) 0%, transparent 60%),
            radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0.4) 0%, transparent 55%),
            radial-gradient(circle at 0% 100%, rgba(0, 0, 0, 0.42) 0%, transparent 58%),
            radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.38) 0%, transparent 55%),
            radial-gradient(circle at 15% 15%, rgba(88, 28, 135, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 85% 20%, rgba(12, 74, 110, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 20% 85%, rgba(190, 24, 93, 0.48) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.45) 0%, transparent 50%),
            radial-gradient(circle at 30% 60%, rgba(0, 0, 0, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 70% 40%, rgba(0, 0, 0, 0.32) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.25) 0%, transparent 60%),
            linear-gradient(135deg, 
              #7c3aed 0%,     /* purple start */
              #be185d 25%,    /* pink */
              #ea580c 50%,    /* orange */
              #eab308 65%,    /* yellow */
              #059669 80%,    /* green */
              #0c4a6e 100%    /* dark blue end */
            )
          `,
          filter: 'blur(0.5px) contrast(1.1)'
        }} />
        
        {/* Dark mode gradient overlay */}
        <div className="absolute inset-0 hidden dark:block" style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 55%),
            radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.09) 0%, transparent 58%),
            radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.07) 0%, transparent 55%),
            radial-gradient(circle at 15% 15%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 85% 20%, rgba(59, 130, 246, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 20% 85%, rgba(236, 72, 153, 0.38) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.35) 0%, transparent 50%),
            radial-gradient(circle at 30% 60%, rgba(255, 255, 255, 0.06) 0%, transparent 45%),
            radial-gradient(circle at 70% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 60%),
            linear-gradient(135deg, 
              #1e1b4b 0%,     /* dark purple start */
              #581c87 25%,    /* dark magenta */
              #7c2d12 50%,    /* dark orange */
              #713f12 65%,    /* dark yellow */
              #14532d 80%,    /* dark green */
              #0c4a6e 100%    /* dark blue end */
            )
          `,
          filter: 'blur(0.5px) contrast(1.2)'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          
          <div className="text-center">
            {/* Enhanced H1 with white text on gradient background */}
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Learn Code
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto font-extralight leading-relaxed drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Master essential software development concepts
            </motion.p>
            
            {/* Minimalist Proficiency Arc */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative w-32 h-20 mb-3">
                {/* Background arc */}
                <svg className="w-full h-full" viewBox="0 0 128 72">
                  <path
                    d="M 16 56 A 32 32 0 0 1 112 56"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Progress arc */}
                  <path
                    d="M 16 56 A 32 32 0 0 1 112 56"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${(overallCompletion / 100) * 150.8} 150.8`}
                    className="drop-shadow"
                  />
                </svg>
                {/* Percentage text */}
                <div className="absolute inset-0 flex items-end justify-center pb-1">
                  <span className="text-sm font-semibold text-white/90 drop-shadow">
                    {overallCompletion}%
                  </span>
                </div>
              </div>
              <span className="text-sm text-white/80 font-medium drop-shadow">
                Proficiency
              </span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Categories Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Learning Categories
        </motion.h2>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          {categories.map((category, index) => {
            const progress = calculateCategoryProgress(category)
            const completionPercentage = getCompletionPercentage(progress)
            const gradient = getCardGradient(index)
            
            return (
              <CategoryCardClient
                key={category.id}
                category={category}
                index={index}
                progress={progress}
                completionPercentage={completionPercentage}
                gradient={gradient}
              />
            )
          })}
        </motion.div>

        {/* Quick Stats Footer */}
        <div className="mt-16 text-center">
          <FloatingCard 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg max-w-2xl mx-auto"
            delay={15}
          >
            <motion.h3 
              className="text-xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Your Learning Journey
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.div 
                className="flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{categories.length} Categories</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Learning Paths</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{categories.reduce((sum, cat) => sum + cat.topics.length, 0)} Topics</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Skill Areas</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{overallCompletion}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Complete</div>
                </div>
              </motion.div>
            </motion.div>
          </FloatingCard>
        </div>
      </main>
      


    </div>
    </PageTransition>
  )
}