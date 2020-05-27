import { Router } from 'express';

import clientRoutes from './client';
import managementRoutes from './management';

const routes = Router();

routes.use(managementRoutes);
routes.use(clientRoutes);

export default routes;
