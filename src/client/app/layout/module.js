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
					abstract:true,
					views:{
						root:{
							templateUrl:'app/layout/views/home.html'
						}
					}
				})
				.state('app.shopcart',{
					url:"/shopping_cart",
					templateUrl:'app/layout/views/shopcart_products.html'
				});
        $urlRouterProvider.otherwise('/shopping_cart');
		});

    module.run(function ($couchPotato) {
        module.lazy = $couchPotato;        
    });

    return module;
});