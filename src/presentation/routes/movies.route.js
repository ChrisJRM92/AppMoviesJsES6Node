import express from 'express';
import { getAll, create } from '../controllers/movies.controller.js';

const routerMovies = express.Router();

routerMovies.route('/').get(getAll).post(create);
  

export default routerMovies;
