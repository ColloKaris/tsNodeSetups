import express from 'express';
;
import dotenv from 'dotenv';
dotenv.config();
// import { config } from 'dotenv';
// config();
console.log(process.env.NUMBER);
const port = 3000;
const app = express();
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS + TS!!!!!");
});
app.get("/hi", (req, res) => {
    res.send("Hiiiiiii");
});
app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
});
