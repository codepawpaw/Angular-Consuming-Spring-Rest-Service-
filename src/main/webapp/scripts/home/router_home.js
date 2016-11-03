'use strict';

meetsup
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
        $stateProvider
	        .state('app.home',{
	        	url:'/home',
	        	controller:'HomeController',
	        	templateUrl:'views/home/index.html',
	        }) 
	        
});
