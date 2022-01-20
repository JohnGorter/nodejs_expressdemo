const mc = require('mongodb').MongoClient; 
const client = new mc('mongodb://localhost:27017',{
    family: 4,
});

client.connect().then((err)=> {
    console.log("error", err);
});