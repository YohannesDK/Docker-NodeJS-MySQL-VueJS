import {Router} from 'express';
import LoginRouter from './loginrouter/loginrouter'

class MainRouter {
  private _router = Router();
  private _subLogin = LoginRouter;
  
  
  public get router() : Router {
    return this._router
  }
  
  constructor() {
    this._configure()
  }

  private _configure() {
    this._router.use('/', this._subLogin)
  }
}

export = new MainRouter().router;