var express = require('express');
var path = require('path');
var controllers = require('./controllers/main');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(path.normalize(__dirname+'/../client')));
app.use('/bower_components',  express.static(__dirname + '/../../bower_components'));

//api controllers
app.get('/api/:id',controllers.apiController);
app.get('/api/products/SplCategory',controllers.productController);
app.get('/api/products/:id',controllers.productInfo);

app.listen(port,function(){
	console.log('Express server started!');
});