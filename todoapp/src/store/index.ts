import { createStore } from 'vuex';
import Weekdo from '../models/Weekdo';
import ToDo from '../models/ToDo';

export default createStore({
  state: {
    loggedIn: false,
    weekdoes: null as unknown as Array<Weekdo>,
  },
  mutations: {
    loginStatus: (state) => {
      state.loggedIn = true;
    },
    logoutStatus: (state) => {
      state.loggedIn = false;
    },
    initWeekdoes: (state) => {
      const Weekdoes = new Array<Weekdo>();
      for (let i = 0; i < 7; i += 1) {
        const Todoes = new Array<ToDo>();
        const weekdo: Weekdo = { day: '_', todoes: Todoes };
        const todo: ToDo = { todo: '_', timeToComplete: new Date() };
        weekdo.todoes.push(todo);
        Weekdoes.push(weekdo);
      }
      state.weekdoes = Weekdoes;
    },
  },
  actions: {
    login: (context) => {
      context.commit('loginStatus');
    },
    logout: (context) => {
      context.commit('logoutStatus');
    },
    Weekdoes: (context) => {
      context.commit('initWeekdoes');
    },
  },
  getters: {
    loggedIn: (state) => state.loggedIn,
    weekdoes: (state) => state.weekdoes,
  },
  modules: {
  },
});
