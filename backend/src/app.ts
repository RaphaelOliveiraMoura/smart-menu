import '@config/Env';
import '@app/container';

import cors from 'cors';
import express, {
  Request,
  Response,
  NextFunction,
  Express,
  json,
} from 'express';
import 'express-async-errors';
import { Server, createServer } from 'http';

import database from '@database/index';
import IDatabaseConnection from '@database/interfaces/IDatabaseConnection';
import WebSocketService from '@lib/WebSocket';
import HttpError from '@utils/HttpError';

import routes from './routes';

class Application {
  public express: Express;

  public connection: IDatabaseConnection;

  public server: Server;

  constructor() {
    this.express = express();
    this.server = createServer(this.express);
  }

  async initialize(): Promise<void> {
    this.connection = await database.connect();

    this.webSocket();
    this.http();
  }

  http(): void {
    this.middlewares();
    this.routes();
    this.handleErrors();
  }

  webSocket(): void {
    WebSocketService.initialize(this.server);
  }

  middlewares(): void {
    this.express.use(json());
    this.express.use(cors());
  }

  routes(): void {
    this.express.use(routes);
  }

  handleErrors(): void {
    this.express.use(
      // eslint-disable-next-line
      (error: Error, _req: Request, res: Response, _next: NextFunction) => {
        if (error instanceof HttpError) {
          const { message, statusCode } = error;

          return res.status(statusCode).json({ error: message });
        }

        return res.status(500).json({ error: 'Internal Server Error' });
      },
    );
  }
}

export default new Application();
