'use strict';

/* Controllers */
//bawaan template

meetsup.controller('MainController', ['$scope', '$window',
    function( $scope, $window) {
    // add 'ie' classes to html
    var isIE = !!navigator.userAgent.match(/MSIE/i);
    isIE && angular.element($window.document.body).addClass('ie');
    isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

    // config
    $scope.app = {
      name: 'Meetsup',
      long_name: 'Meetsup Sitta :*',
      version: '2.0.0',
      // for chart colors
      color: {
        primary: '#7266ba',
        info:    '#23b7e5',
        success: '#27c24c',
        warning: '#fad733',
        danger:  '#f05050',
        light:   '#e8eff0',
        dark:    '#3a3f51',
        black:   '#1c2b36'
      },
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-info',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: true,
        asideFolded: false,
        rightSideFolded: true,
        asideDock: false,
        container: false
      },
      array_color : ['#7266ba', '#23b7e5', '#27c24c', '#fad733', '#f05050', '#e8eff0', '#3a3f51', '#1c2b36'],
      month_names : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
    };
    
   
    
    function isSmartDevice( $window )
    {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }
    
    
    

}]);

var ModalInstanceCtrl = function ($scope, $modalInstance) {

	  $scope.ok = function () {
		  console.log('var var: '+$scope.VARCONTROLLER);
		$modalInstance.close('closed result');
	  };

	  $scope.cancel = function () {
		console.log('cancel cancel');
		$modalInstance.dismiss('cancel');
	  };
	};

