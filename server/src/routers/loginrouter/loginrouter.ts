import {NextFunction, Response, Router, Request} from 'express';
import LoginController from '../../controllers/LoginController';

class LoginRouter {
  private _router = Router();
  private _controller = LoginController;

  get router() : Router {
    return this._router
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this.router.get('/login', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.welcome());
    });
  }
}

export = new LoginRouter().router;