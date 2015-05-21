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
    'bootstrap',
    //Main Application modules
    'app',
    'layout/module'          
], function (domReady) {

    'use strict';

    domReady(function (document) {
        angular.bootstrap(document, ['app']);
        angular.resumeBootstrap();
    });
});
