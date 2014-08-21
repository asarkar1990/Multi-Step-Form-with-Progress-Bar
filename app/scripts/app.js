'use strict';

/**
 * @ngdoc overview
 * @name angularJsDemoCodeApp
 * @description
 * # angularJsDemoCodeApp
 *
 * Main module of the application.
 */
var myApp = angular.module('reservApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
		'firebase'
  ]);

myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Home Page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        title: 'About Page',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todo', {
        title: 'List Page',
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
			.when('/login', {
        title: 'Login Page',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// change Page Title based on the routers
myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.title;
    });
}]);

myApp.factory('Data', function() {
    return {token:'This is a token'};
});