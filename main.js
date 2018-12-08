$(() =>{
    $('#send').click(()=>{
        var  message = {
            name : $('#name').val(), 
            messages : $('#message').val()
        }
        postMessages(message);
    });
    getMessages();
});

function addMessages(message){
    $('#messages').append(`<h4> ${message.name} </h4> <p> ${message.messages} </p>`);
}

function getMessages(){
    $.get('http://localhost:3000/messages', (data) =>{
        data.forEach(addMessages);
    });
}

function postMessages(message){
    $.post('http://localhost:3000/messages', message);
}

