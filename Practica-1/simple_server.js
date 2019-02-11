var http = require('http');
var fs = require('fs');
var path = require('path')

console.log("Arrancando servidor...")

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
    console.log('req.url');
    
    if (req.url == '/') {
        console.log('init');
        
        fs.readFile('library.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
           
        })
    }
    if (req.url.split(".")[1] == 'css') {
        let css_path = path.join(__dirname, req.url)
        console.log(css_path);
        
        fs.readFile(css_path, (err, data) => {
            
            res.writeHead(200, { 'Content-Type': 'text/css' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
           
        })
    }
    if (req.url.split(".")[1] == 'js') {
        let css_path = path.join(__dirname, req.url)
        console.log(css_path);

        fs.readFile(css_path, (err, data) => {

            res.writeHead(200, { 'Content-Type': 'application/javascript' })
            console.log("---> Peticion recibida")
            console.log("Recurso solicitado (URL): " + req.url)
            
        })
    }
    res.end(data)
    
}).listen(8080);