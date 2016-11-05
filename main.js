/**
 * Created by macbook_user on 11/2/16.
 */

var express = require('express');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var db;
var app = express();
var MONGO_URI = "mongodb://kmungale:welcome1@ds029456.mlab.com:29456/youtube_fake_view_analysis";

//added process.env.PORT because Hreoku dynamically allocates PORT
MongoClient.connect(MONGO_URI, function(err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    else {
        db = database;
        console.log("Connected to db");
    }
});

app.set('port', (process.env.PORT || 5000));
app.get('/', function(req, res) {
    var search_ip_by_location = 'http://freegeoip.net/json/' + (req.headers['x-forwarded-for'] || '63.152.57.234');
    var location;
    request(search_ip_by_location, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response.body);
            db.collection('location').insertOne(JSON.parse(response.body), function (err, doc) {
                if(err) {
                    console.log(err)
                }
            });
        }
    });
    //console.log(req.headers);
    console.log(req.headers['x-forwarded-for']);
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
