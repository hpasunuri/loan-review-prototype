'use strict';

describe('Controller: CaselistCtrl', function () {

  // load the controller's module
  beforeEach(module('loanReviewPrototypeApp'));

  var CaselistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaselistCtrl = $controller('CaselistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaselistCtrl.awesomeThings.length).toBe(3);
  });
});
