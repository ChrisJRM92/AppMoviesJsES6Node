import express from 'express';
import { getAll, create } from '../controllers/actors.controller.js';

const routerActors = express.Router();

routerActors.route('/').get(getAll).post(create);
  

export default routerActors;