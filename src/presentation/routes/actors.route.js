import express from 'express';
import { create, getAll, getOne, remove, update } from '../controllers/actors.controller.js';

const routerActors = express.Router();

routerActors.route('/').get(getAll).post(create);
routerActors.route('/:id').get(getOne).delete(remove).put(update);
  

export default routerActors;