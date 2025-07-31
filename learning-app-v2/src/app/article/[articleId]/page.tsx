import { notFound } from 'next/navigation'
import { getArticleById, getArticleNavigation } from '@/lib/data'
import { ArticleContentWrapper } from '@/components/article-content-wrapper'

interface ArticlePageProps {
  params: Promise<{
    articleId: string
  }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params
  const article = getArticleById(articleId)

  if (!article) {
    notFound()
  }

  // Get navigation information
  const navigation = getArticleNavigation(articleId)
  const { currentTopic: topic, currentCategory: category, previousArticle, nextArticle } = navigation
  const topicLink = topic ? `/topic/${topic.id}` : '/'

  return (
    <ArticleContentWrapper
      article={article}
      topic={topic}
      category={category}
      previousArticle={previousArticle}
      nextArticle={nextArticle}
      topicLink={topicLink}
    />
  )
}

