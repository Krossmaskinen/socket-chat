var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 5000;

io.on('connection', function(socket) {
    console.log('user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('chat message', function(message) {
        console.log(`message: ${message}`);
        io.emit('chat message', message);
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function() {
    console.log(`listening on port: ${port}`);
});