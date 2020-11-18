<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand">Navbar</a>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import store from '../store';

export default class NavBar extends Vue {
  loggedIn!: boolean

  created() {
    this.loggedIn = store.state.loggedIn;
  }
}
</script>

<style scoped>
/* ... */
</style>
