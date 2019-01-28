import types from './types';
import MealsApi from '@/api/meals';

const state = {};

const getters = {};

const mutations = {
  [types.meals.fetch](state, meals) {
    state = {
      ...meals
    };
  }
};

const actions = {
  async [types.meals.fetch]({ commit }) {
    const meals = await MealsApi.getMeals();
    commit(types.meals.fetch, meals);
  },

  [types.meals.update]({ commit }, param) {
    const all = {};
    param.forEach((meal) => {
      const mealTemp = meal.data();
      mealTemp.id = meal.id;
      all[mealTemp.id] = { ...mealTemp };
    });

    commit(types.meals.fetch, all);
  },
  // [types.meals.add]({ commit }) {
  //   commit(types.meals.add, data);
  //   return data;
  // }
};


export default {
  state,
  mutations,
  actions,
  getters
};
