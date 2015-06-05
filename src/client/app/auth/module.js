define(['angular',
        'angular-couch-potato',
        'angular-ui-router',
        'angular-bootstrap'],function(ng,couchPotato){
        
        "use strict";

        var module = ng.module('app.auth',['ui.router','ui.bootstrap']);

        couchPotato.configureApp(module);

        module.config(function ($couchPotatoProvider,$stateProvider){

          $stateProvider
            .state('app.login',{
              url:"/login"
            });
        });

        module.run(function ($couchPotato) {
          module.lazy = $couchPotato;        
        });

        return module;
});