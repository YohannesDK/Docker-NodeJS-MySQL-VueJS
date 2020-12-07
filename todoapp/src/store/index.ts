import { createStore } from 'vuex';
import Weekdo from '../models/Weekdo';
import ToDo from '../models/ToDo';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default createStore({
  state: {
    loggedIn: false,
    weekdoes: null as unknown as Array<Weekdo>,
    user: null as unknown as string,
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
        const weekdo: Weekdo = { day: days[i], todoes: Todoes };
        const todo: ToDo = {
          todo: `
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Rem magni quas ex numquam, maxime minus quam molestias corporis quod,
                ea minima accusamus.`,
          timeToComplete: new Date(),
        };
        weekdo.todoes.push(todo);
        Weekdoes.push(weekdo);
      }
      state.weekdoes = Weekdoes;
    },
    SetUserTo: (state, username) => {
      state.user = username;
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
    settUser: (context, username: string) => {
      context.commit('SetUserTo', username);
    },
  },
  getters: {
    loggedIn: (state) => state.loggedIn,
    weekdoes: (state) => state.weekdoes,
    getUser: (state) => state.user,
  },
  modules: {
  },
});
