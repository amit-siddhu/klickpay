'use strict';

angular.module('KlickPay')
  .controller('SearchController', ['$scope', '$modal', 'resolvedSearch', 'Search',
    function ($scope, $modal, resolvedSearch, Search) {

      $scope.searches = resolvedSearch;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.search = Search.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Search.delete({id: id},
          function () {
            $scope.searches = Search.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Search.update({id: id}, $scope.search,
            function () {
              $scope.searches = Search.query();
              $scope.clear();
            });
        } else {
          Search.save($scope.search,
            function () {
              $scope.searches = Search.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.search = {
          
          "keyword": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var searchSave = $modal.open({
          templateUrl: 'search-save.html',
          controller: SearchSaveController,
          resolve: {
            search: function () {
              return $scope.search;
            }
          }
        });

        searchSave.result.then(function (entity) {
          $scope.search = entity;
          $scope.save(id);
        });
      };
    }]);

var SearchSaveController =
  function ($scope, $modalInstance, search) {
    $scope.search = search;

    

    $scope.ok = function () {
      $modalInstance.close($scope.search);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
