const http = require("http");
const express = require('express');
const PUERTO = 8080;
const app = express();
const allproducts = require("./assets/products.json");

// Middleware
app.use('/assets', express.static('assets'))
app.use(express.urlencoded())
app.use(express.json())

// Peticiones
app.get('/', (req,res) => {res.sendFile(__dirname + '/views/library.html')})

app.post("/search", (req, res) => {
    var products = JSON.stringify(allproducts)
    let namee = req.body.search
    console.log(namee);
    
    console.log("eto me han pedido " + JSON.stringify(req.body));
    
    res.send(products);
});

// metodos
function Searcher(name, results) {
    for (const result in results) {
        results[result].forEach(element => {
            if (name === element.name) {
                return element
            }
        })
    }
}
 
app.listen(PUERTO);