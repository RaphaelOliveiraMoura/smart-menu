import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Order from '@models/Order';
import Rating from '@models/Rating';

class RatingController {
  static async store(request: Request, response: Response): Promise<Response> {
    const { stars } = request.body;
    const { id_order } = request.params;

    const orderRepository = getRepository(Order);
    const ratingRepository = getRepository(Rating);

    const order = await orderRepository.findOne(id_order, {
      relations: ['rating'],
    });

    if (!order) {
      return response.status(400).json({ error: 'Invalid order' });
    }

    if (!order.rating) {
      const rating = ratingRepository.create({ stars });

      await ratingRepository.save(rating);

      order.rating = rating;

      await orderRepository.save(order);

      return response.json(order);
    }

    order.rating.stars = stars;

    await ratingRepository.update(order.rating.id, { stars });

    return response.json(order);
  }
}

export default RatingController;
