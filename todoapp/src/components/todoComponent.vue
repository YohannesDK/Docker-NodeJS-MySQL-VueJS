<template>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">{{day}}</h2>
            <span v-for="t in todo" :key="t">
              <p class="card-text">{{t.todo}}</p>
              <p class="card-text">{{t.timeToComplete}}</p>
            </span>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '../store';
import Weekdo from '../models/Weekdo';
import ToDo from '../models/ToDo';

const todotype = {} as ToDo;

@Options({
  props: {
    todo: todotype,
    day: {} as string,
  },
})

export default class TodoComponent extends Vue {
  todo!: ToDo;

  day!: string;

  mounted() {
    console.log(this.todo);
  }
}
</script>
