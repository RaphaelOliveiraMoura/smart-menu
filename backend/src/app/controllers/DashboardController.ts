import { Request, Response } from 'express';

import GetDashboardOrdersInf from '@services/GetDashboardOrdersInf';

class DashboardController {
  static async index(_request: Request, response: Response): Promise<Response> {
    const dashboard = await GetDashboardOrdersInf.execute();
    return response.json(dashboard);
  }
}

export default DashboardController;
