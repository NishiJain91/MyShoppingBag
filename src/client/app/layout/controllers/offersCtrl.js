/*define(['layout/module'],function(module){
  "use strict";

  module.registerController('offersCtrl',function($scope,DiscountOffersFactory){
    $scope.myInterval = 5000;
    $scope.slides = [];
    DiscountOffersFactory.getImages().then(function(response){
      console.log(response);
        $scope.slides = response;      
                                      
    });
  });
});*/