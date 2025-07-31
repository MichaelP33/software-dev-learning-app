'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { QuizQuestion } from '@/types'
import SelfAssessmentButtons from './self-assessment-buttons'

interface LongAnswerQuestionProps {
  question: QuizQuestion
  answer?: string
  selfAssessment?: 'nailed-it' | 'mostly-good' | 'not-quite'
  onAnswer: (answer: string, assessment: 'nailed-it' | 'mostly-good' | 'not-quite') => void
  showResult: boolean
}

export default function LongAnswerQuestion({
  question,
  answer = '',
  selfAssessment,
  onAnswer,
  showResult
}: LongAnswerQuestionProps) {
  const [textAnswer, setTextAnswer] = useState(answer)
  const [hasSubmittedText, setHasSubmittedText] = useState(false)

  useEffect(() => {
    if (answer && answer !== textAnswer) {
      setTextAnswer(answer)
      setHasSubmittedText(true)
    }
  }, [answer, textAnswer])

  const handleTextSubmit = () => {
    if (textAnswer.trim()) {
      setHasSubmittedText(true)
    }
  }

  const handleAssessment = (assessment: 'nailed-it' | 'mostly-good' | 'not-quite') => {
    onAnswer(textAnswer, assessment)
  }

  const canSubmitText = textAnswer.trim().length > 0 && !hasSubmittedText
  const showAssessment = hasSubmittedText && !showResult
  const isComplete = hasSubmittedText && selfAssessment

  // Generate medium-level response examples for long answers
  const generateMediumResponse = (strongResponse: string) => {
    if (strongResponse.includes('Go (microservices')) {
      return "Go is for microservices, Rust is for system programming, Java is for enterprise. Companies choose based on what they're building. Some companies like Docker switched to Go."
    }
    if (strongResponse.includes('TAM should discuss')) {
      return "TAMs should talk about costs, which can be expensive, and success rates. Some companies spend a lot on performance issues. Gradual migration is usually better than rewriting everything."
    }
    return "A response that shows basic understanding but lacks depth and specific examples."
  }

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300">
            Long Answer
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

        {/* Text Area */}
        <div className="space-y-4">
          <textarea
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            disabled={hasSubmittedText}
            placeholder="Write a comprehensive answer here..."
            className="w-full h-48 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-900 disabled:opacity-70"
            rows={8}
          />

          {!hasSubmittedText && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Write a comprehensive response (5+ sentences with specific examples)
              </p>
              <button
                onClick={handleTextSubmit}
                disabled={!canSubmitText}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Self Assessment */}
      {showAssessment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
        >
          <SelfAssessmentButtons
            onAssess={handleAssessment}
            selectedAssessment={selfAssessment}
            points={question.points}
            disabled={!!selfAssessment}
          />
        </motion.div>
      )}

      {/* Sample Response (shown after self-assessment) */}
      {showResult && isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50"
        >
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Sample Responses
          </h4>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">
                🔨 Strong Response Example:
              </h5>
              <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                {question.sampleStrongResponse}
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                😐 Medium Response Example:
              </h5>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
                {generateMediumResponse(question.sampleStrongResponse || '')}
              </p>
            </div>
          </div>

          <div className="border-t border-blue-200 dark:border-blue-700 pt-4 mt-6">
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