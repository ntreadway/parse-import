'use strict';

/**
 * @ngdoc service
 * @name parseImportApp.ExportData
 * @description
 * # ExportData
 * Factory in the parseImportApp.
 */
angular.module('parseImportApp')
  .factory('ExportData', function ($resource, HTTP_HEADERS) {
    return {
      create: function (data) {
        var obj = {};
        obj.requests = data.requests;
        console.log(obj)
        return this.post().postJSON(obj);
      }
      , post: function () {
        var resource = $resource('https://api.xportforwarding.com/parse/batch', {}, {
          postJSON: {
            method: 'POST'
            , headers: HTTP_HEADERS.get(),
            isArray: true
          }
          
        });
        return resource;
      }

    }

  });