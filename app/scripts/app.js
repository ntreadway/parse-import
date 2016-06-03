'use strict';

/**
 * @ngdoc overview
 * @name parseImportApp
 * @description
 * # parseImportApp
 *
 * Main module of the application.
 */
angular
  .module('parseImportApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
