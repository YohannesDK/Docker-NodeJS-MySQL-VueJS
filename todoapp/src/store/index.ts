import { createStore } from 'vuex';
import Weekdo from '../models/Weekdo';
import ToDo from '../models/ToDo';

export default createStore({
  state: {
    loggedIn: false,
    weekdoes: (): Array<Weekdo> => {
      const Weekdoes = new Array<Weekdo>();
      for (let i = 0; i < 7; i += 1) {
        const Todoes = new Array<ToDo>();
        const weekdo: Weekdo = { day: '_', todoes: Todoes };
        const todo: ToDo = { todo: '_', timeToComplete: new Date() };
        weekdo.todoes.push(todo);
        Weekdoes.push(weekdo);
      }
      return Weekdoes;
    },
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
    weekdoes: (state) => state.weekdoes,
  },
  modules: {
  },
});
