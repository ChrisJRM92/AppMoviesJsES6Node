import express from 'express';
import routerMovies from './movies.route.js';

const routerIndex = express.Router();
routerIndex.use('/movies', routerMovies);

export default routerIndex;

