import type { Task, TaskFilters } from '@/types'

export const formatTaskStatusLabel = (status: string) => {
  return status.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[] {
  return tasks.filter((task) => {
    // Week filter
    if (filters.weekId && filters.weekId !== 'all' && task.weekId !== filters.weekId) {
      return false
    }

    // Status filter
    if (filters.status && filters.status !== 'all' && task.status !== filters.status) {
      return false
    }

    // Area filter
    if (filters.area && filters.area !== 'all' && !task.areas.includes(filters.area)) {
      return false
    }

    // Search term filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase()
      const matchesTitle = task.title.toLowerCase().includes(searchLower)
      const matchesDescription = task.description?.toLowerCase().includes(searchLower)
      if (!matchesTitle && !matchesDescription) {
        return false
      }
    }

    return true
  })
}
