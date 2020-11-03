var express = require("express");
var PORT = process.env.PORT || 3001;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");



app.engine("handlebars", exphbs({ defaultLayout: "main" 
, partialsDir: __dirname + './views/partials'
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log(`Now listening to port ${PORT}. Enjoy your stay!`);
});