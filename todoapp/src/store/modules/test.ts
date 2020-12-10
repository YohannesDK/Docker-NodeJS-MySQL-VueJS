import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'Test' })
export default class Test extends VuexModule {
  public test = 'Test 1';

  @Mutation
  /**
   * MutatueTest
   */
  public MutateTest(newTestString: string): void {
    this.test = newTestString;
  }

  @Action
  /**
   * UpdateTestString
   */
  public UpdateTestString(newTestString: string): void {
    this.context.commit('MutateTest', newTestString);
  }
}
