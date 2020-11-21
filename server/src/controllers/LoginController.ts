
class LoginController {
  username:string = '';
  loggedIn:boolean = false;
  /**
   * login controller
   */
  public login(data: any = {username: 'None', password: '0000'}) {
    console.log(data);
    if (data.username === "Yohannes" && data.password === '1234') {
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
    this.username = data.username;
    return {
      username: this.username,
      loggedIn : this.loggedIn
    }
  }
}
export = new LoginController();