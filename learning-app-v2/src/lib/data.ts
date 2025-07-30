import { LearningContent, Category, Topic, Article, Progress } from '@/types'
import learningData from '../../data/learning-content.json'

const data: LearningContent = learningData as LearningContent

export function getAllCategories(): Category[] {
  return data.categories
}

export function getCategoryById(id: string): Category | null {
  return data.categories.find(category => category.id === id) || null
}

export function getCategoryByName(name: string): Category | null {
  return data.categories.find(category => category.name === name) || null
}

export function getTopicById(topicId: string): Topic | null {
  for (const category of data.categories) {
    const topic = category.topics.find(topic => topic.id === topicId)
    if (topic) return topic
  }
  return null
}

export function getArticleById(articleId: string): Article | null {
  for (const category of data.categories) {
    for (const topic of category.topics) {
      const article = topic.articles.find(article => article.id === articleId)
      if (article) return article
    }
  }
  return null
}

export function calculateProgress(articles: Article[]): Progress {
  const total = articles.length
  const completed = articles.filter(a => a.learningStatus === 'Completed').length
  const inProgress = articles.filter(a => a.learningStatus === 'In progress').length
  const reviewing = articles.filter(a => a.learningStatus === 'Reviewing').length
  const notStarted = articles.filter(a => a.learningStatus === 'Not started').length

  return {
    total,
    completed,
    inProgress,
    reviewing,
    notStarted
  }
}

export function calculateCategoryProgress(category: Category): Progress {
  const allArticles = category.topics.flatMap(topic => topic.articles)
  return calculateProgress(allArticles)
}

export function calculateTopicProgress(topic: Topic): Progress {
  return calculateProgress(topic.articles)
}

export function getCompletionPercentage(progress: Progress): number {
  return progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0
}

// Utility functions for styling
export function getStatusColor(status: string): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'In progress':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'Reviewing':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Not started':
      return 'bg-gray-100 text-gray-800 border-gray-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export function getStatusIcon(status: string): string {
  switch (status) {
    case 'Completed':
      return '✅'
    case 'In progress':
      return '📚'
    case 'Reviewing':
      return '⭐'
    case 'Not started':
      return '⭕'
    default:
      return '⭕'
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'Critical':
      return 'bg-red-100 text-red-800 border-red-200'
    case 'High':
      return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Low':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}