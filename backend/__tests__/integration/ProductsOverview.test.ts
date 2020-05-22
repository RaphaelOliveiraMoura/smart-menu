import request from 'supertest';

import app from '@root/app';

import ProductsFactory from '../factories/ProcuctsFactory';
import truncate from '../truncate';

describe('ProductsOverview', () => {
  beforeEach(() => truncate());

  it('should be able get promotions and recommended products list', async () => {
    const noPromotionProductsAmount = 5;
    const promotionProductsAmount = 8;

    await ProductsFactory.generate(noPromotionProductsAmount, {
      oldPrice: null,
    });

    await ProductsFactory.generate(promotionProductsAmount, { oldPrice: 10 });

    const response = await request(app.express).get('/overview');

    expect(response.status).toEqual(200);

    expect(response.body.recommended.length).toEqual(
      noPromotionProductsAmount + promotionProductsAmount,
    );
    expect(response.body.promotions.length).toEqual(promotionProductsAmount);
  });

  it('should be able filter products by category', async () => {
    const category1 = 2;
    const category2 = 3;
    const category3 = 5;

    await ProductsFactory.generate(category1, {}, { id_category: 1 });
    await ProductsFactory.generate(category2, {}, { id_category: 2 });
    await ProductsFactory.generate(category3, {}, { id_category: 3 });

    const responseWithoutFilter = await request(app.express).get('/overview');
    expect(responseWithoutFilter.body.recommended.length).toEqual(
      category1 + category2 + category3,
    );

    const responseWithFilter1 = await request(app.express).get(
      '/overview?categories=[1]',
    );
    expect(responseWithFilter1.body.recommended.length).toEqual(category1);

    const responseMultipleFilters = await request(app.express).get(
      '/overview?categories=[2,3]',
    );
    expect(responseMultipleFilters.body.recommended.length).toEqual(
      category2 + category3,
    );

    const responseWithEmptyFilter = await request(app.express).get(
      '/overview?categories=[]',
    );
    expect(responseWithEmptyFilter.body.recommended.length).toEqual(0);
  });
});
