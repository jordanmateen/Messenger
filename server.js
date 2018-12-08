var express = require('express');//requiring express
var bodyParser = require('body-parser');
var app = express(); // creating express instance


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
    console.log(req.body);
    messages.push(req.body);
    res.sendStatus(200);

});

app.listen(3000);

console.log("Server Running on port 3000");