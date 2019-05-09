
var socket = io('http://localhost:9090');
var User;

function Log() {
    User = document.getElementById('name_log').value
    document.getElementById("log_visor").style.display = 'none';
    document.getElementById("chat_panel").style.display = 'inline-block';
}

function Send() {
    var message = document.getElementById('message');
    socket.emit('chat', {
        name: User,
        message: message.value
    })
    console.log(message);
}

socket.on('chat', data => {
    visor.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
})