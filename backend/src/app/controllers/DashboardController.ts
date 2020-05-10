import { Request, Response } from 'express';

import mockDashboard from '../mocks/dashboard';

class DashboardController {
  static async index(_request: Request, response: Response): Promise<Response> {
    return response.json(mockDashboard);
  }
}

export default DashboardController;
