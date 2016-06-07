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
        //console.log("data: ", data)
        //PARSE_API_ENDPOINT = data.endpoint;
        var obj = {};
        obj.requests = data.requests;
        console.log(obj)
        return this.post().postJSON(obj);
      }
      , post: function () {
        var resource = $resource('https://api.parse.com/1/batch', {}, {
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