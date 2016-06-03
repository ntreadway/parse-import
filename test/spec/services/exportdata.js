'use strict';

describe('Service: ExportData', function () {

  // load the service's module
  beforeEach(module('parseImportApp'));

  // instantiate service
  var ExportData;
  beforeEach(inject(function (_ExportData_) {
    ExportData = _ExportData_;
  }));

  it('should do something', function () {
    expect(!!ExportData).toBe(true);
  });

});
