var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// express middleware
app.use(function(req, res, next){

  // if https , then change
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);

// if not https, no need to do anything
  } else {

    next();
    // if not, redirect to http

  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port '+ PORT);
});
