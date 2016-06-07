'use strict';

describe('Service: HTTPHEADERS', function () {

  // load the service's module
  beforeEach(module('parseImportApp'));

  // instantiate service
  var HTTPHEADERS;
  beforeEach(inject(function (_HTTPHEADERS_) {
    HTTPHEADERS = _HTTPHEADERS_;
  }));

  it('should do something', function () {
    expect(!!HTTPHEADERS).toBe(true);
  });

});
