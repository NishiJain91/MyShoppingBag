define(['product/module'],function(module){
  "use strict";

  module.registerController('ProductInfo',function($scope,$stateParams,ProductFilter){
    var productId = $stateParams.id;
    $scope.product = {};
    ProductFilter.getProduct(productId).then(function(response){
      console.log(response);
         $scope.product = response;
    });  
  });
});