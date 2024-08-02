import dotenv from 'dotenv';
import database from './config/database.js';
import app from './server.js';
dotenv.config();

const port = process.env.PORT;
const server = `http://localhost:${port}`;


(async function() {
  try{
    await database.sync();
    console.log('Database connected...');
    app.listen(port, ()=>{
      console.log(`Server on ${server}`)
    })
  }
  catch(error){
    console.log('Error server',error)
  }
})();