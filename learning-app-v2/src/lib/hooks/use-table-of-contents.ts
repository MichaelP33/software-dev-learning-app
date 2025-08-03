import { useMemo } from 'react'

interface TocSection {
  id: string
  title: string
  level: number
}

/**
 * Hook to generate table of contents based on article type
 * @param articleId - The article identifier
 * @returns Array of table of contents sections
 */
export function useTableOfContents(articleId: string): TocSection[] {
  return useMemo(() => {
    // Language articles have a specific pattern
    const languageArticles = [
      'compiled-languages', 
      'interpreted-languages', 
      'hybrid-languages', 
      'object-oriented-programming', 
      'procedural-programming', 
      'functional-programming'
    ]
    
    if (languageArticles.includes(articleId)) {
      return [
        { id: 'key-concepts', title: 'Key Concepts', level: 1 },
        { id: 'business-team-impact', title: 'Business & Team Impact', level: 1 },
        { id: 'cursor-implementation', title: 'Cursor Implementation', level: 1 }
      ]
    }
    
    // Default pattern for other articles
    return [
      { id: 'learning-objectives', title: 'Learning Objectives', level: 1 },
      { id: 'overview', title: 'Overview', level: 1 },
      { id: 'related-topics', title: 'Related Topics', level: 1 }
    ]
  }, [articleId])
}