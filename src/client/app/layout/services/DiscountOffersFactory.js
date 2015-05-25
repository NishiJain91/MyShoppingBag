define(['layout/module'],function(module){
  "use strict";

  module.registerFactory('DiscountOffersFactory',function($http,$q){
    return{
      getImages:function(){
          var defer = $q.defer();
          $http.get('api/discountOffers.json',{cache:'true'}).success(function(response){
              defer.resolve(response);
          });
          return defer.promise;
      }      
    }
  });
});