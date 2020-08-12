//imports
import { Router } from 'express'

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

//config
const routes = Router();

//routes
//post
routes.post('/classes', ClassesController.store);
routes.post('/connections', ConnectionsController.store);

//get
routes.get('/classes', ClassesController.index);
routes.get('/connections', ConnectionsController.index);

//exports
export default routes;