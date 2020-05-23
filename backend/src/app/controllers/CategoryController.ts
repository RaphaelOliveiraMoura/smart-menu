import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetCategoriesService from '@services/GetCategoriesService';

const getCategories = container.resolve(GetCategoriesService);

class CategoryController {
  async index(_request: Request, response: Response): Promise<Response> {
    const categories = await getCategories.execute();
    return response.json(categories);
  }
}

export default CategoryController;
