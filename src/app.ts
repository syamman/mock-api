import * as express from 'express';
import * as dotenv from 'dotenv';
import { routes } from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.loadEnvVars();
    this.loadMiddlewares();
    this.mountRoutes();
    this.setRunningPort();
  }

  private loadEnvVars(): void {
    dotenv.config({ path: '.env'});
  }

  private loadMiddlewares(): void {

    // Support application/json post data
    this.app.use(express.json());

    // Support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initDatabaseConnection(): void {

  }

  private mountRoutes(): void {
    this.app.use('/', routes);
  }

  private setRunningPort(): void {
    this.app.set('port', process.env.EXPRESS_PORT || 3000);
  }
}

export default new App().app;