var socket = io.connect('http://localhost:4500');
socket.emit('myEvent', 'Hello world.');


socket.on('serverMessage', function(content) {
    addMessage(content);
});

var addMessage = function(content){
  console.log(content);
    var newElement = document.createElement('div');
    var newMessageText = document.createTextNode(content);
    newElement.appendChild(newMessageText)
    $('#messages').append(newElement);
        //text($('#messages').text() + ' : ' + content );
}

var inputKeyDown = function(e){
    if (e.keyCode == 13) {
      console.log($('#input').val());
      socket.emit('clientMessage', $('#input').val());
    }
}

var IdKeyDown = function(e){
    if (e.keyCode == 13) {
        socket.emit('clientID', $('#clientID').val());
    }
}

$(function (){
 $('p').css("background-color", "red");
 $('#input').keydown(inputKeyDown);
 $('#clientID').keydown(IdKeyDown);
})
