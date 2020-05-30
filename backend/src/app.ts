import '@root/bootstrap';
import '@app/container';

import cors from 'cors';
import express, { Express, json } from 'express';
import 'express-async-errors';
import { Server, createServer } from 'http';
import { injectable, inject, container } from 'tsyringe';

import database, { IDatabaseConnection } from '@database/index';
import handleErrors from '@shared/infra/http/middlewares/handleErrors';
import routes from '@shared/infra/http/routes';
import IWebSocket from '@shared/services/IWebSocket';

@injectable()
class Application {
  public express: Express;

  public connection: IDatabaseConnection;

  public server: Server;

  constructor(
    @inject('@shared/WebSocket')
    private webSocketService: IWebSocket,
  ) {
    this.express = express();
    this.server = createServer(this.express);
  }

  async initialize(): Promise<void> {
    this.connection = await database.connect();

    this.webSocket();
    this.http();
  }

  http(): void {
    this.express.use(json());
    this.express.use(cors());
    this.express.use(routes);
    this.express.use(handleErrors);
  }

  webSocket(): void {
    this.webSocketService.initialize(this.server);
  }
}

export default container.resolve(Application);
