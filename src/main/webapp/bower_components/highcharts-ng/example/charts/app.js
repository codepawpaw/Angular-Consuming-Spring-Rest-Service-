'use strict';

var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope) {
  $scope.chartSeries = [
    /*{"name": "Some data", "data": [1, 2, 4, 7, 3]},
    {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},*/
    {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
    {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
  ];

  $scope.chartConfig = {  
    series: $scope.chartSeries,
    title: {
      text: 'Hello'
    },
  }

  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };


});