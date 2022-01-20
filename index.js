const express = require('express');
const ws = require('ws');
const http = require('http');

const app = express(); 
app.use(express.json());
const server = http.createServer(app); 
const socketserver = new ws.Server({server}); 

/// your code here
socketserver.on()

/// your code here

//mount routers
app.use("/api/v1/cars", require('./routes/cars'));

app.use(express.static("./public"));

server.listen(8080, () => {
    console.log("listening")
}); 
