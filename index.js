const { dirname } = require('path');

var app = require('express')();

var server = require('http').Server(app);

var io = require('socket.io')(server);

//server.listen(3000,'192.168.100.9');
server.listen(3000);
app.get('/', function(request, response){
    //response.send('Hello world');
    response.sendFile(__dirname + '/index.html');
});
app.get('/asistentes', function (request, response) {
    response.sendFile(__dirname + '/generaturnos.html');
});
app.get('/validacion', function (request, response) {
    response.sendFile(__dirname + '/validacionturnos.html');
});

io.on('connection', function(socket){
   socket.on('chat.paciente',function(paciente){
        io.emit('chat.paciente',paciente);
   });
   socket.on('update.pacientes',function(pacientes){
        io.emit('update.pacientes',pacientes);
   });
   
   socket.on('disconnect', function(){

   });
});