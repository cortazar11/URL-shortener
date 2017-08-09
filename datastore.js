var mongodb=require("mongodb")
var MONGODB_URI ="mongodb://cortazar11:lasarte@ds141358.mlab.com:41358/freecodecamp"

mongodb.connect(MONGODB_URI,function(err,db){
  db.createCollection("mycollection")
})