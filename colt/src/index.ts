import express, { Request, Response } from 'express';

const port = 3000;

const app = express();

app.get("/", (req: Request,res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!!")
})

app.get("/hi", (req: Request,res: Response) => {
  res.send("Hiiiiiii")
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
}) 