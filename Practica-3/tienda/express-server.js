const http = require("http");
const express = require('express');
const PUERTO = 8080;
const app = express();

app.use('/assets', express.static('assets'))

app.get('/', (req,res) => {res.sendFile(__dirname + '/library.html')})

app.listen(PUERTO);