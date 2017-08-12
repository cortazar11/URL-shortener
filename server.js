// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

//Mongo dependecies
var mongodb=require("mongodb")
var MongoClient = mongodb.MongoClient;

var MONGODB_URI ="mongodb://cortazar11:lasarte@ds141358.mlab.com:41358/freecodecamp"


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

//http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));



//http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



// MY CODE
// Math.round(Math.random()*10000)
// Regex: /(http(s?))\:\/\//gi.test(string)

 /**
      var randomNum=Math.round(Math.random()*10000)
      var shortUrl=req.headers["x-forwarded-host"]+("/")+randomNum.toString()
  */    

      MongoClient.connect(MONGODB_URI,function(err,db){
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
          console.log('Connection established to', MONGODB_URI);
        }
        
        app.use("/new/:which",function(req,res){
          
            var longUrl=req.params.which
            var randomNum=Math.round(Math.random()*1000)
            var shortUrl=req.headers["x-forwarded-host"]+"/"+randomNum
            //res.end({"original_url":longUrl,"short_url":shortUrl});
          //var url=db.collection("url")
            db.collection("url").insertOne({"original_url":longUrl,"short_url":shortUrl})
               res.send({"original_url":longUrl,"short_url":shortUrl})
        
        
        

        
      })
        
          var listener = app.listen(process.env.PORT, function () {
                console.log('Your app is listening on port ' + listener.address().port);
              });
        
      })
  
        