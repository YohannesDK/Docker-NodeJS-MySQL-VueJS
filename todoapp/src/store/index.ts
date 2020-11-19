import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
    loginStatus: (state) => {
      state.loggedIn = true;
    },
    logoutStatus: (state) => {
      state.loggedIn = false;
    },
  },
  actions: {
    login: (context) => {
      context.commit('loginStatus');
    },
    logout: (context) => {
      context.commit('logoutStatus');
    },
  },
  getters: {
    loggedIn: (state) => state.loggedIn,
  },
  modules: {
  },
});
