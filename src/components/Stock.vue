<template>
  <div class="card">
    <div class="card-header">
      <strong class="float-left">{{ stock.name }}</strong>
      <small class="float-right">Price: {{ stock.price }}</small>
    </div>
    <div class="card-body">
      <div class="float-left">
        <input type="number" v-model="quantity">
      </div>
      <div class="float-right">
        <button class="btn btn-success" :disabled="quantity <= 0">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
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
  }
</style>
