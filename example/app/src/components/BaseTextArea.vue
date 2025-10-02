<script setup lang="ts">
import { computed } from 'vue'
import { useIdGenerator } from '@/composable/useIdGenerator'

defineOptions({
  inheritAttrs: false
})
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
  },
})
const model = defineModel<string>()
const textareaId = computed(() => props.id ? props.id : useIdGenerator('textarea'))
</script>

<template>
  <div class="form-control">
    <label class="label" :for="textareaId">
      <span class="label-text font-medium">{{ label }}</span>
    </label>
    <textarea v-bind="$attrs" :id="textareaId" v-model="model" class="textarea textarea-bordered"></textarea>
  </div>
</template>


<style scoped></style>
