/**
 * Gradient System Library
 * 
 * This file contains all gradient definitions and utilities for consistent styling
 * across the learning app. Each category has a specific gradient theme that's used
 * throughout the user's learning journey.
 */

// Category-specific gradient themes
// Each theme includes variants for different use cases
export interface GradientTheme {
  primary: string;        // Main gradient (progress bars, icons)
  hover: string;         // Hover state variant (slightly more intense)
  background: string;    // Subtle background gradient
  accent: string;        // Accent elements (arrows, small details)
  shadow: string;        // Shadow colors for depth
}

// Map category IDs to their gradient themes (using actual data category IDs)
export const CATEGORY_GRADIENTS: Record<string, GradientTheme> = {
  'programming-fundamentals': {
    primary: 'from-blue-500 to-cyan-500',
    hover: 'from-blue-600 to-cyan-600',
    background: 'from-blue-50/80 via-cyan-50/40 to-blue-50/80 dark:from-blue-900/20 dark:via-cyan-900/10 dark:to-blue-900/20',
    accent: 'from-blue-400 to-cyan-400',
    shadow: 'rgba(59, 130, 246, 0.3)'
  },
  'software-architecture-design': {
    primary: 'from-purple-500 to-pink-500',
    hover: 'from-purple-600 to-pink-600',
    background: 'from-purple-50/80 via-pink-50/40 to-purple-50/80 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-purple-900/20',
    accent: 'from-purple-400 to-pink-400',
    shadow: 'rgba(147, 51, 234, 0.3)'
  },
  'development-process-methodologies': {
    primary: 'from-green-500 to-emerald-500',
    hover: 'from-green-600 to-emerald-600',
    background: 'from-green-50/80 via-emerald-50/40 to-green-50/80 dark:from-green-900/20 dark:via-emerald-900/10 dark:to-green-900/20',
    accent: 'from-green-400 to-emerald-400',
    shadow: 'rgba(34, 197, 94, 0.3)'
  },
  'tools-development-environment': {
    primary: 'from-orange-500 to-red-500',
    hover: 'from-orange-600 to-red-600',
    background: 'from-orange-50/80 via-red-50/40 to-orange-50/80 dark:from-orange-900/20 dark:via-red-900/10 dark:to-orange-900/20',
    accent: 'from-orange-400 to-red-400',
    shadow: 'rgba(249, 115, 22, 0.3)'
  },
  'data-management-apis': {
    primary: 'from-indigo-500 to-purple-500',
    hover: 'from-indigo-600 to-purple-600',
    background: 'from-indigo-50/80 via-purple-50/40 to-indigo-50/80 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-indigo-900/20',
    accent: 'from-indigo-400 to-purple-400',
    shadow: 'rgba(99, 102, 241, 0.3)'
  },
  'testing-quality-assurance': {
    primary: 'from-teal-500 to-cyan-500',
    hover: 'from-teal-600 to-cyan-600',
    background: 'from-teal-50/80 via-cyan-50/40 to-teal-50/80 dark:from-teal-900/20 dark:via-cyan-900/10 dark:to-teal-900/20',
    accent: 'from-teal-400 to-cyan-400',
    shadow: 'rgba(20, 184, 166, 0.3)'
  },
  'deployment-operations-devops': {
    primary: 'from-rose-500 to-pink-500',
    hover: 'from-rose-600 to-pink-600',
    background: 'from-rose-50/80 via-pink-50/40 to-rose-50/80 dark:from-rose-900/20 dark:via-pink-900/10 dark:to-rose-900/20',
    accent: 'from-rose-400 to-pink-400',
    shadow: 'rgba(244, 63, 94, 0.3)'
  }
};

// Fallback gradients for when no category is specified
export const FALLBACK_GRADIENTS = [
  'from-purple-500 to-pink-500',   // Purple to Pink
  'from-blue-500 to-cyan-500',     // Blue to Cyan  
  'from-orange-500 to-red-500',    // Orange to Red
  'from-green-500 to-teal-500',    // Green to Teal
  'from-indigo-500 to-purple-500', // Indigo to Purple
  'from-pink-500 to-rose-500',     // Pink to Rose
];

/**
 * Get the complete gradient theme for a category
 */
export function getCategoryGradient(categoryId: string): GradientTheme | null {
  return CATEGORY_GRADIENTS[categoryId] || null;
}

/**
 * Get just the primary gradient for a category
 */
export function getCategoryPrimaryGradient(categoryId: string): string {
  const theme = getCategoryGradient(categoryId);
  return theme?.primary || FALLBACK_GRADIENTS[0];
}

/**
 * Get a gradient by index (fallback for non-category contexts)
 */
export function getGradientByIndex(index: number): string {
  return FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];
}

/**
 * Get the appropriate background gradient for topic/article pages
 */
export function getCategoryBackground(categoryId: string): string {
  const theme = getCategoryGradient(categoryId);
  return theme?.background || 'from-slate-50/80 via-white/40 to-slate-50/80 dark:from-gray-900/20 dark:via-gray-800/10 dark:to-gray-900/20';
}

/**
 * Get the hover gradient for interactive elements
 */
export function getCategoryHoverGradient(categoryId: string): string {
  const theme = getCategoryGradient(categoryId);
  return theme?.hover || FALLBACK_GRADIENTS[0];
}

/**
 * Get the accent gradient for small elements like arrows
 */
export function getCategoryAccentGradient(categoryId: string): string {
  const theme = getCategoryGradient(categoryId);
  return theme?.accent || FALLBACK_GRADIENTS[0];
}

/**
 * Get the shadow color for the category
 */
export function getCategoryShadowColor(categoryId: string): string {
  const theme = getCategoryGradient(categoryId);
  return theme?.shadow || 'rgba(147, 51, 234, 0.3)';
}

/**
 * Get all available category IDs that have gradient themes
 */
export function getAvailableCategoryIds(): string[] {
  return Object.keys(CATEGORY_GRADIENTS);
}

/**
 * Check if a category has a defined gradient theme
 */
export function hasCategoryGradient(categoryId: string): boolean {
  return categoryId in CATEGORY_GRADIENTS;
}

// Multi-color gradient for general use (like the current CursorInspiredCard)
export const CURSOR_INSPIRED_GRADIENT = `linear-gradient(45deg, 
  #9333ea 0%, 
  #db2777 25%, 
  #3b82f6 50%, 
  #10b981 75%, 
  #9333ea 100%)`;

// Subtle multi-color overlay for general use
export const CURSOR_INSPIRED_OVERLAY = `linear-gradient(135deg, 
  rgba(147, 51, 234, 0.03) 0%, 
  rgba(219, 39, 119, 0.02) 25%, 
  rgba(59, 130, 246, 0.03) 50%, 
  rgba(16, 185, 129, 0.02) 75%, 
  rgba(245, 158, 11, 0.01) 100%)`;