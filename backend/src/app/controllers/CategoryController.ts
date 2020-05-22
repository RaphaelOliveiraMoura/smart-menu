import { Request, Response } from 'express';

import GetCategoriesService from '@services/GetCategoriesService';

class CategoryController {
  static async index(_request: Request, response: Response): Promise<Response> {
    const categories = await GetCategoriesService.execute();
    return response.json(categories);
  }
}

export default CategoryController;
