'use strict';

//TODO: move this to utils.js
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

/* App Module */

var meetsup = angular.module('meetsup', 
	[
		'ngCookies',
		'ngStorage',
		'ngResource',
		'ngCacheBuster',
		'ui.router',
		'ui.bootstrap',
		'ui.load',
		'ui.jq',
		'ui.validate',
		'oc.lazyLoad',
		'checklist-model',
		'ngToast',
		'googlechart',
		'highcharts-ng',
		'tmh.dynamicLocale',
		'pascalprecht.translate',
		'meetsup.filters',
		'meetsup.directives'
	  ]);

meetsup
    .config(function ( $stateProvider, $urlRouterProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, 
    		httpRequestInterceptorCacheBusterProvider) {

            //Cache everything except rest api requests
            httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*rest.*/],true);
            
            meetsup.directive  = $compileProvider.directive;
            meetsup.filter     = $filterProvider.register;
            meetsup.factory    = $provide.factory;
            meetsup.constant   = $provide.constant;
            meetsup.value      = $provide.value;
            
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    controller:'AppController',
                    templateUrl: 'common/app.html'
                });
            
	            
})


    	
        
		