import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stocks: [
      {id: 1, name: "BMW", price: 123},
      {id: 2, name: "John Deere", price: 67},
      {id: 3, name: "Water", price: 94},
      {id: 4, name: "Gold", price: 106},
    ],
    portfolio: {
      funds: 10000,
      myStocks: [
        {id: 2, quantity: 3},
        {id: 3, quantity: 12}
      ]
    }
  },
  mutations: {
    'RND_STOCKS': (state) => {
      state.stocks.forEach(stock => stock.price += Math.round((Math.random() / 2 - 1/4) * stock.price))
    }
  },
  actions: {
    randomizeStocks: ({commit}) => {
      commit('RND_STOCKS');
    }
  },
  getters: {
    stocks: state => {
      return state.stocks;
    },
    funds: (state) => {
      return state.portfolio.funds;
    },
    myStocks: (state, getters) => {
      return state.portfolio.myStocks.map(myStock => {
        const stock = getters.stocks.find(element => element.id == myStock.id);
        return {
          id: stock.id,
          name: stock.name,
          price: stock.price,
          quantity: myStock.quantity
        }
      });
    }
  }
});