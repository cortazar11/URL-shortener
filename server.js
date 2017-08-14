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
        
        app.use("/new",function(req,res){
          
            var longUrl=req.path.substring(1)
            //res.send(longUrl)
            var randomNum=Math.round(Math.random()*1000)
            var shortUrl="https://"+req.headers["x-forwarded-host"]+"/"+randomNum
            /*
            if(/^\/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(longUrl)){
              
            } else {
              res.send({"error":"Wrong url format, make sure you have a valid protocol and real site."})
            }
            */
            
            //res.end({"original_url":longUrl,"short_url":shortUrl});
          //var url=db.collection("url")
            res.send({"original_url":longUrl,"short_url":shortUrl})
            db.collection("url").insertOne({"original_url":longUrl,"short_url":shortUrl})
               
        
        
        

        
      })
        
        app.use("/:number",function(req,res){
          var shortUrl="https://"+req.headers["x-forwarded-host"]+"/"+req.params.number
          res.send(req.headers["x-forwarded-host"])
          db.collection("url").find({"short_url":shortUrl},{"original_url":1,"_id":0}).toArray(function(err,docs){
            if(err) throw err
            //return res.json(docs)
            docs.map(function(item){
              var result=res.redirect(item.original_url)
              return result
            })
            //return res.json(docs)
            //db.close()
          })
          
          
         
        })
        
          var listener = app.listen(process.env.PORT, function () {
                console.log('Your app is listening on port ' + listener.address().port);
              });
        
      })
  
        