/**
 *  RESTful API for Android apps
 *  Using Node JS and Express framework
 *  Author: ajganiev@gmail.com
 * **/

//Init dependencies
var express    = require('express');
var bodyParser = require('body-parser');

//Create exprees app
var app = express();
var port = 3000;

// Connect body-parser for work with POST requires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Init router of app
var router = express.Router();

//Routes

//Middleware
router.use(function(req, res, next) {
    console.log('[Middleware] It\'s works!');
    next();
});

// "Test" route
router.get('/test', function(req, res) {
    res.json({ data: 'some data' });
});

// Matching router to app
app.use('/api', router);
app.listen(port);
console.log('Server started at port: ' + port);