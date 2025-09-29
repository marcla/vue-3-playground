<script>
const USERS_URL = `https://jsonplaceholder.typicode.com/users`;

export default {
  // data() {
  //   return {}
  // }
  // data: () => {
  //   return {}
  // }
  data: () => ({
    userList: [],
  }),
  methods: {
    async fetchUserList() {
      this.userList = await fetch(USERS_URL)
        .then(response => response.json());
    }
  }
}

</script>

<template>
  <main>
    <h1>Users page</h1>
    <p>
      it's works!
    </p>

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
