const http = require('http');
const fs = require('fs');
const path = require('path')

var tipos_mime = {
    '/': '\'text / html\'',
    'html': '\'text / html\'',
    'js': '\'application/javascript\'',
    'json': '\'application/json\'',
    'css': '\'text/css\'',
    'jpeg': '\'image/jpeg\'',
    'jpeg': '\'image/jpeg\'',
    'png' : '\'image/png\'',
    'ico': '\'image/x-icon\''

}

console.log(tipos_mime['css']);

console.log("Arrancando servidor...")


http.createServer(function (req, res) { 

    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        var t = 'library.html'
        var stream = fs.createReadStream(t, 'utf8');
        stream.pipe(res);
    }else{
        // req.url.split(".")[1]
        let file_path = path.join(__dirname, req.url)
        let tipo_mime = tipos_mime[req.url.split(".")[1]]
        res.writeHead(200, { "Content-Type": tipo_mime });
        var stream = fs.createReadStream(file_path, 'utf8');
        stream.pipe(res);

        console.log(tipo_mime);
        console.log(file_path, '+++', tipo_mime);
        
    }
    
}).listen(8080);