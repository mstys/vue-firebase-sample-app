import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations, firebaseAction } from 'vuexfire';
import auth from './authorization';
import cart from './cart';
import meals from './meals';
import beers from './beers';
import customers from './customers';

import { meals as mealsRef, customers as customersRef } from '../firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    cart,
    meals,
    beers,
    customers
  },
  actions: {
    setMealsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('meals', ref);
    }),

    setCustomersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('customers', ref);
    })
  },
  mutations: { ...firebaseMutations }
});

/**
 * Store-firebase bind
 */
store.dispatch('setMealsRef', mealsRef);
store.dispatch('setCustomersRef', customersRef);

export default store;
