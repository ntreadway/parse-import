'use strict';

/**
 * @ngdoc service
 * @name parseImportApp.HTTPHEADERS
 * @description
 * # HTTPHEADERS
 * Factory in the parseImportApp.
 */
angular.module('parseImportApp')
  .factory('HTTP_HEADERS', function () {
    // Service logic
    // ...

    var appId, restKey;
    return {
      set: function(keys) {
        console.log(keys)
        appId = keys.appId;
        restKey = keys.restKey;
      },
      get: function() {
        return {
          'X-Parse-Application-Id': appId,
          // 'X-Parse-REST-API-Key': restKey,
          'Content-Type': 'application/json'
        }
      }
    };
  });
