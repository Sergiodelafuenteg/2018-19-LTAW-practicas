 const http = require('http');
 const fs = require('fs')

 http.createServer( (req,res) => {
     console.log('req was: ' + req.url);
     res.writeHead(200, { "Content-Type": "text/html" });
     var stream = fs.createReadStream('library.html', 'utf8');
     stream.pipe(res);
 }
 ).listen(8080)
 