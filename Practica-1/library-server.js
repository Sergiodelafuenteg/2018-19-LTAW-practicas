const http = require('http');
const fs = require('fs')
const path = require('path')

http.createServer((req,res) => {
     console.log('req was: ' + req.url.split('.')[1]);
     if (req.url.split(".")[1] == 'js') {
         console.log('javascript');
         res.writeHead(200, { "Content-Type": "text/javascript" });
         let js_path = path.join(__dirname, req.url)
         var stream = fs.createReadStream('library.js');
         stream.pipe(res);    
     }
     res.writeHead(200, { "Content-Type": "text/html" });
     var stream = fs.createReadStream('library.html', 'utf8');
     stream.pipe(res);
}
).listen(8080)

