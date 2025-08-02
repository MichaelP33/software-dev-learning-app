'use client'

import { useReducer, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Quiz, QuizAnswer, QuizState } from '@/types'
import { calculateSelfAssessmentScore, validateMultipleChoiceAnswer, calculateQuizScore, getQuizPerformanceLevel, updateHighScores, resetHighScores, getQuizHighScores } from '@/lib/data'
import MultipleChoiceQuestion from './multiple-choice-question'
import ShortAnswerQuestion from './short-answer-question'
import LongAnswerQuestion from './long-answer-question'
import QuizProgress from './quiz-progress'
import QuizResults from './quiz-results'

interface QuizContainerProps {
  quiz: Quiz
  articleId: string
}

type QuizAction = 
  | { type: 'ANSWER_QUESTION'; payload: { questionId: number; answer: string | number | string[]; selfAssessment?: 'nailed-it' | 'mostly-good' | 'nope' } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'COMPLETE_QUIZ' }
  | { type: 'RESET_QUIZ' }
  | { type: 'ABANDON_QUIZ' }

function createQuizReducer(quiz: Quiz) {
  return function quizReducer(state: QuizState, action: QuizAction): QuizState {
    switch (action.type) {
      case 'ANSWER_QUESTION': {
        const { questionId, answer, selfAssessment } = action.payload
        const question = quiz.questions.find(q => q.id === questionId)
      
      if (!question) return state

      let isCorrect = false
      let pointsEarned = 0

      // Calculate points based on question type
      if (question.type === 'multiple-choice') {
        isCorrect = validateMultipleChoiceAnswer(question, answer as number)
        pointsEarned = isCorrect ? question.points : 0
      } else if ((question.type === 'short-answer' || question.type === 'long-answer') && selfAssessment) {
        pointsEarned = calculateSelfAssessmentScore(question.points, selfAssessment)
      }

      const quizAnswer: QuizAnswer = {
        questionId,
        type: question.type,
        answer: answer as string | number,
        isCorrect,
        selfAssessment,
        pointsEarned
      }

      const updatedAnswers = state.answers.filter(a => a.questionId !== questionId).concat(quizAnswer)
      const totalScore = updatedAnswers.reduce((sum, ans) => sum + ans.pointsEarned, 0)

      return {
        ...state,
        answers: updatedAnswers,
        totalScore
      }
    }
    
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, quiz.questions.length - 1)
      }
    
    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
      }
    
    case 'COMPLETE_QUIZ':
      return {
        ...state,
        isCompleted: true
      }
    
    case 'RESET_QUIZ':
      return {
        currentQuestionIndex: 0,
        answers: [],
        totalScore: 0,
        isCompleted: false
      }
    
    case 'ABANDON_QUIZ':
      // State remains the same, navigation is handled outside reducer
      return state
    
      default:
        return state
    }
  }
}

