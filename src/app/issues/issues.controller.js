'use strict';
import IssuesModalController from './issuesModal.controller';

const _uibModal = new WeakMap();
const _issuesService = new WeakMap();
const _toaster = new WeakMap();

export class IssuesController {
  constructor($uibModal, IssuesService, toaster) {
    _uibModal.set(this, $uibModal);
    _issuesService.set(this, IssuesService);
    _toaster.set(this, toaster);

    this.issues = _issuesService.get(this).issues;

    this.search = '';
    this.filter = '';
    this.sort = 'title';
  }

  openAddIssueModal() {
    _uibModal.get(this).open({
      templateUrl: 'app/issues/issuesModal.html',
      controller: IssuesModalController,
      controllerAs: 'im',
      resolve: {
        selectedIssue: () => {
          return null;
        }
      }
    });
  }

  openDetailIssueModal(issue) {
    _uibModal.get(this).open({
      templateUrl: 'app/issues/issueDetailsModal.html',
      controller: IssuesModalController,
      controllerAs: 'im',
      resolve: {
        selectedIssue: function () {
          return issue;
        }
      }
    });
  }

  updateIssueStatus(issue, status) {
    issue.status = status;
    issue.updatedAt = Firebase.ServerValue.TIMESTAMP;
    return this.issues.$save(issue)
      .then(() => {
        _toaster.get(this).pop('success', 'Status updated');
      })
      .catch(e => {
        _toaster.get(this).pop('error', 'Oops', `Something went wrong ${e}`);
      })
  }

  downloadCsv(){
    return this.issues.map(issue => {
      return {
        title: issue.title,
        customer: issue.customer,
        customerEmail: issue.customerEmail,
        description: issue.description,
        reporter: issue.reporter,
        status: issue.status
      }
    });
  }

  exportCSV(){
    console.log('exported');
  }
}

IssuesController.$inject = ['$uibModal', 'IssuesService', 'toaster'];


