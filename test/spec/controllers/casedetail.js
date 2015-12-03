'use strict';

describe('Controller: CasedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('loanReviewPrototypeApp'));

  var CasedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CasedetailCtrl = $controller('CasedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CasedetailCtrl.awesomeThings.length).toBe(3);
  });
});
