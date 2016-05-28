'use strict';
const _uibModalInstance = new WeakMap();
const _issuesService = new WeakMap();

export default class IssuesModalController {
  constructor($uibModalInstance, IssuesService) {
    _uibModalInstance.set(this, $uibModalInstance);
    _issuesService.set(this, IssuesService);
  }

  addNewIssue(issue) {
    return _issuesService.get(this).addIssue(issue);
  }

  cancel() {
    _uibModalInstance.get(this).dismiss('cancel');
  }
}

IssuesModalController.$inject = ['$uibModalInstance', 'IssuesService'];
