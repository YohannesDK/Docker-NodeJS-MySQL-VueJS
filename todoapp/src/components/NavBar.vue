<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand">Navbar</a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
      </li>
      <li class="nav-item" v-if="!loggedIn">
        <a class="nav-link" href="#"><router-link to="/login">Login</router-link></a>
      </li>
      <li class="nav-item" v-if="loggedIn">
        <a class="nav-link" @click="logout">Logout</a>
      </li>
  </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import store from '../store';

export default class NavBar extends Vue {
  l !: boolean

  public get loggedIn(): boolean {
    this.l = store.getters.loggedIn;
    return store.getters.loggedIn;
  }

  logout() {
    store.dispatch('logout');
    this.l = this.loggedIn;
  }
}
</script>

<style scoped>
/* ... */
</style>
