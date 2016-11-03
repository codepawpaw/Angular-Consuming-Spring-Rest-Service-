'use strict';

meetsup.factory('AuthService', function ($resource) {
    return {
    	login: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/auth/login/:username/:password', {}, {
    		'query': { method: 'GET', transformResponse: function(response){
    			       return {status: response};
    		         }
    		},
            'get': { method: 'GET'}
	    }),
	    register: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/auth/register/:name/:username/:password', {}, {
    		'query': { method: 'GET', transformResponse: function(response){
    			       return {status: response};
    		         }
    		},
            'get': { method: 'GET'}
	    }),
	    saveUserData: $resource('https://inseni-backend.herokuapp.com/meetsup/rest/data/user/save/:name/:phone_number/:address/:city/:userGroupId/:email', {}, {
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

meetsup.factory('UserData', function ($q, AuthService) {
    return {
    	save: function (name_, phone_number_, address_, city_, userGroupId_, email_) {
    		var promise = AuthService.saveUserData.query({name : name_, phone_number : phone_number_, address : address_, city : city_, userGroupId : userGroupId_, email : email_});
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

meetsup.factory('GetUser', function ($q, AuthService) {
    return {
    	get: function (email_) {
    		var promise = AuthService.userData.get({email: email_});
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

meetsup.factory('ValidateLogin', function ($q, AuthService) {
    return {
    	get: function (username_, password_) {
    		var promise = AuthService.login.query({username : username_,password : password_});
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

meetsup.factory('Register', function ($q, AuthService) {
    return {
    	save: function (name_, username_, password_) {
    		var promise = AuthService.register.query({name: name_, username : username_,password : password_});
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

