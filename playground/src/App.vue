<script>
import BaseCounter from './components/base-counter.vue'

export default {
  components: { BaseCounter },
  data() {
    return {
      // Utenti
      newUserModel: {
        fullName: '',
      },
      favouriteList: [],
      message: `Lista degli utenti!`,
      listOfUsers: [
        {
          id: '593404fd-d696-4234-9efa-662530c79957',
          fullName: `Willard Berge`,
          job: `Technician`,
          animals: ['cat', 'rabbit'],
        },
        {
          id: 'b6180b54-fac9-40d6-921a-62a6c52debae',
          fullName: `Chelsey Boehm`,
          job: `Designer`,
          animals: ['rabbit', 'turtle'],
        },
        {
          id: '8176e77e-7293-44be-a0d0-6ed53b35f2bb',
          fullName: `Kayla O'Connell`,
          job: `Representative`,
          animals: ['cat', 'turtle'],
        },
        {
          id: 'c1fc68e4-64bd-45c5-a6fe-adce10044813',
          fullName: `Josefa Hansen`,
          job: `Strategist`,
          animals: ['cat', 'dog', 'turtle'],
        },
        {
          id: 'ed4d3782-a00e-49cb-8d67-3f389c959317',
          fullName: `Elise Gulgowski`,
          job: `Designer`,
          animals: ['cat', 'dog'],
        },
        {
          id: '0b809827-2ef5-4210-afd0-ef0556fc3c4d',
          fullName: `Margarita Batz`,
          job: `Liaison`,
          animals: ['cat', 'rabbit'],
        },
        {
          id: 'd183eaba-9f3c-4627-818f-8811171b6bd0',
          fullName: `Madonna Runolfsdottir`,
          job: `Assistant`,
          animals: ['turtle'],
        },
        {
          id: 'd427da72-b840-4f42-8ca7-5ed8e55a8084',
          fullName: `Lysanne McCullough`,
          job: `Assistant`,
          animals: ['cat'],
        },
        {
          id: 'f83feda7-1581-4747-bc4d-e065c246e6f6',
          fullName: `Matilda Nikolaus`,
          job: `Representative`,
          animals: ['dog', 'rabbit'],
        },
        {
          id: 'b3ec3a84-5647-48ac-a586-68ea6a306dc3',
          fullName: `Maud Rutherford`,
          job: `Consultant`,
          animals: ['cat', 'rabbit', 'turtle'],
        },
        {
          id: '1dc30352-6c37-4010-876f-d40d733b5c09',
          fullName: `Golden Pfannerstill`,
          job: `Associate`,
          animals: ['dog', 'rabbit'],
        },
        {
          id: '04d42d14-d665-4172-bfa1-94914b36c26d',
          fullName: `Lavada Kohler`,
          job: `Planner`,
          animals: ['rabbit'],
        },
        {
          id: 'd7a001e6-86f5-42d3-89b9-9768b9c58258',
          fullName: `Valentin Koch`,
          job: `Representative`,
          animals: ['dog', 'turtle'],
        },
      ],
    }
  },
  methods: {
    handleAddNewUser() {
      const newUser = {
        id: '7aff2c49-ad1f-4ebf-80b7-70bb23928558',
        fullName: this.newUserModel.fullName,
        job: '',
        animals: [],
      }
      this.listOfUsers.splice(0, 0, newUser)
      this.newUserModel.fullName = ''
    },
    handleAddToFavouriteUser(user) {
      console.log(user)
      this.favouriteList.push(user)
    },
  },
  computed: {
    benderStatistics() {
      const statistics = {}

      for (const user of this.listOfUsers) {
        for (const animal of user.animals) {
          statistics[animal] = (statistics[animal] ?? 0) + 1
        }
      }

      return statistics
    },
  },
}
</script>

<template>
  <h1>Hello Playground</h1>

  <BaseCounter />

  <hr />

  <h2>Aggiunti utente</h2>

  <fieldset>
    <legend><b>Nuovo utente</b></legend>

    <label for="userFullName">Nome completo:</label>
    <input @keyup.enter="handleAddNewUser" v-model="newUserModel.fullName" id="userFullName" type="text" />

    <p>
      <button @click="handleAddNewUser" type="button">Salva</button>
    </p>
  </fieldset>

  <pre>{{ newUserModel }}</pre>

  <hr />

  <h2>Statistiche</h2>

  <ul>
    <li v-for="(stat, key) in benderStatistics" v-bind:key="`stat-${key}`">
      {{ key }}: <b>{{ stat }}</b>
    </li>
  </ul>
  <!-- <pre>{{benderStatistics}}</pre> -->

  <hr />

  <h2 v-if="message.includes('!')">{{ message.toUpperCase() }}</h2>
  <p v-else>{{ message }}</p>

  <h3>Utenti preferiti</h3>

  <p v-if="favouriteList.length == 0">Non ci sono utenti preferiti</p>
  <ul v-else>
    <li v-for="user in favouriteList" v-bind:key="`favourite-${user}`">{{ user.fullName }}</li>
  </ul>

  <h3>Totale utenti <b>{{ listOfUsers.length }}</b></h3>

  <ul v-if="listOfUsers.length > 0">
    <li v-for="(user, index) in listOfUsers" v-bind:key="`userlistitem-${user.id}`">
      <h3>{{ user.fullName }}</h3>
      <!-- <p>Index: {{index}}</p> -->
      <p v-if="index == 0">Primo utente</p>
      <p v-else-if="index == listOfUsers.length - 1">Ultimo utente</p>

      <p>Lavoro: {{ user.job }}</p>

      <p>Animali:</p>
      <ul>
        <li v-for="animal in user.animals" v-bind:key="`pet-${animal}`">{{ animal }}</li>
      </ul>

      <button @click="handleAddToFavouriteUser(user)" type="button">
        ⭐️ Aggiungi ai preferiti
      </button>
    </li>
  </ul>
  <p v-else>Non ci sono utenti nella lista</p>
</template>

<style scoped></style>
