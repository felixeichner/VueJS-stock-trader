<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ stock.name }}</strong>
      <small>Price: {{ stock.price | currency }}</small>
      <small v-if="stock.quantity">Quantity: {{ stock.quantity }}</small>
    </div>
    <div class="card-body">
      <div class="float-left">
        <input type="number" v-model="quantity">
      </div>
      <div class="float-right">
        <button class="btn btn-success" :disabled="quantity <= 0" @click="placeOrder">{{ stock.quantity ? 'Sell' : 'Buy' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      sellStock: 'sellStock',
      buyStock: 'buyStock'
    }),
    placeOrder() {
      const order = {
        id: this.stock.id,
        quantity: parseInt(this.quantity),
        price: this.stock.price
      }
      this.stock.quantity ? this.sellStock(order) : this.buyStock(order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin-bottom: 1rem;
  }
  .card-header {
    background-color: #289ea8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
