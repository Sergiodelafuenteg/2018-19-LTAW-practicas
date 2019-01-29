 const http = require('http');
 const fs = require('fs')

 http.createServer( (req,res) => {
     fs.readFile('library.html', (err, index) => {
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(index);
         res.end();
     });
 }
 ).listen(8080)
 