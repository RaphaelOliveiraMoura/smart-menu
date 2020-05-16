import { Request, Response } from 'express';
import { getRepository, In } from 'typeorm';

import Order, { OrderStatus } from '@models/Order';

class NotDeliveredOrderController {
  static async index(request: Request, response: Response): Promise<Response> {
    const { id_table } = request.headers;

    const orders = await getRepository(Order).find({
      where: {
        status: In([OrderStatus.IN_PROGRESS, OrderStatus.DONE]),
        table: { id: id_table },
      },
      order: { updatedAt: 'DESC' },
      relations: ['product'],
    });

    return response.json(orders);
  }
}

export default NotDeliveredOrderController;
