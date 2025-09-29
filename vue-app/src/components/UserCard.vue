<script setup>

const props = defineProps({
  user: {
    type: Object,
    required: true,
  }
})

// export default {
//   props: {
//     user: {
//       type: Object,
//       required: true,
//     }
//   }
// }
</script>

<template>
  <li :title="`Dettaglio utente ${props.user.name}`" :data-id="props.user.id">
    <h2>{{ props.user.name }} <small>({{ props.user.username }})</small></h2>

    <ul>
      <li v-if="props.user.email">Email: <a :href="`mailto:${props.user.email.toLowerCase()}`">{{ props.user.email
          }}</a></li>
      <li v-if="props.user.phone">Telefono: <a :href="`tel:${props.user.phone.toLowerCase()}`">{{ props.user.phone
          }}</a></li>
      <li v-if="props.user.website">Website: <a :href="props.user.website">{{ props.user.website }}</a></li>
    </ul>

    <h4>Indirizzo</h4>
    <p>
      {{ props.user.address.street }} {{ props.user.address.city }} ({{ props.user.address.zipcode }})
    </p>
  </li>
</template>
