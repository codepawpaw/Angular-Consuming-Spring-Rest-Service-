'use strict';

meetsup.factory('HomeService', function ($resource) {
    return {
    	product: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/data/product/all', {}, {
    		'query': { method: 'GET', isArray:true
    		},
            'get': { method: 'GET'}
	    }),
	    saveProduct: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/data/product/save/:title/:description/:content/:userName/:userid', {}, {
    		'query': { method: 'GET', transformResponse: function(response){
    			       return {status: response};
    		         }
    		},
            'get': { method: 'GET'}
	    }),
	    userData: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/data/user/:email', {}, {
    		'query': { method: 'GET', isArray:true
    		},
            'get': { method: 'GET'}
	    })
	    
    }
});

meetsup.factory('AllProduct', function ($q, HomeService) {
    return {
    	get: function () {
    		var promise = HomeService.allData.get({});
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

meetsup.factory('Save', function ($q, HomeService) {
    return {
    	get: function (title_, description_, content_, userName_, userid_) {
    		var promise = HomeService.saveProduct.query({title: title_, description : description_,content : content_, userName : userName_, userid : userid_});
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
