'use client'

import { motion } from 'framer-motion'

interface QuizProgressProps {
  currentQuestion: number
  totalQuestions: number
  score: number
  totalPossible: number
  title: string
}

export default function QuizProgress({ 
  currentQuestion, 
  totalQuestions, 
  score, 
  totalPossible, 
  title 
}: QuizProgressProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100
  const scorePercentage = totalPossible > 0 ? (score / totalPossible) * 100 : 0

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Question {currentQuestion} of {totalQuestions}
          </p>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {score}/{totalPossible}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(scorePercentage)}% Score
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Progress</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
    </div>
  )
}