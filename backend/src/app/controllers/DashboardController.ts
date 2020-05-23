import { Request, Response } from 'express';

import GetGroupedOrdersByTypeService from '@services/GetGroupedOrdersByTypeService';

class DashboardController {
  async index(_request: Request, response: Response): Promise<Response> {
    const dashboard = await GetGroupedOrdersByTypeService.execute();
    return response.json(dashboard);
  }
}

export default DashboardController;
