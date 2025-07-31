export interface Article {
  id: string
  name: string
  learningStatus: 'Not started' | 'In progress' | 'Completed' | 'Reviewing'
  priorityStatus: 'Low' | 'Medium' | 'High' | 'Critical'
  description: string
  topics: string[]
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