import express from 'express';
import { getAll, create } from '../controllers/genres.controller.js';

const routerGenre = express.Router();

routerGenre.route('/').get(getAll).post(create);
  

export default routerGenre;