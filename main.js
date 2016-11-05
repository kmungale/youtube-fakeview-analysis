/**
 * Created by macbook_user on 11/2/16.
 */

var express = require('express');
var request = require('request');
var app = express();

//added process.env.PORT because Hreoku dynamically allocates PORT
app.set('port', (process.env.PORT || 5000));
app.get('/', function(req, res) {
    request('http://ip-api.com/json?callback=', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(response.body); // Show the HTML for the Google homepage.
      }
    });
    console.log(req.headers);
    res.sendfile("html/index.html")
});

app.post('/trackMouseMotion', function(req, res){
    res.send({
        "name": "kaustubh"
    });
    console.log(req.headers)
});

app.listen(app.get('port'), function(){
    console.log('Listening on port', app.get('port'));
});
