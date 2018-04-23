var express = require("express");
var bodyParser = require ("body-parser");
var path = require("path");
//Configure//
var app = express();
var Port = 3000;

app.use (express.static(path.join(__dirname,"./app/public")))
//expose the public folder for browswer//

//add middleware//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())
require(path.join(__dirname,"./app/routing/apiRoutes"))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
//Start Listening on a port//

app.listen (Port,function(){
    console.log ("FriendFinder app is listening on Port" + Port)
})

