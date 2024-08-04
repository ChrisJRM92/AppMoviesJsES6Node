import express from 'express';
import { getAll, create, remove, getOne, update } from '../controllers/movies.controller.js';

const routerMovies = express.Router();

routerMovies.route('/').get(getAll).post(create);
routerMovies.route('/:id').get(getOne).put(update).delete(remove);

export default routerMovies;
