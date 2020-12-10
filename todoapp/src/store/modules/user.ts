import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'User' })
export default class User extends VuexModule {
  public user!: string;

  @Mutation
  public SetUserTo(newUser: string): void {
    this.user = newUser;
  }

  @Action
  public updateUser(newUser: string): void {
    this.context.commit('SetUserTo', newUser);
  }
}
