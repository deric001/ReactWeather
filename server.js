var express = require ('express');
//create our app
var app = express();

// get the port from the haduko environment variable
const PORT = process.env.port || 3000;

app.use(function (req, resp, next) {
  if(req.headers['x-forwarded-proto'] == 'https') {
    resp.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
