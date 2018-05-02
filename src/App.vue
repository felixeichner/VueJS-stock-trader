<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    AppHeader: Header
  },
  created() {
    this.$http.get('data.json')
      .then(response => response.json())
      .then(data => this.$store.dispatch('initializeState', data))
      .catch(error => console.log(error));
  }
}
</script>

<style lang="scss">

</style>
