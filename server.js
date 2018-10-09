const express = require('express');
const http = require('http');

//Will use PORT environment variable if it exists, otherwise defaults to 3000
const PORT = (process.env.PORT || 3000);

const app = express();


//Logs every request, for debugging
app.use((req, res, next) => {
  console.log(req.method, req.url); next();
});
//Serve static files from public
app.use(express.static('public'));

//Initialising server w/ Express handling requests
http.createServer(app).listen(PORT, () => console.log('ready to go, yo, on '+PORT) );
