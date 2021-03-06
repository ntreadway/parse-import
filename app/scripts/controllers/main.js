'use strict';

/**
 * @ngdoc function
 * @name parseImportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parseImportApp
 */
angular.module('parseImportApp')
  .controller('MainCtrl', function ($scope, ExportData, HTTP_HEADERS) {
    $scope.fileread = null;
    $scope.import = function () {
      if ($scope.importForm.$invalid && !$scope.fileread) {
        console.log("not valid")
        return;
      } else {
        // post file data to app
        // Chunk is needed for the Parse batch limit of 50
        var object = {}
          , chunked;
        HTTP_HEADERS.set({
          appId: $scope.appId
          , restKey: $scope.restKey || null
          , endpoint: $scope.endpoint
        });
        chunked = _.chunk($scope.fileread, 50);
        console.log(chunked.length)
        _.forEach(chunked, function (file) {
          object.requests = [];
          _.forEach(file, function (item, i) {
            var id = item.objectId
            var obj = _.omit(item, 'objectId');
            var temp = {
                method: 'POST'
                , path: $scope.class
                , body: obj
              }
            object.requests.push(temp);
          });

          ExportData.create(object).$promise.then(function (result) {
            $scope.success = true;
            $scope.message = "Import Successful"
          }, function (error) {
            $scope.success = false;
            $scope.message = 'Error: ' + error;
          });
        });
      }
    }
  });
