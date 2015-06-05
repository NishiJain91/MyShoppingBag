define(['layout/module'],function(module){
  "use strict";

  return module.registerController('ModalController',function ($scope,$modalInstance, $state, newPath, oldPath){
    
 
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

  });
});