define(['layout/module'],function(module){
  "use strict";

    module.registerFactory('ProductsFactory',function($http,$q){
      return{
        getOffers:function(){
            var defer = $q.defer();
            $http.get('api/discountOffers.json',{cache:'true'}).success(function(response){
                defer.resolve(response);
            });
            return defer.promise;
        },
        getProducts:function(){
          var defer = $q.defer();
          $http.get('api/productCategories.json',{cache:'true'}).success(function(response){
            defer.resolve(response);
          });
          return defer.promise;
        },    
      getSplProducts:function(){
        var defer = $q.defer();
        $http.get('api/products/SplCategory',{cache:'true'}).success(function(response){
          defer.resolve(response);
        });
        return defer.promise;
      }
    }
  });
    
});