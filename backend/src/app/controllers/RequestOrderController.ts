import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order, { OrderStatus } from '@models/Order';

class RequestOrderController {
  static async index(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await getRepository(Order).find({
      where: { status: OrderStatus.IN_PROGRESS, table: { id: id_table } },
      relations: ['product'],
    });

    return response.json(orders);
  }

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
