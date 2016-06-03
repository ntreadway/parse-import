'use strict';

/**
 * @ngdoc service
 * @name parseImportApp.ExportData
 * @description
 * # ExportData
 * Factory in the parseImportApp.
 */
angular.module('parseImportApp')
  .factory('ExportData', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
