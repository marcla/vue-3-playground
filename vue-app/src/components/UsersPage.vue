<script>
import { computed, ref } from 'vue';

import UserCard from './UserCard.vue';

const USERS_URL = `https://jsonplaceholder.typicode.com/users`;

export default {
  async setup() {
    // let message = `It's works!`;
    const message = ref(`It's works!`);

    const userList = await fetch(USERS_URL)
      .then(response => new Promise(r => setTimeout(r, 2500)).then(() => response.json()))

    const randomizeMessage = () => {
      const randomIndex = Math.floor(Math.random() * userList.length);
      const randomUserName = userList[randomIndex].name;

      console.log(randomUserName);
      // message = randomUserName;
      message.value = randomUserName;
    }

    console.log(typeof message, message)

    const uppercaseMessage = computed(() => {
      return `${message.value.toUpperCase()} (${message.value.length})`
    })

    return {
      // message: message
      message,
      userList,
      randomizeMessage,
      uppercaseMessage,
    }
  },
  components: { UserCard },
  // data: () => ({
  //   userList: [],
  // }),
  // methods: {
  //   async fetchUserList() {
  //     this.userList = await fetch(USERS_URL)
  //       .then(response => response.json());
  //   }
  // },
  created() {
    console.log(`UsersPage`, this.message, typeof this.message);
    // this.fetchUserList();
  }
}

</script>

<template>
  <main>
    <h1>Users page</h1>

    <!-- <h2>{{ message }}</h2> -->
    <h2>{{ uppercaseMessage }}</h2>
    <button type="button" @click="randomizeMessage">Aggiorna messaggio</button>

    <hr>

    <ul v-if="userList.length > 0">
      <UserCard v-for="user in userList" :key="`user-${user.id}`" :user="user" />
    </ul>
    <p v-else>La lista degli utenti è vuota</p>

    <pre>{{ userList }}</pre>

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
