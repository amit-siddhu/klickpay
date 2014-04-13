'use strict';

angular.module('KlickPay')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/searches', {
        templateUrl: 'views/search/searches.html',
        controller: 'SearchController',
        resolve:{
          resolvedSearch: ['Search', function (Search) {
            return Search.query();
          }]
        }
      })
    }]);
