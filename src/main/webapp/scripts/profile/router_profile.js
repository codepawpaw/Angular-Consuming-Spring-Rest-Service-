'use strict';

meetsup
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
        $stateProvider
	        .state('app.profile',{
	        	url:'/profile/:id',
	        	controller:'ProfileController',
	        	templateUrl:'views/profile/profile.html',
	        })
	      
});
