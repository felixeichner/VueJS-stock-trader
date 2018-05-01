<template>
  <div class="text-center">
    <h3>Start Trading!</h3>
    <h5>Buy and sell stocks and view your portfolio.</h5>
    <br>
    <button class="btn btn-lg btn-success" @click="loadData()">Load Your Portfolio</button>
  </div>
</template>

<script>
export default {
  methods: {
    loadData() {
      this.$http.get('data.json')
        .then(response => response.json())
        .then(data => this.$store.dispatch('initializeState', data))
        .then(this.$router.push('/portfolio'))
        .catch(error => console.log(error));
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
