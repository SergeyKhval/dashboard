'use strict';
const _uibModalInstance = new WeakMap();
const _issuesService = new WeakMap();
const _toaster = new WeakMap();

export default class IssuesModalController {
  constructor($uibModalInstance, IssuesService, toaster) {
    _uibModalInstance.set(this, $uibModalInstance);
    _issuesService.set(this, IssuesService);
    _toaster.set(this, toaster);
  }

  addNewIssue(issue) {
    return _issuesService.get(this).addIssue(issue)
      .then(() => {
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

IssuesModalController.$inject = ['$uibModalInstance', 'IssuesService', 'toaster'];
