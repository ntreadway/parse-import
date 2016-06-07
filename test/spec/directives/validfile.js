'use strict';

describe('Directive: validFile', function () {

  // load the directive's module
  beforeEach(module('parseImportApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<valid-file></valid-file>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the validFile directive');
  }));
});
