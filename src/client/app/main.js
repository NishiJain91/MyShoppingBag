// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define([ 
    //External Libraries
    'domReady',
    'jquery',
    //'config',    
    'angular',
    'angular-ui-router',
    'angular-couch-potato',
    'angular-bootstrap',
    'appConfig',
    'bootstrap',
    'config',
    //Main Application modules
    'app',
    'layout/module',
    'layout/services/ProductsFactory',
    'layout/directives/smartRideCarousel',
    'layout/directives/smartJquiTabs',
    'layout/directives/smartRegistrationForm',
    'layout/controllers/LayoutCtrl',
    'layout/controllers/ModalController',

    'product/services/ProductFilterFactory',
    'product/controllers/ProductInfo',
    'product/controllers/leftPanel',

    'auth/module'      
], function (domReady) {

    'use strict';

    domReady(function (document) {
        angular.bootstrap(document, ['app']);
        angular.resumeBootstrap();
    });
});
