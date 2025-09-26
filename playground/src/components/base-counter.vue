<script>
export default {
  data: () => {
    return {
      // Contatore
      count: 0,
      incrementAmount: 2,
      incrementRangeDescription: '',
    }
  },
  methods: {
    incrementCount(...args) {
      // console.log(this);
      console.log(args)
      // this.count += 1
      this.count += this.incrementAmount
    },
  },
  computed: {
    incrementDescription() {
      const value = this.incrementAmount

      if (value <= 5) {
        return 'basso'
      } else if (value > 100) {
        return 'altissimo'
      } else if (value > 20) {
        return 'alto'
      }

      return 'medio'
    },
  }
}
</script>

<template>
  <h2>Contatore</h2>

  <p :data-increment-by="incrementAmount">Contatore: <b>{{ count }}</b></p>

  <div>
    <label for="incrementAmountRef">Valore incrementale</label>
    <!-- <input id="incrementAmountRef" v-model="incrementAmount" type="text"> -->
    <input id="incrementAmountRef" v-model="incrementAmount" type="number" />

    <!-- <p v-if="incrementAmount <= 5">Valore incrementale <b>basso</b></p>
        <p v-else-if="incrementAmount > 20">Valore incrementale <b>alto</b></p>
        <p v-else-if="incrementAmount > 100">Valore incrementale <b>altissimo</b></p>
        <p v-else>Valore incrementale <b>medio</b></p> -->
    <!-- <p>Valore incrementale <b>{{incrementRangeDescription}}</b></p> -->
    <p>Valore incrementale <b>{{ incrementDescription }}</b></p>
  </div>

  <!-- <button v-on:click="incrementCount" type="button">Incrementa</button> -->
  <button @click="incrementCount" type="button">Incrementa</button>
</template>
