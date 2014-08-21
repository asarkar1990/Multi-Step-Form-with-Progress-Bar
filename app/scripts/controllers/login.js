'use strict';

/**
 * @ngdoc function
 * @name reservApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the reservApp
 */
angular.module('reservApp')
  .controller('LoginCtrl', function ($scope, Data) {
		console.log(Data.token);
		Data.token = 'I am token';
		
		$scope.login = function() {
			console.log($scope.email);
			console.log($scope.password);
		};
  });
