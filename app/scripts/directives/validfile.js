'use strict';

/**
 * @ngdoc directive
 * @name parseImportApp.directive:validFile
 * @description
 * # validFile
 */
angular.module('parseImportApp')
  .directive('validFile', function () {
     return {
      require:'ngModel',
      link:function(scope,el,attrs,ngModel){
        el.bind('change',function(changeEvent){
          scope.$apply(function(){
            ngModel.$setViewValue(el.val());
            ngModel.$render();
          });
          
          var reader = new FileReader();
          reader.onload = function (loadEvent) {
            scope.$apply(function () {
              scope.fileread = JSON.parse(loadEvent.target.result);
            });
          }
          reader.readAsText(changeEvent.target.files[0]);          
          
        });
      }
    }
  });
