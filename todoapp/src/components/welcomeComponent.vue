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
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card One</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Rem magni quas ex numquam, maxime minus quam molestias corporis quod,
            ea minima accusamus.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card Two</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam
            eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card Three</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Rem magni quas ex numquam, maxime minus quam molestias corporis
            quod, ea minima accusamus.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import store from '../store';

export default class Welcome extends Vue {
  user !: string;

  created() {
    if (store.getters.getUser === null) {
      this.user = 'Stranger';
    } else {
      this.user = store.getters.getUser;
    }
    console.log(this.user);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
