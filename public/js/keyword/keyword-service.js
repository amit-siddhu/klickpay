'use strict';

angular.module('KlickPay')
  .factory('Keyword', ['$resource', function ($resource) {
    return $resource('KlickPay/keywords/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
