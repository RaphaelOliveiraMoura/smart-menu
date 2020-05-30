import { container } from 'tsyringe';

import WebSocket from '@shared/infra/tcp/socketio/index';
import IWebSocket from '@shared/services/IWebSocket';

container.registerSingleton<IWebSocket>('@shared/WebSocket', WebSocket);
