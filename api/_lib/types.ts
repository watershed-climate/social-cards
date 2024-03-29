export type FileType = 'png' | 'jpeg'

// Copy to web/index
const THEMES: string[] = [
  'energize',
  'finance-new-day',
  'finance-ice',
  'og-downward',
  'og-drift',
  'og-blur',
]
export type Theme = typeof THEMES[number]

export interface ParsedRequest {
  fileType: FileType
  largeText: string
  smallText: string
  theme: Theme
  md: boolean
  // fontSize: string
  // images: string[]
  // widths: string[]
  // heights: string[]
}
