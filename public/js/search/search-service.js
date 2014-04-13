'use strict';

angular.module('KlickPay')
  .factory('Search', ['$resource', function ($resource) {
    return $resource('KlickPay/searches/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
