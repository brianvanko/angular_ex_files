var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

//configs
//set public folder to server public assets
app.use(express.static(__dirname + '/public'));

//middleware

//routes
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/views/index.html'))
})

//start server
app.listen(port);
console.log('listening on port ' + port);