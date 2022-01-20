const  { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {
    family: 4,
});

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