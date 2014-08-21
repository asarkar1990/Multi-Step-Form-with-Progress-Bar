'use strict';

/**
 * @ngdoc function
 * @name reservApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reservApp
 */
angular.module('reservApp')
  .controller('AboutCtrl', function ($scope, Data, localStorageService) {
		console.log(Data.token);
    console.log(localStorageService.get('key'));
		
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
