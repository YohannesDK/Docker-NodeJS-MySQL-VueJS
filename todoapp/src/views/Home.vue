<template>
  <div>
    <div class="home">
      <Welcome/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Welcome from '@/components/welcomeComponent.vue'; // @ is an alias to /src
import store from '../store';
import Weekdo from '../models/Weekdo';
// import ToDo from '../models/ToDo';

@Options({
  components: {
    Welcome,
  },
})
export default class Home extends Vue {
  l: any;

  private set weekdoes(v: Array<Weekdo>) {
    this.weekdoes = v;
  }

  mounted() {
    this.l = (store.getters.weekdoes2);
  }
}
</script>
