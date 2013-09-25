var socketIO = require("socket.io");
var io = socketIO.listen(4500);

var clientSocketmapping = {};

io.sockets.on("connection", function(socket){
	socket.on("clientMessage", function(content){
        var socketID = socket.id;
        var clientID = clientSocketmapping[socketID];
		console.log(socket.id  + " : " + clientID + + content);
        socket.emit("serverMessage", "you : " + content)
        socket.broadcast.emit("serverMessage", clientID + " : " + content);
	})

    socket.on("clientID", function(content){
        console.log("clientID : " + socket.id  + " : " + content);
        var socketID = socket.id;
        if(!clientSocketmapping[socketID]){
            clientSocketmapping[socketID] = content;
            console.log(' whole mapping : '+clientSocketmapping);
        }

    })
})
