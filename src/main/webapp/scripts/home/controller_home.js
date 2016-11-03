'use strict';

meetsup.controller('HomeController',function($cookieStore, $q, $scope, $rootScope, $modal, $state, $stateParams, $window, $translate, $timeout, $location, $filter, HomeService, AllProduct, Save, ProfileService){
	
	var nav = document.getElementById("navigation");
	var number = $rootScope.colorNav;
	$scope.test = $rootScope.colorNav;
	
	$scope.getNumber = function getNumber() {
	  return number;
	}
	
	var authCookies = $cookieStore.get('auth');
	var username = $cookieStore.get('username');
	
	var user = HomeService.userData.get({email: username});
	$scope.user = user;
	
	if(authCookies != "authenticate"){
		$location.path('/auth');
	}
	
	$scope.logout = function(){
		$cookieStore.remove('auth');
		$cookieStore.remove('username');
		$cookieStore.remove('userid');
		$location.path('/auth');
	}
	
	$scope.gotoProfile = function(userId){
		$location.path('/app/profile/'+userId);
	}

	
	var date = new Date();
	$scope.currentDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
	
	$scope.isPosted = false;
	
	$scope.listOfNewProduct = [];
		
	var modalInstance;
	var counter = 0;
	$scope.save = function(product, userId) {
		Save.get("none", product.description, "none", user.name, userId).then(function (result){
			if(result.status == 'true'){
				modalInstance = $modal.open({
					templateUrl: 'form/save_notification.html',
					size: 'lg',
					scope: $scope,
				});
				var data = {};
				data.description = product.description;
				data.index = counter;
				data.userName = user.name;
				data.userId = user.id;
				counter++;
				$scope.listOfNewProduct.push(data);
				$scope.isPosted = true;
				$scope.product.description = null;
				modalInstance.result.then(function (selectedItem) {
				}, function () {
				});
			}
		});
	}
	
	
	HomeService.product.query(function(result){
	        $scope.products = result;
	 });
	
	
	
	

	
})

