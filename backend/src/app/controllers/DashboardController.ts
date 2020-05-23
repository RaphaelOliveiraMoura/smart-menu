import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetGroupedOrdersByTypeService from '@services/GetGroupedOrdersByTypeService';

const getGroupedOrdersByType = container.resolve(GetGroupedOrdersByTypeService);

class DashboardController {
  async index(_request: Request, response: Response): Promise<Response> {
    const dashboard = await getGroupedOrdersByType.execute();
    return response.json(dashboard);
  }
}

export default DashboardController;
