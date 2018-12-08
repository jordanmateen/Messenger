var express = require('express');//requiring express
var bodyParser = require('body-parser');
var app = express(); // creating express instance
var http = require('http').Server(app); //requring http for polling 
var io = require('socket.io')(http); //passing reference to http 


app.use(express.static(__dirname));//importing directory 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var messages = [
    {
        name: 'Jordan Mateen',
        messages: 'Welcome Jordan'
    },
    {
        name: 'Adam Mateen',
        messages: 'Welcome Adam'   
    }
]
app.get('/messages', function(req, res){
    console.log(`Method : ${req.method}\nURL: '${req.url}'`);
    res.send(messages);

});

app.post('/messages', function(req, res){
    console.log(`Method : ${req.method}\nURL: '${req.url}'`);
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);

});

io.on('connection', (socket) =>{
    console.log('User Connected');
});

http.listen(3000);

console.log("Server Running on port 3000");