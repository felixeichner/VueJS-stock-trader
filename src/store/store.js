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
    },
    'SELL_STOCK': (state, order) => {
      const myStock = state.portfolio.myStocks.find(element => element.id == order.id);
      if (myStock.quantity <= order.quantity) {
        state.portfolio.myStocks.splice(state.portfolio.myStocks.indexOf(myStock), 1);
      } else {
        myStock.quantity -= order.quantity;
      }
      state.portfolio.funds += order.price * order.quantity;
    },
    'BUY_STOCK': (state, order) => {
      const myStock = state.portfolio.myStocks.find(element => element.id == order.id);
      if (myStock) {
        myStock.quantity += order.quantity;
      } else {
        state.portfolio.myStocks.push({
          id: order.id,
          quantity: order.quantity
        })
      }
      state.portfolio.funds -= order.price * order.quantity;
    }
  },
  actions: {
    randomizeStocks: ({commit}) => {
      commit('RND_STOCKS');
    },
    buyStock: ({commit}, order) => {
      commit('BUY_STOCK', order);
    },
    sellStock: ({commit}, order) => {
      commit('SELL_STOCK', order);
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