export default function QuizContainer({ quiz, articleId }: QuizContainerProps) {
  const router = useRouter()
  const quizReducer = createQuizReducer(quiz)
  const [state, dispatch] = useReducer(quizReducer, {
    currentQuestionIndex: 0,
    answers: [],
    totalScore: 0,
    isCompleted: false
  })
  const [showAbandonConfirm, setShowAbandonConfirm] = useState(false)
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false)

  // Save quiz state to localStorage
  useEffect(() => {
    const quizState = {
      articleId,
      ...state,
      lastUpdated: new Date().toISOString()
    }
    localStorage.setItem(`quiz_${articleId}`, JSON.stringify(quizState))
  }, [state, articleId])

  // Load quiz state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem(`quiz_${articleId}`)
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState)
        // Only restore if it's from the same session (within last hour)
        const lastUpdated = new Date(parsed.lastUpdated)
        const now = new Date()
        const hourAgo = new Date(now.getTime() - 60 * 60 * 1000)
        
        if (lastUpdated > hourAgo && !parsed.isCompleted) {
          // Restore state (implement if needed)
        }
      } catch (error) {
        console.warn('Failed to parse saved quiz state:', error)
      }
    }
  }, [articleId])

  const currentQuestion = quiz.questions[state.currentQuestionIndex]
  const currentAnswer = state.answers.find(a => a.questionId === currentQuestion?.id)
  const isLastQuestion = state.currentQuestionIndex === quiz.questions.length - 1
  const canProceed = currentAnswer !== undefined

  const handleAnswer = (answer: string | number | string[], selfAssessment?: 'nailed-it' | 'mostly-good' | 'nope') => {
    if (!currentQuestion) return
    
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        questionId: currentQuestion.id,
        answer,
        selfAssessment
      }
    })

    // Auto-advance for text-based questions when self-assessment is completed
    if (selfAssessment && (currentQuestion.type === 'short-answer' || currentQuestion.type === 'long-answer')) {
      setIsAutoAdvancing(true)
      setTimeout(() => {
        if (isLastQuestion) {
          dispatch({ type: 'COMPLETE_QUIZ' })
        } else {
          dispatch({ type: 'NEXT_QUESTION' })
        }
        setIsAutoAdvancing(false)
      }, 500) // Small delay for better UX
    }
  }

  const handleNext = () => {
    if (isLastQuestion) {
      dispatch({ type: 'COMPLETE_QUIZ' })
    } else {
      dispatch({ type: 'NEXT_QUESTION' })
    }
  }

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' })
  }

  const handleRetake = () => {
    dispatch({ type: 'RESET_QUIZ' })
    localStorage.removeItem(`quiz_${articleId}`)
  }

  const handleResetScores = () => {
    if (confirm('Are you sure you want to reset all your progress on this quiz? This action cannot be undone.')) {
      resetHighScores(articleId)
      dispatch({ type: 'RESET_QUIZ' })
      localStorage.removeItem(`quiz_${articleId}`)
    }
  }

  const handleAbandonQuiz = () => {
    setShowAbandonConfirm(true)
  }

  const confirmAbandon = () => {
    dispatch({ type: 'ABANDON_QUIZ' })
    router.push(`/article/${articleId}`)
  }

  const cancelAbandon = () => {
    setShowAbandonConfirm(false)
  }

  // Update high scores when quiz is completed
  useEffect(() => {
    if (state.isCompleted && state.answers.length > 0) {
      const { score, percentage } = calculateQuizScore(state.answers)
      updateHighScores(articleId, state.answers, score, percentage)
    }
  }, [state.isCompleted, state.answers, articleId])

  if (state.isCompleted) {
    const { score, percentage } = calculateQuizScore(state.answers)
    const performance = getQuizPerformanceLevel(percentage)
    const highScores = getQuizHighScores(articleId)
    
    return (
      <QuizResults
        score={score}
        totalPossible={quiz.totalPoints}
        percentage={percentage}
        performance={performance}
        answers={state.answers}
        questions={quiz.questions}
        onRetake={handleRetake}
        onResetScores={handleResetScores}
        articleId={articleId}
        highScores={highScores}
      />
    )
  }

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Quiz not available
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This quiz is currently being prepared.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <QuizProgress 
        currentQuestion={state.currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
        score={state.totalScore}
        totalPossible={quiz.totalPoints}
        title={quiz.title}
        onAbandon={handleAbandonQuiz}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {currentQuestion.type === 'multiple-choice' && (
            <MultipleChoiceQuestion
              question={currentQuestion}
              selectedAnswer={currentAnswer?.answer as number}
              onAnswer={(answer) => handleAnswer(answer)}
              showResult={!!currentAnswer}
            />
          )}

          {currentQuestion.type === 'short-answer' && (
            <>
              <ShortAnswerQuestion
                question={currentQuestion}
                answer={currentAnswer?.answer as string}
                selfAssessment={currentAnswer?.selfAssessment}
                onAnswer={(answer, assessment) => handleAnswer(answer, assessment)}
                showResult={!!currentAnswer && !isAutoAdvancing}
              />
              {isAutoAdvancing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-lg font-medium text-gray-600 dark:text-gray-400">
                    Moving to next question...
                  </div>
                </motion.div>
              )}
            </>
          )}

          {currentQuestion.type === 'long-answer' && (
            <>
              <LongAnswerQuestion
                question={currentQuestion}
                answer={currentAnswer?.answer as string}
                selfAssessment={currentAnswer?.selfAssessment}
                onAnswer={(answer, assessment) => handleAnswer(answer, assessment)}
                showResult={!!currentAnswer && !isAutoAdvancing}
              />
              {isAutoAdvancing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-lg font-medium text-gray-600 dark:text-gray-400">
                    {isLastQuestion ? 'Completing quiz...' : 'Moving to next question...'}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {!isAutoAdvancing && (
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handlePrevious}
            disabled={state.currentQuestionIndex === 0}
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Question {state.currentQuestionIndex + 1} of {quiz.questions.length}
          </div>

          <button
            onClick={handleNext}
            disabled={!canProceed}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
          >
            {isLastQuestion ? 'Complete Quiz' : 'Next →'}
          </button>
        </div>
      )}

      {/* Abandon Confirmation Modal */}
      {showAbandonConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-xl"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Abandon Quiz?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to abandon this quiz? Your current progress will be lost.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={cancelAbandon}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
              >
                Keep Going
              </button>
              <button
                onClick={confirmAbandon}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Abandon Quiz
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}