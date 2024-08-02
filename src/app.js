import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

const port = process.env.PORT;

app.listen(port, ()=>{
  console.log(`Server on ${port}`)
  console.log(`http://localhost:${port}`)
})

app.get('/', (req, res)=>{
  res.send('API V1 MOVIES APP')
})
