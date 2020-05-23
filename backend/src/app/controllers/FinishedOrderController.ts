import { Request, Response } from 'express';

import UpdateOrderStatusToDoneService from '@services/UpdateOrderStatusToDoneService';

class FinishedOrderController {
  async store(request: Request, response: Response): Promise<Response> {
    try {
      const { idOrder } = request.body;

      const order = await UpdateOrderStatusToDoneService.execute(idOrder);

      return response.json(order);
    } catch ({ message = 'Internal Server Error', status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default FinishedOrderController;
