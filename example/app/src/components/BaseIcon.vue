<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: 20
  },
  height: {
    type: [String, Number],
    default: 20
  },
  source: {
    type: String,
    default: 'iconify'
  }
})

const customIcon = computed(() => {
  if (props.source !== 'iconify') {
    return defineAsyncComponent(() => import(`@/components/icons/${props.name}.vue`));
  } else {
    return null;
  }
})
</script>

<template>
  <Icon v-if="source == 'iconify'" :icon="name" :width="width" :height="height" />
  <component v-else :is="customIcon" />
</template>

<style></style>
