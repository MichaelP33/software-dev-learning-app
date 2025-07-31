'use client'

import { motion } from 'framer-motion'
import { QuizQuestion } from '@/types'
import { CheckCircle, XCircle } from 'lucide-react'

interface MultipleChoiceQuestionProps {
  question: QuizQuestion
  selectedAnswer?: number
  onAnswer: (answer: number) => void
  showResult: boolean
}

export default function MultipleChoiceQuestion({
  question,
  selectedAnswer,
  onAnswer,
  showResult
}: MultipleChoiceQuestionProps) {
  const correctAnswer = question.correctAnswer

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index
        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-600'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
    }

    // Show results
    if (index === correctAnswer) {
      return 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600'
    } else if (selectedAnswer === index && index !== correctAnswer) {
      return 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600'
    } else {
      return 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
    }
  }

  const getOptionIcon = (index: number) => {
    if (!showResult) return null

    if (index === correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
    } else if (selectedAnswer === index && index !== correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
    }
    return null
  }

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300">
            Multiple Choice
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
            {question.difficulty}
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300">
            {question.points} points
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => !showResult && onAnswer(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${getOptionStyle(index)}`}
              whileHover={!showResult ? { scale: 1.01 } : {}}
              whileTap={!showResult ? { scale: 0.99 } : {}}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {String.fromCharCode(65 + index)})
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {option}
                  </span>
                </div>
                {getOptionIcon(index)}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Additional Context (shown after answering) */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50"
        >
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Explanation
          </h4>
          <p className="text-blue-800 dark:text-blue-200 mb-4 leading-relaxed">
            {question.additionalContext}
          </p>
          
          <div className="border-t border-blue-200 dark:border-blue-700 pt-4">
            <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Key Concepts:
            </h5>
            <div className="flex flex-wrap gap-2">
              {question.keyConcepts.map((concept, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}