import { Request, Response } from 'express';

import items from '../mocks/items';

class DashboardController {
  static async show(request: Request, response: Response): Promise<Response> {
    const itemId = request.params.id;
    const item = items.find(({ id }) => id === Number(itemId));
    return response.json(item);
  }
}

export default DashboardController;
