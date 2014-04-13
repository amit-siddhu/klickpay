'use strict';

angular.module('KlickPay')
  .controller('KeywordController', ['$scope', '$modal', 'resolvedKeyword', 'Keyword',
    function ($scope, $modal, resolvedKeyword, Keyword) {

      $scope.keywords = resolvedKeyword;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.keyword = Keyword.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Keyword.delete({id: id},
          function () {
            $scope.keywords = Keyword.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Keyword.update({id: id}, $scope.keyword,
            function () {
              $scope.keywords = Keyword.query();
              $scope.clear();
            });
        } else {
          Keyword.save($scope.keyword,
            function () {
              $scope.keywords = Keyword.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.keyword = {
          
          "keyword1": "",
          
          "keyword2": "",
          
          "keyword3": "",
          
          "keyword4": "",
          
          "keyword5": "",
          
          "keyword6": "",
          
          "keyword7": "",
          
          "keyword8": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var keywordSave = $modal.open({
          templateUrl: 'keyword-save.html',
          controller: KeywordSaveController,
          resolve: {
            keyword: function () {
              return $scope.keyword;
            }
          }
        });

        keywordSave.result.then(function (entity) {
          $scope.keyword = entity;
          $scope.save(id);
        });
      };
    }]);

var KeywordSaveController =
  function ($scope, $modalInstance, keyword) {
    $scope.keyword = keyword;

    

    $scope.ok = function () {
      $modalInstance.close($scope.keyword);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
