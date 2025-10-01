<script setup lang="ts">
import { watch, useSlots } from 'vue'
import { Icon } from '@iconify/vue'

import type { PropType } from 'vue'
type MaxWidthOptions = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  maxWidth: {
    type: String as PropType<MaxWidthOptions>,
    default: 'lg',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  close: []
}>()

const slots = useSlots()

// Close modal
const closeModal = () => {
  if (!props.isLoading) {
    emit('close')
  }
}

// Handle keyboard shortcuts
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

// Get max width class
const getMaxWidthClass = () => {
  const widthMap = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }
  return widthMap[props.maxWidth]
}

// Watch for modal opening to add keyboard listeners
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeydown)
    } else {
      document.removeEventListener('keydown', handleKeydown)
    }
  },
)
</script>

<template>
  <div v-if="isOpen" class="modal modal-open">
    <div class="modal-box w-full" :class="getMaxWidthClass()">
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center gap-3">
          <!-- Header Icon Slot -->
          <slot name="header-icon" />
          <h3 class="text-2xl font-bold text-base-content">{{ title }}</h3>
        </div>

        <button @click="closeModal" class="btn btn-sm btn-circle btn-ghost" :disabled="isLoading">
          <Icon icon="lucide:x" width="20" height="20" />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="modal-content">
        <slot />
      </div>

      <!-- Modal Actions -->
      <div v-if="slots.actions" class="modal-action pt-4">
        <slot name="actions" />
      </div>
    </div>

    <!-- Modal Backdrop -->
    <form method="dialog" class="modal-backdrop">
      <button @click="closeModal">close</button>
    </form>
  </div>
</template>

<style scoped>
/* Using DaisyUI modal system - no custom styles needed */
</style>
