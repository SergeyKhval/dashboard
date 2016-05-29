'use strict';
const _uibModalInstance = new WeakMap();
const _issuesService = new WeakMap();
const _toaster = new WeakMap();
const _scope = new WeakMap();

export default class IssuesModalController {
  constructor($scope, $uibModalInstance, IssuesService, toaster) {
    _uibModalInstance.set(this, $uibModalInstance);
    _issuesService.set(this, IssuesService);
    _toaster.set(this, toaster);
    _scope.set(this, $scope);
  }

  addNewIssue(issue) {
    return _issuesService.get(this).addIssue(issue)
      .then(() => {
        _scope.get(this).issue = {};
        _scope.get(this).issueform.$setPristine();
        _scope.get(this).issueform.$setUntouched();
        _toaster.get(this).pop('success', 'New issue saved');
      })
      .catch(e => {
        _toaster.get(this).pop('error', 'Oops', `Our API seems to be unavailable ${e}`);
      });
  }

  cancel() {
    _uibModalInstance.get(this).dismiss('cancel');
  }
}

IssuesModalController.$inject = ['$scope', '$uibModalInstance', 'IssuesService', 'toaster'];
