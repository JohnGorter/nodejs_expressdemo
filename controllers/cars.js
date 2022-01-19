
const cars = [
    {make:"mercedes", model:"a"},
    {make:"bmw", model:"a"},
    {make:"open", model:"a"},
    {make:"audi", model:"a"}
];

function getCars(req,res){
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(cars));
}
function getCarById(req, res){
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(cars.find(c => c.make == req.params.car)));
}

module.exports = {
    getCars,
    getCarById
}


// app.post("/cars", (req, res) => {
//     cars.push(req.body); 
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(cars));
// }); 

// app.put("/cars/:name", (req, res) => {
//     let carname = req.params.name; 
//     let postedcar = req.body;
//     let cartoreplace = cars.find(c => c.make == carname);
//     console.log("cartoreplace", cartoreplace); 

//     cars.splice(cars.indexOf(cartoreplace), 1);
//     let newcar = {...cartoreplace, ...postedcar };
//     console.log("newcar", newcar); 

//     cars.push(newcar);
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(newcar)); 
// }); 

// app.delete("/cars/:name", (req, res) => {
//     let carname = req.params.name; 
//     let cartodelete = cars.find(c => c.make == carname); 
//     if (cartodelete) {
//         cars.splice(cars.indexOf(cartodelete), 1); 
//         res.statusCode = 200;
//         res.end();
//     } else {
//         res.statusCode = 404; 
//         res.end(); 
//     }
// }); 