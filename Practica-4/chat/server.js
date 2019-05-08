
const http = require('http');
const express = require('express');
const socket = require('socket.io')
const PUERTO = 9090;
const app = express();

var server = app.listen(PUERTO)

// Midleware
app.use("/assets", express.static("assets"));

app.get('/', (req, res) => {res.sendFile(__dirname + '/views/index.html');});

// Socket

var io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id, 'se ha conectado');
    
})
