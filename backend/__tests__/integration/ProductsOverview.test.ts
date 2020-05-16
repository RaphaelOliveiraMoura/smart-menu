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
});
