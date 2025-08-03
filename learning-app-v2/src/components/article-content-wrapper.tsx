'use client'

import { memo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getCategoryBackground } from '@/lib/gradients'
import { Article, Topic, Category } from '@/types'
import { getQuizByArticleId } from '@/lib/data'
import { ArticleTableOfContents } from '@/components/article-table-of-contents'
import KnowledgeAssessment from '@/components/knowledge-assessment'
import { ArticleNavigation } from '@/components/article/article-navigation'
import { MobileBottomNavigation } from '@/components/article/mobile-bottom-navigation'
import { useTableOfContents } from '@/lib/hooks/use-table-of-contents'

// Import content components
import { CompiledLanguagesContent } from '@/components/article/content/compiled-languages-content'
import { InterpretedLanguagesContent } from '@/components/article/content/interpreted-languages-content'
import { HybridLanguagesContent } from '@/components/article/content/hybrid-languages-content'

interface ArticleContentWrapperProps {
  article: Article
  topic: Topic | null
  category: Category | null
  previousArticle: Article | null
  nextArticle: Article | null
  topicLink: string
}

function ArticleContentWrapperComponent({ 
  article, 
  topic, 
  category, 
  previousArticle, 
  nextArticle, 
  topicLink 
}: ArticleContentWrapperProps) {
  // Calculate article position in topic
  const currentArticleIndex = topic?.articles.findIndex(a => a.id === article.id) ?? -1
  const totalArticles = topic?.articles.length ?? 0
  const articlePosition = currentArticleIndex + 1

  // Generate table of contents sections
  const tocSections = useTableOfContents(article.id)

  // Get quiz if available
  const quiz = getQuizByArticleId(article.id)

  // Render article-specific content
  const renderArticleContent = () => {
    switch (article.id) {
      case 'compiled-languages':
        return <CompiledLanguagesContent />
      case 'interpreted-languages':
        return <InterpretedLanguagesContent />
      case 'hybrid-languages':
        return <HybridLanguagesContent />
      default:
        return (
          <article className="space-y-8">
            <section id="overview">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Overview
              </h2>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                {article.description}
              </p>
            </section>
          </article>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Category-specific Background gradients */}
      <div className={`absolute inset-0 bg-gradient-to-r ${category ? getCategoryBackground(category.id) : 'from-slate-50/80 via-white/40 to-slate-50/80 dark:from-gray-900/20 dark:via-gray-800/10 dark:to-gray-900/20'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.25),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(0,0,0,0))]" />
      
      <div className="relative z-10">
        {/* Main Content */}
        <main className="px-6 py-8 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center gap-4 mb-8">
              <Link 
                href={topicLink}
                className="inline-flex items-center text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {topic?.name || 'Topics'}
              </Link>
            </div>

            {/* Article Header */}
            <div className="text-center mb-12">
              {/* Subtle Divider with Shadow */}
              <div className="flex justify-center mb-16">
                <div className="h-px w-32 bg-slate-700/30 shadow-sm" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {article.name}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {article.description}
              </p>

              {/* Knowledge Assessment - Show if quiz is available */}
              {quiz && (
                <KnowledgeAssessment 
                  articleId={article.id} 
                  quiz={quiz}
                  categoryId={category?.id}
                  className="max-w-2xl mx-auto mb-8" 
                />
              )}
            </div>

            {/* Article Content */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
              <div className="p-8">
                {/* Table of Contents */}
                <ArticleTableOfContents 
                  sections={tocSections}
                  className="mb-8"
                />

                {/* Article Content */}
                {renderArticleContent()}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ArticleNavigation
                topicLink={topicLink}
                previousArticle={previousArticle}
                nextArticle={nextArticle}
              />
            </div>
          </div>
        </main>

        {/* Mobile Navigation */}
        <MobileBottomNavigation
          topic={topic}
          previousArticle={previousArticle}
          nextArticle={nextArticle}
          topicLink={topicLink}
          articlePosition={articlePosition}
          totalArticles={totalArticles}
        />
      </div>
    </div>
  )
}

export const ArticleContentWrapper = memo(ArticleContentWrapperComponent)
