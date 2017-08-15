// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

//Mongo dependecies
var mongodb=require("mongodb")
var MongoClient = mongodb.MongoClient;

var MONGODB_URI ="mongodb://cortazar11:XXXXXXXX@ds141358.mlab.com:41358/freecodecamp"



app.use(express.static('public'));




app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});




      MongoClient.connect(MONGODB_URI,function(err,db){
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
          console.log('Connection established to', MONGODB_URI);
        }
        
        app.use("/new",function(req,res){
          
            var longUrl=req.path.substring(1)
           
            var randomNum=Math.round(Math.random()*1000)
            var shortUrl="https://"+req.headers["x-forwarded-host"]+"/"+randomNum
            
            if(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/ig.test(longUrl)){
              res.send({"original_url":longUrl,"short_url":shortUrl})
              db.collection("url").insertOne({"original_url":longUrl,"short_url":shortUrl})
            } else {
              res.send({"error":"Wrong url format, make sure you have a valid protocol and real site."})
            }
            
            
            
               
        
        
        

        
      })
        
        app.use("/:number",function(req,res){
          var shortUrl="https://"+req.headers["x-forwarded-host"]+"/"+req.params.number
          
          db.collection("url").find({"short_url":shortUrl},{"original_url":1,"_id":0}).toArray(function(err,docs){
            if(err) throw err
            //res.json(docs)
            docs.map(function(item){
              var result=res.redirect(item.original_url)
              return result
            })
            
          })
          
          
         
        })
        
          var listener = app.listen(process.env.PORT, function () {
                console.log('Your app is listening on port ' + listener.address().port);
              });
        
      })
  
        
