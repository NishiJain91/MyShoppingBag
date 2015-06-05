define(['angular',
		'angular-couch-potato',
		'angular-ui-router',
		'angular-bootstrap'],function (ng,couchPotato){

		"use strict";

		var module = ng.module('app.layout',['ui.router','ui.bootstrap']);

		couchPotato.configureApp(module);

		module.config(function ($stateProvider,$couchPotatoProvider,$urlRouterProvider){

			$stateProvider
				.state('app',{
          url:"/shopping_cart",
					abstract:true,
					views:{
						root:{
							templateUrl:'app/layout/views/home.html',
              controller:'LayoutCtrl'
						}
					}
				})
				.state('app.shopcart',{	
          url:"/home",				
					templateUrl:'app/layout/views/shopcart_products.html',
				});
        
        $urlRouterProvider.otherwise('/shopping_cart/home');
		});

    module.run(function ($couchPotato) {
        module.lazy = $couchPotato;        
    });

    return module;
});