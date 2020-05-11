import { Request, Response } from 'express';
import { getRepository, Not, IsNull } from 'typeorm';

import Product from '@models/Product';

class ProductsOverviewController {
  static async index(_request: Request, response: Response): Promise<Response> {
    const recommended = await getRepository(Product).find();

    const promotions = await getRepository(Product).find({
      where: { oldPrice: Not(IsNull()) },
    });

    const productsOverview = {
      recommended,
      promotions,
    };

    return response.json(productsOverview);
  }
}

export default ProductsOverviewController;
