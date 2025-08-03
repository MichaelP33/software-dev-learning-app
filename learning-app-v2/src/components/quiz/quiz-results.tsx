'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { QuizAnswer, QuizQuestion } from '@/types'
import { QuizHighScores } from '@/lib/data'
import { TrendingUp } from 'lucide-react'
import { AnimatedCard, FloatingCard } from '@/components/animated-card'

interface QuizResultsProps {
  score: number
  totalPossible: number
  percentage: number
  answers: QuizAnswer[]
  questions: QuizQuestion[]
  onRetake: () => void
  onResetScores: () => void
  articleId: string
  highScores?: QuizHighScores | null
}

export default function QuizResults({
  score,
  totalPossible,
  percentage,
  answers,
  questions,
  onRetake,
  onResetScores,
  articleId,
  highScores
}: QuizResultsProps) {
  const getQuestionTypeStats = () => {
    const stats = {
      'multiple-choice': { correct: 0, total: 0, points: 0, possible: 0 },
      'fill-in-blank': { correct: 0, total: 0, points: 0, possible: 0 },
      'short-answer': { correct: 0, total: 0, points: 0, possible: 0 },
      'long-answer': { correct: 0, total: 0, points: 0, possible: 0 }
    }

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId)
      if (!question) return

      const type = answer.type
      stats[type].total++
      stats[type].points += answer.pointsEarned
      stats[type].possible += question.points

      if (answer.isCorrect || (answer.selfAssessment === 'nailed-it')) {
        stats[type].correct++
      }
    })

    return stats
  }

  const stats = getQuestionTypeStats()

  // Millennial dad energy performance messages
  const getPerformanceMessage = () => {
    if (percentage >= 90) {
      return {
        emoji: '🔥',
        title: 'Absolutely crushing it!',
        subtitle: 'That\'s what I\'m talking about!'
      }
    } else if (percentage >= 80) {
      return {
        emoji: '💪',
        title: 'Nice work, champ!',
        subtitle: 'Looking solid out there!'
      }
    } else if (percentage >= 70) {
      return {
        emoji: '🌊',
        title: 'You\'re finding your groove',
        subtitle: 'Solid effort, let\'s build on this'
      }
    } else if (percentage >= 60) {
      return {
        emoji: '🤔',
        title: 'Let\'s take another swing at this',
        subtitle: 'Time to regroup and try again'
      }
    } else {
      return {
        emoji: '🤝',
        title: 'Hey, we all start somewhere!',
        subtitle: 'Every pro was once a beginner'
      }
    }
  }

  const getPerformanceColor = () => {
    if (percentage >= 90) return 'from-yellow-500 to-orange-500'
    if (percentage >= 80) return 'from-green-500 to-emerald-500'
    if (percentage >= 70) return 'from-blue-500 to-cyan-500'
    if (percentage >= 60) return 'from-yellow-500 to-amber-500'
    return 'from-red-500 to-rose-500'
  }

  const performanceMessage = getPerformanceMessage()

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{performanceMessage.emoji}</span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {performanceMessage.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {performanceMessage.subtitle}
          </p>
        </div>
        
        <Link
          href={`/article/${articleId}`}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          ✕
        </Link>
      </div>

      {/* Main Score Card */}
      <AnimatedCard className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-xl text-center">
        <div className="mb-6">
          <div className="text-7xl font-bold text-gray-900 dark:text-white mb-3">
            {percentage}%
          </div>
          <div className="text-xl text-gray-600 dark:text-gray-400">
            {score} out of {totalPossible} points
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6 overflow-hidden">
          <motion.div
            className={`h-4 rounded-full bg-gradient-to-r ${getPerformanceColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="text-lg text-gray-600 dark:text-gray-400">
          Great work on this quiz! 
          {percentage >= 80 && " You're really getting the hang of this."}
          {percentage < 80 && percentage >= 60 && " Keep pushing forward!"}
          {percentage < 60 && " Let's review and try again."}
        </div>
      </AnimatedCard>

      {/* High Score Comparison */}
      {highScores && (
        <FloatingCard 
          delay={1}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Performance Comparison
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-600/50">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {percentage}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                This Attempt
              </div>
            </div>
            
            <div className="text-center p-4 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {Math.round(highScores.bestOverallPercentage)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Personal Best
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-600/50">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {highScores.totalAttempts}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Attempts
              </div>
            </div>
          </div>
          
          {percentage > highScores.bestOverallPercentage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-3 bg-green-50/80 dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <span className="text-lg">🎉</span>
                <span className="font-medium">New Personal Best!</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                You improved by {Math.round(percentage - highScores.bestOverallPercentage)}% - that&apos;s the spirit!
              </p>
            </motion.div>
          )}
        </FloatingCard>
      )}

      {/* Breakdown by Question Type */}
      <FloatingCard 
        delay={2}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          How You Did by Question Type
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(stats).map(([type, data], index) => {
            if (data.total === 0) return null
            
            const typeInfo = {
              'multiple-choice': { emoji: '📋', label: 'Multiple Choice', color: 'blue' },
              'fill-in-blank': { emoji: '🔤', label: 'Fill in Blank', color: 'orange' },
              'short-answer': { emoji: '✏️', label: 'Short Answer', color: 'green' },
              'long-answer': { emoji: '📝', label: 'Long Answer', color: 'purple' }
            }

            const info = typeInfo[type as keyof typeof typeInfo]
            const typePercentage = data.possible > 0 ? Math.round((data.points / data.possible) * 100) : 0

            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-4 rounded-xl border bg-${info.color}-50/80 dark:bg-${info.color}-900/20 border-${info.color}-200/50 dark:border-${info.color}-700/50 backdrop-blur-sm hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{info.emoji}</span>
                  <div className={`text-2xl font-bold text-${info.color}-600 dark:text-${info.color}-400`}>
                    {typePercentage}%
                  </div>
                </div>
                <div className={`text-sm font-medium text-${info.color}-700 dark:text-${info.color}-300 mb-1`}>
                  {info.label}
                </div>
                <div className={`text-xs text-${info.color}-600 dark:text-${info.color}-400`}>
                  {data.points}/{data.possible} pts
                </div>
              </motion.div>
            )
          })}
        </div>
      </FloatingCard>



      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.button
          onClick={onRetake}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-gradient-to-b from-white/95 to-white/85 dark:from-gray-800/95 dark:to-gray-800/85 backdrop-blur-md rounded-xl font-medium transition-all duration-200 shadow-lg border border-blue-300/50 dark:border-blue-600/50 text-blue-700 dark:text-blue-300 hover:shadow-xl hover:from-blue-50/95 dark:hover:from-blue-900/20 hover:border-blue-400/70 dark:hover:border-blue-500/70 shadow-inner"
        >
          Retake Quiz
        </motion.button>

        {highScores && highScores.totalAttempts > 0 && (
          <motion.button
            onClick={onResetScores}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-b from-white/95 to-white/85 dark:from-gray-800/95 dark:to-gray-800/85 backdrop-blur-md rounded-xl font-medium transition-all duration-200 shadow-lg border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:shadow-xl hover:from-gray-50/95 dark:hover:from-gray-700/20 hover:border-gray-400/70 dark:hover:border-gray-500/70 shadow-inner"
          >
            Reset Progress
          </motion.button>
        )}

        <motion.div
          className="w-full sm:w-auto"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={`/article/${articleId}`}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-b from-white/95 to-white/85 dark:from-gray-800/95 dark:to-gray-800/85 backdrop-blur-md rounded-xl font-medium transition-all duration-200 shadow-lg border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:shadow-xl hover:from-gray-50/95 dark:hover:from-gray-700/20 hover:border-gray-400/70 dark:hover:border-gray-500/70 shadow-inner inline-block text-center"
          >
            Back to Article
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}