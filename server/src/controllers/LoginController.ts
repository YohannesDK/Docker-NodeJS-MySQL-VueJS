
class LoginController {
  title:string = 'Home';
  loggedIn:boolean = false;
  /**
   * login controller
   */
  public login() {
    return {
      title: this.title,
      loggedIn : this.loggedIn
    }
  }
}
export = new LoginController();