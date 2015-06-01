define(['layout/module'],function(module){
  "use strict";

  return module.registerController('LayoutCtrl',function ($scope,ProductsFactory){
    $scope.myInterval = 6000;
    $scope.Product={};
    $scope.Product.Category = [];
    $scope.slides = [];
    ProductsFactory.getOffers().then(function(response){     
      $scope.slides = response.Offers;                                
    });
    ProductsFactory.getProducts().then(function(response){
      $scope.categories = response.Category;
    });
    ProductsFactory.getSplProducts().then(function(response){

      $scope.Product.Category.push({'name':"Featured",'products': response.Featured});
      $scope.Product.Category.push({'name':"Latest",'products': response.Latest});
    });    
  });
});