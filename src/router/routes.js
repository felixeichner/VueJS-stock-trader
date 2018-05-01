import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';
import Stocks from '../components/Stocks.vue';

export const routes = [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks }
]