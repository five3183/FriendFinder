var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()
var PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())  

// api routes are frist as that is where we pull data
require("./app/routing/apiRoutes")(app)

// html routes
require("./app/routing/htmlRoutes")(app)




//Server
app.listen(PORT, function() {
  console.log("Friend Finder listening on PORT " + PORT)
})