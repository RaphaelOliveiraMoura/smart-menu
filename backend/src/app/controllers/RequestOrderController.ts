import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order from '@models/Order';

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

    return response.json(order);
  }
}

export default RequestOrderController;
