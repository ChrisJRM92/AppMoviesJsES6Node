import express from 'express';
import { getAll, create, getOne, remove, update } from '../controllers/actors.controller.js';

const routerActors = express.Router();

routerActors.route('/').get(getAll).post(create);
routerActors.route('/:id').get(getOne).delete(remove).patch(update)
  

export default routerActors;