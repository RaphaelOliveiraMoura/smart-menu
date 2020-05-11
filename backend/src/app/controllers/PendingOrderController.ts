import { Request, Response } from 'express';

import requests from '../mocks/requests';

class PendingOrderController {
  static async index(_request: Request, response: Response): Promise<Response> {
    const orders = {
      inProgress: requests.inProgress[1],
      finished: requests.finished[1],
    };

    return response.json(orders);
  }
}

export default PendingOrderController;
