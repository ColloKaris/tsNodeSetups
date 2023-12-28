import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { connectToDb, client } from './models/dbConnect.js';

// execute express
const app = express();
let dbName: string = 'channel';
let collectionName = 'subscribers';




connectToDb()
  .then(() => {
    console.log(`Connected to the database successfully!`);
    //findData(client);
    app.listen(3000, () => {
      console.log('LISTENING ON PORT 3000');
    });
    console.log("Hello")
    //findData(client);
  })
  .catch((e) => {
    console.error(e);
    console.log('Connection failed');
  })
  .finally(() => {
    client.close().then(()=> {
      console.log("Connection closed!")
    })
  })
  

// function to find data in the collection in the database
async function findData(client:MongoClient){
  const result = await client.db(dbName).collection(collectionName).findOne();
  return result;
}
