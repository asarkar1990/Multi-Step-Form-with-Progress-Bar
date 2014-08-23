'use strict';

angular.module('AuthApp')
  .controller('SignInCtrl', function ($scope, Data) {
		
		$scope.login = function() {
			console.log($scope.email);
			console.log($scope.password);
		};
  });
