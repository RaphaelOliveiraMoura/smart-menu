import { Request, Response } from 'express';
import { container } from 'tsyringe';

import EvaluateOrderService from '@services/EvaluateOrderService';

const evaluateOrder = container.resolve(EvaluateOrderService);

class RatingController {
  async store(request: Request, response: Response): Promise<Response> {
    const { stars } = request.body;
    const { id_order } = request.params;

    const rating = await evaluateOrder.execute({
      stars,
      order: { id: Number(id_order) },
    });

    return response.json(rating);
  }
}

export default RatingController;
