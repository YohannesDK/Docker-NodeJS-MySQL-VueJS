import {Router} from 'express';
import LoginRouter from './loginrouter/loginrouter'
import todorouter from './Todorouter/todorouter';

class MainRouter {
  private _router = Router();
  private _subLogin = LoginRouter;
  private _subTodoes = todorouter;
  
  
  public get router() : Router {
    return this._router
  }
  
  constructor() {
    this._configure()
  }

  private _configure() {
    this._router.use('/', this._subLogin)
    this._router.use('/todoes', this._subTodoes)
  }
}

export = new MainRouter().router;