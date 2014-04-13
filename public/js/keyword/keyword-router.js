'use strict';

angular.module('KlickPay')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/keywords', {
        templateUrl: 'views/keyword/keywords.html',
        controller: 'KeywordController',
        resolve:{
          resolvedKeyword: ['Keyword', function (Keyword) {
            return Keyword.query();
          }]
        }
      })
    }]);
