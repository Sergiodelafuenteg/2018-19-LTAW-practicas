const http = require("http");
const express = require('express');
const cookieParser = require('cookie-parser')
const PUERTO = 8080;
const app = express();
const allproducts = require("./assets/products.json");

app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('assets'))
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())

// Peticiones
app.get('/', (req,res) => {
    console.log(req.cookies.username);
    if (req.cookies.username === undefined) {
        res.render("tienda", { login: false });    
    } else {
        res.render("tienda", { login: true, logname: req.cookies.username});
    }
    
});
app.get('/login', (req,res) => {
    console.log(req.cookies);     
    res.render('login');
})
// Buscador
app.post("/search", (req, res) => {
    var elements = []
    console.log("eto me han pedido " + JSON.stringify(req.body));
    var element = Searcher(req.body.search, allproducts);
    elements.push(element)
    console.log(element);
    res.render('products', {products:elements});
    
});
app.post('/setlogin', (req, res) => {res.render('setlogin', {logname: req.cookies.username})})
// Categorias
app.get("/bicicletas", (req,res) => {res.render('products', {products: allproducts['Bicicletas']})})
app.get("/discos", (req, res) => {res.render("products", { products: allproducts["Discos"] });});
app.get("/libros", (req, res) => {res.render("products", { products: allproducts["Libros"] });});

// Shop-cart
app.get("/shop-cart", (req, res) => {
    var shop_elements = cart_builder(req.cookies, allproducts)
    res.render("shop-cart", { products: shop_elements });
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
function cart_builder(shopcart, results) {
    var elements = [];
    for (const result in shopcart) {
        if (result.includes(result.match(/^shop/))) {
            var element = Searcher(shopcart[result], results);
            elements.push(element);            
        }
    }
    return elements;
}
 
app.listen(PUERTO);