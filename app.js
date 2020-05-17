/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var connect = require('connect');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var errorHandler = require('errorhandler');
var routes = require('./routes/index');
var router = express.Router();
var app = express();
var messages = require('./lib/messages');
var order = require('./lib/order');
var user = require('./lib/middleware/user');



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('your secret here'));
app.use(session({
    name: 'sid',
	saveUninitialized: false,
	resave: false,
	secret: `quiet, pal! it's a secret!`,
	cookie: {
	maxAge: 1000 * 60 * 60 * 2,
	sameSite: true,
	}
}));

app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/public')));


//=============GET Variants================
// var homepage = require('./routes/homepage');
// app.get('/homepage',homepage.form);
app.use(user);
app.use(messages);
app.use(order);
app.use('/', routes);
//==========================================

router.use(function (req, res, next){
// console.log("router js res.statuscode down ",res.statusCode);
// next();
});
// development only




app.use(errorHandler);

if ('development' == app.get('env')) {
  app.use(errorHandler);
}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
