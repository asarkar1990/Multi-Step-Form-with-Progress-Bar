'use strict';

/**
 * @ngdoc overview
 * @name angularJsDemoCodeApp
 * @description
 * # angularJsDemoCodeApp
 *
 * Main module of the application.
 */
var authApp = angular.module('AuthApp', [
    'ngResource',
    'ngRoute'
  ]);

authApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Sign In',
        templateUrl: 'views/signin.html',
        controller: 'SignInCtrl'
      })
      .when('/signin', {
        title: 'Sign In',
        templateUrl: 'views/signin.html',
        controller: 'SignInCtrl'
      })
      .when('/signup', {
        title: 'Sign Up',
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// change Page Title based on the routers
authApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.title;
    });
}]);