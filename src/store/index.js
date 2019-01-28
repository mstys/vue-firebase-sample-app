import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations, firebaseAction } from 'vuexfire';
import auth from './authorization';
import cart from './cart';
import meals from './meals';
import beers from './beers';

import { meals as mealsRef } from '../firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    cart,
    meals,
    beers
  },
  actions: {
    setMealsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('meals', ref);
    })
  },
  mutations: { ...firebaseMutations }
});

/**
 * Meals firebase listener
 * move to external file
 */

// mealsRef.onSnapshot(param => store.dispatch(types.meals.update, param));

/**
 * Store-firebase bind
 */
store.dispatch('setMealsRef', mealsRef);

export default store;
