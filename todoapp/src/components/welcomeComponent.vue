<template>
  <div class="container">
    <!-- Heading Row -->
    <div class="row align-items-center my-5">
      <!-- /.col-lg-8 -->
      <div class="col-lg-5">
        <h1 class="font-weight-light">Welcome <br> <h3>{{user}}</h3> </h1>
        <a class="btn btn-primary" href="#"
        v-if="user.toLowerCase() !== 'stranger'">My Profile</a>
      </div>
      <div class="col-lg-7">
        <img class="img-fluid rounded mb-4 mb-lg-0" src="../assets/background.jpg" alt="">
      </div>
      <!-- /.col-md-4 -->
    </div>
    <!-- /.row -->
    <!-- Call to Action Well -->
    <div class="card text-white bg-secondary my-5 py-4 text-center">
      <a class="weatherwidget-io" href="https://forecast7.com/no/58d975d73/stavanger/"
      data-label_1="STAVANGER" data-label_2="WEATHER" data-theme="original" >STAVANGER WEATHER</a>
      <div class="card-body">
        <p class="text-white m-0">weather widger based on ip location...</p>
      </div>
    </div>

    <!-- Content Row -->
    <div class="row">
      <TodoComponent v-for="(todo, index) in weekdoes"
      :key="index" :id="index" :todo="todo.todoes" :day="todo.day"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoComponent from '@/components/todoComponent.vue'; // @ is an alias to /src
import store from '../store';
import Weekdo from '../models/Weekdo';

@Options({
  components: {
    TodoComponent,
  },
})

export default class Welcome extends Vue {
  user !: string;

  weekdoes!: Array<Weekdo>;

  public get getweekdoes(): Weekdo[] {
    return this.weekdoes;
  }

  public set setweekdoes(v: Array<Weekdo>) {
    this.weekdoes = v;
  }

  private initUser() {
    if (store.getters.getUser === null) {
      this.user = 'Stranger';
    } else {
      this.user = store.getters.getUser;
    }
  }

  private initweekdoes() {
    const data = JSON.parse(JSON.stringify(store.getters.weekdoes));
    if (data !== null) {
      this.weekdoes = data;
    }
  }

  created() {
    this.initUser();
    this.initweekdoes();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
