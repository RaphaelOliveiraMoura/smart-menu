import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order from '@models/Order';
import WebSocketService from '@services/WebSocket';

class RequestOrderController {
  static async store(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const { idProduct, ammount, observations } = request.body;

    const { generatedMaps: order } = await getRepository(Order).insert({
      table: { id: Number(id_table) },
      product: { id: idProduct },
      ammount,
      observations,
    });

    WebSocketService.emit('NEW_ORDER');

    return response.json(order);
  }
}

export default RequestOrderController;
