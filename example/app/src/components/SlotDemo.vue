<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';

const currentCount = ref(99)
const doubleCurrentCount = computed(() => currentCount.value * 2)
const isOpen = ref(true);

const toggleOpenState = () => {
  console.log(`toggle inner open state`)
  isOpen.value = !isOpen.value
}
const slots = useSlots()

defineExpose({
  currentCount,
  doubleCurrentCount,
  toggleOpenState
})

</script>

<template>
  <main class="slot-demo">
    <slot name="header">
      <h1>Slot title</h1>
    </slot>

    <div>
      <pre>isOpen: {{ isOpen }}</pre>
    </div>

    <slot :count="currentCount">
      Current counter is: {{ currentCount }}
    </slot>

    <p>
      <button @click="currentCount += 1">Incrementa</button>
    </p>

    <footer v-if="slots.footer">
      <slot name="footer" />
    </footer>
    <!-- <slot name="footer">
      <p>This is the footer</p>
    </slot> -->
  </main>
</template>

<style scoped>
.slot-demo {
  padding: 6px 12px;
  background-color: burlywood;
}
</style>
