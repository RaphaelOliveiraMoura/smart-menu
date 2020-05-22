import { Request, Response } from 'express';

import GetProductsOverview from '@services/GetProductsOverview';

class ProductsOverviewController {
  static async index(request: Request, response: Response): Promise<Response> {
    const { categories } = request.query;

    const categoriesFilter = categories ? JSON.parse(String(categories)) : null;

    const productsOverview = await GetProductsOverview.execute(
      categoriesFilter,
    );

    return response.json(productsOverview);
  }
}

export default ProductsOverviewController;
