/**
 * Color utility functions for consistent color handling across components
 */

// Tailwind color mapping for gradient generation
export const TAILWIND_COLOR_MAP: Record<string, string> = {
  'blue-500': '59, 130, 246',
  'cyan-500': '6, 182, 212',
  'blue-600': '37, 99, 235',
  'cyan-600': '8, 145, 178',
  'purple-500': '147, 51, 234',
  'pink-500': '236, 72, 153',
  'purple-600': '126, 34, 206',
  'pink-600': '219, 39, 119',
  'green-500': '34, 197, 94',
  'emerald-500': '16, 185, 129',
  'green-600': '22, 163, 74',
  'emerald-600': '5, 150, 105',
  'orange-500': '249, 115, 22',
  'red-500': '239, 68, 68',
  'orange-600': '234, 88, 12',
  'red-600': '220, 38, 38',
  'indigo-500': '99, 102, 241',
  'indigo-600': '79, 70, 229',
  'teal-500': '20, 184, 166',
  'teal-600': '13, 148, 136',
  'rose-500': '244, 63, 94',
  'rose-600': '225, 29, 72'
}

/**
 * Convert Tailwind gradient string to RGB color values
 * @param gradient - Tailwind gradient string (e.g., "from-blue-500 to-cyan-500")
 * @returns Object with from and to RGB values
 */
export function getGradientColors(gradient: string): { from: string; to: string } {
  const [from, to] = gradient.replace('from-', '').replace(' to-', ' ').split(' ')
  
  return {
    from: TAILWIND_COLOR_MAP[from] || '147, 51, 234',
    to: TAILWIND_COLOR_MAP[to] || '219, 39, 119'
  }
}

/**
 * Generate CSS linear gradient from Tailwind gradient string
 * @param gradient - Tailwind gradient string
 * @param angle - Gradient angle in degrees (default: 45deg)
 * @returns CSS linear-gradient string
 */
export function createLinearGradient(gradient: string, angle = 45): string {
  const colors = getGradientColors(gradient)
  return `linear-gradient(${angle}deg, rgb(${colors.from}) 0%, rgb(${colors.to}) 100%)`
}

/**
 * Generate CSS linear gradient with alpha transparency
 * @param gradient - Tailwind gradient string
 * @param angle - Gradient angle in degrees (default: 135deg)
 * @param alpha - Alpha values for transparency (default: [0.03, 0.02])
 * @returns CSS linear-gradient string with transparency
 */
export function createOverlayGradient(
  gradient: string, 
  angle = 135, 
  alpha: [number, number] = [0.03, 0.02]
): string {
  const colors = getGradientColors(gradient)
  return `linear-gradient(${angle}deg, rgba(${colors.from}, ${alpha[0]}) 0%, rgba(${colors.to}, ${alpha[1]}) 100%)`
}