'use strict';

meetsup.controller('AppController',function($cookieStore, $scope, $modal, $state, $stateParams, $window, $translate, $timeout, $location, $filter){
	
	$scope.logout = function(){
		$cookieStore.remove('auth');
		$cookieStore.remove('username');
		$cookieStore.remove('userid');
		$location.path('/auth');
	}
	
	$scope.username = $cookieStore.get('userid');
	
	
	
})

