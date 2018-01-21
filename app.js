
var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/',express.static(path.join(__dirname,'public')));

io.on('connection',function(socket){
	console.log(`user-id:${socket.id}`);
	socket.broadcast.emit('user-enter');
	socket.emit('serverMessage',{
		id: socket.id
	})
	socket.on('client',function(data){
		io.emit('indi',{
			id:socket.id,
			text:data.text
		})
	})
})
http.listen(8080,function(){
	console.log("Server started at port 8080");
})