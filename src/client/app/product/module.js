define(['angular',
		'angular-couch-potato',
		'angular-ui-router',
		'angular-bootstrap'],function (ng,couchPotato){

			"use strict";

			var module = ng.module('app.product',['ui.router','ui.bootstrap']);

      couchPotato.configureApp(module);

			module.config(function ($stateProvider,$couchPotatoProvider,$urlRouterProvider){

				$stateProvider
					.state('app.product',{
						abstract:true,	
						templateUrl:'app/product/views/product-layout.html'
					})
          .state('app.product.details',{
            url:'/product/:id',
            views:{
              leftpanel:{
                templateUrl:'app/product/views/left-panel.html',
                controller:'leftPanel'
              },
              productInfo:{
                templateUrl:'app/product/views/product-info.html',
                controller:'ProductInfo'
              }
            }
          })
			});

       module.run(function ($couchPotato) {
        module.lazy = $couchPotato;        
       });

       return module;
		});