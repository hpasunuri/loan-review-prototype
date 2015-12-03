'use strict';

/**
 * @ngdoc overview
 * @name loanReviewPrototypeApp
 * @description
 * # loanReviewPrototypeApp
 *
 * Main module of the application.
 */
angular
  .module('loanReviewPrototypeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'ngMaterial',
    'ngAria'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/caselist', {
        templateUrl: 'views/caselist.html',
        controller: 'CaselistCtrl',
        controllerAs: 'caselist'
      })
      .when('/casedetail', {
        templateUrl: 'views/casedetail.html',
        controller: 'CasedetailCtrl',
        controllerAs: 'casedetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
