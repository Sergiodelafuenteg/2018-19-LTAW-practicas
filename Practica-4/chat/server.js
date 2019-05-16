
const http = require('http');
const express = require('express');
const socket = require('socket.io')
const PUERTO = 9090;
const app = express();

var server = app.listen(PUERTO)
var Users = []

// Midleware
app.use("/assets", express.static("assets"));

app.get('/', (req, res) => {res.sendFile(__dirname + '/views/index.html');});
app.get('/help', (req, res) => { res.send('help') });
app.get('/list', (req, res) => { res.send(Users) });
app.get('/hello', (req, res) => { res.send('Hola, Muy buenas') });
app.get('/date', (req, res) => { res.send(MyTime()) });

// Socket

var io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id, 'se ha conectado');

    socket.on('chat', data => {
       io.sockets.emit('chat', data);        
    })
    socket.on('welcome', data => {
        Users.push(data)
        var welcome_message = data + ' se ha unido.'
        socket.broadcast.emit('welcome', welcome_message);
    })
    socket.on('bye', data => {
        Users.splice(Users.indexOf(data,1))
        var bye_message = data + ' se ha ido.'
        socket.broadcast.emit('bye', bye_message);
    })
})

// Metodos

function MyTime(params) {

    d = Date()
    return d.toString()
}