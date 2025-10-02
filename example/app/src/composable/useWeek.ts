import type { Week } from '@/types'
import { computed, ref } from 'vue'

// API base URL for week operations
const API_BASE_URL = 'http://localhost:3000'

// Singleton - Shared state
export const weeks = ref<Week[]>([])
const weekIsLoading = ref(false)
const weekError = ref<string | null>(null)

// Factory
export function useWeekStore() {
  const fetchWeeks = async () => {
    weekIsLoading.value = true
    weekError.value = null

    try {
      const response = await fetch(`${API_BASE_URL}/weeks`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const fetchedWeeks: Week[] = await response.json()
      weeks.value = fetchedWeeks

      return fetchedWeeks
    } catch (err) {
      weekError.value = err instanceof Error ? err.message : 'Failed to fetch weeks'
      console.error('Error fetching weeks:', err)
      throw err
    } finally {
      weekIsLoading.value = false
    }
  }

  const numberOfWeeks = computed(() => weeks.value.length)
  const currentWeek = computed(() => {
    return weeks.value.find((week) => week.isCurrentWeek) || null
  })
  const getWeekById = (weekId: string) => {
    return weeks.value.find((week) => week.id === weekId) || null
  }

  return {
    // Actions
    fetchWeeks,
    // Getter
    numberOfWeeks,
    currentWeek,
    getWeekById,
    // State
    weekError,
    weekIsLoading,
  }
}

// Factory - Generate unique state
export function generateWeeks() {
  const newWeeks = ref<Week[]>([])

  return newWeeks
}
