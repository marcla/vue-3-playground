<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <h1>User Page</h1>

  <pre>
    {{ route.params.id }}
  </pre>
</template>
