<script>
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

export default {
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <li :title="`Dettaglio utente ${user.name}`" :data-id="user.id">
    <h2>{{ user.name }} <small>({{ user.username }})</small></h2>

    <ul>
      <li v-if="user.email">Email: <a :href="`mailto:${user.email.toLowerCase()}`">{{ user.email }}</a></li>
      <li v-if="user.phone">Telefono: <a :href="`tel:${user.phone.toLowerCase()}`">{{ user.phone }}</a></li>
      <li v-if="user.website">Website: <a :href="user.website">{{ user.website }}</a></li>
    </ul>

    <h4>Indirizzo</h4>
    <p>
      {{ user.address.street }} {{ user.address.city }} ({{ user.address.zipcode }})
    </p>
  </li>
</template>
