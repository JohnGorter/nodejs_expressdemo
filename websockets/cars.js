
function start(server) {
    const ws = require('ws');
    const socketserver = new ws.Server({server}); 
    const database = require('../database/mongodb')

    let client = null;
    let selectedcar = null;

    socketserver.on("connection", (c) => { 
        client = c;
        c.on("message", async (data) => {
            let stringdata = data.toString('utf-8'); 
            let command = stringdata.split(":")[0]
            if (command = "select") {
                let car = stringdata.split(":")[1]
                if (car == "null") { selectedcar = null; return; }
                
                let carfromdb = await database.cars.find({make:car}).toArray();
                if (carfromdb[0]) {
                    selectedcar = car;
                } else {
                    c.send("Invalid car requested");
                    selectedcar = null;
                }
            }
        }); 
    }); 

    setInterval(() => {
        if (client && selectedcar) {
            client.send(`${selectedcar} drives to...`);
        }
    },1000);
}

module.exports = start
