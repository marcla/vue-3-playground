import type { Week } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useFetch } from '../composable/useFetch'

export const useWeekStore = defineStore('weekStore', () => {
  const weeks = ref<Week[]>([])
  const weekIsLoading = ref(false)
  const weekError = ref<string | null>(null)

  const fetchWeeks = async () => {
    weekIsLoading.value = true
    weekError.value = null

    try {
      const response = await useFetch<Week[]>('weeks')
      weeks.value = response

      return response
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
    weeks,
    weekError,
    weekIsLoading,
  }
})

// Factory - Generate unique state
export function generateWeeks() {
  const newWeeks = ref<Week[]>([])

  return newWeeks
}
