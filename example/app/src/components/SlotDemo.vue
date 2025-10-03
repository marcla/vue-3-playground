<script setup lang="ts">
import { ref } from 'vue';

const currentCount = ref(99)
</script>

<template>
  <main>
    <slot name="header">
      <h1>Slot title</h1>
    </slot>
    <slot :count="currentCount">
      Current counter is: {{ currentCount }}
    </slot>

    <p>
      <button @click="currentCount += 1">Incrementa</button>
    </p>

    <slot name="footer">
      <p>This is the footer</p>
    </slot>
  </main>
</template>

<style scoped></style>
