define(['product/module'],function(module){
  "use strict";

  return module.registerController('leftPanel',function ($scope,ProductFilter){
    ProductFilter.getCriteria().then(function(response){     
      $scope.filters = response.Criteria;                                
    });
  });
});