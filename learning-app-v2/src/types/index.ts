export interface Article {
  id: string
  name: string
  learningStatus: 'Not started' | 'In progress' | 'Completed' | 'Reviewing'
  priorityStatus: 'Low' | 'Medium' | 'High' | 'Critical'
  description: string
  topics: string[]
  quiz?: Quiz
}

export interface Topic {
  id: string
  name: string
  description: string
  category: string
  articles: Article[]
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  iconType?: 'laptop' | 'building' | 'zap' | 'wrench' | 'rocket' | 'emoji'
  color: string
  topics: Topic[]
}

export interface LearningContent {
  categories: Category[]
}

export interface Progress {
  total: number
  completed: number
  inProgress: number
  reviewing: number
  notStarted: number
}

// Quiz Types
export interface ScoringCriteria {
  fullPoints: string
  partialPoints: string
  noPoints: string
}

export interface QuizQuestion {
  id: number
  type: 'multiple-choice' | 'short-answer' | 'long-answer'
  difficulty: 'easy' | 'easy-medium' | 'medium' | 'medium-hard' | 'hard'
  points: number
  question: string
  options?: string[]
  correctAnswer?: number
  sampleStrongResponse?: string
  additionalContext: string
  keyConcepts: string[]
  customScoringCriteria?: ScoringCriteria
}

export interface Quiz {
  title: string
  totalQuestions: number
  totalPoints: number
  questions: QuizQuestion[]
}

export interface QuizAnswer {
  questionId: number
  type: 'multiple-choice' | 'short-answer' | 'long-answer'
  answer: string | number
  isCorrect?: boolean
  selfAssessment?: 'nailed-it' | 'mostly-good' | 'not-quite'
  pointsEarned: number
}

export interface QuizResult {
  articleId: string
  totalScore: number
  totalPossible: number
  answers: QuizAnswer[]
  completedAt: Date
  percentageScore: number
}

export interface QuizState {
  currentQuestionIndex: number
  answers: QuizAnswer[]
  totalScore: number
  isCompleted: boolean
}