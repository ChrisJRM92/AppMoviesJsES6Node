import express from 'express';
import routerMovies from './movies.route.js';
import routerActors from './actors.route.js';
import routerDirectors from './directors.route.js';
import routerGenre from './genre.route.js';

const routerIndex = express.Router();
routerIndex.use('/movies', routerMovies);
routerIndex.use('/actors', routerActors);
routerIndex.use('/directors', routerDirectors);
routerIndex.use('/genres', routerGenre);

export default routerIndex;

