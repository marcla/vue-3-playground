<script setup>
import { useCount } from '@/composable/useCounter';
import { useUserStore } from '@/stores/user-store';

const countState = useCount();
const state = useUserStore();
</script>

<template>
  <main>
    <h1>Welcome to <br />Vue App</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>

    <hr>

    <p>
      <b>Counter:</b> {{ countState.globalCount }}
      <button @click="countState.increaseGlobalCount" type="button">Incrementa global count</button>
    </p>
    <p>
      <b>Local Counter:</b> {{ countState.localCount }}
      <button @click="countState.increaseLocalCount" type="button">Incrementa global count</button>
    </p>

    <hr>

    <h2>Primi utenti della lista</h2>
    <pre>{{ state.shortUserList }}</pre>
    <ul>
      <li v-for="user in state.shortUserList" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style></style>
