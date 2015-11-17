// =============================================================================
// BASE SETUP
// =============================================================================

// PACKAGES USED
// =============================================================================
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

//LOG REQUEST TO THE CONSOLE
// =============================================================================
app.use(morgan('dev')); 


// CONFIGURE BODY PARSE
// =============================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SERV CONFIG
// =============================================================================
var config = require('./_config.js');

//DATABASE CONECTION
// =============================================================================
var monk = require('monk');
global.db = monk(config.mongoURI[app.settings.env]);
    
//OVERRIDE REQUIRE TO EXPOSE THE ROOT
// =============================================================================
global.requireRoot = function(name) {
    return require(__dirname + '/' + name);
}

// ROUTES FOR OUR API
// =============================================================================
var routes = require('./routes/binder');
var routesMarkers = require('./routes/marker');
var routesSheet = require('./routes/marker');

app.use(express.static("public"));
app.use('/api/binder/', routes);
app.use('/api/marker/', routesMarkers);
app.use('/api/sheet/', routesSheet);

// ERRO 404 / PRINT STACKTRACE 
// No futuro será necessário criar um servico que gerencie as 
// configurações da aplicaçã
// =============================================================================
var debug  = false;
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (debug) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// START THE SERVER
// =============================================================================
http.createServer(app).listen(config.port[app.settings.env]);
module.exports = app;

console.info('Let\'s Kick some ass !!!')


