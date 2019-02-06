import types from './types';
import { customers } from '../firebaseConfig';

const state = {
};

const getters = {};

const mutations = {
};

const actions = {
  /**
   * Action without mutations
   * State is live-synced with firestore
   */
  async [types.dashboard.addUser](customer) {
    try {
      await customers.add({ ...customer });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
