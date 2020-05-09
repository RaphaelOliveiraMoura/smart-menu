import { Router } from 'express';

import DashboardController from './app/controllers/DashboardController';

const routes = Router();

routes.get('/dashboard', DashboardController.index);

export default routes;
