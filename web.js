var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var stringOut = buf.toString(fs.readFile('index.html'));
    response.send(stringOut);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
