import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // read .env file and make properties available

const app = express(); // execute express
const port = process.env.PORT;

app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to the home route');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
