<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    }
  },
  emits: ['favourite'],
  computed: {
    isFirst() {
      return this.index == 0
    },
    isLast() {
      return this.index == this.totalCount - 1
    },
  },
  // methods: {
  //   handleAddToFavouriteUser(user) {
  //     this.$emit('favourite', user);
  //   },
  // }
}
</script>

<template>
  <h3>{{ user.fullName }}</h3>
  <p v-if="isFirst">Primo utente</p>
  <p v-else-if="isLast">Ultimo utente</p>

  <p>Lavoro: {{ user.job }}</p>

  <p>Animali:</p>
  <ul>
    <li v-for="animal in user.animals" v-bind:key="`pet-${animal}`">{{ animal }}</li>
  </ul>

  <button @click="$emit('favourite', user)" type="button">
    ⭐️ Aggiungi ai preferiti
  </button>
</template>
