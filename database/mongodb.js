const  { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const database = {
    loaded:false
}

async function connect() {
    await client.connect();
    database.cars =  client.db("john").collection("cars")
    database.loaded = true;
}
connect();

module.exports = database;