/**
 * Created by macbook_user on 11/2/16.
 */

var express = require('express');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var MONGO_URI = "mongodb://kmungale:welcome1@ds029456.mlab.com:29456/youtube_fake_view_analysis";

// Creating user object to store User data
var user = {}

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

app.set('port', (process.env.PORT || 3001));
app.get('/', function(req, res) {
    var search_ip_by_location = 'http://freegeoip.net/json/' + (req.headers['x-forwarded-for'] || '63.152.57.234');
    var location;
    request(search_ip_by_location, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response.body);
            user.ip = response.body['ip'];
            user.countryName = response.body['country_name'];
            user.regionName  = response.body['region_name'];
            // db.collection('location').insertOne(JSON.parse(response.body), function (err, doc) {
            //     if(err) {
            //         console.log(err)
            //     }
            // });
        }
    });
    //console.log(req.headers);
    console.log(req.headers['x-forwarded-for']);
    res.sendfile("html/index.html")
});

app.post('/userData', function(req, res){
    console.log(req.body);
    //console.log("Window unload called")
    res.send({
        "name": "kaustubh"
    });

});

app.get('/css/animate.css', function(req, res) {
    res.sendfile("css/animate.css")
});

app.get('/css/style.css', function(req, res) {
    res.sendfile("css/style.css")
});

app.get('/images/photo_bg.jpg', function(req, res) {
    res.sendfile("images/photo_bg.jpg")
});

app.get('/node_modules/fingerprintjs/fingerprint.js', function(req, res) {
    res.sendfile("node_modules/fingerprintjs/fingerprint.js")
});

app.listen(app.get('port'), function(){
    console.log('Listening on port', app.get('port'));
});
