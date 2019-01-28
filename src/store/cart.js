// import Vue from 'vue';
import types from './types';

const state = {
  cart: [],
  test: 'test'
};

const mutations = {
  [types.cart.addToCart](state, product) {
    const cartItem = state.cart.find(item => item.product.id === product.id);
    if (!cartItem) {
      state.cart.push({
        product: { ...product },
        amount: 1
      });
    } else {
      cartItem.amount++;
    }
  },

  [types.cart.incAmount](state, id) {
    const product = state.cart.find(item => item.product.id === id);
    product.amount++;
  },

  [types.cart.decAmount](state, id) {
    const product = state.cart.find(item => item.product.id === id);
    product.amount = product.amount !== 0 ? product.amount-- : 0;
  }
};

const actions = {
  [types.cart.addToCart]({ commit }, product) {
    commit(types.cart.addToCart, product);
  },

  [types.cart.incAmount]({ commit }, id) {
    commit(types.cart.incAmount, id);
  },

  [types.cart.decAmount]({ commit }, id) {
    commit(types.cart.decAmount, id);
  }
};

export default { state, mutations, actions };
