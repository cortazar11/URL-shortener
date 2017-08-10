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
function myJSON(longUrl,shortUrl){
  return {
    
          "original_url":longUrl,
          "short_url": shortUrl
            
  }
}



app.use("/new/:which",function(req,res){
      
      // Variables in Mongo
      var longUrl=req.params.which
      
      var randomNum=Math.round(Math.random()*10000)
      var shortUrl=req.headers["x-forwarded-host"]+("/")+randomNum.toString()
      var result;
      
      if( /(http(s?))\:\/\//gi.test(longUrl)){
        result=myJSON(longUrl,shortUrl)
      }
      
      if(result){
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(result))
      } else {
        res.writeHead("404")
        res.end()
      }
    
     //res.end("Your Url: "+ typeof req.params.which)
  
      
  })



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
