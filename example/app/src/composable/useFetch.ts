import { toValue, type MaybeRefOrGetter } from 'vue'

const API_BASE_URL = 'http://localhost:3000'

export async function useFetch<T>(url: MaybeRefOrGetter<string>): Promise<T> {
  // export async function useFetch<T>(url: string): Promise<T> {

  const urlValue = toValue(url)
  const response = await fetch(`${API_BASE_URL}/${urlValue}`)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data: T = await response.json()

  return data
}
