import express from 'express';
import { getAll, create, remove, update, getOne } from '../controllers/genres.controller.js';

const routerGenre = express.Router();

routerGenre.route('/').get(getAll).post(create);
routerGenre.route('/:id').get(getOne).delete(remove).put(update)
  

export default routerGenre;