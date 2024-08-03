import express from 'express';
import { getAll, create } from '../controllers/directors.controller.js';

const routerDirectors = express.Router();

routerDirectors.route('/').get(getAll).post(create);
  

export default routerDirectors;