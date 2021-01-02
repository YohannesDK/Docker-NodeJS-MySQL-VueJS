import {NextFunction, Response, Router, Request} from 'express';
import TodoController from '../../controllers/TodoController';
import awaitHandlerFactory from '../../middleware/awaitHandlerFactory.middleware';

class TodoRouter {
  private _router = Router();
  private _controller = TodoController;

  get router() : Router{
    return this._router
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this.router.get('/all', (req: Request, res: Response, next: NextFunction) => {
      awaitHandlerFactory(this._controller.getAllTodoes(req, res, next))
      // res.header({'Access-Control-Allow-Origin': '*'}).status(200).json('it worked');
    });
  }
}

export = new TodoRouter().router;