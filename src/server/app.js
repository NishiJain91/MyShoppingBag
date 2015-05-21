var express = require('express');
var path = require('path');
/*var controllers = require('./controllers/main');*/

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(path.normalize(__dirname+'/../client')));
app.use('/bower_components',  express.static(__dirname + '/../../bower_components'));

app.listen(port,function(){
	console.log('Express server started!');
});