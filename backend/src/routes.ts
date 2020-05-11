import { Router } from 'express';

import DashboardController from '@controllers/DashboardController';
import ItemController from '@controllers/ItemController';
import RequestController from '@controllers/RequestController';
import FinishRequestController from '@controllers/FinishRequestController';
import PendingOrderController from '@controllers/PendingOrderController';

const routes = Router();

routes.get('/dashboard', DashboardController.index);
routes.get('/items/:id', ItemController.show);

routes.get('/requests', RequestController.show);
routes.post('/requests', RequestController.store);

routes.get('/requests/finished', FinishRequestController.show);
routes.post('/requests/finished', FinishRequestController.store);

routes.get('/admin', PendingOrderController.index);

export default routes;
