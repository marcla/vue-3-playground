<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Define props with defaults
const props = defineProps({
  isOpen: { type: Boolean, default: false },
  title: { type: String, required: true },
  message: { type: String, required: true },
  isLoading: { type: Boolean, default: false },
})

const emit = defineEmits(['close', 'confirm'])

// Close modal
const closeModal = () => {
  if (!props.isLoading) {
    emit('close')
  }
}

// Confirm deletion
const confirmDelete = () => {
  emit('confirm')
}

// Handle keyboard shortcuts
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

// Watch for modal opening to add keyboard listeners
import { watch } from 'vue'
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
    <div class="modal-box w-full max-w-md">
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center gap-3">
          <!-- Header Icon -->
          <div class="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
            <Icon icon="lucide:trash-2" width="24" height="24" class="text-error" />
          </div>
          <h3 class="text-2xl font-bold text-base-content">{{ title }}</h3>
        </div>

        <button @click="closeModal" class="btn btn-sm btn-circle btn-ghost" :disabled="isLoading">
          <Icon icon="lucide:x" width="20" height="20" />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="modal-content">
        <p class="text-base-content/70 mb-6">{{ message }}</p>
      </div>

      <!-- Modal Actions -->
      <div class="modal-action pt-4">
        <button type="button" @click="closeModal" class="btn btn-outline" :disabled="isLoading">
          Cancel
        </button>
        <button type="button" @click="confirmDelete" class="btn btn-error" :disabled="isLoading">
          <Icon
            v-if="isLoading"
            icon="lucide:loader-2"
            width="16"
            height="16"
            class="animate-spin"
          />
          <Icon v-else icon="lucide:trash-2" width="16" height="16" />
          {{ isLoading ? 'Deleting...' : 'Delete' }}
        </button>
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
