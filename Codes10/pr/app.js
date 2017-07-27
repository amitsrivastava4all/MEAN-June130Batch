const express = require("express");
var socket = require("socket.io");
const app = express();
var server = app.listen(process.env.PORT || 9876,()=>{
	console.log("Server Start....")
});

app.use(express.static("public"));
var io = socket(server);
io.sockets.on('connection', function (socket) {
	console.log('connection :', socket.id);
	socket.emit('message', { message: 'welcome to the Track Me'+socket.id });
    socket.on('send', function (data) {
		console.log("Send Event Call",data);	
       io.sockets.emit('adminmessage', data);
    });
});







