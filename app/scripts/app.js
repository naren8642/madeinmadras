'use strict';

/**
 * @ngdoc overview
 * @name yoyoApp
 * @description
 * # yoyoApp
 *
 * Main module of the application.
 */
var yoyoApp = angular
  .module('yoyoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
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
      .otherwise({
        redirectTo: '/'
      });
  });

yoyoApp.controller('ShowCaseController', function ($scope) {
    $scope.animate = [];

    function genBrick(name) {
      var height = Math.floor(Math.random() * 500) + 100;
      var width = 300 ; // Math.floor(Math.random() * 500) + 100;
      var id = Math.floor(Math.random() * 10000);
      return {
        id: id,
        name: name,
        width: width,
        height: height,
        src: 'http://lorempixel.com/g/'+width+'/' + height + '/?' + id
      };
    }

    $scope.row1 = [genBrick('Mathews Goff'), genBrick('Collins Alston'),genBrick('Jasmine Rollins'),genBrick('Julie Jefferson')];
    $scope.row2 = [genBrick('Wilder King'), genBrick('Katie Moore'),genBrick('Reynolds Bishop'),genBrick('Felicity Flowers')];
    $scope.row3 = [genBrick('Jenifer Martinez'), genBrick('Jason Perry'),genBrick('Destiny Mullins'),genBrick('Julie Jefferson')];

  });

yoyoApp.directive('animateName', function() {
  return function(scope, element, attrs) {
    scope.$watch(attrs.animateName, function() {
      element.slideToggle("fast");
    })
  }
});
