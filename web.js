var express = require('express');
var fs = require('fs');



var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var bufferFile = fs.readFileSync('index.html');
    response.send(bufferFile.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
