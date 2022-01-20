const express = require('express');
const http = require('http');
const socketserver = require('./websockets/cars');

const app = express(); 
app.use(express.json());
const server = http.createServer(app); 
socketserver(server); 

//mount routers
app.use("/api/v1/cars", require('./routes/cars'));

app.use(express.static("./public"));

server.listen(8080, () => {
    console.log("listening")
}); 
