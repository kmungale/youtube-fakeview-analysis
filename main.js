/**
 * Created by macbook_user on 11/2/16.
 */

var express = require('express');
var app = express();

//added process.env.PORT because Hreoku dynamically allocates PORT
app.set('port', (process.env.PORT || 5000))
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

app.listen(app.get('port'), function(){
    console.log('Listening on port', app.get('port'));
});
