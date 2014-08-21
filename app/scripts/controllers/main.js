'use strict';

/**
 * @ngdoc function
 * @name reservApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reservApp
 */
angular.module('reservApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // To add to local storage
    localStorageService.set('key','Zhou Hao Value');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
