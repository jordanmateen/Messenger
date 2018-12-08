var socket = io(); // creating io socket for use in app


//using JQUERY

$(() =>{
    $('#send').click(()=>{  //eventlistner on click the message will post as well as retreive from server
        
        //grabbing data from user input field
        var  message = {
            name : $('#name').val(),  
            messages : $('#message').val()
        }
        postMessages(message); //posting messages 
    });
    getMessages(); // get message
});

socket.on('message', addMessages) //adding messages without refershing page.. Test with to clients open


//appending messages to page grabbig id of div
function addMessages(message){
    $('#messages').append(`<h4> ${message.name} </h4> <p> ${message.messages} </p>`);
}

//looping through messages to add
function getMessages(){
    $.get('http://localhost:3000/messages', (data) =>{
        data.forEach(addMessages);
    });
}

//post message to server
function postMessages(message){
    $.post('http://localhost:3000/messages', message);
}

