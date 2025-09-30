<script setup>
import { computed, ref } from 'vue';
import UserCard from '@/components/UserCard.vue';
import { userStore, fetchUserList } from '@/composable/useUserStore';
import { useCount } from '@/composable/useCounter';

const state = userStore;
const countState = useCount();
const message = ref(`It's works!`);
const color = ref('white');

const randomizeMessage = () => {
  const randomIndex = Math.floor(Math.random() * state.userList.length);
  const randomUserName = state.userList[randomIndex].name;

  message.value = randomUserName;
}

const uppercaseMessage = computed(() => {
  return `${message.value.toUpperCase()} (${message.value.length})`
})

const handleChangeUser = user => state.selectedUser = user

state.userList = await fetchUserList()

</script>

<template>
  <main>
    <h1>Users page</h1>

    <pre>{{ color }}</pre>
    <input type="color" v-model="color">

    <hr>

    <p>
      <b>Counter:</b> {{ countState.globalCount }}
      <button class="button-highlight" @click="countState.increaseGlobalCount" type="button">Incrementa global
        count</button>
    </p>
    <p>
      <b>Local Counter:</b> {{ countState.localCount }}
      <button :class="$style.button" @click="countState.increaseLocalCount" type="button">Incrementa global
        count</button>
    </p>

    <hr>

    <!-- <h2>{{ message }}</h2> -->
    <h2>{{ uppercaseMessage }}</h2>
    <button type="button" @click="randomizeMessage">Aggiorna messaggio</button>

    <hr>

    <p v-if="state.selectedUser" style="margin: 24px 0;"><b>Utente selezionato:</b> {{ state.selectedUser.name }}</p>

    <ul v-if="state.userList.length > 0">
      <UserCard v-for="user in state.userList" :key="`user-${user.id}`" :user="user" @select-user="handleChangeUser" />
    </ul>
    <p v-else>La lista degli utenti è vuota</p>

    <!-- <pre>{{ userList }}</pre> -->

    <button type="button" @click="fetchUserList">Carica utenti</button>
  </main>
</template>

<!-- <style scoped>
/* .button-highlight {
  background-color: coral;
} */
button {
  background-color: coral;
}
</style> -->

<style module>
.button {
  background-color: v-bind(color);
}
</style>
