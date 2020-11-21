<template>
  <div>
    <form class="form-signin" @submit.prevent="signin()">
      <img class="mb-4"
      src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
      alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputUsername" class="sr-only">Username</label>
      <input type="text" id="inputUsername" class="form-control"
        placeholder="Username" required="" autofocus=""
        v-model="username">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control"
      placeholder="Password" required=""
      v-model="password">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2020-2021</p>
      </form>
     </div>
</template>

<style scoped>
  .form-signin{
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  input{
    margin-bottom: 5%;
  }
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
import store from '../store';

export default class Login extends Vue {
  username !: string;

  password !: string;

  signin(): void {
    const form = {
      username: this.username,
      password: this.password,
    };
    this.axios.post('/login', JSON.stringify(form))
      .then((res) => {
        console.log(res.data);
        if (res.data.loggedIn) {
          store.dispatch('login');
        }
        this.$router.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
</script>
