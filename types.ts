// Define a Snippet type for storing code snippets and their metadata
export interface Snippet {
  id: string;             // Unique identifier for the snippet
  storeName: string;      // Store associated with the snippet
  themeName: string;      // Theme name of the store
  date: string;           // Date string in ISO format (YYYY-MM-DD recommended)
  author: string;         // Author of the snippet
  code: string;           // The actual code snippet
  tags?: string[];        // Optional array of tags
  screenshot?: string;    // Optional screenshot URL
  themeChanges?: string;  // Optional theme changes info
}

// Sorting options for snippets
export type SortOption = 
  | 'date-desc'  // Newest first
  | 'date-asc'   // Oldest first
  | 'theme-asc'; // Alphabetical by theme name
