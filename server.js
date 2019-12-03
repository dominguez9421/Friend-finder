// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================


var bodyParser = require('body-parser')
var express = require("express")


// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080; 


//test
//  app.get('/', function (req, res){
//      res.send('hello world!'); 
//  })
 
// app.use(express.urlencoded({extended:true})); 
// app.use(express.json()); 

// app.use(express.static('css'));

 
 
// Sets up the Express app to handle data parsing
 app.use(bodyParser.urlencoded({ extended: true }));


 
// // parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// // parse some custom thing into a Buffer
 app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// // parse an HTML body into a string
 app.use(bodyParser.text({ type: 'text/html' }))

 // ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


require("./friendfinder/app/routing/api-routes")(app); 

require("./friendfinder/app/routing/html-routes")(app); 
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function (){
    console.log("App is listening to PORT: " + PORT); 
})
 