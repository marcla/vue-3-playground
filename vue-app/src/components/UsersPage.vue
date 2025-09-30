<script setup>
import { computed, ref } from 'vue';
import UserCard from './UserCard.vue';
import { userStore, fetchUserList } from '@/composable/useUserStore';

const state = userStore;
const message = ref(`It's works!`);

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

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 620px;
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
