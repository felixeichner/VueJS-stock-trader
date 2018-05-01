<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav navbar-nav">
          <router-link to="/portfolio" class="nav-item" active-class="active" tag="li">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link to="/stocks" class="nav-item" active-class="active" tag="li">
            <a class="nav-link">Stocks</a>
          </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="saveData">Save Data</a>
        </li>
      </ul>
      <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    endDay() {
      this.$store.dispatch('randomizeStocks');
    },
    saveData() {
      this.$http.put('data.json', this.$store.getters.getState);
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    background-color: #cee1f1;
    margin-bottom: 3rem;
  }
</style>
