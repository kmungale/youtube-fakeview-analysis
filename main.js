/**
 * Created by macbook_user on 11/2/16.
 */

var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.sendfile("html/index.html")
});

app.get('/sample', function(req, res){
    console.log("hurray");
    res.send({
        "name": "kaustubh"
    });
    console.log(req.headers)
});

app.listen(3001);
console.log('Listening on port 3001...');