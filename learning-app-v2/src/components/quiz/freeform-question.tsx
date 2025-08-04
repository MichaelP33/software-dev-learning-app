'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { QuizQuestion } from '@/types'
import SelfAssessmentButtons from './self-assessment-buttons'

interface FreeformQuestionProps {
  question: QuizQuestion
  answer?: string
  selfAssessment?: 'nailed-it' | 'mostly-good' | 'not-quite'
  onAnswer: (answer: string, assessment: 'nailed-it' | 'mostly-good' | 'not-quite') => void
  showResult: boolean
}

export default function FreeformQuestion({
  question,
  answer = '',
  selfAssessment,
  onAnswer,
  showResult
}: FreeformQuestionProps) {
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
  const showSampleResponse = hasSubmittedText && !selfAssessment && !showResult
  const showAssessment = hasSubmittedText && !showResult && showSampleResponse

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {question.question}
        </h3>

        {/* Text Area */}
        <div className="space-y-4">
          <textarea
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            disabled={hasSubmittedText}
            placeholder="Write your answer here..."
            className="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 dark:disabled:bg-gray-900 disabled:opacity-70"
            rows={6}
          />

          {!hasSubmittedText && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Write a detailed response (2-3 sentences minimum)
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

      {/* Sample Response (shown after submitting answer) */}
      {showSampleResponse && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-yellow-50/80 dark:bg-yellow-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-200/50 dark:border-yellow-700/50"
        >
          <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-2">
            💡 Sample Strong Response
          </h4>
          <p className="text-yellow-800 dark:text-yellow-200 mb-4 leading-relaxed">
            {question.sampleStrongResponse}
          </p>
          
          <div className="border-t border-yellow-200 dark:border-yellow-700 pt-4">
            <h5 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
              Key Concepts:
            </h5>
            <div className="flex flex-wrap gap-2 mb-4">
              {question.keyConcepts?.map((concept, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Self Assessment */}
      {showAssessment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50"
        >
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
            How did you do? Compare your answer to the sample response above.
          </h4>
          
          <SelfAssessmentButtons 
            onAssess={handleAssessment}
            selectedAssessment={selfAssessment}
            points={question.points}
          />
        </motion.div>
      )}

      {/* Final Result */}
      {showResult && selfAssessment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
        >
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Your Response
          </h4>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mb-4 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
              {textAnswer}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Self Assessment:
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              selfAssessment === 'nailed-it' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
              selfAssessment === 'mostly-good' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
              'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
            }`}>
              {selfAssessment === 'nailed-it' ? 'Nailed it!' :
               selfAssessment === 'mostly-good' ? 'Mostly good' :
               'Not quite'}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  )
}