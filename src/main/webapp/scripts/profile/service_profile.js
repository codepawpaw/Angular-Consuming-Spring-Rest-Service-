'use strict';

meetsup.factory('ProfileService', function ($resource) {
    return {
    	data: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/data/user/by/id/:id', {}, {
    		'query': { method: 'GET', isArray:true
    		},
            'get': { method: 'GET'}
	    }),
	    product: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/data/product/by/userid/:userid', {}, {
    		'query': { method: 'GET', isArray:true
    		},
            'get': { method: 'GET'}
	    }),
	    transaction: $resource('https://inseni-backend.herokuapp.com/inseni/rest/payment/record', {}, {
	    	'save': { method: 'POST', isArray:true
    		},
            'get': { method: 'GET'}
	    }),
	    transactionByReceiverId: $resource('https://inseni-backend.herokuapp.com/inseni/rest/payment/record/by/receiverId/:receiverId', {}, {
    		'query': { method: 'GET', isArray:true
    		},
            'get': { method: 'GET'}
	    }),
	    totalDonationByReceiverId: $resource('https://inseni-backend.herokuapp.com/inseni/rest/payment/totaldonation/by/receiverId/:receiverId', {}, {
    		'query': { method: 'GET', isArray:true
    		},
            'get': { method: 'GET'}
	    })
	    
    }
});


meetsup.factory('User', function ($q, ProfileService) {
    return {
    	get: function (email_) {
    		var promise = ProfileService.data.query({email : email_});
    		var resultPromise = $q.all({
    			a: promise.$promise
    		}).then(function (data){
    			var actualResult = promise;
    			return actualResult;
    		}).catch(function (error){  });
    		return resultPromise;
    	}
    };
});


meetsup.factory('GetUserById', function ($q, ProfileService) {
    return {
    	get: function (userid) {
    		var promise = ProfileService.data.get({id: userid});
    		var resultPromise = $q.all({
    			a: promise.$promise
    		}).then(function (data){
    			var actualResult = promise;
    			return actualResult;
    		}).catch(function (error){  });
    		return resultPromise;
    	}
    };
});

meetsup.factory('GetTransactionByReceiver', function ($q, ProfileService) {
    return {
    	get: function (receiverId_) {
    		var promise = ProfileService.transactionByReceiverId.query({receiverId: receiverId_});
    		var resultPromise = $q.all({
    			a: promise.$promise
    		}).then(function (data){
    			var actualResult = promise;
    			return actualResult;
    		}).catch(function (error){  });
    		return resultPromise;
    	}
    };
});

meetsup.factory('GetTotalDonationByReceiver', function ($q, ProfileService) {
    return {
    	get: function (receiverId_) {
    		var promise = ProfileService.totalDonationByReceiverId.query({receiverId: receiverId_});
    		var resultPromise = $q.all({
    			a: promise.$promise
    		}).then(function (data){
    			var actualResult = promise;
    			return actualResult;
    		}).catch(function (error){  });
    		return resultPromise;
    	}
    };
});

meetsup.factory('UserProduct', function ($q, ProfileService) {
    return {
    	get: function (userid_) {
    		var promise = ProfileService.product.query({userid : userid_});
    		var resultPromise = $q.all({
    			a: promise.$promise
    		}).then(function (data){
    			var actualResult = promise;
    			return actualResult;
    		}).catch(function (error){  });
    		return resultPromise;
    	}
    };
});
