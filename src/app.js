import express from 'express';
import dotenv from 'dotenv';
import connection from './config/database.js';
dotenv.config();

const app = express();
const port = process.env.PORT;
const server = `http://localhost:${port}`;


(async function() {
  try{
    await connection.sync();
    console.log('Database connected...');
    app.listen(port, ()=>{
      console.log(`Server on ${server}`)
    })
    app.get('/', (req, res)=>{
      res.send('Api V1 Movies App')
    })
  }
  catch(error){
    console.log('Error server',error)
  }
})();