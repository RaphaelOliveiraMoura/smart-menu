import { Request, Response } from 'express';

import UpdateOrderStatusToDone from '@services/UpdateOrderStatusToDone';

class FinishedOrderController {
  static async store(request: Request, response: Response): Promise<Response> {
    try {
      const { idOrder } = request.body;

      const order = await UpdateOrderStatusToDone.execute(idOrder);

      return response.json(order);
    } catch ({ message = 'Internal Server Error', status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default FinishedOrderController;
