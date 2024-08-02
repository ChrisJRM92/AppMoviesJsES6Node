import Actors from "./actors.model.js";
import Directors from "./directors.model.js";
import Genre from "./genre.model.js";
import Movies from "./movies.model.js";

Movies.hasMany(Actors);
Movies.hasMany(Directors);
Movies.belongsTo(Genre);