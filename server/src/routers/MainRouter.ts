import {Router} from 'express';
import LoginRouter from './loginrouter/loginrouter'

class MainRouter {
  private _router = Router();
  private _subrouterHome = LoginRouter;
  
  
  public get router() : Router {
    return this._router
  }
  
  constructor() {
    this._configure()
  }

  private _configure() {
    this._router.use('/', this._subrouterHome)
  }
}

export = new MainRouter().router;