import dotenv from 'dotenv';
import express, {Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser';
import MainRouter from './routers/MainRouter'

// load env variables from .env
dotenv.config({
  path: '.env'
});

/**
 * Express server application class
 * @description Will contain our routing system
 */
class Server {
  public app = express();
  public router = MainRouter;
}

// init server app
const server = new Server();


// add parser for application/json
server.app.use(bodyParser.json());

// make server app handle any route starting with /api
server.app.use('/api', server.router);

((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
  })
})();
