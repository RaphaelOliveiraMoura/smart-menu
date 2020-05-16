import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order, { OrderStatus } from '@models/Order';

class FinishedOrderController {
  static async store(request: Request, response: Response): Promise<Response> {
    const { idOrder } = request.body;

    const orderRepository = await getRepository(Order);

    const order = await orderRepository.findOne(idOrder);

    if (!order) {
      return response.status(400).json({ error: 'Invalid order' });
    }

    order.status = OrderStatus.DONE;
    order.doneAt = new Date();

    await orderRepository.save(order);

    return response.json(order);
  }
}

export default FinishedOrderController;
