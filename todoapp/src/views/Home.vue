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
}
</script>
