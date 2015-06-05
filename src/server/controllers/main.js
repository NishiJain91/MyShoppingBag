'use strict';

var path = require('path');
var fs = require('fs');

exports.apiController = function(req,res){
  var filePath = __dirname + '/../api/'+req.param('id');
  var normalizedPath = path.normalize(filePath);
  var obj = JSON.parse(fs.readFileSync(normalizedPath),'utf8');
  res.json(obj);
};

exports.productController = function(req,res){
  var filePath = __dirname + '/../api/allProducts.json';
  var normalizedPath = path.normalize(filePath);
  var obj = JSON.parse(fs.readFileSync(normalizedPath),'utf8');
  var SplProduct = {};
  SplProduct.Featured=[];
  SplProduct.Latest=[];
  for(var key in obj){
    if(obj[key]['SplTag']){
      if(obj[key]['SplTag'].indexOf("Featured") != -1){
        SplProduct.Featured.push(obj[key]);
      }
      if(obj[key]['SplTag'].indexOf("Latest") != -1){
        SplProduct.Latest.push(obj[key]);
      }
    }
  }
  res.json(SplProduct)
};

exports.productInfo = function(req,res){
  var filePath = __dirname + '/../api/allProducts.json';
  var normalizedPath = path.normalize(filePath);
  var obj = JSON.parse(fs.readFileSync(normalizedPath),'utf8')[req.param('id')];
  res.json(obj);
}
