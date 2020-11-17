
class LoginController {
  title:string = 'Home';
  loggedIn:boolean = false;
  /**
   * welcome method
   */
  public welcome() {
    return {
      title: this.title,
      loggedIn : this.loggedIn
    }
  }
}
export = new LoginController();