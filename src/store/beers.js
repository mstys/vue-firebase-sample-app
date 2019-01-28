import types from './types';
import BeerApi from '@/api/beers';

const state = {
  all: [],
};

const getters = {};

const mutations = {
  [types.beers.fetch](state, beers) {
    state.all = {
      ...beers,
    };
  }
};

const actions = {
  async [types.beers.fetch]({ commit }) {
    const data = await BeerApi.getBeers();

    commit(types.beers.fetch, data);
    return data;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
