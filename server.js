var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// express middleware
app.use( function(req, res, next){

  // if http
  if(req.headers['x-forwarded-proto'] === 'http'){

  next();
  } else {

    // if not, redirect to http
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port '+ PORT);
});
