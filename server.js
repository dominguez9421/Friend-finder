// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const path = require('path');
const express = require("express");
// Tells node that we are creating an "express" server
const app = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080; 


//test
//  app.get('/', function (req, res){
//      res.send('hello world!'); 
//  })
 
 app.use(express.urlencoded({extended:true})); 
 app.use(express.json()); 

app.use(express.static(path.resolve(__dirname, 'public')));



 // ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


require("./routing/api-routes")(app); 

require("./routing/html-routes")(app); 
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function (){
    console.log("App is listening to PORT: " + PORT); 
})
 