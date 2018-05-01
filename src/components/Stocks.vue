<template>
  <div class="row">
    <div class="col-lg-4 col-md-6" v-for="stock in stocks" :key="stock.id">
      <Stock :stock="stock"></Stock>
    </div>
  </div>
</template>


<script>
import Stock from './Stock.vue';

export default {
  data() {
    return {
      stocks: [
        {id: 1, name: "BMW", price: 123},
        {id: 2, name: "John Deere", price: 67},
        {id: 3, name: "Water", price: 94},
        {id: 4, name: "Gold", price: 106},
      ]
    }
  },
  components: {
    Stock
  }
}
</script>
