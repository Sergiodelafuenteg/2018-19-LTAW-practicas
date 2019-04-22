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
    // console.log(allproducts);
    
    
    console.log("eto me han pedido " + JSON.stringify(req.body));
    var x = Searcher(namee, allproducts);
    console.log(x);
    
    res.send(x);
});

// metodos
function Searcher(name, results) {
    var search;
    for (const result in results) {
        results[result].forEach(element => {
            if (name === element.name) {
                search = element
            }
        })
    }
    return search
}
 
app.listen(PUERTO);