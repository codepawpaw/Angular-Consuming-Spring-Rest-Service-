'use strict';

meetsup.controller('ProfileController',function($cookieStore, $scope, $modal, $state, $stateParams, $window, $translate, $timeout, $location, $filter, ProfileService, User, UserProduct, GetUserById, GetTransactionByReceiver, GetTotalDonationByReceiver){
	
	var profileId = $stateParams.id;
	
	var username = $cookieStore.get('username');
	var userid = $cookieStore.get('userid');
	var authCookies = $cookieStore.get('auth');
	
	if(authCookies != "authenticate"){
		$location.path('/auth');
	}
	
	$scope.user = ProfileService.data.get({id: profileId});
	$scope.user2 = ProfileService.data.get({id: userid});
	
	$scope.profileId=userid;
	$scope.username=profileId;
	
	$scope.products = ProfileService.product.query({userid: profileId});
	
	$scope.totalFunding;
	GetUserById.get(userid).then(function (result1){
		GetTotalDonationByReceiver.get(result1.email).then(function (result2){
			$scope.totalFunding = "$"+result2[0];
			
		});
	});

	var modalInstance;
	$scope.donate = function(){
		modalInstance = $modal.open({
			templateUrl: 'form/checkout.html',
			size: 'lg',
			scope: $scope,
		});
	}
	
	$scope.payment = {};
	
	$scope.pay = function(payment){
		$window.Stripe.setPublishableKey('pk_test_pVQQ6VXkboDUtyIQQP8moTeM');
        window.Stripe.card.createToken({
          number: payment.cc,
          cvc: payment.cvc,
          exp_month: payment.expMonth,
          exp_year: payment.expYear
        }, function (status, response) {
                if (response.error) {
                    console.log(response.error);
                } else {
                	GetUserById.get(userid).then(function (result){
                		$scope.payment.donaturId = result.email;
                		GetUserById.get(profileId).then(function (result){
	                    	$scope.payment.receiverId = result.email;
	                    	$scope.payment.amount = payment.amount;
	                    	$scope.payment.note = '';
	                    	$scope.payment.token = response.id;
	                    	ProfileService.transaction.save($scope.payment,
	                  		      function (value, responseHeaders) {
	                    			  modalInstance.close();
	                  		    	  var paymentSuccessModal = $modal.open({
	                  		    		  templateUrl: 'form/payment_success.html',
	                  		    		  size: 'lg',
	                  		    		  scope: $scope,
	                  		    	  });
	                  		      },
	                  		      function (httpResponse) {
	                  		      }
	                  		);
                		});
                	});
                	
                }
        });
	}
	
})

