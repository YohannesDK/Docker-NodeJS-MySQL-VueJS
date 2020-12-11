<template>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">{{day}}</h2>
            <div class="wrapper" v-if="loggedIn()">
              <span v-for="(t, index) in todo" :key="t"
              :id="index"
              >
                <p class="card-text">{{t.todo}}</p>
                <p class="card-text">{{t.timeToComplete}}</p>
                <p class="card-text">Done: {{t.done}}</p>
                <a @click="doneFunc(t.id)" class="btn btn-primary btn-sm">Done</a>
              </span>
            </div>
          </div>
          <div class="card-footer">
            <a class="btn btn-primary btn-sm">Done</a>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import store from '../store';
import Weekdo from '../models/Weekdo';
import ToDo from '../models/ToDo';

const todotype = {} as ToDo;

@Options({
  props: {
    todo: todotype,
    day: {} as string,
    index: {} as number,
  },
  emits: {
    done: 'todo-done',
  },
})

export default class TodoComponent extends Vue {
  todo!: ToDo;

  logged!: boolean;

  day!: string;

  index!: number;

  public loggedIn(): boolean {
    this.logged = store.getters.loggedIn;
    return store.getters.loggedIn;
  }

  /**
   * doneFunc
   */
  public doneFunc(id: number): void {
    this.$emit('todo-done', this.index, id);
    console.log(this.todo);
  }
}
</script>
