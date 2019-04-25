const http = require("http");
const express = require('express');
const PUERTO = 8080;
const app = express();
const allproducts = require("./assets/products.json");

app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('assets'))
app.use(express.urlencoded())
app.use(express.json())

// Peticiones
app.get('/', (req,res) => {res.sendFile(__dirname + '/views/library.html')})

app.post("/search", (req, res) => {
    
    console.log("eto me han pedido " + JSON.stringify(req.body));
    var element = Searcher(req.body.search, allproducts);
    console.log(element);
    res.render('products', {imgsrc:element.image, name:element.name, price:element.price});
    
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