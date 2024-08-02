import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(helmet({crossOriginResourcePolicy: false}));
app.use(cors())
// app.use('/api/v1')

app.get('/', (req, res)=>{
  res.send('Api V1 Movies App')
});

export default app;