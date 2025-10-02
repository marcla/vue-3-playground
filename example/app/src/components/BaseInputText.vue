<script setup lang="ts">
import { useIdGenerator } from '@/composable/useIdGenerator';
import { computed } from 'vue';

defineOptions({
  inheritAttrs: false,
})
const props = defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
    required: true,
  },
  // full: {
  //   type: Boolean,
  //   default: false
  // }
})
const model = defineModel<string>()

const inputTextId = computed(() => props.id ? props.id : useIdGenerator('baseTextInput'))
</script>

<template>
  <div class="form-control">
    <label class="label" :for="inputTextId">
      <span class="label-text font-medium">{{ label }}</span>
    </label>

    <input v-bind="$attrs" :id="inputTextId" v-model="model" class="input input-bordered" type="text" />
  </div>
</template>

<style scoped></style>
