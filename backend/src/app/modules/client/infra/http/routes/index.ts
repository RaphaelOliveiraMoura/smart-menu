import { Router } from 'express';

import CategoryController from '@modules/client/controllers/CategoryController';
import DeliveredOrderController from '@modules/client/controllers/DeliveredOrderController';
import NotDeliveredOrderController from '@modules/client/controllers/NotDeliveredOrderController';
import ProductController from '@modules/client/controllers/ProductController';
import ProductsOverviewController from '@modules/client/controllers/ProductsOverviewController';
import RatingController from '@modules/client/controllers/RatingController';
import RequestOrderController from '@modules/client/controllers/RequestOrderController';
import SessionController from '@modules/client/controllers/SessionController';

import jwt from '../middlewares/jwt';

const categoryController = new CategoryController();
const deliveredOrderController = new DeliveredOrderController();
const notDeliveredOrderController = new NotDeliveredOrderController();
const productController = new ProductController();
const productsOverviewController = new ProductsOverviewController();
const ratingController = new RatingController();
const requestOrderController = new RequestOrderController();
const sessionController = new SessionController();

const routes = Router();

routes.post('/sessions', sessionController.store);

routes.use(jwt);

routes.get('/products/:id', productController.show);

routes.get('/orders/delivery', deliveredOrderController.show);
routes.post('/orders/delivery', deliveredOrderController.store);

routes.get('/orders', notDeliveredOrderController.index);
routes.post('/orders', requestOrderController.store);

routes.post('/orders/:id_order/rating', ratingController.store);

routes.get('/overview', productsOverviewController.index);

routes.get('/categories', categoryController.index);

export default routes;
