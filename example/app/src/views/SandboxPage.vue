<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

import BaseInputText from '@/components/BaseInputText.vue';
import SlotDemo from '@/components/SlotDemo.vue';

const fullname = ref('');
const isLoading = ref(false);

const slotDemoRef = useTemplateRef('slotDemo')

</script>

<template>
  <div class="container mx-auto p-8">
    <h1>Sandbox</h1>

    <pre>
      slotDemo.doubleCurrentCount: {{ slotDemoRef?.currentCount }}
      slotDemo.doubleCurrentCount: {{ slotDemoRef?.doubleCurrentCount }}
    </pre>

    <SlotDemo ref="slotDemo">
      <template v-slot:header>
        <h1>Titolo personalizzato</h1>
      </template>

      <template v-slot:default="{ count }">
        Contenuto personalizzato <b>{{ count }}</b>

        <p>
          <button @click="slotDemoRef?.toggleOpenState">Apri/Chiudi</button>
        </p>
      </template>
    </SlotDemo>

    <hr style="margin: 20px 0;">

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
