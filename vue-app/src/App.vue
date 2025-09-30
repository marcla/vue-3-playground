<script>
export default {
};
</script>

<template>
  <header class="header">
    <span class="logo">
      ⭐️ Vue App
    </span>

    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/users">Users</router-link>
      <!-- <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
      <a href="#" @click.prevent="showUsersPage">Users</a> -->
    </nav>
  </header>

  <Suspense>
    <!-- <component :is="renderPage" :key="renderPage" /> -->
    <router-view />

    <template v-slot:fallback>
      <p>⏳ Caricamento in corso...</p>
    </template>
  </Suspense>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}

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
