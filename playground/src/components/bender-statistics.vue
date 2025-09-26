<script>
export default {
  props: {
    userList: {
      type: Array,
      required: true
    }
  },
  computed: {
    benderStatistics() {
      const statistics = {}

      for (const user of this.userList) {
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
  <h2>Statistiche</h2>

  <ul>
    <li>Totale utenti: <b>{{ userList.length }}</b></li>
    <li v-for="(stat, key) in benderStatistics" v-bind:key="`stat-${key}`">
      {{ key }}: <b>{{ stat }}</b>
    </li>
  </ul>
  <!-- <pre>{{benderStatistics}}</pre> -->
</template>
