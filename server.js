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
      var yourUrl=req.params.which
      yourUrl=Math.round(Math.random()*10000)
      //res.end(JSON.stringify(req.headers))
      res.end("Your url now:"+JSON.stringify(req.headers["x-forwarded-host"])+("/")+yourUrl)
     //res.end("Your Url"+req.params.which)
  
      
  })



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
