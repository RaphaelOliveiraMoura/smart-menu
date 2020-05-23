import { Request, Response } from 'express';

import EvaluateOrderService from '@services/EvaluateOrderService';

class RatingController {
  async store(request: Request, response: Response): Promise<Response> {
    try {
      const { stars } = request.body;
      const { id_order } = request.params;

      const rating = await EvaluateOrderService.execute({
        stars,
        order: { id: Number(id_order) },
      });

      return response.json(rating);
    } catch ({ message, status = 500 }) {
      return response.status(status).json({ error: message });
    }
  }
}

export default RatingController;
