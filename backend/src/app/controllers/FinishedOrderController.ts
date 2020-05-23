import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateOrderStatusToDoneService from '@services/UpdateOrderStatusToDoneService';

const updatedOrderStatusToDone = container.resolve(
  UpdateOrderStatusToDoneService,
);

class FinishedOrderController {
  async store(request: Request, response: Response): Promise<Response> {
    try {
      const { idOrder } = request.body;

      const order = await updatedOrderStatusToDone.execute(idOrder);

      return response.json(order);
    } catch ({ message = 'Internal Server Error', status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default FinishedOrderController;
