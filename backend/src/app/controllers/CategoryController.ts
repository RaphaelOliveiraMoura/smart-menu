import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Category from '@models/Category';

class CategoryController {
  static async index(_request: Request, response: Response): Promise<Response> {
    const orderRepository = getRepository(Category);

    const categories = await orderRepository.find();

    return response.json(categories);
  }
}

export default CategoryController;
