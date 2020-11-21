import dotenv from 'dotenv';
import cors from 'cors';
import express, {Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser';
import MainRouter from './routers/MainRouter'

// load env variables from .env
dotenv.config({
  path: '.env'
});

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Access-Control-Allow-Origin',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};

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

// support encoded bodies
server.app.use(express.urlencoded({ extended: true })); 

// support encoded bodies
server.app.use(bodyParser.urlencoded({ extended: true })); 

// add cors to api
server.router.use(cors(options));
server.router.options('*', cors(options));


// make server app handle any route starting with /api
server.app.use('/api', server.router);

((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
  })
})();
