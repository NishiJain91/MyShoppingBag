define(['layout/module'],function(module){
  "use strict";

    module.registerFactory('ProductFilter',function($http,$q){
      return{
        getCriteria:function(){
            var defer = $q.defer();
            $http.get('api/filterCriteria.json',{cache:'true'}).success(function(response){
                defer.resolve(response);
            });
            return defer.promise;
        },
        getProduct :function(productId){
          var defer = $q.defer();
          $http.get('api/products/'+ productId,{cache:'true'}).success(function(response){
            defer.resolve(response);
           });
          return defer.promise;
        }
    }
  });
    
});