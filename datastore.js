var mongodb=require("mongodb")
var MongoClient = mongodb.MongoClient;

var MONGODB_URI ="mongodb://cortazar11:lasarte@ds141358.mlab.com:41358/freecodecamp"

var doc={
            "firstName":"Pepe",
            "lastName":"Gonzalez"
            
        }

MongoClient.connect(MONGODB_URI,function(err,db){
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', MONGODB_URI);
  }
  
  var collection=db.collection("url")
  collection.insert(doc,function(){
        if(err) throw err
        console.log(JSON.stringify(doc))
        db.close()
    })


})