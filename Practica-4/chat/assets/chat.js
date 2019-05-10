
var socket = io.connect('http://localhost:9090');
var User;

// metodos
function Log() {
    User = document.getElementById('name_log').value
    document.getElementById("log_visor").style.display = 'none';
    document.getElementById("chat_panel").style.display = 'inline-block';    
    socket.emit('welcome', User)
}


function Send() {
    var message = document.getElementById('message');
    socket.emit('chat', {
        name: User,
        message: message.value
    })
}
function Disconnect() {    
    socket.emit('bye', User)
    window.location.href = '/'
}

// conexiones
socket.on('chat', data => {
    visor.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
})
socket.on('welcome', data => {
    visor.innerHTML += '<p><em>' + data + '</em></p>';
})
socket.on('bye', data => {
    visor.innerHTML += '<p><em>' + data + '</em></p>';
})