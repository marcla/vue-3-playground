import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { TimeEntry } from '../types'

const API_BASE_URL = 'http://localhost:3000'

export const useTimeEntryStore = defineStore('timeEntries', () => {
  // State
  const timeEntries = ref<TimeEntry[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Computed properties
  const entryCount = computed(() => timeEntries.value.length)

  const totalMinutes = computed(() => {
    return timeEntries.value.reduce((sum, entry) => sum + entry.minutes, 0)
  })

  // Actions
  const fetchTimeEntries = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}/timeEntries`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const fetchedEntries: TimeEntry[] = await response.json()
      timeEntries.value = fetchedEntries

      return fetchedEntries
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch time entries'
      console.error('Error fetching time entries:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const createTimeEntry = async (entryData: Omit<TimeEntry, 'id' | 'createdAt'>) => {
    isLoading.value = true
    error.value = null

    try {
      const newEntry: TimeEntry = {
        ...entryData,
        id: `entry-${Date.now()}`,
        createdAt: new Date().toISOString(),
      }

      const response = await fetch(`${API_BASE_URL}/timeEntries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const createdEntry: TimeEntry = await response.json()
      timeEntries.value.push(createdEntry)

      return createdEntry
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to create time entry'
      console.error('Error creating time entry:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const updateTimeEntry = async (id: string, updates: Partial<TimeEntry>) => {
    isLoading.value = true
    error.value = null

    try {
      const existingEntry = timeEntries.value.find((entry) => entry.id === id)
      if (!existingEntry) {
        throw new Error('Time entry not found')
      }

      const updatedEntry = { ...existingEntry, ...updates }

      const response = await fetch(`${API_BASE_URL}/timeEntries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEntry),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const responseEntry: TimeEntry = await response.json()
      const index = timeEntries.value.findIndex((entry) => entry.id === id)
      if (index !== -1) {
        timeEntries.value[index] = responseEntry
      }

      return responseEntry
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update time entry'
      console.error('Error updating time entry:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const deleteTimeEntry = async (id: string) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}/timeEntries/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      timeEntries.value = timeEntries.value.filter((entry) => entry.id !== id)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to delete time entry'
      console.error('Error deleting time entry:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Helper methods for filtering
  const getEntriesByTaskId = (taskId: string) => {
    return timeEntries.value.filter((entry) => entry.taskId === taskId)
  }

  const getEntriesByDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    return timeEntries.value.filter((entry) => {
      const entryDate = new Date(entry.startTime)
      return entryDate >= start && entryDate <= end
    })
  }

  const getEntriesByDate = (date: string) => {
    return timeEntries.value.filter((entry) => {
      const entryDate = entry.startTime.split('T')[0]
      return entryDate === date
    })
  }

  return {
    // State
    timeEntries,
    isLoading,
    error,

    // Computed
    entryCount,
    totalMinutes,

    // Actions
    fetchTimeEntries,
    createTimeEntry,
    updateTimeEntry,
    deleteTimeEntry,

    // Helpers
    getEntriesByTaskId,
    getEntriesByDateRange,
    getEntriesByDate,
  }
})
