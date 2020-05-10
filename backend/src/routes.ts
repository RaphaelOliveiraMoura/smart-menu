import { Router } from 'express';

import DashboardController from './app/controllers/DashboardController';
import ItemController from './app/controllers/ItemController';
import RequestController from './app/controllers/RequestController';
import FinishRequestController from './app/controllers/FinishRequestController';

const routes = Router();

routes.get('/dashboard', DashboardController.index);
routes.get('/items/:id', ItemController.show);

routes.get('/requests', RequestController.show);
routes.post('/requests', RequestController.store);

routes.get('/requests/finished', FinishRequestController.show);
routes.post('/requests/finished', FinishRequestController.store);

export default routes;
