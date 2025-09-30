<script setup>
import { useCount } from '@/composable/useCounter';
import { shortUserList } from '@/composable/useUserStore';

const countState = useCount();
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
    <ul>
      <li v-for="user in shortUserList" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
