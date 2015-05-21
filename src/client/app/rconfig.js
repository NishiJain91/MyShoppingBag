var require = {
  waitSeconds:0,
  paths:{
    'jquery':'../bower_components/jquery/dist/jquery',
    'angular':'../bower_components/angular/angular',
    'angular-ui-router':'../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-bootstrap':'../bower_components/angular-bootstrap/ui-bootstrap',
    'angular-couch-potato':'../bower_components/angular-couch-potato/dist/angular-couch-potato',
    'bootstrap':'../bower_components/bootstrap/dist/js/bootstrap',
    'domReady':'../bower_components/domReady/domReady'
  },
  shim:{
    'angular': {exports: 'angular'},
    'angular-ui-router': { deps: ['angular'] },
    'angular-couch-potato': { deps: ['angular'] },
    'angular-bootstrap':{deps:['angular']},
    'bootstrap':{deps: ['jquery']},   
    'jquery-ui': { deps: ['jquery']}     
  },
  priority: [
    'jquery',
    'bootstrap',
    'angular'
  ]
};