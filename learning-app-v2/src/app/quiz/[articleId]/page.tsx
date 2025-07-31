import { notFound, redirect } from 'next/navigation'
import { getQuizByArticleId, getArticleById } from '@/lib/data'
import QuizContainer from '@/components/quiz/quiz-container'

interface QuizPageProps {
  params: Promise<{
    articleId: string
  }>
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { articleId } = await params
  
  const article = getArticleById(articleId)
  const quiz = getQuizByArticleId(articleId)

  if (!article) {
    notFound()
  }

  if (!quiz) {
    redirect(`/article/${articleId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-8">
        <QuizContainer 
          quiz={quiz}
          articleId={articleId}
        />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  // Return empty array for now - we can implement this later if needed for static generation
  return []
}