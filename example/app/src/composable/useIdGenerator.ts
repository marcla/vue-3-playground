const counterMap = new Map<string, number>()

export function useIdGenerator(id: string) {
  const key = `${id}-`
  const count = (counterMap.get(key) ?? -1) + 1

  counterMap.set(key, count)

  return `${key}${count}`
}
