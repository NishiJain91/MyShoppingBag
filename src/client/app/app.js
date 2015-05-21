'use strict';


define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-bootstrap',
    'app'  
], function (ng, couchPotato) {

	var app = ng.module('app',[
		'ui.router',
    'ui.bootstrap',
    'scs.couch-potato',
    'app.layout'
    ]);

	couchPotato.configureApp(app);

	app.run(function ($couchPotato){
		app.lazy = $couchPotato;
	});

	return app;

});