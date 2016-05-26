'use strict';
const _uibModal = new WeakMap();
const _uibModalInstance = new WeakMap();
const _issuesService = new WeakMap();

export class IssuesController {
  constructor($uibModal, IssuesService) {
    _uibModal.set(this, $uibModal);
    _issuesService.set(this, IssuesService);

    this.issues = _issuesService.get(this).issues;
  }

  openAddIssueModal() {
    _uibModal.get(this).open({
      templateUrl: 'issuesModal.html',
      controller: IssuesModalController,
      controllerAs: 'im'
    });
  }
}

class IssuesModalController {
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

IssuesController.$inject = ['$uibModal', 'IssuesService'];
IssuesModalController.$inject = ['$uibModalInstance', 'IssuesService'];

