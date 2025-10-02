<script setup lang="ts">
import { ref } from 'vue';

import BaseInputText from '@/components/BaseInputText.vue';

const fullname = ref('');
const isLoading = ref(false);

</script>

<template>
  <div class="container mx-auto p-8">
    <h1>Sandbox</h1>

    <details open="true">
      <summary>Nome completo</summary>

      <pre>{{ fullname }}</pre>
    </details>

    <hr style="margin: 20px 0;">

    <BaseInputText class="w-full" label="Nome completo" v-model="fullname" placeholder="Enter task title..."
      :disabled="isLoading" required />
    <!--
    <div class="form-control">
      <label class="label" for="task-title">
        <span class="label-text font-medium">Task Title *</span>
      </label>
      <input id="task-title" v-model="taskForm.title" class="input input-bordered w-full" type="text"
        placeholder="Enter task title..." :disabled="isLoading" required />
    </div>
    -->

    <hr style="margin: 20px 0;">
  </div>
</template>
