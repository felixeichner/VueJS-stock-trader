import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './router/routes';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
