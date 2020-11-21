<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import store from './store';

const createdFunc = () => {
  store.dispatch('Weekdoes');
};

@Options({
  components: {
    NavBar,
  },
})

export default class App extends Vue {
  createdFunc = createdFunc;

  created() {
    this.createdFunc();
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
