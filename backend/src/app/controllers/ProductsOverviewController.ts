import { Request, Response } from 'express';
import { getRepository, Not, IsNull, In } from 'typeorm';

import Product from '@models/Product';

class ProductsOverviewController {
  static async index(request: Request, response: Response): Promise<Response> {
    const { categories } = request.query;

    const filterByCategories: { category?: object } = {};

    if (categories) {
      const parsedCategories: number[] = JSON.parse(String(categories));

      if (parsedCategories.length === 0) {
        filterByCategories.category = { id: IsNull() };
      } else {
        filterByCategories.category = { id: In(parsedCategories) };
      }
    }

    const recommended = await getRepository(Product).find({
      where: { ...filterByCategories },
    });

    const promotions = await getRepository(Product).find({
      where: { oldPrice: Not(IsNull()), ...filterByCategories },
    });

    const productsOverview = {
      recommended,
      promotions,
    };

    return response.json(productsOverview);
  }
}

export default ProductsOverviewController;
