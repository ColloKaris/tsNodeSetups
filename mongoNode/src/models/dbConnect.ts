import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

let uri:string;
if(process.env.DATABASE_URI) {
  uri = process.env.DATABASE_URI;
}



export let client:MongoClient;

// script to connect to the database we created
export async function connectToDb() {
  // create an instance of MongoClient
  client = new MongoClient(uri);
  // connect to the database
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } 
}