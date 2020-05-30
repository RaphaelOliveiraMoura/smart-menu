import { container, injectable, inject } from 'tsyringe';

import IWebSocket from '@shared/services/IWebSocket';

@injectable()
class WebSocket {
  constructor(
    @inject('@shared/WebSocket')
    public instance: IWebSocket,
  ) {}
}

export default container.resolve(WebSocket).instance;
