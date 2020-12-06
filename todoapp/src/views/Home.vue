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

@Options({
  components: {
    Welcome,
  },
})
export default class Home extends Vue {
  weekdoes!: Array<Weekdo>

  public get getweekdoes(): Weekdo[] {
    return this.weekdoes;
  }

  public set setweekdoes(v: Array<Weekdo>) {
    this.weekdoes = v;
  }

  mounted() {
    const data = JSON.parse(JSON.stringify(store.getters.weekdoes));
    if (data !== null) {
      this.weekdoes = data;
    }
  }
}
</script>
