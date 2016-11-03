'use strict';

meetsup.controller('AuthController',function($cookieStore, $scope, $modal, $state, $stateParams, $window, $translate, $timeout, $location, $filter, AuthService, ValidateLogin, Register, UserData, GetUser){
	
	
	$scope.loginPressed=false;
	$scope.login = function(auth) {
		if(auth.username!=null && auth.password!=null){
		$scope.loginPressed=true;
		ValidateLogin.get(auth.username, auth.password).then(function (result){
			if(result.status == 'true'){
				GetUser.get(auth.username).then(function (result){
					$cookieStore.put('auth','authenticate');
					$cookieStore.put('username',auth.username);
					$cookieStore.put('userid',result.id);
					$location.path('/app/home');
				});
					
			}
			else{
				console.log('gagal');
				$scope.loginPressed=false;
			}
		});
		}
	}
	$scope.role = [
	               {name : "Seniman", id : 0},
	               {name : "Viewer", id : 1},
	];
	$scope.account ={role:$scope.role[0].id};
	
	var modalInstance;
	var authData;
	$scope.buttonPressed = false;
	$scope.openRegisterModal =  function(auth) {
		if(auth.name!=null && auth.username!=null && auth.password!=null && auth.name==auth.password){
		authData = auth;		
		modalInstance = $modal.open({
			templateUrl: 'form/register_popup.h	tml',
			size: 'lg',
			scope: $scope,
		});
		}
	}
	
	$scope.savePressed=false;
	$scope.save = function(account) {
		if(account.name!=null && account.phone!=null && account.address!=null && account.city!=null && account.role!=null){
		$scope.savePressed=true;
		Register.save(authData.name, authData.username, authData.password).then(function (result){
			if(result.status == 'true'){
				UserData.save(account.name, account.phone, account.address, account.city, account.role, authData.username).then(function (result){
					if(result.status == 'true'){
						GetUser.get(authData.username).then(function (result){
							modalInstance.close();
							$cookieStore.put('auth','authenticate');
							$cookieStore.put('username',authData.username);
							$cookieStore.put('userid',result.id);
							$location.path('/app/home');
						});
					}
				});
			}
			else{
				$scope.savePressed=false;
			}
		});		
		}
	}
	
	//possibly unused at the time
	$scope.buttonPressed = false;
	
	$scope.registerLink = function(){
		$location.path('/register');
	}
	
	$scope.loginLink = function(){
		$location.path('/register');
	}
	
	
	$scope.tabs = [{
        title: 'Signup',
        url: 'signup'
    	}, {
        title: 'Login',
        url: 'login'
    	}
    ];
	
	$scope.currentTab = 'signup';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
	
})

