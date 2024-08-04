import express from 'express';
import { getAll, create, getOne, remove, update } from '../controllers/directors.controller.js';

const routerDirectors = express.Router();

routerDirectors.route('/').get(getAll).post(create);
routerDirectors.route('/:id').get(getOne).delete(remove).patch(update)
  

export default routerDirectors;