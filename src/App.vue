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
    this.loadData;
  }
}
</script>

<style lang="scss">

</style>
