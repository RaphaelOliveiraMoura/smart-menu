import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order, { OrderStatus } from '@models/Order';

class FinishedOrderController {
  static async show(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await getRepository(Order).find({
      where: {
        table: { id: id_table },
        status: OrderStatus.DONE,
      },
      order: { updatedAt: 'DESC' },
      relations: ['product'],
    });

    return response.json(orders);
  }

  static async store(request: Request, response: Response): Promise<Response> {
    const { idOrder } = request.body;

    const order = await getRepository(Order).update(idOrder, {
      status: OrderStatus.DONE,
    });

    return response.json(order);
  }
}

export default FinishedOrderController;
