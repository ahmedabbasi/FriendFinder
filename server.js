// import dependencies
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');

// create server with express
var app = express();

// set up port
var PORT = process.env.PORT || 3000;


//set up middleware (bodyParser)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set up routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listener
app.listen(PORT, function() {
  consiole.log("App listening on PORT: " + PORT)
});