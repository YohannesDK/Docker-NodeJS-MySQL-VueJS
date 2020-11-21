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
      console.log(req.body);      
      res.header({'Access-Control-Allow-Origin': '*'}).status(200).json(this._controller.login());
    });
    
    this.router.post('/login', (req: Request, res: Response, next: NextFunction) => {
      console.log((req.body));
      let data = JSON.parse(Object.keys(req.body)[0]);
      res.header({'Access-Control-Allow-Origin': '*'}).status(200).json(this._controller.login(data));
    });
  }
}

export = new LoginRouter().router;