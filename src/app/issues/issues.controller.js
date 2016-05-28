'use strict';
import IssuesModalController from './issuesModal.controller';

const _uibModal = new WeakMap();
const _issuesService = new WeakMap();

export class IssuesController {
  constructor($uibModal, IssuesService) {
    _uibModal.set(this, $uibModal);
    _issuesService.set(this, IssuesService);

    this.issues = _issuesService.get(this).issues;
  }

  openAddIssueModal() {
    _uibModal.get(this).open({
      templateUrl: 'app/issues/issuesModal.html',
      controller: IssuesModalController,
      controllerAs: 'im'
    });
  }
}

IssuesController.$inject = ['$uibModal', 'IssuesService'];


