import types from './types';

const state = {
  authenticated: false,
  user: {}
};

const getters = {};

const mutations = {
  [types.auth.success](state, user) {
    state.user = { ...user };
    state.authenticated = true;
  },
  [types.auth.logout](state) {
    state.authenticated = false;
    state.user = {};
  }
};

const actions = {
  [types.auth.success]({ commit }, user) {
    commit(types.auth.success, user);
  },
  [types.auth.logout]({ commit }) {
    commit(types.auth.logout);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
