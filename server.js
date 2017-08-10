// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



// MY CODE
// Math.round(Math.random()*10000)
// Regex: /(http(s?))\:\/\//gi.test(string)


app.use("/new/:which",function(req,res){
      var randomNum=Math.round(Math.random()*10000)
      var longUrl=req.params.which;
      var shortUrl=req.headers["x-forwarded-host"]+("/")+randomNum.toString()
      var result;
      // Variables in Mongo
      if(/(http(s?))\:\/\//gi.test(longUrl)){
        result="true"
      } else {
        result="false"
      }
      
      
      
      var myJSON={
          "original_url":longUrl,
          "short_url": req.headers["x-forwarded-host"]+("/")+shortUrl.toString()
      }
    
      //res.end(JSON.stringify(myJSON))
     res.end(result)
  
      
  })



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});