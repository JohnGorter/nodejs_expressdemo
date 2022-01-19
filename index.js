const express = require('express');
const app = express(); 
app.use(express.json());

//mount routers
app.use("/api/v1/cars", require('./routes/cars'));

app.use(express.static("./public"));

app.listen(8080, () => {
    console.log("listening")
}); 
