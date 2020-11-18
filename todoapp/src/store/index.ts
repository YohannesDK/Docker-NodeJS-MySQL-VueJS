import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    loggedIn: (state) => state.loggedIn,
  },
  modules: {
  },
});
