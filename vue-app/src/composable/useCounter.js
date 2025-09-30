import { ref } from 'vue'

const globalCount = ref(0)

const increaseGlobalCount = () => {
  globalCount.value += 10
}

export function useCount() {
  const localCount = ref(20)

  const increaseLocalCount = () => {
    localCount.value += 15
  }

  return {
    globalCount,
    localCount,
    increaseGlobalCount,
    increaseLocalCount,
  }
}
