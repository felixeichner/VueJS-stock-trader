import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './router/routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

Vue.filter('currency', value => {
  return '€ ' + value.toLocaleString();
});

Vue.http.options.root = "https://stock-trader-ce738.firebaseio.com/";

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
