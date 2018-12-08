var express = require('express');//requiring express
var bodyParser = require('body-parser');
var app = express(); // creating express instance
var http = require('http').Server(app); //requring http for polling 
var io = require('socket.io')(http); //passing reference to http 


app.use(express.static(__dirname));//importing directory 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var messages = [ /**Messages get pushed here */     ]

//get method.
app.get('/messages', function(req, res){
    console.log(`Method : ${req.method}\nURL: '${req.url}'`);// request information
    //res.send(messages);

});

//posting messages 
app.post('/messages', function(req, res){
    console.log(`Method : ${req.method}\nURL: '${req.url}'`); // request information
    messages.push(req.body);  // pushing messages into the messages array.
    io.emit('message', req.body); // emitting messgae body to screen with out page refresh
    res.sendStatus(200);

});

io.on('connection', (socket) =>{    //event listener for server io. When server is connected two way is open
    console.log('User Connected');
});

http.listen(3000); //listening on port 3000 --> localhost:3000

console.log("Server Running on port 3000"); //prompt user server is running