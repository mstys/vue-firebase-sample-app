import types from './types';
import BeerApi from '@/api/beers';

const state = {
  all: [],
};

const getters = {};

const mutations = {
  [types.beers.fetch](state, beers) {
    state.all = [
      ...beers,
    ];
  }
};

const actions = {
  /**
   * Get data from REST API
   * and commit mutation to save in vuex
   */
  async [types.beers.fetch]({ commit }) {
    try {
      const data = await BeerApi.getBeers();
      commit(types.beers.fetch, data);
    } catch (e) {
      console.error(e);
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
