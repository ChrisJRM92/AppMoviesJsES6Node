import dotenv from 'dotenv';
import database from './config/database.js';
import app from './server.js';
dotenv.config();

// Added this lines for create tables in ours database in postgreSQL
import Genre from './data/models/genre.model.js';
import Actors from './data/models/actors.model.js';
import Directors from './data/models/directors.model.js';
import Movies from './data/models/movies.model.js';

// Added this lines for relationship between tables
import '../src/data/models/index.js'


const port = process.env.PORT;
const server = `http://localhost:${port}`;


(async function() {
  try{
    await database.sync(); //{alter: true} {force: true}
    console.log('Database connected...');
    app.listen(port, ()=>{
      console.log(`Server on ${server}`)
    })
  }
  catch(error){
    console.log('Error server',error)
  }
})();