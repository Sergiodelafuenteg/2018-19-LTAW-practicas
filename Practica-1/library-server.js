const http = require('http');
const fs = require('fs')
const path = require('path')

http.createServer((req,res) => {
     console.log('req was: ' + req.url);
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        var stream = fs.createReadStream('library.html', 'utf8');
        stream.pipe(res);
    }
    if (req.url.split(".")[1] == 'html') {
        console.log('html');
        res.writeHead(200, { "Content-Type": "text/html" });
        let html_path = path.join(__dirname, req.url)
        console.log(html_path);

        var stream = fs.createReadStream(html_path);
        stream.pipe(res);
    }
    if (req.url.split(".")[1] == 'json') {
        console.log('json');
        res.writeHead(200, { "Content-Type": "application/json" });
        let json_path = path.join(__dirname, req.url)
        console.log(json_path);

        var stream = fs.createReadStream(json_path);
        stream.pipe(res);
    } 
    if (req.url.split(".")[1] == 'js') {
        console.log('javascript');
        res.writeHead(200, { "Content-Type": "application/javascript" });
        let js_path = path.join(__dirname, req.url)
        console.log(js_path);
        
        var stream = fs.createReadStream(js_path);
        stream.pipe(res);    
    }
    if (req.url.split(".")[1] == 'css') {
        console.log('css');
        res.writeHead(200, { "Content-Type": "text/css" });
        let css_path = path.join(__dirname, req.url)
        console.log(css_path);

        var stream = fs.createReadStream(css_path);
        stream.pipe(res);
    }
     
}
).listen(8080)

