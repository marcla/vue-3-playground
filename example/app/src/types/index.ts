// types/index.ts

/**
 * Task status enum for better type safety
 */
export type TaskStatus = 'not_started' | 'in_progress' | 'completed'

/**
 * Predefined areas/tags for task categorization
 */
export type TaskArea = 'work' | 'personal' | 'learning' | 'health' | 'social' | 'creative'

/**
 * Filter fields for Tasks
 */
export interface TaskFilters {
  weekId?: string
  status?: TaskStatus | 'all'
  area?: TaskArea | 'all'
  searchTerm?: string
}

/**
 * Individual task interface
 */
export interface Task {
  id: string
  weekId: string
  title: string
  description?: string
  areas: TaskArea[]
  estimatedMinutes: number
  actualMinutes: number
  status: TaskStatus
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
}

/**
 * Time entry for tracking individual work sessions
 */
export interface TimeEntry {
  id: string
  taskId: string
  startTime: string // ISO date string
  endTime?: string // ISO date string - undefined if timer is running
  minutes: number // calculated or manually entered
  isManual: boolean // true if manually entered, false if from timer
  notes?: string
  createdAt: string // ISO date string
}

/**
 * Week interface for organizing tasks and analysis
 */
export interface Week {
  id: string // Format: "2025-W21" (ISO week format)
  title?: string // Optional custom title for the week
  description?: string // Optional description/notes for the week
  startDate: string // ISO date string (Monday of the week)
  endDate: string // ISO date string (Sunday of the week)
  totalPlannedMinutes: number // Sum of all task estimates
  totalActualMinutes: number // Sum of all actual time spent
  isCurrentWeek: boolean
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
}
