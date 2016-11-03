'use strict';

meetsup
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
        $stateProvider
	        .state('auth',{
	        	url:'/auth',
	        	controller:'AuthController',
	        	templateUrl:'views/auth/login.html',
	        })
	        .state('register',{
	        	url:'/register',
	        	controller:'AuthController',
	        	templateUrl:'views/auth/register.html',
	        })    
	        
});
