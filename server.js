const express = require('express');
const browserify = require('browserify');
const http = require('http');

//Will use PORT environment variable if it exists, otherwise defaults to 3000
const port = (process.env.PORT || 3000);

var app = express();

// view engine setup
app.set('view engine', 'pug');


//Logs every request, for debugging
app.use(function(req,res,next){
  console.log(req.method, ' ',req.url); next();
});


//This is an expensive operation, make sure NODE_ENv is "production" for deployment
//Speeds up development, though, since you can rebuild React on the fly
if(!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
  app.use('/scripts/bundle.js', function(req, res){
    browserify("./react-app/app.js")
      .transform("babelify", {presets: ["es2015", "react"]})
      .bundle()
      .pipe(res);
  })
}


//Serve static files from public
app.use(express.static('public'));

//Change the '/' to '*' if you want to do ui routing at the front-end
app.get('/', function(req, res, next) {
  res.render('index');
});


//Initialising server w/ Express handling requests
var server = http.createServer(app);
server.listen(port);

console.log('Ready to go, yo, on ' + port);
